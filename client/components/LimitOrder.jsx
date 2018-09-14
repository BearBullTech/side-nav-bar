import React from 'react';
import PopUp from './PopUp.jsx';


class LimitOrder extends React.Component {
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
					<div> Error </div>
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
	  			<div>You don’t have enough buying power to buy {numOfShare} share of {companies[0].company}. </div><br></br>
	  			<div>Please deposit ${(total * 1.05).toFixed(2)} to purchase {numOfShare} share at market price (5% collar included).</div><br></br>
	  			<div>Market orders on Robinhood are placed as limit orders up to 5% above the market price in order to protect customers from spending more than they have in their Robinhood account. If you want to use your full buying power of $0.00 you can place a limit order instead.</div>
	  			<br></br>
	  			<button className="button"> Deposit ${parseFloat((total * 1.05).toFixed(2)) || "0.00"}</button>
	  			<button className="backButton" onClick={this.closeMenu}> Back </button>
	  		</div>
	  			)
	  	}	  		
	  }
	  
  }


	render() {
	const {view, companies} = this.props;
		return(
			<div>
			<div>
				<div className="mainMenu">
					<header className="header-class"> Buy {companies[0].company}</header>
					<div className="menuBody">
						<label>
							<PopUp view={view} companies={companies}/>
							<input className="selectInput" value={"$" + companies[0].currentDay[0].currentPrice}></input>
						</label>

						<label>
						<div> Shares </div>
							<input className="selectInput" min="0" placeholder="0" step="1" name="quantity" value={this.state.inputVal} onChange={this.onChangeHandler.bind(this)}></input>
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

export default LimitOrder;

