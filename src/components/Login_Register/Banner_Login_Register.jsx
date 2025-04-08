import React from "react";
import styles from '../../assets/styles/Login/Logo_Shop.module.css'
import banner from '/banner_seller.png'
const BannerLogin_Register = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <h1>Bán hàng chuyên nghiệp</h1>
                <h2>Quán lý shop của bạn một cahs hiệu quả hơn</h2>
                <h2>trên Shopee với Shopee - Kênh Người bán.</h2>
                <img src={banner} alt="Banner Login Seller" />
            </div>
        </div>
    );
};
export default BannerLogin_Register;