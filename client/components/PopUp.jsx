import React from 'react';
import "../app.css";

class PopUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false,

		}
	this.showMenu = this.showMenu.bind(this);
	this.closeMenu = this.closeMenu.bind(this);
	}

	showMenu(event) {
		event.preventDefault();

		this.setState({ showMenu: true}, () => {
			document.addEventListener('click', this.closeMenu);
		});
	}

	closeMenu(event) {
		if (!this.dropdownMenu.contains(event.target)) {
			this.setState({ showMenu: false}, () => {
				document.removeEventListener('click', this.closeMenu);
			});
		}
	}

	render() {
		const {view, companies} = this.props;
		return (
			<div>
				<div className="popup" onClick={this.showMenu}>
				<div className="clickable"> {view} Price</div>
				</div>

				{this.state.showMenu ? (
					<div
						className="popup-menu"
						ref={(element) => {
							this.dropdownMenu = element;
						}}>
						<header className="popupHeader"> The displayed price of ${companies[0].currentDay[0].currentPrice} is <br></br>
						the NASDAQ real-time last sale price. </header>
						<label className="estimatedCost">
							<div>Last Sale</div>
							<span> ${companies[0].currentDay[0].currentPrice} x 400 </span>
						</label>
						<label className="estimatedCost">
							<div>Bid</div>
							<span> ${companies[0].currentDay[0].currentPrice} x 400 </span>
						</label>
						<label className="estimatedCost">
							<div>Ask</div>
							<span> ${companies[0].currentDay[0].currentPrice} x 400 </span>
						</label>
						<div className="popupFooter"> This is consolidated, real-time market information. </div>
						</div>
					): (null)
				}
				</div>
			);
	}
}

export default PopUp;