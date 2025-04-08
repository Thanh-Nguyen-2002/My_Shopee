import React from "react";
import styles from '../../assets/styles/Login/Header_Login.module.css'
import { Link , useLocation } from "react-router-dom";
const HeaderLogin = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const pages = pathname.substring(pathname.lastIndexOf('/') + 1);

    const data_Pages = [
        {
            id:"1",
            pathName : "register",
            name : "Đăng ký"
        },
        {
            id:"2",
            pathName : "login",
            name : "Đăng nhập"
        },
        {
            id:"3",
            pathName : "register-seller",
            name : "Đăng ký"
        },
        {
            id:"4",
            pathName : "login-seller",
            name : "Kênh người bán"
        }
    ]

    const currentPages = data_Pages.find(page => page.pathName === pages);
    
    return(
        <div className={styles.container}>
            <div className={styles.nav_link}>
                <Link to={"/"} className={styles.link_toHome}>
                    <img src="https://www.shopee.vn/favicon.ico" alt="logo" />  
                    <h2>Shopee</h2>
                </Link>
                <h2>
                    {currentPages?.name || "ThanhThao"}
                </h2>
            </div>
            <div className={styles.link_toSupport}>
                <span>Bạn cần giúp đỡ?</span>
            </div>
        </div>
    )
}
export default HeaderLogin