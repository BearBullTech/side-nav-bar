import React from 'react';
import PopUp from './PopUp/PopUp.jsx';
// import "../app.css";


class MarketOrder extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			total: 0,
			watchList: 'add',
			showMenu: false
		}
  this.showMenu = this.showMenu.bind(this);
  this.closeMenu = this.closeMenu.bind(this);
	}
	
  onChangeHandler(e) {
  	const {companies} = this.props;
  	var results = eval(companies[0].currentDay[0].currentPrice * parseFloat(e.target.value));
		this.setState({
    	total: results
    })
  }

	showMenu(event) {
	event.preventDefault();
	this.setState({showMenu: true});
	}

	closeMenu(event) {
		if (!this.dropdownMenu.contains(event.target)) {
			this.setState({showMenu: false});
		}
	}

  changeWatch(option) {
	  this.setState({
	    watchList: option
	  });
  }

  renderWatch() {
    const {watchList} = this.state;
    if (watchList === 'add') {
      return <button className="watchList" onClick={()=>{this.changeWatch('remove')}}> Add to Watchlist </button>
    } else {
      return <button className="watchList" onClick={()=>{this.changeWatch('add')}}> Remove from Watchlist </button>
    }
  }

  changeButton() {
  	const {showMenu, total} = this.state;
  	const {companies} = this.props;
  	const numOfShare = total/companies[0].currentDay[0].currentPrice;

	  if (total === 0 || NaN) {
	  	if (showMenu === false) {
	  		return (
	  			<div>
			  		<button className="button" onClick={this.showMenu}> Review Order </button>
	  			</div>
	  			)
	  	} else {
	  		return (
	  			<div>
					<div> <circle cx="8" cy="10" r="8"></circle> Error</div>
					<div> Please enter a valid number of shares.</div><br></br><br></br>
	  			<button className="button" onClick={this.closeMenu}> Back </button>
	  			</div>)
	  		}	
	  } else {
	  	if (showMenu === false) {
	  		return <button className="button" onClick={this.showMenu}> Review Order </button>
	  	} else {
	  		return (
	  			<div>
	  			<div> Not Enough Buying Power </div>
	  			<p>You don’t have enough buying power to buy {numOfShare} share of {companies[0].company}. </p>
	  			<p>Please deposit ${(total * 1.05).toFixed(2)} to purchase {numOfShare} share at market price (5% collar included).</p>
	  			<p>Market orders on Robinhood are placed as limit orders up to 5% above the market price in order to protect customers from spending more than they have in their Robinhood account. If you want to use your full buying power of $0.00 you can place a limit order instead.</p>
	  			<button className="button"> Deposit ${parseFloat((total * 1.05).toFixed(2)) || "0.00"}</button>
	  			<button className="backButton" onClick={this.closeMenu}> Back </button>
	  			</div>
	  			)
	  	}	  		
	  }
	  
  }


	render() {
	const {companies} = this.props;
		return(
			<div>
			<div>
				<div className="mainMenu">
					<header className="header-class"> Buy {companies[0].company}</header>
					<div className="menuBody">
						<label>
						<div> Shares </div>
							<input className="orderInput" min="0" placeholder="0" step="1" name="quantity" value={this.state.inputVal} onChange={this.onChangeHandler.bind(this)}></input>
						</label>
						<label>
							<PopUp companies={companies}/>
						<span> ${companies[0].currentDay[0].currentPrice} </span>
						</label>
						<label className="estimatedCost">
							<div>Estimated Cost</div>
							<span> ${parseFloat((this.state.total).toFixed(2)) || "0.00"} </span>
						</label>
						<div className="checkOut">
									{this.state.showMenu ? (<div
								className="slideDown"
								ref={(element) => {
									this.dropdownMenu = element;
								}}>
								</div>
							): (null)
						}
						</div>
							{this.changeButton()}
					</div>
				</div>
				<div className="footerclass"> $0.00 Buying Power Available </div>
			</div>
			<div>
			{this.renderWatch()}
			</div>
			</div>

		)
	}
}

export default MarketOrder;

