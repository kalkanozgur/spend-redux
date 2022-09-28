import React from "react";
import "./App.css";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

import { useSelector } from "react-redux";
// import {second} from './context/Products/ProductsSlice'

function App() {
	const products = useSelector((store) => store.products.items);
	console.log(products);
	return (
		<>
			<Header />
			<div>$100,000,000,000</div>
			<div className="Products">
				{products.map((item) => (
					<ProductCard key={item.id} item={item} />
				))}
			</div>
		</>
	);
}

export default App;
