import React, { useEffect, useRef } from "react";

import { useCountUp } from "react-countup";
import "./App.css";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

import { useSelector, useDispatch } from "react-redux";
import { calcBalance } from "./context/Products/ProductsSlice";

function App() {
	const dispatch = useDispatch();
	const products = useSelector((store) => store.products.items);
	let total = useSelector((store) => store.products.total);
	const balance = useSelector((store) => store.products.balance);

	total = total - balance;
	const countUpRef = useRef(null);
	const { update } = useCountUp({
		ref: countUpRef,
		start: 0,
		end: total,
		duration: 0.5,
		seperator: ",",
		decimalSeparator: ".",
		prefix: "$",
	});
	useEffect(() => {
		update(total);
		return () => {
			dispatch(calcBalance());
		};
	}, [products, dispatch, total]);

	return (
		<>
			<Header />
			<div className="text-4xl text-white p-4 mx-5 font-bold flex items-center justify-center bg-gradient-to-b from-color1 to-color2 mb-3 sticky top-0">
				<div ref={countUpRef} />
			</div>
			<div className="Products">
				{products.map((item) => (
					<ProductCard key={item.id} item={item} />
				))}
			</div>
		</>
	);
}

export default App;
