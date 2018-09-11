import React from "react";
import ReactDOM from "react-dom";
import StickyBox from "react-sticky-box";
import LimitOrder from "./components/LimitOrder.jsx";
import StopLossOrder from "./components/StopLossOrder.jsx";
import StopLimitOrder from "./components/StopLimitOrder.jsx";


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	
	render() {
		return (
		  <div>
		    <Limit Order />
		    <Stop Loss Order />
		    <Stop Limit Order />
		    <div>Get Free Options Today!</div>
		  </div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
