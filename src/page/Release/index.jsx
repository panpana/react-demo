import React from 'react';
import { connect } from 'react-redux';
import {actions} from '../../redux/app';
import { uploadImgUrl } from '../../config';
// import { hashHistory } from 'react-router';
import { Icon,  Form, Input, Button, Upload, message } from 'antd';
import './index.less';

const FormItem = Form.Item;
const { TextArea } = Input;
class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageUrl:''
    };
  }
  getBase64 = (img, callback)=> {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  beforeUpload = (file) => {

    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }

  handleChange = (info) => {
    //console.log('handlechange');

    if (info.file.status === 'done') {
      const imageUrl = info.file.response.data;
      const { form } = this.props;
      this.setState({
        imageUrl
      });
      form.setFieldsValue({pic: imageUrl});
      // Get this url from response in real world.
      // this.getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }));
    }
  }
  
  handleRelease = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        actions.releaseComm(values);
      }
    });
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    const imageUrl = this.state.imageUrl;

    return(
      <div className="releaseWrapper">
        <h2 className="comfire">发布</h2>
        <Form className="login-form">
          <span style={{position:'absolute',top: '160px', right:'48px'}}>(图片上传)</span>
          <Upload 
            className="avatar-uploader"
            name="file"
            showUploadList={false}
            action={uploadImgUrl}
            beforeUpload={this.beforeUpload}
            onChange={this.handleChange}
          >
            {
              imageUrl ?
                <img src={imageUrl} alt="" className="avatar" /> :
                <Icon type="plus" className="avatar-uploader-trigger" />
            }
            <FormItem>
              {getFieldDecorator('pic', {
                rules: [{required: true, message: '请先上传图片'}]
              })(<Input type="hidden"/>)}
            </FormItem>
          </Upload>
          
          <FormItem style={{float: 'left',width: '450px'}}>
            {getFieldDecorator('commName', {
              rules: [{ required: true, message: '输入内容标题' }],
            })(
              <Input prefix={<Icon type="book" style={{ fontSize: 13 }} />} placeholder="内容标题" />
            )}
          </FormItem>
          
          <FormItem style={{float: 'left',width: '450px'}}>
            {getFieldDecorator('commSum', {
              rules: [{ required: true, message: '输入内容摘要' }],
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="text" placeholder="内容摘要" />
            )}
          </FormItem>
          <FormItem style={{float: 'left',width: '450px'}}>
            {getFieldDecorator('price', {
              rules: [{ required: true, message: '输入价格' }],
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="text" placeholder="价格" />
            )}
          </FormItem>
          <FormItem style={{clear: 'both'}}>
            {getFieldDecorator('commInfo', {
              rules: [{ required: true, message: '输入正文' }],
            })(
              <TextArea rows={4} placeholder="正文" style={{ fontSize: 13 }} />
            )}
          </FormItem>
          <Button type="primary" className="releasebtn" onClick={this.handleRelease}>发布</Button>
        </Form>
      </div>
    ); 
  }  
}

const IndexPage = Form.create()(Index);
export default connect(state => {
  return {
    ...state.app
  };
})(IndexPage);
