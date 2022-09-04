import React from "react";
import styles from "../../styles/Home.module.css";

function LeftNavbar() {
    return <div className={styles.navcontainer}>
        <div> className={StyleSheet.logo}>
            <h2>Streamline</h2>
        </div>
        <div className={styles.wrapper}>
            <ul>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Explore</a></li>
                <li><a href="#">Library</a></li>
                <li><a href="#">Favorite</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </div>

    </div>;
}

export default LeftNavbar;