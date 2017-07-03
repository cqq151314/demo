import React, { Component, PropTypes } from 'react';
const propTypes = {
	stateText: PropTypes.string
};
export default class State extends Component {
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

