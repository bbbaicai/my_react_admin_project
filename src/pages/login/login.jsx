import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'

import './login.css'

//不能卸载import前面
const Item = Form.Item;

class Login extends Component {

    handleSubmit = (e) => {
        // 阻止 时间的默认行为
        e.preventDefault();
        // 对所有表单字段进行验证
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('提交登陆的Ajax 请求', values);
            }
        });
    }

    // 自定义的密码验证
    // 形参 rule value callback
    validatorPwd = (rule, value, callback) => {
        if (!value) {
            callback('Invalid Password')
        } else if (value.length < 4 || value.length > 12) {
            callback('Invalid Password')
        } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
            callback('Invalid Password')
        } else {
            callback()  // 验证通过
        }
    }

    render() {

        const form = this.props.form;
        const { getFieldDecorator } = form  //getFieldDecorator是一个高阶函数

        return (
            <div className="login">
                <header className='login-header'>
                    <h1>Reaat 项目后台管理系统</h1>
                </header>
                <section className='login-content'>
                    <h2>用户登陆</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            {
                                getFieldDecorator('username', {
                                    //配置对象: 属性名是一些特定的值的对象
                                    //声明式配置: 使用已经保包装好的 接口
                                    rules: [
                                        { required: true, whitespace: true, message: 'Invalid Username' },
                                        { min: 4, message: 'Invalid Username' },
                                        { max: 12, message: 'Invalid Username' },
                                        { pattern: /^[a-zA-Z0-9_]+$/, message: ' Invalid Username ' },
                                    ]
                                })(
                                    <Input prefix={
                                        <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username" />
                                )
                            }
                        </Item>
                        <Item>
                            {
                                getFieldDecorator('password', {
                                    // 自定义验证
                                    rules: [
                                        {
                                            validator: this.validatorPwd
                                        }
                                    ]
                                })(
                                    <Input prefix={
                                        <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password" />
                                )
                            }
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Login
                            </Button>
                        </Item>
                    </Form>
                </section>
            </div>
        )
    }
}

// 高阶函数: create 定时器 数组迭代器, promise 函数作为参数且返回函数
// 高阶组件: 本质是一个函数。接受一个组件, 返回一个组件并传递特定的属性数据
// 包装 Form 组件为: Form(Login) ==> 父组件Form(Login) 提交 form 属性到 Form子组件
const WrapLogin = Form.create()(Login)
export default WrapLogin;