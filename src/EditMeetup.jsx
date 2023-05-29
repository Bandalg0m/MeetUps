import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MeetupForm from "./components/MeetupForm/MeetupForm";

import layout from './Styles/Layout.module.scss'
import style from './components/MeetupForm/MeetupForm.module.scss'

const EditMeetup = () => {
    return (
        <div className={layout.wrapper}>
            <div className={layout['form-container']}>
                <Header/>
                <div className={style.title}><h1>Редактирование митапа</h1></div>
                <MeetupForm/>
                <Footer/>
            </div>
        </div>
    )
}

export default EditMeetup
