import React from "react";
import styles from '../../assets/styles/Home.module.css'
import Header from '../../components/layout/Header'
import Slice from "../../components/layout/Slice";
import { Outlet } from "react-router-dom";

const Home = () => {
    return(
        <div className={styles.container}>
            <div className={styles.header_container}>
                <Header />
            </div>
            <div className={styles.main_container}>
                {/* <Slice /> */}
                <Outlet />
            </div>
        </div>
    )
}
export default Home;