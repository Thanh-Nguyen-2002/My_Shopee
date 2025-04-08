import React from "react";
import HeaderLogin from "../../components/Login_Register/Header_Login";
import Footer from "../../components/Login_Register/Footer";
import styles from '../../assets/styles/Login/Login_Register.module.css'
import BannerLogin_Register from "../../components/Login_Register/Banner_Login_Register";
import FormRegisterSeller from "../../components/Login_Register/Form_RegisterSeller";

const RegisterSeller = () => {
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
                        <FormRegisterSeller />
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}
export default RegisterSeller;