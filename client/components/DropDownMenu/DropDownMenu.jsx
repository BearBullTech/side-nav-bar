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
//dont want to be typing in document
		this.setState({ showMenu: true}, () => {
			document.addEventListener('click', this.closeMenu);
		});
	}
//read documentation for setState in react docs
	closeMenu(event) {
		if (!this.dropdownMenu.contains(event.target)) {
			this.setState({ showMenu: false}, () => {
				document.removeEventListener('click', this.closeMenu);
			});
		}
	}

	render() {
		const {handleClick} = this.props;

		return (
			<div>
				<div className="menu-bar" onClick={this.showMenu}>
				•••
				</div>

				{this.state.showMenu ? (<div
						className="mega-menu-content"
						ref={(element) => {
							this.dropdownMenu = element;
						}}>
						<header className="heading"> Order Type </header>
						<p onClick={() => {handleClick('market'); this.closeMenu(false)}}> Market Order </p>
						<p onClick={() => {handleClick('limit'); this.closeMenu(false)}}> Limit Order </p>
						<p onClick={() => {handleClick('stoplimit'); this.closeMenu(false)}}> Stop Limit Order </p>
						<p onClick={() => {handleClick('stoploss'); this.closeMenu(false)}}> Stop Loss Order </p>
						<p> Get Free Options<br></br>Trading</p>
						</div>
					): (null)
				}
				</div>
			);
	}
}

export default DropDownMenu;