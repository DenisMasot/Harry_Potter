<template>
	<div class="card">
		<h1>{{ book.title }}</h1>
		<p>{{ book.price }} €</p>

		<button
			@click.stop="$store.dispatch('client/addToCart', book.isbn)"
		>
			buy
		</button>
	</div>
</template>

<script>
export default {
	name: "Card",
	props: {
		book: {
			required: true,
			type: Object,
		},
	},
};
</script>

<style scoped lang="scss">
.card {
	border: 1px solid grey;
	padding: 1rem;
}
</style>
