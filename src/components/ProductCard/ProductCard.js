import React, { useEffect, useState } from "react";
// import "./ProductCard.css";

import { useDispatch, useSelector } from "react-redux";
import {
	addToBasket,
	removeFromBasket,
	changeBasket,
} from "./../../context/Products/ProductsSlice";

export default function ProductCard({ item }) {
	const [count, setCount] = useState(item.count);
	let total = useSelector((store) => store.products.total);
	const dispatch = useDispatch();
	const removeBasketHandle = (e) => {
		setCount(count - 1);
		dispatch(removeFromBasket({ item }));
	};
	const addBasketHandle = () => {
		setCount(count + 1);
		dispatch(addToBasket({ item }));
	};
	const handleChange = (e) => {
		e.preventDefault();
		if (e.target.value > -1) {
			setCount(Number(e.target.value));
			dispatch(changeBasket({ item, count: e.target.value }));
		}
	};
	useEffect(() => {
		setCount(item.count);

		return () => {};
	}, [item.count]);

	return (
		<div className="bg-[#181A1B] flex flex-col items-center justify-center p-3">
			<div className="max-w-xs w-72 flex flex-col items-center">
				<img className="w-4/5 h-60" src={item.image} alt={item.productName} />
			</div>
			<h2 className="font-bold text-lg">{item.productName}</h2>
			<h3 className="font-bold text-xl text-brand1 mb-5 ">
				{/* {formatMoney(item.productPrice, 0)} */}
				{item.productPrice}
			</h3>
			<div className="w-full flex justify-between">
				<button
					onClick={removeBasketHandle}
					disabled={item.count < 1}
					className="rounded p-2 px-8 bold bg-gray-700"
				>
					Sell
				</button>
				<input
					type="text"
					value={count}
					onKeyPress={(e) => {}}
					onChange={handleChange}
					className="text-center outline-none border border-gray-900 bg-[#3B3B3B] rounded p-2 w-1/3"
				/>
				<button
					onClick={addBasketHandle}
					disabled={total < item.productPrice}
					className="rounded p-2 px-8 bold bg-green-700"
				>
					Buy
				</button>
			</div>
		</div>
	);
}
