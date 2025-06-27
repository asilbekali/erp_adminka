import React, { useContext, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Context } from '../context/Context';
import toast, { Toaster } from 'react-hot-toast';

const SigninForm: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { setToken } = useContext(Context);

    const onFinish = (value: any) => {
        console.log(value);
        setLoading(true);

        fetch("http://54.210.160.235/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(value)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("Failed to login");
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                if (data) {
                    setToken(true);
                    toast.success("Login successful!");
                } else {
                    toast.error(data.message || "User not found!");
                }
            })
            .catch(error => {
                setLoading(false);
                toast.error(error.message || "An error occurred!");
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
