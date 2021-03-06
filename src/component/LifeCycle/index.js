import React, { Component} from 'react';
import PropTypes from 'prop-types';

class LifeCycle extends Component {
    // 代替旧的写法
    static propTypes = {
        test: PropTypes.string.isRequired,
        bool: PropTypes.bool,
        pro: PropTypes.func
    };
    // 默认属性
    static defaultProps = {
        bool: true,
        pro: () => Promise.resolve()
    };
    constructor(props) {
        super(props);
        console.log('getDefaultProps', props);   //默认属性
        this.state = {
            willMount: false,
            DidMount: false,
            num: 0
        };
        console.log('getInitialState', this.state);  //this.state
    }

    // shouldComponentUpdate() {
    // 	console.log('shouldComponentUpdate', this.state);
    // 	return true;
    // }

    componentWillMount() {
        this.setState({willMount: true});
        console.log('componentWillMount', this.state);
    }

    componentDidMount() {
        this.setState({DidMount: true});
        console.log('componentDidMount', this.state);
    }

    componentWillReceiveProps(object, nextProps) {
        console.log('componentWillReceviceProps', object, nextProps);
    }
    componentWillUpdate() {
        console.log('componentWillUpdate', this.state);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate', this.state);
    }

    clickCallback() {
    	console.log(1);
        let num = this.state.num;
        this.setState({num: ++num});
    }

    render() {console.log('render', this.state);

        // :: 可以 bind this
        return <div onClick={this.clickCallback.bind(this)} >点我!{this.state.num}</div>;
    }
}
// LifeCycle.propTypes = propTypes;
export default LifeCycle;
