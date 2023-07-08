import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Button, Form, Input, notification } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import { useAuthContext } from '../../contexts/useAuthContext';
import {useNavigate} from 'react-router-dom';


export function Login() {
  const [api, contextHolder] = notification.useNotification();
  const {updateToken} = useAuthContext();
  const navigate = useNavigate();
  
  const ErrorRegisterNotif = () => {
    api.error({
      message: "Something went wrong !",
      description: "Check your credentials and try again !",
    });
  };

  const onFinish = (values) => {
    axios.post('http://localhost:8000/account/api/login/', {
      username: values.username,
      password: values.password
    }).then(res => {
      updateToken(res.data.access);
      navigate('/home');
    }).catch(err => {
      ErrorRegisterNotif();
      console.error(err);
    })
  };
  return (
    <Container>
      {contextHolder}
      <Card>
        <h1>Wikipoke</h1>
        <Form
          name="login"
          onFinish={onFinish}
         >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="/register">register now!</a>
          </Form.Item>
        </Form>
      </Card>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items:center;

  background: linear-gradient(149deg, rgba(253, 0, 0, 0.20) 0%, rgba(250, 255, 14, 0.20) 100%), #FFF;
`
