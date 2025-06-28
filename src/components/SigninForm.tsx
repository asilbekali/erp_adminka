import React, { useContext, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Toaster } from 'react-hot-toast';
import { Login } from '../service/Auth';
import { Context } from '../context/Context';
export interface ValuType { username: string, password: string }

const SigninForm: React.FC = () => {
    const { setToken } = useContext(Context)
    const [loading, setLoading] = useState<boolean>(false);


    const onFinish = (value: ValuType) => {
        setLoading(true);
        Login(value, setLoading, setToken)
    };

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
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
                        allowClear
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
        </>
    );
};

export default SigninForm;
