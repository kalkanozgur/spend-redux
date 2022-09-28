import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Products/ProductsSlice";

export const store = configureStore({
	reducer: {
		products: productsSlice,
	},
});
