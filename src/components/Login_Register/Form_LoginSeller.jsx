import React, { useState } from "react";
import styles from '../../assets/styles/Login/Form_Login.module.css'
import { Link, useNavigate } from "react-router-dom";
import { Input, Form , Button } from "antd";
import {
    EyeInvisibleOutlined,
    EyeOutlined
} from "@ant-design/icons"
import { toast } from "react-toastify";
import axios from "axios";

const FormLoginSeller = () => {
    const [visible, setVisible] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();
    const roles = "Seller";

    const handleSubmit = async (value) => {
        const { username, password} = value;
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", {
                username,
                password,
                role: roles
            });

            const result = response.data;
            const token = result.token;
            const user = result.user;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/");
            toast.success(result?.message || "Đăng nhập thành công.")
        } catch (err) {
            if (err.response?.data?.message) {
                toast.error(err.response.data.message);
            } else if (err.request) {
                toast.error("Không kết nối được với server.");
            } else {
                toast.error("Có lỗi xảy ra.Vui lòng thử lại sau.");
            }
        } finally {
            setLoading(false);
        }
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
                                    pattern : /^.{6,15}$/,
                                    message: "Mật khẩu phải từ 6 đến 15 ký tự"
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
                            loading={isLoading}
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