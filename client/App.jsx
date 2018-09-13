import React from "react";
import ReactDOM from "react-dom";
import StickyBox from 'react-sticky-box';
import DropDownMenu from './components/DropDownMenu.jsx';
import MarketOrder from './components/MarketOrder.jsx';
import LimitOrder from './components/LimitOrder.jsx';
import StopLossOrder from './components/StopLossOrder.jsx';
import StopLimitOrder from './components/StopLimitOrder.jsx';
import $ from 'jquery';
import "./app.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			view: 'market',
			companyData: ''

		}

	}

	componentDidMount() {
    $.ajax({
      url: 'http://localhost:3004/users/sideBar',
      method: 'GET',
      success: data => {this.setState({companyData: data});},
      error: () => console.log('error in getting!')
    })
  }

  changeView(option) {
    this.setState({
      view: option
    });
  }

	  renderView() {
    const {view} = this.state;

    if (view === 'market') {
    	return <MarketOrder companies={this.state.companyData}/>
    } else if (view === 'limit') {
    	return <LimitOrder companies={this.state.companyData}/>
    } else if(view ==='stoploss'){
      return <StopLossOrder/>
    } else {
    	return <StopLimitOrder />
    }
  }

	render() {
		return (
			
			<div className="content-sidebar">
			<DropDownMenu handleClick={this.changeView.bind(this)}/>
        {this.renderView()}      
      </div>
      

		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
