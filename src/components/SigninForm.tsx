import React, { useContext, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Context } from '../context/Context';
import toast, { Toaster } from 'react-hot-toast';

const SigninForm: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { setToken } = useContext(Context);

    const onFinish = (value: any) => {
        setLoading(true);

        fetch("http://54.210.160.235/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(value)
        })
            .then(async (res) => {
                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.message || "An error occurred!");
                }
                return data;
            })
            .then(data => {
                toast.success("Login successful!");
                setTimeout(() => {
                    setLoading(false);
                    if (data.accessToken) {
                        setToken(true);
                    }
                }, 1000)
            })
            .catch(error => {
                setLoading(false);
                toast.error(error.message || "User not found!");
            });
    };

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Form
                name="login"
                initialValues={{ remember: true }}
                style={{ maxWidth: 360 }}
                onFinish={onFinish}>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}>
                    <Input
                        name='username'
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
                        name='password'
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
