import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const { TextArea } = Input;

const AppContact = () => {
    return (
        <div id="contact" className="block contactBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Get in Touch</h2>
                    <p>Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum</p>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your full name!' }]}
                    >
                        <Input placeholder="Full Name" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your E-mail!' }]}
                    >
                        <Input
                            type="email"
                            placeholder="Email Address"
                        />
                    </Form.Item>
                    <Form.Item
                        name="telephone"
                        // rules={[{ required: true, message: 'Please input your telephone!' }]}
                    >
                        <Input
                            type="number"
                            placeholder="Telephone"
                        />
                    </Form.Item>
                    <Form.Item
                        name="subject"
                        // rules={[{ required: true, message: 'Please input your subject!' }]}
                    >
                        <Input
                            type="subject"
                            placeholder="Subject"
                        />
                    </Form.Item>
                    <Form.Item
                        name="message"
                        // rules={[{ required: true, message: 'Please input your subject!' }]}
                    >
                        <TextArea rows={4} placeholder="message" />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default AppContact;