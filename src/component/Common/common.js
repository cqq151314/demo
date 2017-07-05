import React, { Component} from 'react';
import PropTypes from 'prop-types';
import '../../bootstrap/css/bootstrap.css';
import './index.scss';
export default class Commont extends Component {
    // 类型校验
    // static propTypes = {
    //
    // };
    constructor(props) {
        super(props);
        this.state = {
            // 统计输入的个数
            num:0,
            // 输入值
            value:'',
            //当前选中的下标
            CheckedIndex:-1,
            //复选列表
            checkList: ['1','2','3','4','5']

        };
        // 等级会员模拟数据
        this.grade = [
            { name: '店铺客户', type:"1" ,id:'01'},
            { name: '普通会员', type:"2",id:'02'},
            { name: '高级会员', type:"3",id:'03' },
            { name: 'VIP会员', type:"4",id:'04' },
            { name: '至尊会员', type:"5",id:'05' }
        ];
    }
  //  统计文本框的输入值  e是事件对象
    ChangeNum(e) {
        let txt = e.target.value;
        if(txt.length <= 20){
            this.setState({'num': txt.length});
            this.setState({'value': txt});
        }
    }
    // 变更选中等级
    ChangeGrage(item,index,event){
        this.setState({'CheckedIndex':index});
    }
    // 复选变更选中等级
    CheckClick(type){
        let checkList=this.state.checkList.slice(); //从数组中取所有元素
       if(checkList.includes(type)){
           checkList.splice(checkList.indexOf(type),1);
       }else{
           checkList.push(type);
       }
       this.setState({checkList:checkList});
    }
    render() {
        return (
            <div>
                <div style={{"padding": "100px 100px 10px"}}>
                    <form className="bs-example bs-example-form" role="form" action="this.grade?type=1"  method="get">
                        <label htmlFor="firstname" className="col-sm-2 hudong" style={{"lineHeight":"34px","textAlign":'center'}}>互动名称:</label>
                        <div className="input-group">
                            <input type="text" className="form-control" value={this.state.value} onChange={(e)=>this.ChangeNum(e)}/><span className="input-group-addon">{this.state.num}/1</span>
                        </div>
                        <div style={{"marginTop":'20px'}}>
                            <label htmlFor="firstname" className="col-sm-2 hudong" style={{"lineHeight":"34px","textAlign":'center'}}>参与等级:</label>
                            <div className="input-group">
                                {
                                    this.grade.map((item,index) => {
                                        return (
                                            <button type="button" className="btn btn-primary"  style={{"background": index === this.state.CheckedIndex ? "#fff":"#337ab7"}} key={item.id} onClick={(e)=>{this.ChangeGrage(item,index,e)}}>{item.name}</button>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        {/*复选框*/}
                        <div style={{"marginTop":'20px'}}>
                            <label htmlFor="firstname" className="col-sm-2 hudong" style={{"lineHeight":"34px","textAlign":'center'}}>参与等级:</label>
                            <div className="input-group">
                                {
                                    this.grade.map((item,index) => {
                                        return (
                                            <button type="button" className="btn btn-primary"  style={{'background':this.state.checkList.includes(item.type) ? 'blue' : '#fff'}} onClick={() => {this.CheckClick(item.type)}} >{item.name}</button>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
