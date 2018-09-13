import React from "react";
import ReactDOM from "react-dom";
import StickyBox from 'react-sticky-box';
import DropDownMenu from './components/DropDownMenu/DropDownMenu.jsx';
import MarketOrder from './components/MarketOrder.jsx';
import LimitOrder from './components/LimitOrder.jsx';
import StopLossOrder from './components/StopLossOrder.jsx';
import StopLimitOrder from './components/StopLimitOrder.jsx';
import defaultData from './defaultData.js'
import $ from 'jquery';
import "./app.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			view: 'market',
			companyData: defaultData
		}
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
    console.log('this is the window location', window.location)
    $.ajax({
      url: 'http://localhost:3004/stocks/sideBar' + window.location.pathname,
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
    } else if(view ==='stoploss') {
      return <StopLossOrder/>
    } else {
      return <StopLimitOrder />
    }
  }

  render() {

    return (
      <div className="content-sidebar">
      <DropDownMenu handleClick={this.changeView}/>
      {this.renderView()}      
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
