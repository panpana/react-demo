import React from 'react';
import { Menu, Icon,Modal, Form, Input, Button } from 'antd';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { actions } from '../../redux/app';
import './index.less';

const FormItem = Form.Item;

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      data:[],
      role: '',
      logoutVisible: false, 
      loginVisible: false 
    };
    this.dispatch = this.props.dispatch;
  }
  componentDidMount(){
    let data = this.getMenuData();
    this.setState({
      data,
    });
  }
  componentDidUpdate(preProps){
    if(preProps.role === '' && this.props.role) {
      this.setState({
        role: this.props.role,
      }, ()=>{
        let data = this.getMenuData();
        this.setState({
          data,
        });
      });
    }
  }
  showLoginModal = () => {
    this.setState({
      loginVisible: true
    });
  }
  showLogoutModal = () => {
    this.setState({
      logoutVisible: true
    });
  }
  handleLoginCancle = () => {
    this.setState({
      loginVisible: false
    });
  }
  handleLogoutCancle = () => {
    this.setState({
      logoutVisible: false
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        actions.login(this.dispatch)(values);
      }
    });
    this.setState({
      loginVisible: false
    });
  }
  
  getMenuData(){
    const { role } = this.state;
    console.log('rendermenu',role);
    const menuItemData = [
      {
        type:'customer',
        item:[
          {key:'shopCard',iconType:'shopping-cart',value:'购物车',link: 'order'},
          {key:'Finance',iconType:'book',value:'财务',link: 'finance'},
          {key:'user',iconType:'user',value:'mumuxi',link:null},
          {key:'quit',iconType:'arrow-right',value:'退出',link:null, events:{onClick:this.showLogoutModal}},
        ]
      },
      {
        type:'manager',
        item:[
          {key:'Finance',iconType:'copy',value:'发布',link: 'release'},
          {key:'user',iconType:'user',value:'mumuxi',link:null},
          {key:'quit',iconType:'arrow-right',value:'退出',link:null, events:{onClick:this.showLogoutModal}},
        ]  
      },
      {
        type:'others',
        item:[
          {key:'user',iconType:'user',value:'登录',link:null, events:{onClick:this.showLoginModal}},
        ]  
      }]; 
    if(role === 'Customer'){
      return menuItemData[0].item;
    }else if(role === 'Manager'){
      return menuItemData[1].item;
    }else{
      return menuItemData[2].item;
    }
  }
  render(){
    const { data, logoutVisible, loginVisible } =this.state;
    const { getFieldDecorator } = this.props.form;
    
    return(
      <div>
        <div className="headerWrapper">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >{
              data && data.map(item=>{
                let events = item.events? item.events : null;

                return (
                  <Menu.Item key={item.key}>{
                    item.link ?
                      <Link to={`/${item.link}`}><Icon type={item.iconType} />{item.value}</Link>:
                      <span {...events}><Icon type={item.iconType} />{item.value}</span>
                  }
                  </Menu.Item>
                );
              })
            }</Menu>
        </div>
        <Modal
          title="登录"
          visible={loginVisible}
          onCancel={this.handleLoginCancle}
          footer={null}
        >
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            
            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
          </Form>
        </Modal>
        <Modal
          title="确认退出？"
          visible={logoutVisible}
          onOk={()=>this.dispatch(actions.logout())}
          onCancel={this.handleLogoutCancle}
        ></Modal>
      </div>
    ); 
  } 
}

const IndexPage = Form.create()(Header);
export default connect(state => {
  return {
    ...state.app
  };
})(IndexPage);

