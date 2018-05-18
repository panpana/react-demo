import React from 'react';
import { connect } from 'react-redux';
// import {Button } from 'react-gm';
import { Carousel,Modal, Button,Icon } from 'antd';
// import { Dialog } from 'react-gm';
import Test from '../../component/Test';
import Test1 from '../../component/Test1';

import './index.less';

class IndexPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      value: '请输入文字',
      // isShow: false
    };
  }
  componentDidMount(){
   
  }
  handleShow = () => {
    this.setState({
      isShow: true
    });
  }
  handleOk =()=>{
    console.log('ok 被点击啦');
    this.setState({
      isShow: false
    });
  }

  handleChange=(e)=>{
    this.setState({
      value: e.currentTarget.value
    });
    console.log(this.state.value);
  }
  render(){
    return(
      <div>
        <Button onClick={this.handleShow} >弹框</Button>
        <Modal 
          visible={this.state.isShow}  
          title={
            <div>
              <Icon type="user" />用户详情
            </div>
          }
          onOk={this.handleOk}
        />
        <Test  handleChange={this.handleChange}/>
        <Test1 value={this.state.value}/> 
        {/* <Dialog show={true} title="test222" /> */}
        <Carousel autoplay>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>

      </div>
    ); 
    
  }  

}
export default connect(state => {
  return {
    ...state.app
  };
})(IndexPage);
  