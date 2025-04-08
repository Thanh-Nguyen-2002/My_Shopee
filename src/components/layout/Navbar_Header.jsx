import React , { useState} from "react";
import styles from '../../assets/styles/Nav.module.css'
import { Link , useNavigate } from "react-router-dom";
import {
    InstagramOutlined,
    DingdingOutlined,
    DownOutlined,
    BellOutlined
} from '@ant-design/icons'

import { Popover, Dropdown,Space  } from "antd";
import { toast } from "react-toastify";


const NavbarHeader = () => {
    const [isLanguage, setIsLanguage] = useState("Tiếng Việt");
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const content_Notification = (
        <div className={styles.popover_Notification}>
            <span>Đăng nhập để xem thông báo</span>

            <div className={styles.popover_Notification_btn}>
                <div className={styles.popover_Notification_btn__register}>
                    <Link to="/register">Đăng Ký</Link>
                </div>
                <div className={styles.popover_Notification_btn__login}>
                    <Link to="/login">Đăng Nhập</Link>
                </div>
            </div>
        </div>
    );

    const data_Language = [
        {
            id: 1,
            name: 'Tiếng Việt',
        },
        {
            id: 2,
            name: 'English',
        }
    ]


    const items = [
        {
          label: "Đăng xuất",
          key: "logout",
        },
    ];

    const handleMenuClick = (e) => {
        if(e.key === "logout") {
            localStorage.clear();
            navigate("/login");
            toast.success("Đăng xuất thành công.");
        }
    }

    const content_Language = (
        <div className={styles.popover_Language}>
            {data_Language.map((item) => (
                <div key={item.id} className={styles.language_item} onClick={() => setIsLanguage(item.name)}>
                    <span >{item.name}</span>
                </div>
            ))}
        </div>
    )
    return(
        <div className={styles.container}>
            <div className={styles.nav_btn}>
                <Link className={styles.nav_btn_text} to="/login-seller">Kênh người bán</Link>
                <Link className={styles.nav_btn_text} to="/register-seller">Trở thành người bán hàng Shopee</Link>
                <div>
                    <span>Tải ứng dụng</span>
                </div>
                <div className={styles.icon}>
                    <span>Kết nối</span>
                    <InstagramOutlined />
                    <DingdingOutlined />
                </div>
            </div>
            <div className={styles.nav_spacer}></div>
            <div className={styles.nav_links}>
                <Popover content={content_Notification} className={styles.notification}>
                    <BellOutlined />
                    <span>Thông báo</span>
                </Popover>
                <div>
                    <span>Hỗ trợ</span>
                </div>
                <Popover content={content_Language} className={styles.language}>
                    <span>{isLanguage}</span>
                    <DownOutlined />
                </Popover>

                {  user ?
                    <Dropdown 
                    className={styles.dropdown}
                    menu={{
                        items,
                        onClick : handleMenuClick
                    }}>
                        <Space>
                            {user?.username}
                            <DownOutlined />
                        </Space>
                    </Dropdown>

                    :

                    <>
                        <Link className={styles.nav_link__text} to="/register">
                            <div>
                                <span>Đăng ký</span>
                            </div>
                        </Link>
                        <div className={styles.vertical}></div>
                        <Link className={styles.nav_link__text} to="/login">
                            <div>
                                <span>Đăng nhập</span>
                            </div>
                        </Link>
                    </>
                }
                
                
            </div>
        </div>
    )
}
export default NavbarHeader;