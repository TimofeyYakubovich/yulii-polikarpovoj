import React from 'react';
import styles from './Footer.module.css';
import logo from '../../resources/logo/logo_4.png'

export const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperContainer}>
                <div className={styles.wrapperInformation}>
                    <div className={styles.informationSection}>
                        <img src={logo} alt="logo" />
                        <a href='tel:+375173433360' className={styles.phone}>
                            +375 (33) 605-79-39
                        </a>
                        <a href='/' className={styles.phone}>
                            dubrovskiy.by@yandex.ru
                        </a>
                        <p>
                            Пн-Вс с 8.00 до 23.00
                        </p>
                    </div>
                    <div className={styles.informationSection}>
                        <h1>УСЛУГИ</h1>
                        <a href="/">
                             Индивидуальная терапия
                        </a>
                        <a href="/">
                             Групповая терапия
                        </a>
                    </div>
                    <div className={styles.informationSection}>
                        <h1>ИНФОРМАЦИЯ</h1>
                        <a href="/">
                             Новости
                        </a>
                    </div>
                    <div className={styles.informationSection}>
                        <h1>СТОИМОСТЬ</h1>
                        <a href="/">
                             Цены и способы оплаты
                        </a>
                        <a href="/">
                             Акции и скидки
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};