import React from 'react'
import {useNavigate} from "react-router-dom";
import user_icon from '../../assets/img/user-icon.svg'
import settings_icon from '../../assets/img/settings_icon.svg'
import logout_icon from '../../assets/img/logout_icon.svg'
import styles from "./Header.module.scss";

function HeaderControls(props) {
    const navigate = useNavigate();
    return (
        <div className={styles['header-controls']}>
            <img className={styles['header-controls__item']} src={user_icon} alt="user" onClick={() => navigate('/')}/>
            <img className={styles['header-controls__item']} src={settings_icon} alt="settimgs"/>
            <img className={styles['header-controls__item']} src={logout_icon} alt="logout"/>
        </div>
    )
}

export default HeaderControls