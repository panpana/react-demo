import React from 'react';
import { connect } from 'react-redux';
import List from '../../component/List';
import './index.less';
import { actions } from '../../redux/app'; 

class Index extends React.Component {
  
  componentDidMount(){
    this.props.dispatch(actions.searchAllCommodityList());
  }
  render (){
    return (<div className="index">
      <div className="bgWrapper"></div>     
      <List {...this.props}/>
      
    </div>
    );
  }
}
export default connect(state => {
  return {
    ...state.app
  };
})(Index);
