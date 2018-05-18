import React from 'react';
import { connect } from 'react-redux';
import {actions} from '../../redux/app';
import { hashHistory } from 'react-router';
import './index.less';

class IndexPage extends React.Component {
  constructor(){
    super();
    this.state={
      data:[]
    };
  }
  componentDidMount(){
    const {userId} = this.props;
    if(userId){
      this.props.dispatch(actions.searchfinance({userId}));
    }else{
      hashHistory.push('/404');
    }
  }
  componentDidUpdate(preProps){
    
    if(preProps.financeData.length ===  0 && this.props.financeData.length !== 0) {
      this.setState({
        data: this.props.financeData,
      });
    }
  }
  render(){
    return(
      <div className="financeWrapper">
        <h2 className="comfire">财务</h2>
        <div className="thead">
          <span className="col col1">商品信息</span>
          <span className="col col2">单价(元)</span>
          <span className="col col2">购买时间</span>
          <span className="col col2">数量</span>
          <span className="col col2">金额</span>
        </div>
        <div className="goodsList">
          <div className="goods">
            <div className="col col1">
              <div className="img"></div>
              <span className="title">THERMOS 膳魔师 超轻真空大容量保温保冷杯旅行</span>
            </div>
            <div className="col col2">168.00</div>
            <div className="col col2">2014.10.12</div>
            <div className="col col2">1</div>
            <div className="col col3">168.00</div>
          </div>

          <div className="goods">
            <div className="col col1">
              <div className="img"></div>
              <span className="title">THERMOS 膳魔师 超轻真空大容量保温保冷杯旅行</span>
            </div>
            <div className="col col2">168.00</div>
            <div className="col col2">2014.10.12</div>
            <div className="col col2">1</div>
            <div className="col col3">168.00</div>
          </div>
        </div>
        <div className="amountbox">
          <span>总计</span> <em className="totalnum">￥336.00</em>
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
