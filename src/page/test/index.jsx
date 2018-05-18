import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-gm';
// import { Carousel,Modal, Button,Icon, } from 'antd';
// import { Dialog } from 'react-gm';


import './index.less';

class IndexPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      
    };
  }
 
  render(){
    return(
      <div>
        <Button onClick={this.handleShow} >弹框</Button>


      </div>
    ); 
    
  }  

}
export default connect(state => {
  return {
    ...state.app
  };
})(IndexPage);
  