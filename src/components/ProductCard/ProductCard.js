import React from "react";
import AddButton from "../Button/AddButton";
import RemoveButton from "../Button/RemoveButton";
import "./ProductCard.css";

export default function ProductCard({ item }) {
	return (
		<div className="CardContainer">
			<div className="InnerContainer">
				<img src={item.image} alt={item.productPrice} />
				<p style={{ color: "black" }}>{item.name}</p>
			</div>
			<div className="ButtonGroup">
				<RemoveButton />
				<div className="amount">{item.productPrice}$</div>
				<AddButton />
			</div>
		</div>
	);
}
