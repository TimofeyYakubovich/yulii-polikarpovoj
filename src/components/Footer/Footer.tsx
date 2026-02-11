import React from 'react';
import styles from './Footer.module.css';
import logo from '../../resources/logo/logo_4.png';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    
                    {/* Контактная информация */}
                    <div className={styles.column}>
                        <img 
                            src={logo} 
                            alt="Логотип психологического центра Юлии Дубровской" 
                            className={styles.logo}
                        />
                        <div className={styles.contactInfo}>
                            <a href='tel:+375336057939' className={styles.phone}>
                                +375 (33) 605-79-39
                            </a>
                            <a href='mailto:dubrovskiy.by@yandex.ru' className={styles.email}>
                                dubrovskiy.by@yandex.ru
                            </a>
                            <p className={styles.workHours}>
                                Пн-Вс: с 8:00 до 23:00
                            </p>
                        </div>
                    </div>

                    {/* Услуги */}
                    <div className={styles.column}>
                        <h2 className={styles.columnTitle}>Услуги</h2>
                        <nav className={styles.nav} aria-label="Услуги">
                            <ul className={styles.navList}>
                                <li>
                                    <a href="/services/individual" className={styles.navLink}>
                                        Индивидуальная терапия
                                    </a>
                                </li>
                                <li>
                                    <a href="/services/group" className={styles.navLink}>
                                        Групповая терапия
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Информация */}
                    <div className={styles.column}>
                        <h2 className={styles.columnTitle}>Информация</h2>
                        <nav className={styles.nav} aria-label="Информация">
                            <ul className={styles.navList}>
                                <li>
                                    <a href="/news" className={styles.navLink}>
                                        Новости
                                    </a>
                                </li>
                                <li>
                                    <a href="/about" className={styles.navLink}>
                                        О центре
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Стоимость */}
                    <div className={styles.column}>
                        <h2 className={styles.columnTitle}>Стоимость</h2>
                        <nav className={styles.nav} aria-label="Цены и оплата">
                            <ul className={styles.navList}>
                                <li>
                                    <a href="/price" className={styles.navLink}>
                                        Цены и способы оплаты
                                    </a>
                                </li>
                                <li>
                                    <a href="/promotions" className={styles.navLink}>
                                        Акции и скидки
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};