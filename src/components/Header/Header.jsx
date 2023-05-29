import React from 'react'
import {Link} from "react-router-dom";
import styles from './Header.module.scss'
import HeaderControls from "./HeaderControls";
import HeaderNav from "./HeaderNav";
import logo1 from '../../assets/img/it-philosfy.svg'
import logo2 from '../../assets/img/liga-logo.svg'

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to='/' className={styles.logo__text}>MeetUps</Link>
                <div className={styles.logo__block}>
                    <img className={styles['logo__img--phylosophy']} src={logo1} alt="It-phylosophy"/>
                    <img className={styles['logo__img--liga']} src={logo2} alt="Liga"/>
                </div>
            </div>
            <HeaderNav/>
            <HeaderControls/>
        </div>
    )
}
export default Header