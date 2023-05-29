import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import auth from './components/Auth/Auth.module.scss'
import layout from './Styles/Layout.module.scss'
import {useDispatch} from "react-redux";
import {login} from './actions/user'

const Auth = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Поле не может быть пустым')
    const [passwordError, setPasswordError] = useState('Поле не может быть пустым')
    const [formValid, setFormValid] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный e-mail')
        } else {
            setEmailError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError('Пароль не должен быть короче 3 символов')
            if (!e.target.value) {
                setPasswordError('Пароль не должен быть пустым')
            }
        } else {
            setPasswordError('')
        }
    }

    return (
        <div className={layout.wrapper}>
            <div className={layout.container}>
                <Header/>
                <div className={auth.form}>
                        {(emailDirty && emailError) &&
                            <div className={auth['form__inputs']}>{emailError}</div>}
                        <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email'
                               type="text" className={auth['form__inputs--input']} placeholder="Login"/>
                        {(passwordDirty && passwordError) &&
                            <div className={auth['form__inputs']}>{passwordError}</div>}
                        <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)}
                               name='password' type="password" className={auth['form__inputs--input']}
                               placeholder="Password"/>

                        <div className={auth.form__desc}>
                            <Link to="/about" className={auth.desc__instruction}>How to create account?</Link>
                            <button disabled={!formValid} type="submit" className={auth.desc__btn}
                                    onClick={() => dispatch(login(email,password))}>Log In
                            </button>
                        </div>
                </div>
                <Footer/>
            </div>
        </div>

    )
}
export default Auth;