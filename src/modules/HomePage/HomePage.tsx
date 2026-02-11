import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import yuliyaPolikarpova from '../../resources/img/partner-psiholog-yuliya-polikarpova.jpg';
import fotoPsihologa from '../../resources/img/foto-psihologa-yulii-polikarpovoj.jpg';
import telega from '../../resources/messengers/telega.png';
import viber from '../../resources/messengers/viber.png';
import whatsapp from '../../resources/messengers/whatsapp.png';
import diploma1 from '../../resources/swiper/displom-psihologa-yulii-polikarpovoj.jpg';
import diploma2 from '../../resources/swiper/sertifikat-psihologa-yulii-polikarpovoj-1.jpg';
import diploma3 from '../../resources/swiper/sertifikat-psihologa-yulii-polikarpovoj-2.jpg';
import diploma4 from '../../resources/swiper/sertifikat-psihologa-yulii-polikarpovoj-3.jpg';
import diploma5 from '../../resources/swiper/sertifikat-psihologa-yulii-polikarpovoj-4.jpg';
import diploma6 from '../../resources/swiper/sertifikat-psihologa-yulii-polikarpovoj-5.jpg';
import diploma7 from '../../resources/swiper/udostoverenie-psihologa-yulii-polikarpovoj.jpg';
import { ManualSlider } from './ManualSlider/ManualSlider';

export const HomePage = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    const diplomaSlides = [
        { id: 1, src: diploma1, alt: 'Диплом о высшем психологическом образовании' },
        { id: 2, src: diploma2, alt: 'Сертификат по семейной психотерапии' },
        { id: 3, src: diploma3, alt: 'Сертификат по кризисной психологии' },
        { id: 4, src: diploma4, alt: 'Сертификат по работе с детьми и подростками' },
        { id: 5, src: diploma5, alt: 'Сертификат по интегративной психотерапии' },
        { id: 6, src: diploma6, alt: 'Сертификат по телесно-ориентированной терапии' },
        { id: 7, src: diploma7, alt: 'Удостоверение о повышении квалификации' },
    ];

    const checkScroll = () => {
        setShowScrollButton(window.scrollY > 90);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                
                {/* Секция "О психологе" */}
                <section className={styles.section} aria-labelledby="about-title">
                    <div className={styles.imageWrapper}>
                        <img 
                            src={yuliyaPolikarpova} 
                            alt="Психолог Юлия Дубровская" 
                            className={styles.image}
                            loading="lazy"
                        />
                    </div>
                    <div className={styles.contentWrapper}>
                        <h1 id="about-title" className={styles.title}>Юлия Дубровская</h1>
                        <div className={styles.text}>
                            <p>
                                Привет! Меня зовут Юлия Дубровская. Я обладательница двух высших образований. Последнее из них — психология.
                                <strong> Психология — это осознанный выбор, который я сделала, пройдя непростой путь в собственной жизни.</strong> Это личный опыт, 
                                изменивший меня и изменивший людей, которые соприкоснулись со мной.
                            </p>
                            <p>
                                Сегодня я индивидуальный и семейный психолог, <strong>использую в работе интегративный подход из современных направлений психологии!</strong>  
                                Работаю с детьми, подростками, представителями ЛГБТ, взрослыми и парами. Успешно работаю с кризисными ситуациями любого рода!
                            </p>
                            <p>
                                Совместно с Леонидом мы работаем как ко-терапевты с супружескими парами и парами, находящимися в отношениях!
                            </p>
                        </div>
                    </div>
                </section>

                {/* Секция "Опыт работы" */}
                <section className={styles.section} aria-labelledby="experience-title">
                    <div className={styles.contentWrapper}>
                        <h2 id="experience-title" className={styles.title}>Мой опыт работы</h2>
                        <div className={styles.text}>
                            <p>
                                С 2013 года являюсь <strong>преподавателем йоги, веду групповые и индивидуальные занятия.</strong> 
                                Тело и душа — это части целостной системы, которые находятся в постоянном взаимодействии и взаимовлиянии. 
                                Наше тело и его состояние отражает то, что происходит в психике.
                            </p>
                            <blockquote className={styles.blockquote}>
                                <p>
                                    С 2014 года работала в 12-шаговых программах. Это колоссальный опыт и восхищение теми, кто проходит сложный 
                                    собственный путь с помощью других людей.
                                </p>
                            </blockquote>
                            <p>
                                В жизни мы исполняем много различных ролей дома, на работе, с друзьями. И везде мы хотим быть на высоте, ощущать  
                                себя комфортно, в безопасности, быть успешными. <strong>Однако повседневная борьба истощает наши пределы выносливости, 
                                физическая и умственная усталость приводят к ослаблению природного интереса к окружающему миру, 
                                а затем к равнодушию и разочарованию.</strong>
                            </p>
                        </div>
                    </div>
                    <div className={styles.imageWrapper}>
                        <ManualSlider 
                            slides={diplomaSlides} 
                            aria-label="Слайдер с дипломами и сертификатами"
                        />
                    </div>
                </section>

                {/* Секция "Моя философия" */}
                <section className={styles.section} aria-labelledby="philosophy-title">
                    <div className={styles.imageWrapper}>
                        <img 
                            src={fotoPsihologa} 
                            alt="Юлия Дубровская на консультации" 
                            className={styles.image}
                            loading="lazy"
                        />
                    </div>
                    <div className={styles.contentWrapper}>
                        <h2 id="philosophy-title" className={styles.visuallyHidden}>Моя философия работы</h2>
                        <div className={styles.text}>
                            <p>
                                Внутренние конфликты расщепляют, разрушают и уводят от главной цели — быть счастливым.
                            </p>
                            <blockquote className={styles.blockquote}>
                                <p>
                                    Обрести себя, увидеть себя и мир другими глазами, жить своей жизнью, избавиться от навязанных 
                                    сценариев и социального давления является необходимым условием для создания цельности личности.
                                </p>
                            </blockquote>
                            <p>
                                Я могу тебя сопровождать в этом процессе бережно и с любовью. <strong>Мы вместе сможем восстановить твою природную самость, 
                                найти внутренние опоры, избавиться от того, что не дает двигаться вперед.</strong> Выход есть, и в этом понимании есть надежда 
                                найти силы, чтобы помочь себе.
                            </p>
                            <p className={styles.callToAction}>
                                Сделай шаг — и это будет начало твоей новой жизни! С любовью и принятием, твоя Юлия.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Нижняя панель с мессенджерами */}
            <aside className={styles.messengerPanel} aria-label="Быстрые контакты в мессенджерах">
                <div className={styles.panelContent}>
                    <a 
                        className={styles.messengerLink}
                        href="https://t.me/+375336057939"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={telega} alt="" aria-hidden="true" />
                        <span>Написать в Telegram</span>
                    </a>
                    <a 
                        className={styles.messengerLink}
                        href="viber://chat?number=%2B375336057939"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={viber} alt="" aria-hidden="true" />
                        <span>Написать в Viber</span>
                    </a>
                    <a 
                        className={styles.messengerLink}
                        href="https://wa.me/375336057939"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={whatsapp} alt="" aria-hidden="true" />
                        <span>Написать в WhatsApp</span>
                    </a>
                </div>
            </aside>

            {/* Кнопка "Наверх" */}
            <button 
                className={`${styles.scrollTopButton} ${showScrollButton ? styles.visible : ''}`}
                onClick={scrollToTop}
                aria-label="Прокрутить страницу вверх"
                type="button"
            >
                <svg 
                    className={styles.scrollTopIcon}
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path 
                        d="M8 14L12 10L16 14" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </main>
    );
};