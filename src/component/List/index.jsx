import React from 'react';
import {Icon} from 'antd';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import {actions} from '../../redux/app';
import './index.less';

class IndexPage extends React.Component {
  constructor(props){
    super(props);
    
  }
  handleClick = (id) => {
    this.props.dispatch(actions.searchCommDetail({'commId': id}, ()=>{
      hashHistory.push(`/commodity/${id}`);
    }));
  }
  
  render(){
    const { commData } = this.props;

    return(
      <div className="list-wrapper">
        <div className="title"><span>PRODUCTS</span>商品详情</div>
        <div className="product">{
          commData && commData.map(item=>{
            return(
              <div className="productItem" key={item.id} onClick={this.handleClick.bind(this,item.id)} >
                <img src={item.pic} className="img" alt="product"/>
                <div className="name">{item.commName}</div>
                <div className="commInfo">{item.commInfo}</div>
                <div>
                  <div className="price">{`￥ ${item.price}`}</div>
                  <div className="cart"><Icon type="shopping-cart" /></div>
                </div>
              </div>
            );        
          })   
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


