import { getBooks, getDiscounts } from "@/services/api";

let controller = null;

const calc = {
	percentage: (value, total) => total * (value / 100),
	slice: (value, total, slice) => Math.floor(total / slice) * value,
	minus: value => value,
};

function getCartIds(books) {
	return Object.entries(books)
		.reduce((acc, [key, count]) => {
			const next = `${acc}${`,${key}`.repeat(count)}`;
			return acc.length ? `,${next}` : next;
		}, "");
}

export default {
	namespaced: true,
	state: {
		books: [],
		offers: [],
		cart: {},
	},
	getters: {
		books_dict({ books }) {
			return books.reduce((acc, book) => {
				acc[book.isbn] = book;
				return acc;
			}, {});
		},
		total({ cart }, { books_dict: books }) {
			return Object.entries(cart)
				.reduce((acc, [id, count]) => acc + books[id].price * count, 0);
		},
		discount({ offers }, { total }) {
			return offers.reduce((acc, { type, value, sliceValue }) => {
				const amount = calc[type](value, total, sliceValue);
				return amount > acc.amount ? {
					type,
					amount,
				} : acc;
			}, {
				type: null,
				amount: 0,
			});
		},
	},
	mutations: {
		SET_BOOKS(state, books) {
			state.books = books;
		},
		ADD_TO_CART(state, id) {
			state.cart[id] ??= 0;
			state.cart[id] += 1;
		},
		REMOVE_FROM_CART(state, id) {
			if (!(id in state.cart)) return;

			if (state.cart[id] > 1) state.cart[id] -= 1;
			else delete state.cart[id];
		},
		REMOVE_ALL_FROM_CART(state, id) {
			if (!(id in state.cart)) return;

			delete state.cart[id];
		},
		RESET_CART(state) {
			state.cart = {};
		},
		SET_OFFERS(state, offers) {
			state.offers = offers;
		},
	},
	actions: {
		async setBooks({ commit }) {
			commit("SET_BOOKS", await getBooks());
		},
		async updateCart({ commit, state }, { id, action }) {
			commit(action, id);
			// cancel previous request
			if (controller) controller.abort();
			controller = new AbortController();

			try {
				const articles = getCartIds(state.cart);
				const { offers } = await getDiscounts(articles, controller.signal);

				commit("SET_OFFERS", offers);
				// eslint-disable-next-line
			} catch {}
			controller = null;
		},
		addToCart({ dispatch }, id) {
			dispatch("updateCart", {
				action: "ADD_TO_CART",
				id,
			});
		},
		removeFromCart({ dispatch }, id) {
			dispatch("updateCart", {
				action: "REMOVE_FROM_CART",
				id,
			});
		},
		removeAllFromCart({ commit }, id) {
			commit("REMOVE_ALL_FROM_CART", id);
			commit("SET_OFFERS", []);
		},
		resetCart({ commit }) {
			commit("RESET_CART");
			commit("SET_OFFERS", []);
		},
	},
};
