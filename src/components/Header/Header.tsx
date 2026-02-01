import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../../resources/logo/logo_4.png'

export const Header = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperContainer}>
                <div className={styles.wrapperLogo}>
                    <NavLink
                        to='/'
                        end
                    >
                        <img src={logo} alt='logo' />
                    </NavLink>
                </div>
                <div className={styles.wrapperSection}>
                    <NavLink
                        to='/'
                        end
                    >
                        Главная
                    </NavLink>
                    <NavLink
                        to='/'
                        end
                    >
                        Услуги
                    </NavLink>
                    <NavLink
                        to='/'
                        end
                    >
                        Акции и скидки
                    </NavLink>
                    <NavLink
                        to='/'
                        end
                    >
                        Стоимость
                    </NavLink>
                    <NavLink
                        to='/'
                        end
                    >
                        Контакты
                    </NavLink>
                </div>
                <div className={styles.wrapperPhone}>
                    <a href='tel:+375173433360' className={styles.phone}>
                        +375 (33) 605-79-39
                    </a>
                </div>
            </div>
        </div>
    );
};