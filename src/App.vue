<template>
	<div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/cart">Cart</router-link> |
		<router-link to="/admin">Admin</router-link>
	</div>
	<template
		v-if="$store.state.client.books.length"
	>
		<router-view/>
	</template>
</template>

<script>
export default {
	created() {
		this.$store.dispatch("client/setBooks");
	},
};
</script>

<style lang="scss">
* {
	box-sizing: border-box;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 2rem 2rem 4rem 2rem;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
