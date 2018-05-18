import React from 'react';
// import { Input } from 'antd';

class IndexPage extends React.Component {
  constructor(props){
    super(props);
   
  }
  // handleChange=(e)=>{
  //   this.setState({
  //     value: e.currentTarget.value
  //   })
  //   e.currentTarget.innerText = this.state.value;
  // }
  
  render(){
    return(
      <div >
        {this.props.value}
      </div>
    ); 
  } 
}

export default IndexPage;

 
