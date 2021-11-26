import { createStore } from "vuex";

import admin from "@/store/admin";
import client from "@/store/client";

export default createStore({
	modules: {
		admin,
		client,
	},
});
