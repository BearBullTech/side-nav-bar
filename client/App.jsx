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
// import "./app.css";
import "./closedMarket.css";

//get rid of all comments
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			view: 'market',
			companyData: defaultData
		}
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() { //use axios instead of jquery
    console.log('this is the window location', window.location)
    $.ajax({
      url: '/stocks/sideBar' + window.location.pathname,
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
    const {view, companyData} = this.state;

    if (view === 'market') {
      return <MarketOrder companies={companyData}/>
    } else if (view === 'limit') {
      return <LimitOrder companies={companyData}/>
    } else if(view ==='stoploss') {
      return <StopLossOrder companies={companyData}/>
    } else {
      return <StopLimitOrder companies={companyData}/>
    }
  }


  render() {

    return (
      <div>
        <div className="content-sidebar">
          <DropDownMenu handleClick={this.changeView}/>
          {this.renderView()}      
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
