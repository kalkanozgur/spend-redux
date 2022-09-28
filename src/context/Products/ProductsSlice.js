import { createSlice } from "@reduxjs/toolkit";

import products from "./productList";

export const productsSlice = createSlice({
	name: "products",
	initialState: {
		items: products,
		totalAmount: 100000000,
	},
	reducers: {
		addToBasket: () => {},
		removeToBasket: () => {},
	},
});

export const { addToBasket, removeToBasket } = productsSlice.actions;

export default productsSlice.reducer;
