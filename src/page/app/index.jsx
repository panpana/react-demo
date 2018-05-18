import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import './index.less';
import Header from '../../component/Header';
// import {actions} from '../../redux/app';

const { Content } = Layout;

class App extends React.Component {
  constructor (props){
    super(props);

  }
  render (){
    return (
      <div  className="app">
        <Header {...this.props}/>
        <Layout>
          <Content>
            {this.props.children || <div />}
          </Content>
        </Layout>
        <footer className="footer">Copyright © 子初</footer>
      </div>
    );
  }
}

export default connect(state => {
  return {
    ...state.app
  };
})(App);
