import React from "react";
import styles from '../../assets/styles/Login/Login_Register.module.css'
import HeaderLogin from "../../components/Login_Register/Header_Login";
import Footer from "../../components/Login_Register/Footer";
import BannerLogin_Register from "../../components/Login_Register/Banner_Login_Register";
import FormLoginSeller from "../../components/Login_Register/Form_LoginSeller";


const LoginSeller = () => {
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.content}> 
                    <HeaderLogin />
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.form}>
                    <div className={styles.left_form}>
                        <BannerLogin_Register />
                    </div>
                    <div className={styles.right_form}>
                        <FormLoginSeller />
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}
export default LoginSeller;