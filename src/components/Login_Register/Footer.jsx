import React from "react";
import styles from '../../assets/styles/Login/Footer.module.css'

const Footer = () => {

    const data_CustomerService = [
        {
            id: 1,
            name: "Trung tâm Trợ giúp Shopee"
        },
        {
            id: 2,
            name: "Shopee Blog"
        },
        {
            id: 3,
            name: "Shopee Mall"
        },
        {
            id: 4,
            name: "Ví ShopeePay"
        }
    ];
    const data_ShopeeVN = [
        {
            id: 1,
            name: "Về Shopee"
        },
        {
            id: 2,
            name: "Tuyển dụng"
        },
        {
            id: 3,
            name: "Bảo Mật"
        },
        {
            id: 4,
            name: "Kênh người bán"
        }
    ];
    const data_Pay = [
        {
            id: 1,
            name: "VISA"
        },
        {
            id: 2,
            name: "S PAY"
        },
        {
            id: 3,
            name: "ZALO PAY"
        },
        {
            id: 4,
            name: "JCB"
        }
    ];
    const data_Follow = [
        {
            id: 1,
            icon : "<FacebookOutlined />",
            name: "Fabook"
        },
        {
            id: 2,
            icon : "<InstagramOutlined />",
            name: "Instagram"
        },
        {
            id: 3,
            icon : "<LinkedinOutlined />",
            name: "LinkedIn"
        }
    ];
    const data_DownLoad = [
        {
            id: 1,
            name: "AppStore"
        },
        {
            id: 2,
            name: "Google Play"
        },
        {
            id: 3,
            name: "App Gallery"
        }
    ]
    return(
        <div className={styles.container}>
            <div className={styles.service}>
                <h3>DỊCH VỤ KHÁCH HÀNG</h3>
                {
                    data_CustomerService.map((service) => (
                        <span key={service.id}>
                            {service.name}
                        </span>
                    ))
                }
            </div>
            <div className={styles.info}>
                <h3>SHOPEE VIET NAM</h3>
                {
                    data_ShopeeVN.map((item) => (
                        <span key={item.id}>
                            {item.name}
                        </span>
                    ))
                }
            </div>
            <div className={styles.pay}>
                <h3>THANH TOAN</h3>
                {
                    data_Pay.map((pay) => (
                        <span key={pay.id}>
                            {pay.name}
                        </span>
                    ))
                }
            </div>
            <div className={styles.follow}>
                <h3>THEO DÕI SHOPEE</h3>
                {
                    data_Follow.map((follow) => (
                        <div key={follow.id}>
                            <span >
                                {follow.name}
                            </span>
                        </div>
                        
                    ))
                }
            </div>
            <div className={styles.download}>
                <h3>TẢI ỨNG DỤNG SHOPEE</h3>
                {
                    data_DownLoad.map((down_load) => (
                        <span key={down_load.id}>
                            {down_load.name}
                        </span>
                    ))
                }
            </div>
        </div>
    )
}
export default Footer