import React, { Component, PropTypes } from 'react';

const propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	skills: PropTypes.array,
	child: PropTypes.element
};
export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			liked: 0,
			skills: props.skills, //this.props.skills
			value:this.props.value,
		};
		this.click = this.clickLiked.bind(this);
		this.add = this.addSkill.bind(this);
	}

	clickLiked() {
		let num = this.state.liked;
		this.setState({liked: ++num});
	}

	addSkill() {
		let skills = this.state.skills;
		if (skills) {
			skills.push(this.refs.skill.value);
			this.setState({"skills":skills});
		}
	}
	// 取到真实Dom节点，this.inputEle就是真实的Dom元素
    focus() {
		this.inputEle.focus();
	    this.inputEle.style="background:red";
	    console.log(this.inputEle)
    }
	render() {
		return (
			<div className="profile">
				<h3>Fucking Cool Name: {this.props.name} </h3>
				<h3>Fucking Cool Age: {this.props.age} </h3>
				<h3>Fucking Cool Skills: {this.state.skills ? this.state.skills.join(',') : 'No Skills'} </h3>
				<div>{this.props.child}</div>
				<div onClick={this.click}>liked: {this.state.liked} </div>
				<input type="text" ref="skill" />
				{/*为dom元素添加ref*/}
				<input type="text" value={this.props.value} ref={(ele) => { this.domElement = ele; }} onChange={()=>{this.focus}} style={{"border":"1px solid #f00"}}/>
				<button onClick={this.add}>add skill</button>
			</div>
		);
	}
}
