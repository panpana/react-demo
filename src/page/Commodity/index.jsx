import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import {actions} from '../../redux/app';
import './index.less';
import {Icon, Input, Button, Modal, message} from 'antd';

class IndexPage extends React.Component {
  constructor(){
    super();
    this.state={
      count:1,
      visible: false,
      item: null
    };
  }
  addCount = () =>{
    let count = this.state.count;
    if(count <= 0) return;
    this.setState({
      count: count-1
    });
  }
  cutCount = () =>{
    let count = this.state.count;
    this.setState({
      count: count+1
    });
  }
  buy = ()=>{
    this.setState({
      visible: true
    });
  }
  handleOk = () => {
    const {userId} = this.props;
    const {item, count} = this.state;
    if(userId === ''){
      message.error('请登录后添加商品！');
      return;
    }
    this.props.dispatch(actions.insertComm2Cart({
      userId,
      commId: item.id,
      count,
      unitPrice: item.price
    }));
    hashHistory.push('/order');
  }
  handleCancel = () => {
    this.setState({
      visible: false
    });
  }
  componentDidUpdate(preProps){
    
    if(preProps.singlecommDetail.length ===  0 && this.props.singlecommDetail) {
      this.setState({
        item: this.props.singlecommDetail,
      });
    }
  }
  render(){
    const {item} = this.state; 
    
    return(
      <div className="wrapper">
        <div className="product">
          {
            item ? <div className="commodity_wrapper" key={item.id}>
              <img src={item.pic} className="img" alt="product"/>
              <div className="details">
                <div className="name" >{item.commName}</div>
                <div className="priceWrapper">
                  <span>价格</span><span className="price">{` ￥ ${item.price}`}</span>
                </div>
                <div className="countWrapper">
                  <span className="countNum">数量</span>
                  <div className="countCom">
                    <Input addonBefore={<Icon type="minus-circle-o" onClick={this.addCount}/>} addonAfter={<Icon type="plus-circle-o" onClick={this.cutCount}/>} value={this.state.count} style={{display:'inline-block'}}/>
                  </div>
                </div>
                <Button onClick={this.buy} className="buyBtn">立即购买</Button>
                <Modal 
                  title="订单确认"
                  visible={this.state.visible}
                  onOk={this.handleOk.bind(this,item)}
                  onCancel={this.handleCancel}>
                    确认购买该商品吗？
                </Modal>
                {/* <Button  className="backBtn">返回</Button> */}
              </div>
            </div>:null
          }
         
        </div>
      </div>
    ); 
  }  
}

export default connect(state => {
  return {
    ...state.app
  };
})(IndexPage);
