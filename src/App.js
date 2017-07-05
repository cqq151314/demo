import React, { Component} from 'react';
import './App.css';
import  LifeCycle from './component/LifeCycle/index';
import Profile from './component/Profile';
import State from  './component/State';
import DropDown from './component/dropdown/index';
import DropDown2 from './component/dropdown2/index';
import Commont from './component/Common/common';
    class App extends Component {
    constructor(props){
        super(props);
        this.state={
            value: 'xian',
        }
        this.options = [
            { label: '西安', value: 'xian',cont:'西安是一座美丽的故都' },
            { label: '上海', value: 'shanghai',cont:'上海是我们向往的地方'},
            { label: '北京', value: 'beijing',cont:'北京是我们的首都' },
            { label: '杭州', value: 'hangzhou',cont:'杭州是旅游的好地方' },
            { label: '厦门', value: 'xiamen',cont:'厦门是一个有海的地方' },
            { label: '成都', value: 'chengdu',cont:'成都在四川，高铁通了，我们坐车很方便' }
        ];
    }
    dropdownChange() {
        console.log(arguments);
    }
    dropdownChangeValue(value) {
        this.setState({
            value
        });
    }
    render(){
                return (
                    <div className="App">
                        {/*<LifeCycle test={'test'} />*/}
                        {/*<Profile name={'hjzheng'}  child={<State stateText={"我有值"}/>} value={"初始值"} skills={['篮球','排球']} />*/}
                        {/* 该ref回调函数会接收到一个挂载的组件实例作为参数*/}
                        {/*调用State实例的,还可以调用这个实例中的一些方法奥，例如getDom*/}
                        {/*<State stateText={"我在验证ref"} ref={(ele) => { this.domElement = ele; }}  />*/}
                        {/*<button onClick={()=>{this.domElement.getDom()}}>点我吧</button>*/}
                        {/*<button onClick={()=>{console.log(this.domElement.domElement.innerHTML)}}>点我吧</button>*/}
                        {/*这是下拉框，我先注释了*/}
                        {/*<div>*/}
                            {/*<DropDown defaultValue={'xian'} onChange={this.dropdownChange} options={[{ label: '西安', value: 'xian',cont:'西安是一座美丽的故都' },*/}
                                {/*{ label: '上海', value: 'shanghai',cont:'上海是我们向往的地方'},*/}
                                {/*{ label: '北京', value: 'beijing',cont:'北京是我们的首都' },]} />*/}
                            {/*<DropDown2 defaultValue={'github'} >*/}
                                {/*<DropDown2.Option value="facebook">*/}
                                    {/*<i className="fa fa-facebook-official" aria-hidden="true">&nbsp;facebook</i>*/}
                                {/*</DropDown2.Option>*/}
                                {/*<DropDown2.Option value="github">*/}
                                    {/*<i className="fa fa-github-square" aria-hidden="true">&nbsp;github</i>*/}
                                {/*</DropDown2.Option>*/}
                                {/*<DropDown2.Option value="twitter">*/}
                                    {/*<i className="fa fa-twitter-square" aria-hidden="true">&nbsp;twitter</i>*/}
                                {/*</DropDown2.Option>*/}
                                {/*<DropDown2.Option value="weixin">*/}
                                    {/*<i className="fa fa-weixin" aria-hidden="true">&nbsp;weixin</i>*/}
                                {/*</DropDown2.Option>*/}
                            {/*</DropDown2>*/}
                        {/*</div>*/}
                        <div className="shoutao">
                        <Commont />
                        </div>
                    </div>
                );
            }
    }
export default App;
