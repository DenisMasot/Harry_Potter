import ky from "ky";

export function getBooks() {
	return ky.get("https://henri-potier.techx.fr/books", {
		retry: {
			limit: Infinity,
			methods: ["get"],
			maxRetryAfter: 5000,
		},
	}).json();
}

export function getDiscounts(articles, signal) {
	return ky.get(`https://henri-potier.techx.fr/books/${articles}/commercialOffers`, {
		retry: 0,
		signal,
	}).json();
}

export function generateNumOrder(signal) {
	return ky.get(`https://api.motdepasse.xyz/create/?add_custom_characters&include_lowercase&include_uppercase&include_digits&password_length=12&quantity=1`, {
		retry: 0,
		signal,
	}).json();
}
