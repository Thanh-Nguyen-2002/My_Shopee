import React, { useState } from "react";
import styles from '../../assets/styles/Login/Form_Login.module.css'
import { Link } from "react-router-dom";
import { Input, Form , Button } from "antd";
import {
    EyeInvisibleOutlined,
    EyeOutlined
} from "@ant-design/icons"

const FormLoginSeller = () => {
    const [visible, setVisible] = useState(false);

    const handleSubmit = (value) => {
        const { username, password} = value;
        console.log(username, password);
        console.log(1);
    }

    return(
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.title_form}>
                    <h2>Đăng nhập</h2>
                </div>
                <div className={styles.form_input}>
                    <Form
                        onFinish={handleSubmit}
                        name="form"
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {required:true, message : "Vui lòng điền vào mục này"},
                                {
                                    min : 10,
                                    message : "Tài khoản phải có từ 10 ký tự trở lên."
                                }
                            ]}
                        >
                            <Input 
                            placeholder="Email/Số điện thoại/Tên đăng nhập"
                            className={styles.input_phone}
                            
                            />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {required:true, message : "Vui lòng điền vào mục này"},
                                {
                                    pattern : /^.{8,15}$/,
                                    message: "Mật khẩu phải từ 8 đến 15 ký tự"
                                }
                            ]}
                            name="password"
                        >
                            <Input
                            className={styles.input_password} 
                            placeholder="Mật khẩu"
                            type={visible ? 'text' : 'password'}
                            suffix= {
                                visible ? (
                                    <EyeOutlined onClick= {() => setVisible(false)}/> 
                                ) : (
                                    <EyeInvisibleOutlined onClick= {() => setVisible(true)}/>
                                )
                            }
                        />
                        </Form.Item>
                        <Form.Item
                            name="btnLogin"
                        >
                            <Button
                            type="primary"
                            htmlType="submit"
                            className={styles.btnLogin}
                            >
                                <span>ĐĂNG NHẬP</span>
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className={styles.or}>
                        <div className={styles.or_left}></div>
                        <div>
                            <span>HOẶC</span>
                        </div>
                        <div className={styles.or_right}></div>
                    </div>

                    <div className={styles.btn_login_other}>
                        <button className={styles.btn_login_fabook}>
                            <span>Fabook</span>
                        </button>
                        <button className={styles.btn_login_google}>
                            <span>Google</span>
                        </button>
                    </div>
                </div>
                <div className={styles.footer_form}>
                    <span>Bạn mới biết đến Shopee?</span>
                    <Link to={"/register-seller"} className= {styles.link_register}>Đăng ký</Link>
                </div>
            </div>
        </div>
    )
}

export default FormLoginSeller