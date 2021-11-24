import CommonRoutes from "@/router/common";
import ClientRoutes from "@/router/client";
import AdminRoutes from "@/router/admin";

export default [
	...CommonRoutes,
	...ClientRoutes,
	...AdminRoutes,
];
