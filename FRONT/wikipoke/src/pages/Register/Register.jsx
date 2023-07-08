import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Button, Form, Input, notification } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Register() {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const ErrorRegisterNotif = () => {
    api.error({
      message: "User can't be created !",
      description: "Please try again !",
    });
  };

  const onFinish = (values) => {
    axios.post('http://localhost:8000/account/api/register/', {
      username: values.username,
      password: values.password
    }).then(res => {
      navigate('/');
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
              Sign up
              </Button>
            Or <a href="/">login now!</a>
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