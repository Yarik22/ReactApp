import React, { useState } from "react";
import { Modal, Form, Input, Button, Spin } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const AuthModal = ({ visible, onCancel }) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = (values) => {
    setLoading(true);
    setTimeout(() => {
      console.log("Login successful!", values);
      setLoading(false);
      onCancel(); 
    }, 2000);
  };

  return (
    <Modal
      title="Authorization"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form onFinish={handleLogin}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please enter your username!" }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Username"
            disabled={loading}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
            disabled={loading}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            {loading ? "Logging in..." : "Log In"}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AuthModal;
