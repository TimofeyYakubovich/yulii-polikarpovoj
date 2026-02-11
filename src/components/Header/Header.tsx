import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../../resources/logo/Image 2.png';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            
            // Закрываем меню при переходе на десктоп
            if (!mobile) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Блокируем скролл при открытом меню на мобильных
    useEffect(() => {
        if (isMobile && isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobile, isMenuOpen]);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Логотип */}
                <NavLink 
                    to='/' 
                    end 
                    className={styles.logoLink}
                    aria-label="На главную страницу"
                    onClick={closeMenu}
                >
                    <img 
                        src={logo} 
                        alt="Психологический центр Юлии Дубровской" 
                        className={styles.logo}
                    />
                </NavLink>

                {/* Навигация - десктоп версия */}
                <nav className={styles.desktopNav} aria-label="Основное меню">
                    <NavLink 
                        to='/' 
                        end 
                        className={({ isActive }) => 
                            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                        }
                    >
                        Главная
                    </NavLink>
                    <NavLink 
                        to='/services' 
                        className={({ isActive }) => 
                            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                        }
                    >
                        Услуги
                    </NavLink>
                    <NavLink 
                        to='/promotions' 
                        className={({ isActive }) => 
                            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                        }
                    >
                        Акции и скидки
                    </NavLink>
                    <NavLink 
                        to='/price' 
                        className={({ isActive }) => 
                            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                        }
                    >
                        Стоимость
                    </NavLink>
                    <NavLink 
                        to='/contacts' 
                        className={({ isActive }) => 
                            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                        }
                    >
                        Контакты
                    </NavLink>
                </nav>

                {/* Контактный телефон - десктоп версия */}
                <div className={styles.desktopPhone}>
                    <a 
                        href='tel:+375336057939' 
                        className={styles.phone}
                        aria-label="Позвонить нам"
                    >
                        +375 (33) 605-79-39
                    </a>
                </div>

                {/* Кнопка бургер-меню (только на мобильных) */}
                <button 
                    className={`${styles.burgerButton} ${isMenuOpen ? styles.burgerOpen : ''}`}
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
                    aria-expanded={isMenuOpen}
                >
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                </button>

                {/* Мобильное меню */}
                <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                    {/* Оверлей */}
                    {isMobile && isMenuOpen && (
                        <div 
                            className={styles.overlay} 
                            onClick={closeMenu}
                            aria-hidden="true"
                        />
                    )}
                    
                    {/* Контент мобильного меню */}
                    <div className={styles.mobileMenuContent}>
                        <nav className={styles.mobileNav} aria-label="Мобильное меню">
                            <NavLink 
                                to='/' 
                                end 
                                className={({ isActive }) => 
                                    isActive ? `${styles.mobileNavLink} ${styles.active}` : styles.mobileNavLink
                                }
                                onClick={closeMenu}
                            >
                                Главная
                            </NavLink>
                            <NavLink 
                                to='/services' 
                                className={({ isActive }) => 
                                    isActive ? `${styles.mobileNavLink} ${styles.active}` : styles.mobileNavLink
                                }
                                onClick={closeMenu}
                            >
                                Услуги
                            </NavLink>
                            <NavLink 
                                to='/promotions' 
                                className={({ isActive }) => 
                                    isActive ? `${styles.mobileNavLink} ${styles.active}` : styles.mobileNavLink
                                }
                                onClick={closeMenu}
                            >
                                Акции и скидки
                            </NavLink>
                            <NavLink 
                                to='/price' 
                                className={({ isActive }) => 
                                    isActive ? `${styles.mobileNavLink} ${styles.active}` : styles.mobileNavLink
                                }
                                onClick={closeMenu}
                            >
                                Стоимость
                            </NavLink>
                            <NavLink 
                                to='/contacts' 
                                className={({ isActive }) => 
                                    isActive ? `${styles.mobileNavLink} ${styles.active}` : styles.mobileNavLink
                                }
                                onClick={closeMenu}
                            >
                                Контакты
                            </NavLink>
                        </nav>
                        
                        {/* Телефон в мобильном меню */}
                        <div className={styles.mobilePhoneWrapper}>
                            <a 
                                href='tel:+375336057939' 
                                className={styles.mobilePhone}
                                onClick={closeMenu}
                            >
                                +375 (33) 605-79-39
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};