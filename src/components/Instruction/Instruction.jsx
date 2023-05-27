import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import layout from '../../Layout.module.scss'
import styles from './Instruction.module.scss'

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
