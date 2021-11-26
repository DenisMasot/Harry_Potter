<template>
	<tr>
		<td>{{ order.id }}</td>
		<td>{{ listTitles }}</td>
		<td>{{ order.status }}</td>
		<td>
			<button
				v-if="order.status === 'inProgress'"
				@click="$store.dispatch('admin/removeOrder', order.id)"
			>X</button>
		</td>
	</tr>
</template>

<script>
export default {
	props: {
		order: {
			type: Object,
			requered: true,
		},
	},
	computed: {
		listTitles() {
			return Object.keys(this.order.books)
				.map(id => this.$store.getters["client/books_dict"][id].title)
				.join(", ");
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
