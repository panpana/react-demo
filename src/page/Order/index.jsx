import React from 'react';
import { connect } from 'react-redux';
import {actions} from '../../redux/app';
import { hashHistory } from 'react-router';
import './index.less';
import { Button } from 'antd';

class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allaccount: 0,
      discountNum: 0,
      accountSum: 0
    };
  }
  componentDidMount(){
    const {userId} = this.props;
    if(userId){
      this.props.dispatch(actions.searchCartInfo({userId}));
    }else{
      hashHistory.push('/404');
    }
  }
  countdata = () =>{
    const { orderData } = this.props;
    let allaccount = 0,accountSum = 0;

    orderData.forEach(item => {
      allaccount+=item.accountSum;
      accountSum+=item.accountSum;
    });
    this.setState({
      allaccount,
      accountSum
    });
  }
  confirmOrder = () => {
    let data =[];
    this.props.orderData.forEach(item => {
      data.push(item.commId);
    });
    this.props.dispatch(actions.settleAccount({shoppingCarsIds: data},()=>{
      hashHistory.push('/index');
    }));
  }
  render(){
    const { orderData } = this.props;
    // const {allaccount,discountNum,accountSum} = this.state;
    return(
      <div className="orderWrapper">
        <h2 className="comfire">确认商品信息</h2>
        <div className="thead">
          <span className="col col1">商品信息</span>
          <span className="col col2">单价(元)</span>
          <span className="col col2">数量</span>
          <span className="col col2">金额</span>
        </div>
        <div className="goodsList">
          {
            orderData && orderData.map(item => {
              return (
                <div className="goods" key={item.key} >
                  <div className="col col1">
                    <img src={item.pic} className="img" alt="product"/>
                    <span className="title">{item.commName}</span>
                  </div>
                  <div className="col col2">{item.unitPrice}</div>
                  <div className="col col2">{item.count}</div>
                  <div className="col col3">{item.accountSum}</div>
                </div>
              );
            })
          }
        </div>
        <div className="paybox">
          <div className="amountbox">
            {/* <span>商品总计：</span ><em>{allaccount}</em>
            <span>优惠金额：</span> <em>{discountNum}</em>
            <span>应付金额：</span> <em className="totalnum">{accountSum}</em> */}
            <Button className="submitbtn" onClick={this.confirmOrder}>提交订单</Button>
          </div>
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
