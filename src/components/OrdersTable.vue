<template>
<button
	class="ordersTable__btn"
	@click="filterOrders()"
>all</button>
<button
	class="ordersTable__btn"
	@click="filterOrders('inProgress')"
>inProgress</button>
<button
	class="ordersTable__btn"
	@click="filterOrders('inDelivery')"
>inDelivery</button>
<button
	class="ordersTable__btn"
	@click="filterOrders('finish')"
>finish</button>
<table class="ordersTable">
	<thead>
		<tr>
			<th>Numéro de commande</th>
			<th>Livres</th>
			<th>Total</th>
			<th>Supprimer</th>
		</tr>
	</thead>
	<tbody>
		<OrderItem
			v-for="order in filteredOrders"
			:key="order.id"
            :order="order"
		/>
	</tbody>
</table>
</template>

<script>
import OrderItem from "@/components/OrderItem.vue";

export default {
	components: {
		OrderItem,
	},
	data: () => ({
		filteredOrders: [],
	}),
	methods: {
		filterOrders(status) {
			const { orders } = this.$store.state.admin;
			if (status === undefined) {
				console.log("hello");
				this.filteredOrders = Object.values(orders);
			} else {
				this.filteredOrders = Object.values(orders)
					.filter(order => order.status === status);
			}
		},
	},
	created() {
		this.filterOrders();
	},
};
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
  margin-top: 2rem;
}
table, tr {
  border: 1px solid black;
}
thead {
	font-weight: bold;
}
.ordersTable {
	margin: 2rem auto 0 auto;
	max-width: 80%;

	&__btn {
		margin-right: 1rem;
		&::last-child {
			margin-right: 0;
		}
	}
}
</style>
