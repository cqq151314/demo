import './index.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
class Dropdown extends Component {
    static propTypes = {
        defaultValue: PropTypes.string,
        options: PropTypes.array,
        children: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.element
        ]),
        onChange: PropTypes.func,
        value: PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
            label: this.findLabelByValue(this.props.defaultValue),
            showMenu: false
        };
    }
    findLabelByValue(value) {
            if (this.props.children.filter(opt => opt.props.value === value).length === 0) {
                return '';
            }
            return this.props.children.filter(opt => opt.props.value === value)[0].props.children;
    }

    clickHandler(option) {
            this.setState({
                value: option.value,
                label: option.label,
                showMenu: false
            });
    }
    toggleMenu() {
        this.setState({
            showMenu: !this.state.showMenu
        });
    }
    _renderMenu() {
            return (
				<ul className="dropdown-menu" style={{ 'display': this.state.showMenu ? 'block' : 'none' }}>
                    {this.props.children.map(ele => <li key={ele.props.value} className={ele.props.value === this.state.value ? 'active' : ''} onClick={() => this.clickHandler({ label: ele.props.children, value: ele.props.value })}><a href="javascript:void(0)">{ele.props.children}</a></li>)}
				</ul>
            );
    }
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
class Option extends Component {
    static propTypes = {
        children: PropTypes.any,
        value: PropTypes.any.isRequired
    }
    render() {
    	return (
		<li key={this.props.value}>
			<a href="javascript:void(0)">{this.props.children}</a>
		</li>
		);
    }
}
Dropdown.Option = Option;
export default Dropdown;
