<template>
	<OrdersTable
		class="admin__table"
	/>
</template>

<script setup>
import OrdersTable from "@/components/OrdersTable.vue";
</script>

<style lang="scss" scoped>
.admin {
	&__table {
		margin: 0 auto;
		max-width: 80%;
	}
}
</style>
