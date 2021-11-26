<template>
<table id="cartTable">
	<thead>
		<tr>
			<th>Titre</th>
			<th>Nombres</th>
			<th>Prix à l'unité</th>
			<th v-if="cart.length">Actions</th>
		</tr>
	</thead>
	<tbody>
		<CartItem
			v-for="(count, id) in $store.state.client.cart"
			:key="id"
			:id="id"
			:count="count"
		/>
		<tr>
			<td :colspan="cart.length ? 3 : 2">Total</td>
			<td>{{ $store.getters["client/total"] }} €</td>
		</tr>
		<tr>
			<td :colspan="cart.length ? 3 : 2">Réduction</td>
			<td>{{ $store.getters["client/discount"].amount }} €</td>
		</tr>
		<tr>
			<td :colspan="cart.length ? 3 : 2">Total après réduction</td>
			<td>{{ $store.getters["client/total"] - $store.getters["client/discount"].amount }} €</td>
		</tr>
	</tbody>
</table>
</template>

<script>
import CartItem from "@/components/CartItem.vue";

export default {
	components: {
		CartItem,
	},
	computed: {
		cart() {
			return Object.keys(this.$store.state.client.cart);
		},
	},
};
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
}
table, tr {
  border: 1px solid black;
}
thead {
	font-weight: bold;
}
</style>
