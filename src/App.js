import React, { Component} from 'react';
import './App.css';
import  LifeCycle from './component/LifeCycle/index';
import Profile from './component/Profile';
import State from  './component/State'
class App extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
                return (
                    <div className="App">
                        <LifeCycle test={'test'} />
                        <Profile name={'hjzheng'}  age={23} child={<State stateText={"我有值"}/>} value={"初始值"} skills={[1,2,3,4]} />
                        {/* 该ref回调函数会接收到一个挂载的组件实例作为参数*/}
                        {/*调用State实例的,还可以调用这个实例中的一些方法奥，例如getDom*/}
                        <State stateText={"我在验证ref"} ref={(ele) => { this.domElement = ele; }}  />
                        <button onClick={()=>{this.domElement.getDom()}}>点我吧</button>
                        <button onClick={()=>{console.log(this.domElement.domElement.innerHTML)}}>点我吧</button>
                    </div>
                );
            }
    }
export default App;
