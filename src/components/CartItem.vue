<template>
	<tr>
		<td>{{ book.title }}</td>
		<td>{{ count }}</td>
		<td>{{ book.price }}</td>
		<td>
			<button
				@click="$store.dispatch('client/addToCart', book.isbn)"
			>+</button>
			<button
				@click="$store.dispatch('client/removeFromCart', book.isbn)"
			>-</button>
			<button
				@click="$store.dispatch('client/removeAllFromCart', book.isbn)"
			>X</button>
		</td>
	</tr>
</template>

<script>
export default {
	props: {
		id: {
			type: String,
			required: true,
		},
		count: {
			type: Number,
			default: 1,
		},
	},
	computed: {
		book() {
			return this.$store.getters["client/books_dict"][this.id];
		},
	},
};
</script>

<style lang=scss scoped>
td {
	border: 1px solid black;
	padding: .5rem;
}
</style>
