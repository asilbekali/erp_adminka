import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

const SigninForm: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <Form
            name="login"
            initialValues={{ remember: true }}
            style={{ maxWidth: 360 }}
            onFinish={onFinish}>
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}>
                <Input
                    allowClear
                    size="large"
                    prefix={<UserOutlined />}
                    placeholder="Username"
                    autoComplete="off"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}>
                <Input.Password
                    size="large"
                    prefix={<LockOutlined />}
                    placeholder="Password"
                    autoComplete="off"
                    visibilityToggle
                />
            </Form.Item>

            <Form.Item>
                <Button
                    loading={loading}
                    size="large"
                    block
                    type="primary"
                    htmlType="submit">
                    Log in
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SigninForm;
