import React from 'react';
import './LoginStyle.css';
import { Button, Form, Input, message } from 'antd';
import { userServ } from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import { localUser } from '../../services/localStorage';
import { useDispatch, useSelector } from 'react-redux';
import { USER_LOGIN } from '../redux/constant/userConstant';
import { OFF_LOADING, ON_LOADING } from '../redux/constant/spinnerConstant';

export default function LoginPage() {
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const onFinish = (values) => {
        dispatch({ type: ON_LOADING });
        userServ
            .postLogin(values)
            .then((res) => {
                const redirectUrl = sessionStorage.getItem('redirectUrl');
                if (redirectUrl) {
                    window.location.href = redirectUrl;
                    sessionStorage.removeItem('redirectUrl');
                } else {
                    navigate('/');
                }
                dispatch({ type: OFF_LOADING });
                message.success('Login Successful');
                //save localStorage
                localUser.set(res.data.content);
                //redux upload
                dispatch({
                    type: USER_LOGIN,
                    payload: res.data.content,
                });
            })
            .catch((err) => {
                dispatch({ type: OFF_LOADING });
                console.log('🚀 ~ err:', err);
                message.error('Login failed');
            });
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="login_form w-screen h-screen flex items-center justify-center">
            <div className="rounded-lg bg-zinc-800 w-5/12 md:w-5/6 sm:w-11/12 p-10 sm:px-4 sm:py-6 pt-16 shadow-2xl shadow-orange-900 overflow-hidden">
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="taiKhoan"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="matKhau"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <div className="flex space-x-5 sm:-translate-x-24">
                            <Button
                                htmlType="submit"
                                className="btn-login px-8 py-4 flex items-center text-base font-medium bg-orange-700 border-orange-700 text-white duration-300"
                            >
                                Login
                            </Button>
                            <Button
                                className="btn-sign_up px-8 py-4 flex items-center text-base font-medium bg-black border-orange-700 text-orange-700 duration-300"
                                onClick={() => {
                                    navigate('/sign_up');
                                }}
                            >
                                Sign up
                            </Button>
                        </div>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button
                            className="trial_use_btn flex items-center text-base font-medium text-zinc-400 border-none duration-300 sm:-translate-x-24"
                            onClick={() => {
                                onFinish({
                                    taiKhoan: 'abc123',
                                    matKhau: '123456',
                                });
                            }}
                        >
                            Trial user account
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
