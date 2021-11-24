import { createStore } from "vuex";

import admin from "@/store/admin";
import client from "@/store/client";

const modules = {
	admin,
	client,
};

export default createStore({
	modules,
});
