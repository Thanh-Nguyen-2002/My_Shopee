import React from "react";
import styles from '../../assets/styles/Header.module.css'
import { Link } from "react-router-dom";
import NavbarHeader from "./Navbar_Header";
import HeaderSearch from "./Header_Search";

const Header = () => {
    return(
        <div className={styles.container}>
            <div className={styles.nav_link}>
                <NavbarHeader />
            </div>
            <div className={styles.header_with_search}>
                <HeaderSearch />
            </div>
        </div>
    )
}
export default Header;