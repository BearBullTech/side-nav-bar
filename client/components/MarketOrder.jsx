import React from 'react';
import PopUp from './PopUp/PopUp.jsx';
import "../app.css";


class MarketOrder extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			total: 0
		}

	}
	
  onChangeHandler(e) {
  	const {companies} = this.props;
  	var results = eval(companies[0].currentDay[0].currentPrice * parseFloat(e.target.value));
		this.setState({
    	total: results
    })
  }

	render() {
	
	const {companies} = this.props;
		return(
			<div>

				<div className="mainMenu">
					<header className="header-class"> Buy {companies[0].company}</header>
					<div className="menuBody">
						<label>
						<div> Shares </div>
							<input className="orderInput" min="0" placeholder="0" step="1" name="quantity" value={this.state.inputVal} onChange={this.onChangeHandler.bind(this)}></input>
						</label>
						<label>
							<PopUp companies={companies} name="fuck Price"/>
						<span> ${companies[0].currentDay[0].currentPrice} </span>
						</label>
						<label className="estimatedCost">
							<div>Estimated Cost</div>
							<span> ${this.state.total || "0.00"} </span>
						</label>
						<div className="checkOut">
							<button className="button" onClick={()=>{console.log('hi')}}> Review Order </button>
						</div>
					</div>
				</div>
				<div className="footerclass"> $0.00 Buying Power Available </div>
			</div>
		)
	}
}

export default MarketOrder;

