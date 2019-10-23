import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const style1 = { maxWidth: '300px', margin: '20px auto' };
const style2 = { display: 'flex', justifyContent: 'space-between' };
const style3 = { width: '100%' };

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props.form);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        const { password, username } = values;
        const loginInfo = { password, username };
        //const loginInfo = {password: values.password, username: values.username}
        //console.log(loginInfo);
        //axios.post('http://some-api-login', loginInfo)
        //.then(reponse)
        //.catch(error)
      } else {
        console.log(err);
        alert('error!');
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={style1}>
        <Form onSubmit={this.handleSubmit} className='login-form'>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [
                { required: true, message: 'Please input your username!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder='Username'
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'please input your password' }]
            })(
              <Input
                prefix={
                  <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type='password'
                placeholder='Password'
              />
            )}
          </Form.Item>
          <Form.Item>
            <div style={style2}>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <a className='login-form-forgot' href=''>
                Forgot password
              </a>
            </div>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
              style={style3}
            >
              Log in
            </Button>
            <br />
            Or <a href=''>register now!</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(
  NormalLoginForm
);

export default WrappedNormalLoginForm;
