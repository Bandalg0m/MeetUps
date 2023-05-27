import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import auth from './Auth.module.scss'
import layout from '../../Layout.module.scss'

const Auth = () => {
    return (

        <div className={layout.wrapper}>
            <div className={layout.container}>
                <Header/>
                <div className={auth.form}>
                    <div>
                        <input type="text" className={auth['form__inputs--input']} placeholder="Login"/>
                        <input type="password" className={auth['form__inputs--input']} placeholder="Password"/>
                    </div>

                    <div className={auth.form__desc}>
                        <Link to="/about" className={auth.desc__instruction}>How to create account?</Link>
                        <button type="submit" className={auth.desc__btn}>Log In</button>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>

    )
}

export default Auth;