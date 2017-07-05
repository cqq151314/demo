import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class State extends Component {
    static propTypes = {
        stateText: PropTypes.string
    };
	constructor() {
		super();
	}
    getDom() {
        console.log(this.domElement);
    }
	render() {
		console.log(this.props.stateText);
		return <div className="state" ref={(ele) => { this.domElement = ele; }} onClick={()=>this.getDom()}>{this.props.stateText || 'on line'}</div>;
	}
}

