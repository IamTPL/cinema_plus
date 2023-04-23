import React from 'react';
import { Button, Form, Input, Select, message } from 'antd';
import { userServ } from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import './SignStyle.css';
import { useDispatch } from 'react-redux';
import { OFF_LOADING, ON_LOADING } from '../redux/constant/spinnerConstant';
const SignPage = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const onFinish = (values) => {
        dispatch({ type: ON_LOADING });
        userServ
            .postRegister(values)
            .then((res) => {
                dispatch({ type: OFF_LOADING });
                message.success(`Registration successful`);
                navigate('/login');
            })
            .catch((err) => {
                dispatch({ type: OFF_LOADING });
                message.error(`${err.response.data.content}`);
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log(errorInfo);
    };

    return (
        <div className="register_form w-screen h-screen flex items-center justify-center ">
            <div className="rounded-lg bg-zinc-800 w-5/12 md:w-5/6 sm:w-11/12 shadow-2xl shadow-orange-900 overflow-hidden">
                <div className="lable w-full h-[100px] md:h-20 sm:h-[60px] flex justify-center items-center">
                    <i className="fa-sharp fa-solid fa-unlock-keyhole text-5xl md:text-4xl sm:text-3xl"></i>
                </div>
                <div className="px-8 sm:px-4">
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
                            label="Phone number"
                            name="soDt"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="FullName"
                            name="hoTen"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your full name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Group"
                            name="maNhom"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please choose your group!',
                                },
                            ]}
                        >
                            <Select>
                                <Select.Option value="demo">GP01</Select.Option>
                                <Select.Option value="GP02">GP02</Select.Option>
                                <Select.Option value="GP03">GP03</Select.Option>
                                <Select.Option value="GP04">GP04</Select.Option>
                                <Select.Option value="GP05">GP05</Select.Option>
                                <Select.Option value="GP06">GP06</Select.Option>
                                <Select.Option value="GP07">GP07</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <div className="flex space-x-5 sm:-translate-x-4">
                                <Button
                                    htmlType="submit"
                                    className="btn-sign_up px-10 py-4 flex items-center text-base font-medium bg-orange-700 border-orange-700 text-white duration-300"
                                >
                                    Sign up
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default SignPage;
