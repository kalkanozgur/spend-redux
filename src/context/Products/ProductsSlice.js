import { createSlice } from "@reduxjs/toolkit";

import products from "./productList";

export const productsSlice = createSlice({
	name: "products",
	initialState: {
		items: products,
		basket: [],
		total: 100000000,
		balance: 0,
	},
	reducers: {
		addToBasket: (state, action) => {
			state.items.filter((item) => {
				if (item.id === action.payload.item.id) return item.count++;
			});
		},
		removeFromBasket: (state, action) => {
			state.items.filter((item) => {
				if (item.id === action.payload.item.id) return item.count--;
			});
		},
		changeBasket: (state, action) => {
			console.log(action.payload);
			state.items.filter((item) => {
				if (item.id === action.payload.item.id)
					return (item.count = action.payload.count);
			});
		},
		calcBalance: (state) => {
			state.balance = state.items
				.map((item) => {
					return item.count > 0 && item.count * item.productPrice;
				})
				.reduce((partialSum, a) => partialSum + a, 0);
		},
	},
});

export const {
	addToBasket,
	removeFromBasket,
	changeBasket,
	calcBalance,
	calcTotal,
} = productsSlice.actions;

export default productsSlice.reducer;
