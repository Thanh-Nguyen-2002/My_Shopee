import React from "react";
import styles from '../../assets/styles/Login/Login_Register.module.css'
import HeaderLogin from "../../components/Login_Register/Header_Login";
import Footer from "../../components/Login_Register/Footer";
import FormLogin from "../../components/Login_Register/Form_Login";
import LogoShop from "../../components/Login_Register/Logo_Shop";

const Login = () => {
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
                        <LogoShop />
                    </div>
                    <div className={styles.right_form}>
                        <FormLogin />
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}
export default Login;