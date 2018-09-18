import React from 'react';
import PopUp from './PopUp.jsx';

const LimitOrder = (props) => {

	const {view, companies, renderWatch, showMenu, changeButton, total, onChangeHandler, currentPrice} = props;
		return(
			<div>
				<div>
					<div className="mainMenu">
						<header className="header-class"> Buy {companies[0].company}</header>
						<div className="menuBody">
							<label>
								<PopUp view={view} companies={companies}/>
								<input className="selectInput" value={"$" + currentPrice}></input>
							</label>

							<label>
							<div> Shares </div>
								<input className="selectInput" min="0" placeholder="0" step="1" name="quantity" onChange={onChangeHandler}></input>
							</label>

							<label>
							<div> Expiration </div>
								<select className="selectInput">
									<option value="0">Good For Today </option>
									<option value="1">Good Till Cancel </option>
									</select>
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

export default LimitOrder;

