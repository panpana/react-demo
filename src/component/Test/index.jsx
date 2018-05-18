import React from 'react';
import { Input } from 'antd';

class IndexPage extends React.Component {
  constructor(props){
    super(props);
    
  }
  // handleChange=(e)=>{
  //   this.setState({
  //     value: e.currentTarget.value
  //   })
  //   console.log(e.currentTarget.value)
  // }
  
  render(){
    return(
      <div>
        <Input onChange={this.props.handleChange} />
      </div>
    ); 
  } 
}

export default IndexPage;


