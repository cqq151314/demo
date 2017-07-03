import React, { Component, PropTypes } from 'react';

const propTypes = {
	stateText: PropTypes.string
};

class State extends Component {
	constructor() {
		super();
	}
    getDom() {
        // 调用Profile实例的focus方法
        console.log(1);
        console.log(this.domElement);
    }
	render() {
		console.log(this.props.stateText);
		return <div className="state" ref={(ele) => { this.domElement = ele; }} onClick={()=>this.getDom()}>{this.props.stateText || 'on line'}</div>;
	}
}

State.propTypes = propTypes;

export default State;
