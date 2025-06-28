import React, { useContext, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Context } from '../context/Context';
import toast, { Toaster } from 'react-hot-toast';
import { inctanse } from '../hooks/inctanse';

const SigninForm: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { setToken } = useContext(Context);

    const onFinish = (value: any) => {
        setLoading(true);
        inctanse
            .post("/user/login", value)
            .then((res) => {
                const data = res.data;
                if (!data.accessToken) {
                    throw new Error(data.message || "An error occurred!");
                }
                toast.success("Login successful!");
                setTimeout(() => {
                    setToken(true);
                }, 1000)
            })
            .catch((error) => {
                toast.error(error.response?.data?.message || "User not found!");
            })
            .finally(() => {
                setLoading(false);
            });
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
