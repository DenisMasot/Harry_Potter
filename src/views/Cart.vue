<template>
	<div class="cart">
		<CartTable
			class="cart__table"
		/>
		<button
			class="cart__btn"
			@click="validateOrder"
		>Valider la commande</button>
	</div>
</template>

<script>
import CartTable from "@/components/CartTable.vue";

export default {
	components: {
		CartTable,
	},
	methods: {
		validateOrder() {
			const store = this.$store;
			const { cart } = store.state.client;
			const total = store.getters["client/total"];
			const discount = store.getters["client/discount"];
			if (!Object.values(cart).length) return;
			store.dispatch("admin/setOrder", { cart, total, discount });
			console.log(store.state.admin.orders);
			store.dispatch("client/resetCart");
			this.$router.replace({ name: "Home" });
		},
	},
};
</script>

<style lang="scss" scoped>
.cart {
	&__table {
		margin: 0 auto;
	}
	&__btn {
		margin-top: 2rem;
	}
}
</style>
