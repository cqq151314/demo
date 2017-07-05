import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Profile extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        skills: PropTypes.array,
        child: PropTypes.element
    };
	constructor(props) {
		super(props);
		this.state = {
			liked: 0,
			skills: props.skills, //this.props.skills
			value:this.props.value,
		};
		this.click = this.clickLiked.bind(this);
		this.add = this.addSkill.bind(this);
		this.Change=this.Change.bind(this);
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
    Change() {
		this.domElement.focus();
	    this.domElement.style="background:red";
	    console.log(this.domElement)
    }
	render() {
		return (
			<div className="profile">
				<h3>姓名: {this.props.name} </h3>
				<h3>技能: {this.state.skills ? this.state.skills.join(',') : 'No Skills'} </h3>
				<div>{this.props.child}</div>
				<div onClick={this.click}>num: {this.state.liked} </div>
				<div>
					<input type="text" ref="skill" />
					<button onClick={this.add}>添加技能</button>
				</div>
				{/*为dom元素添加ref*/}
				<input type="text" value={this.props.value} ref={(ele) => { this.domElement = ele; }} onChange={()=>{this.Change}} style={{"border":"1px solid #f00"}}/>
			</div>
		);
	}
}
