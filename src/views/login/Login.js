import './Login.css';
import { Button, Form, Input } from 'antd';
import { UserOutlined,LockOutlined } from "@ant-design/icons";
import React from 'react'
import { useNavigate } from "react-router";
//引入粒子效果
import Particles from "react-tsparticles";
import { particlesInit, particlesLoaded, options } from "./grain";
export default function Login() {
  const layout = {
 
  wrapperCol: {
    span: 16,
    offset:5,
  },

};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
export default function Login() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
    // axios提交信息
    navigate('/home')
  };
  const onReset = () => {
    form.resetFields();
  };

  return (

    <div style={{background:"rgb(35,39,65)",height:"100vh"}}>
      
      <div className='formContainer'>
       <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
       <div className='loginTitle'>xxx管理系统</div>
      <Form.Item
        name="note"
        // label="Note"
        rules={[
          {
            required: true,
            message: '请输入账号',
          },
        ]}
      >

        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="输入账号" />
      </Form.Item>
    
      <Form.Item
       
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
        ]}
      >
     <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="请输入密码"
        />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          登入
        </Button>
        <Button htmlType="button" onClick={onReset}>
          清空
        </Button>
        <Button type="primary" >
          注册
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  )
}
