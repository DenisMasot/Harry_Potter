<template>
	<div class="home">
		<div>
			<p>
				<span
					class="home__total"
					:class="$store.getters['client/discount'].amount
						? 'home__total--strikethrough'
						: 'home__total'"
				>{{ $store.getters["client/total"] }} €</span>
				<span
					class="home__total"
					v-if="$store.getters['client/discount'].amount"
				>{{ $store.getters["client/total"] - $store.getters["client/discount"].amount }} €</span>
			</p>
		</div>
		<Card
			v-for="book in $store.state.client.books"
			:key="book.isbn"
			:book="book"
			class="home__card"
		/>
	</div>
</template>

<script setup>
import Card from "@/components/Card.vue";
</script>

<style lang="scss" scoped>
.home {
	margin: 2rem auto 0 auto;
	max-width: 80%;
	&__total {
		font-size: 1.5rem;
		padding: 1rem;
		&--strikethrough {
			text-decoration: line-through;
		}
	}
	&__card {
		display: inline-block;
		width: 50%;
	}
}
</style>
