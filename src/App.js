import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

import { useSelector, useDispatch } from "react-redux";
import { calcBalance, calcTotal } from "./context/Products/ProductsSlice";

function App() {
	const dispatch = useDispatch();
	const products = useSelector((store) => store.products.items);
	let total = useSelector((store) => store.products.total);
	const balance = useSelector((store) => store.products.balance);

	total = total - balance;
	console.log(total);
	useEffect(() => {
		return () => {
			dispatch(calcBalance());
		};
	}, [products]);

	return (
		<>
			<Header />
			<div>{total} $</div>
			<div className="Products">
				{products.map((item) => (
					<ProductCard key={item.id} item={item} />
				))}
			</div>
		</>
	);
}

export default App;
