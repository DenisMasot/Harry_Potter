import { generateNumOrder } from "@/services/api";

export default {
	namespaced: true,
	state: {
		orders: {
			"9WAbdVOm8j14": {
				id: "9WAbdVOm8j14",
				books: {
					"c8fabf68-8374-48fe-a7ea-a00ccd07afff": 1,
				},
				total: 35,
				discount: {
					type: "percentage",
					amount: 1.75,
				},
				status: "inProgress",
			},
			"5A00dzrJSRj5": {
				id: "5A00dzrJSRj5",
				books: {
					"c8fabf68-8374-48fe-a7ea-a00ccd07afff": 3,
					"a460afed-e5e7-4e39-a39d-c885c05db861": 2,
				},
				total: 165,
				discount: {
					type: "minus",
					amount: 30,
				},
				status: "finish",
			},
			L5tu7UPw83Wk: {
				id: "L5tu7UPw83Wk",
				books: {
					"c8fabf68-8374-48fe-a7ea-a00ccd07afff": 1,
					"a460afed-e5e7-4e39-a39d-c885c05db861": 1,
					"fcd1e6fa-a63f-4f75-9da4-b560020b6acc": 1,
					"c30968db-cb1d-442e-ad0f-80e37c077f89": 1,
					"78ee5f25-b84f-45f7-bf33-6c7b30f1b502": 1,
					"cef179f2-7cbc-41d6-94ca-ecd23d9f7fd6": 1,
					"bbcee412-be64-4a0c-bf1e-315977acd924": 1,
				},
				total: 217,
				discount: {
					type: "minus",
					amount: 30,
				},
				status: "inProgress",
			},
			"7jo2W14wkGBI": {
				id: "7jo2W14wkGBI",
				books: {
					"c8fabf68-8374-48fe-a7ea-a00ccd07afff": 1,
					"fcd1e6fa-a63f-4f75-9da4-b560020b6acc": 4,
					"78ee5f25-b84f-45f7-bf33-6c7b30f1b502": 1,
				},
				total: 183,
				discount: {
					type: "minus",
					amount: 30,
				},
				status: "finish",
			},
			"2ijO7vj37ITM": {
				id: "2ijO7vj37ITM",
				books: {
					"c8fabf68-8374-48fe-a7ea-a00ccd07afff": 2,
					"a460afed-e5e7-4e39-a39d-c885c05db861": 2,
					"fcd1e6fa-a63f-4f75-9da4-b560020b6acc": 2,
				},
				total: 190,
				discount: {
					type: "minus",
					amount: 30,
				},
				status: "inProgress",
			},
			R5Zb4np4sH7G: {
				id: "R5Zb4np4sH7G",
				books: {
					"c8fabf68-8374-48fe-a7ea-a00ccd07afff": 2,
					"a460afed-e5e7-4e39-a39d-c885c05db861": 2,
					"fcd1e6fa-a63f-4f75-9da4-b560020b6acc": 3,
					"cef179f2-7cbc-41d6-94ca-ecd23d9f7fd6": 1,
					"bbcee412-be64-4a0c-bf1e-315977acd924": 1,
					"78ee5f25-b84f-45f7-bf33-6c7b30f1b502": 1,
					"c30968db-cb1d-442e-ad0f-80e37c077f89": 1,
				},
				total: 342,
				discount: {
					type: "slice",
					amount: 56,
				},
				status: "inDelivery",
			},
			"9V5O0XpGjc7b": {
				id: "9V5O0XpGjc7b",
				books: {
					"bbcee412-be64-4a0c-bf1e-315977acd924": 1,
				},
				total: 35,
				discount: {
					type: "percentage",
					amount: 1.75,
				},
				status: "inDelivery",
			},
			T3VifIs97Z9j: {
				id: "T3VifIs97Z9j",
				books: {
					"fcd1e6fa-a63f-4f75-9da4-b560020b6acc": 1,
				},
				total: 30,
				discount: {
					type: "percentage",
					amount: 1.5,
				},
				status: "finish",
			},
			G6tY5h0ZrnA3: {
				id: "G6tY5h0ZrnA3",
				books: {
					"a460afed-e5e7-4e39-a39d-c885c05db861": 1,
				},
				total: 30,
				discount: {
					type: "percentage",
					amount: 1.5,
				},
				status: "inProgress",
			},
		},
	},
	mutations: {
		SET_ORDER(state, order) {
			state.orders[order.id] = order;
		},
		REMOVE_ORDER(state, id) {
			delete state.orders[id];
		},
	},
	actions: {
		async setOrder({ commit }, { cart, total, discount }) {
			const { passwords: id } = await generateNumOrder();
			const order = {
				id: id.toString(),
				books: { ...cart },
				total,
				discount,
				status: "inProgress",
			};
			commit("SET_ORDER", order);
		},
		removeOrder({ commit }, id) {
			commit("REMOVE_ORDER", id);
		},
	},
};
