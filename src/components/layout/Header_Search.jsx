import React from "react";
import styles from '../../assets/styles/Header_Search.module.css'
import { 
    ShoppingCartOutlined,
    SmileOutlined
} from '@ant-design/icons'
import { Popover } from "antd";
import { Link } from "react-router-dom";
import Search from "./Search";
import LinkBrand from "./Link_Brand";

const HeaderSearch = () => {

    const contentCart = (
        <div className={styles.popover_Cart}>
            <div className={styles.cart_item}>
                <SmileOutlined />
                <h2>Chưa có sản phẩm nào</h2>
            </div>
        </div>
    )
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="https://www.shopee.vn/favicon.ico" alt="logo" />  
                <h2>Shopee</h2>
            </div>
            <div className={styles.search_bar}>
                <div className={styles.search}>
                    <Search />
                </div>
                <div className={styles.link_sp}>
                    <LinkBrand />
                </div>
            </div>
            <div className={styles.cart}>
                <Popover content={contentCart} placement="bottomRight">
                    <Link className={styles.cart_link} to="/cart">
                        <ShoppingCartOutlined />
                    </Link>
                </Popover>
            </div>
        </div>
    )
}
export default HeaderSearch;