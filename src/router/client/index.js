import Client from "@/views/Client.vue";

export default [
	{
		path: "/client",
		component: Client,
		children: [
			{
				name: "Client",
				path: "",
				component: Client,
			},
		],
	},
];
