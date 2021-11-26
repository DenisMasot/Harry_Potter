import Home from "@/views/Home.vue";
import Cart from "@/views/Cart.vue";
import PageNotFound from "@/views/PageNotFound.vue";

export default [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/cart",
		name: "Cart",
		component: Cart,
	},
	{
		path: "/:bookId",
		name: "Book",
	},
	{
		path: "/:_(.*)",
		name: "PageNotFound",
		component: PageNotFound,
	},
];
