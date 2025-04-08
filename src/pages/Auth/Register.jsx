import React from "react";
import HeaderLogin from "../../components/Login_Register/Header_Login";
import Footer from "../../components/Login_Register/Footer";
import FormRegister from "../../components/Login_Register/Form_Register";
import LogoShop from "../../components/Login_Register/Logo_Shop";
import styles from '../../assets/styles/Login/Login_Register.module.css'

const Register = () => {
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
                        <FormRegister />
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}
export default Register;