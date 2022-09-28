import React, { useEffect, useState } from "react";
import classNames from "classnames";
// import "./ProductCard.css";

import { useDispatch } from "react-redux";
import {
	addToBasket,
	removeFromBasket,
	changeBasket,
} from "./../../context/Products/ProductsSlice";

export default function ProductCard({ item }) {
	const [count, setCount] = useState(item.count);
	const dispatch = useDispatch();
	const removeBasketHandle = (e) => {
		dispatch(removeFromBasket({ item }));
	};
	const addBasketHandle = () => {
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
	}, []);

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
					// className={classNames({
					// 	// "bg-gradient-to-b from-pink-500 to-red-500 text-white": 1 > 0,
					// 	// "bg-gray-100 text-black": item.count < 1,
					// 	// "rounded p-2 font-bold enabled:active:scale-90 transition-transform": true,
					// })}
					className="rounded p-2 px-8 bold bg-gray-700"
				>
					Sell
				</button>
				<input
					type="text"
					value={item.count}
					onKeyPress={(e) => {}}
					onChange={handleChange}
					className="text-center outline-none border border-gray-900 bg-[#3B3B3B] rounded p-2 w-1/3"
				/>
				<button
					onClick={addBasketHandle}
					disabled={1000 < item.productPrice}
					// className={classNames({

					// 	// "bg-gradient-to-b from-brand1 to-brand2 text-white":
					// 	// 	1 + 1 > item.productPrice,
					// 	// "bg-gray-100 text-black": 1 < item.productPrice,
					// 	// "rounded p-2 font-bold enabled:active:scale-90 transition-transform": true,
					// })}
					className="rounded p-2 px-8 bold bg-green-700"
				>
					Buy
				</button>
			</div>
		</div>
	);
}
