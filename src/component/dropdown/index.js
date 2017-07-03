import './index.scss';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class Dropdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			label: this.props.options[0].label,
			showMenu: false
		};
	}
	//点击子菜单，选中项改变，控制菜单的改变
	clickHandler(option) {
			this.setState({
				value: option.value,
				label: option.label,
                showMenu: false
			});
	}
//控制子菜单的显示/隐藏
	toggleMenu() {
		this.setState({
			showMenu: !this.state.showMenu
		});
	}
    //子菜单
	_renderMenu() {
			return (
				<ul className="dropdown-menu" style={{ 'display': this.state.showMenu ? 'block' : 'none' }}>
					{this.props.options.map(option => <li key={option.value} className={option.value === this.state.value ? 'active' : ''} onClick={() => this.clickHandler(option)}><a href="javascript:void(0)">{option.label}</a></li>)}
				</ul>
			);
	}
    //菜单
	_renderSelectBox() {
		return (
			<a className="dropdown-toggle" href="javascript:void(0)" onClick={() => this.toggleMenu()}>
				<span style={{ display: 'inline-block' }}>{this.state.label} </span><i className="fa fa-angle-down" style={{ float: 'right', lineHeight: 1.5 }} aria-hidden="true" />
			</a>
		);
	}
	render() {
		return (
			<div className="dropdown dropdown-select">
				{this._renderSelectBox()}
				{this._renderMenu()}
			</div>
		);
	}
}

export default Dropdown;
