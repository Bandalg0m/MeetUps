import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import layout from './Styles/Layout.module.scss'
import styles from './components/Instruction/Instruction.module.scss'

const Instructions = () => {
    return (
        <div className={layout.wrapper}>
            <div className={layout.container}>
                <Header />
                <div className={styles.instructions}>
                    <h1 className={styles.instructions__text}>
                    Здесь надо объяснить, что это за приложуха и зачем оно нужно и как зарегаться.
                    </h1>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Instructions
