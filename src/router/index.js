import {
	createRouter,
	createWebHistory,
} from "vue-router";
import routes from "@/router/routes";

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

const START = router.resolve("/");
router.replace(START);

export default router;
