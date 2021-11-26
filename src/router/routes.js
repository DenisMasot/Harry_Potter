import ClientRoutes from "@/router/client";
import AdminRoutes from "@/router/admin";

export default [
	...ClientRoutes,
	...AdminRoutes,
];
