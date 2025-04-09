import React, { useEffect, useState } from "react";
import styles from '../../assets/styles/Login/Form_Login.module.css'
import { Link , useNavigate } from "react-router-dom";
import { Input, Form , Button } from "antd";
import axios from "axios";
import { toast } from "react-toastify";

const FormRegisterSeller = () => {
    const [isShow, setIsShow] = useState(true);

    const [form] = Form.useForm();
    const [phoneValue, setPhoneValue] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const roles = "Seller";
    const navigate = useNavigate();

    const handleSubmit = async (value) => {
        const { password } = value;
        setIsLoading(true);
        try {
            const reponsive = await axios.post("http://localhost:5000/api/auth/register",
                {
                    username : phoneValue,
                    email : `${phoneValue}@gmail.com`,
                    password,
                    role : roles
                }
            )

            const result = reponsive.data;
            navigate("/login-seller");
            toast.success(result?.message || "Chúc mừng bạn đã đăng ký tài khoản thành công.");

        } catch (err) {
            if(err.response?.data?.message) {
                setIsShow(true);
                toast.error(err.response.data.message);
                
            } else if (err.request) {
                toast.error("Không kết nối được với server!");
            } else {
                toast.error("Có lỗi xảy ra.Vui lòng thử lại sau.")
            }
        } finally {
            setIsLoading(false);
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.title_form}>
                    <h2>Đăng ký</h2>
                </div>
                <div className={styles.form_input}>
                    <Form
                        form={form}
                        onFinish={handleSubmit}
                        name="form"
                    >
                        {isShow ? 
                        (
                            <Form.Item
                                name="phone"
                                rules={[
                                    { 
                                        required:true, 
                                        message : "Vui lòng điền và mục này"},
                                    {
                                        pattern: /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-9])[0-9]{7}$/,
                                        message: "Số điện thoại không hợp lệ"
                                    }
                                ]}
                            >
                                <Input 
                                placeholder="Số điện thoại"
                                className={styles.input_phone}
                                
                                />
                            </Form.Item>
                        ) : (
                            <Form.Item
                                name="password"
                                rules={[
                                    { 
                                        required:true, 
                                        message : "Vui lòng điền và mục này"
                                    } 
                                ]}
                            >
                                <Input 
                                placeholder="Mật khẩu"
                                className={styles.input_phone}
                                
                                />
                            </Form.Item>
                        )}
                        
                        {isShow ? 
                        (
                            <Form.Item
                                name="btnNext"
                            >
                                <Button
                                type="primary"
                                className={styles.btnLogin}
                                onClick={async () => {
                                    try {
                                        await form.validateFields(["phone"]);
                                        const values = form.getFieldValue();
                                        setPhoneValue(values.phone);
                                        setIsShow(false);
                                    } catch (err) {

                                    }
                                }}
                                disabled = {isDisabled}

                                >
                                    <span>Tiếp tục</span>
                                </Button>
                            </Form.Item>
                        ) : (
                            <Form.Item
                            name="btnLogin"
                            >
                                <Button
                                type="primary"
                                htmlType="submit"
                                className={styles.btnLogin}
                                loading={isLoading}
                                >
                                    <span>ĐĂNG KÝ</span>
                                </Button>
                            </Form.Item>
                        )}
                        
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
                <div className={styles.clause}>
                    <span>Bằng việc đăng kí, bạn đã đồng ý với Shopee về</span>
                    <div className={styles.clause_space}>
                        <span>Điều khoản dịch vụ</span>
                        <span style={{color: 'black'}}>&</span>
                        <span>Chính sách bảo mật</span>
                    </div>
                </div>
                <div className={styles.footer_form}>
                    <span>Bạn đã có tài khoản?</span>
                    <Link to={"/login-seller"} className= {styles.link_register}>Đăng nhập</Link>
                </div>
            </div>
        </div>
    )
}
export default FormRegisterSeller