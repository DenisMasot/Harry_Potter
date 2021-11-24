import ky from "ky";

const dataHandler = res => res.json().then(r => r.data);

export function getBooks() {
	return ky.get("https://henri-potier.techx.fr/books")
	.then(dataHandler);
};

export function getDiscount(articles) {
	return ky.get(`https://henri-potier.techx.fr/books/${articles}/commercialOffers`)
	.then(dataHandler);
};

