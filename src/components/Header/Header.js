import React from "react";
// import "./styles.css";

function Header() {
	return (
		<>
			<div className="text-center p-5 bg-clip-border bg-[#181A1B] m-5 rounded-md">
				<h1 className="text-3xl">Spend Money</h1>
			</div>
			<div className="bg-clip-border bg-[#181A1B] m-5 rounded-md">
				<img
					src="https://neal.fun/spend/billgates.jpg"
					alt="billgates"
					className="mx-auto rounded-full w-60"
				/>
				<h1 className="mt-5 text-center text-2xl">Spend Bill Gate's Money</h1>
			</div>
		</>
	);
}

export default Header;
