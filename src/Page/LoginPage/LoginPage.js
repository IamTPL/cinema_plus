import React from 'react';
import { Button, Form, Input, message } from 'antd';
import { userServ } from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import { localUser } from '../../services/localStorage';
import { useDispatch } from 'react-redux';
import { USER_LOGIN } from '../redux/constant/userConstant';

export default function LoginPage() {
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const onFinish = (values) => {
        userServ
            .postLogin(values)
            .then((res) => {
                navigate('/');
                message.success('Đăng nhập thành công');
                //save localStorage
                localUser.set(res.data.content);
                //redux upload
                dispatch({
                    type: USER_LOGIN,
                    payload: res.data.content,
                });
            })
            .catch((err) => {
                console.log('🚀 ~ err:', err);
                message.error('Đăng nhập thất bại');
            });
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="rounded-lg bg-slate-600 w-5/12 p-10 pt-16 shadow-2xl shadow-slate-700">
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
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="text-lg font-medium bg-slate-800"
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
