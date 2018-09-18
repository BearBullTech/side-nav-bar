import React from 'react';
import PopUp from './PopUp.jsx';

const MarketOrder = (props) => {
	
	const {view, companies, renderWatch, showMenu, changeButton, total, onChangeHandler, currentPrice} = props;
		return (
			<div>
			<div>
				<div className="mainMenu">
					<header className="header-class"> Buy {companies[0].company}</header>
					<div className="menuBody">
						<label>
						<div> Shares </div>
							<input className="orderInput" min="0" placeholder="0" step="1" name="quantity" onChange={onChangeHandler}></input>
						</label>
						<label>
							<PopUp view={view} companies={companies}/>
						<span> ${currentPrice} </span>
						</label>
						<label className="estimatedCost">
							<div>Estimated Cost</div>
							<span> ${parseFloat((total).toFixed(2)) || "0.00"} </span>
						</label>
							{changeButton()}
					</div>
				</div>
				<div className="footerclass"> $0.00 Buying Power Available </div>
			</div>
			<div>
			{renderWatch()}
			</div>
			</div>
		)
	
}

export default MarketOrder;

