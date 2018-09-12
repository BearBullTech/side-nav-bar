import React from 'react';
import "./dropdownmenu.css";


class DropDownMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false,
			view: 'market'
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
		return (
			<div>
				<div className="menu-bar" onClick={this.showMenu}>
				•••
				</div>

				{this.state.showMenu 
					? (
					<div
						className="mega-menu-content"
						ref={(element) => {
							this.dropdownMenu = element;
						}}
					>
						<header className="heading"> Order Type </header>
						<p onClick={() => this.props.handleClick('market')}> Market Order </p>
						<p onClick={() => this.props.handleClick('limit')}> Limit Order </p>
						<p onClick={() => this.props.handleClick('stoplimit')}> Stop Limit Order </p>
						<p onClick={() => this.props.handleClick('stoploss')}> Stop Loss Order </p>
						<p> Get Free Options<br></br>Trading</p>
						</div>
					)
					: (
							null
						)
				}
				</div>
			);
	}
}

export default DropDownMenu;