import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState("red");
	useEffect(
		() => {
			const interval = setInterval(() => {
				color === "red"
					? setColor("green")
					: color === "yellow"
						? setColor("red")
						: color === "green"
							? setColor("yellow")
							: null;
			}, 2000);
			return () => clearInterval(interval);
		},
		[color]
	);
	return (
		<div className="container d-flex justify-content-center pt-5">
			<div className="trafficLight">
				<div
					className={color === "red" ? "redLight" : "greyLight"}
					onClick={() => setColor("red")}
				/>
				<div
					className={color === "yellow" ? "yellowLight" : "greyLight"}
					onClick={() => setColor("yellow")}
				/>
				<div
					className={color === "green" ? "greenLight" : "greyLight"}
					onCLick={() => setColor("green")}
				/>
			</div>
		</div>
	);
}
