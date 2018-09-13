import React from 'react';
import "../app.css";

const MarketOrder = (props) => {
	console.log('Market order props', props.companies[0].currentDay[0].currentPrice)
	// const companies = this.props.companies.find(e => e.company === condition);

	return (
		<div>
			<div className="mainMenu">

				<header className="header-class"> Buy {props.companies[0].company}</header>

				<div className="menuBody">
					<label>
					<div> Shares </div>
						<input className="orderInput" min="0" placeholder="0" name="quantity"></input>
					</label>
					<label>
						<a className="clickable"> Market Price </a>
					<span> ${props.companies[0].currentDay[0].currentPrice} </span>
					</label>
					<label className="estimatedCost">
						<div>Estimated Cost</div>
						<span> $0.00 </span>
					</label>
					<div className="checkOut">
						<button className="button"> Review Order </button>
					</div>
				</div>
			</div>
			<footer className="footer-class"> $0.00 Buying Power Available </footer>
		</div>
		)
}

export default MarketOrder;

