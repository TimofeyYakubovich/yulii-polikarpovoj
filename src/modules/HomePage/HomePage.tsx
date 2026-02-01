import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import yuliyaPolikarpova from '../../resources/img/partner-psiholog-yuliya-polikarpova.jpg'
import fotoPsihologa from '../../resources/img/foto-psihologa-yulii-polikarpovoj.jpg'
import displom from '../../resources/swiper/displom-psihologa-yulii-polikarpovoj.jpg'
import telega from '../../resources/messengers/telega.png'
import viber from '../../resources/messengers/viber.png'
import whatsapp from '../../resources/messengers/whatsapp.png'

export const HomePage = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    const checkScroll = () => {

        if (window.scrollY > 90) {
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }

    };

    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    };

    useEffect(() => {
        
        window.addEventListener('scroll', checkScroll);
        
        return () => {
            window.removeEventListener('scroll', checkScroll);
        };

    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperContainer}>
                <div className={styles.wrapperSection}>
                    <div className={styles.wrapperImage}>
                        <img src={yuliyaPolikarpova} alt="yuliyaPolikarpova" />
                    </div>
                    <div className={styles.wrapperDescr}>
                        <h1>Юлия Дубровская</h1>
                        <p>
                            Привет! Меня зовут Юлия Дубровская. Я обладательница двух высших образований. Последнее из них — психология.
                            <strong> Психология это осознанный выбор, который я сделала, пройдя непростой путь в собственной жизни.</strong> Это личный опыт, 
                            изменивший меня и изменивший людей, которые соприкоснулись со мной.
                            <br /> <br />
                            Сегодня я индивидуальный и семейный психолог, <strong>использую в работе интегративный подход из современных направлений психологии! </strong>  
                            Работаю с детьми, подростками, представителями ЛГБТ, взрослыми и парами. Успешно работаю с кризисными ситуациями любого рода!
                            <br /> <br />
                            Совместно с Леонидом мы работаем как ко-терапевты с супружескими парами и парами находящимися в отношениях!
                        </p>
                    </div>
                </div>
                <div className={styles.wrapperSection}>
                    <div className={styles.wrapperDescr}>
                        <h1>Мой опыт работы</h1>
                        <p>
                            С 2013 года являюсь <strong>преподавателем йоги, веду групповые и индивидуальные занятия. </strong> 
                            Тело и душа это части целостной системы, которые находятся в постоянном взаимодействии и взаимовлиянии. 
                            Наше тело и его состояние отражает то, что происходит в психике.
                        </p>
                        <p className={styles.wrapperDescrKeyPhrase}>
                            С 2014 года работала в 12 шаговых программах. Это колоссальный опыт и восхищение теми, кто проходит сложный 
                            собственный путь с помощью других людей.
                        </p>
                        <p>
                            В жизни мы исполняем много различных ролей дома, на работе, с друзьями. И везде мы хотим быть на высоте, ощущать  
                            себя комфортно, в безопасности, быть успешными. <strong>Однако повседневная борьба истощает наши пределы выносливости, 
                            физическая и умственная усталость приводят к ослаблению природного интереса к окружающему миру, 
                            а затем к равнодушию и разочарованию.</strong> 
                        </p>
                    </div>
                    <div className={styles.wrapperImage}>
                        <img src={displom} alt="displom" />
                    </div>
                </div>
                <div className={styles.wrapperSection}>
                    <div className={styles.wrapperImage}>
                        <img src={fotoPsihologa} alt="fotoPsihologa" />
                    </div>
                    <div className={styles.wrapperDescr}>
                        <p>
                            Внутренние конфликты расщепляют, разрушают и уводят от главной цели — быть счастливым.
                        </p>
                        <p className={styles.wrapperDescrKeyPhrase}>
                            Обрести себя, увидеть себя и мир другими глазами, жить своей жизнью, избавиться от навязанных 
                            сценариев и социального давления является необходимым условием для создания цельности личности. 
                        </p>
                        <p>
                            Я могу тебя сопровождать в этом процессе бережно и с любовью. <strong>Мы вместе сможем восстановить твою природную самость, 
                            найти внутренние опоры, избавиться от того что не дает двигаться вперед. </strong>Выход есть, и в этом понимании есть надежда 
                            найти силы, чтобы помочь себе.
                            <br /> <br />
                            Сделай шаг и это будет начало твоей новой жизни! С любовью и принятием, твоя Юлия.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.messengerStrip}>
                <div className={styles.stripContent}>
                    <a className={styles.messengerButton} href="https://t.me/+375336057939">
                        <img src={telega} alt="telega" />
                        <span className={styles.buttonText}>Написать в Telegram</span>
                    </a>
                    <a className={styles.messengerButton} href="viber://chat?number=%2B375336057939">
                        <img src={viber} alt="viber" />
                        <span className={styles.buttonText}>Написать в Viber</span>
                    </a>
                    <a className={styles.messengerButton} href="https://wa.me/375336057939">
                        <img src={whatsapp} alt="whatsapp" />
                        <span className={styles.buttonText}>Написать в WhatsApp</span>
                    </a>
                </div>
            </div>
            <button 
                className={`${styles.scrollToTopButton} ${showScrollButton ? styles.visible : ''}`}
                onClick={scrollToTop}
                aria-label="Прокрутить наверх"
            >
                <svg 
                    className={styles.checkIcon} 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                >
                    <path 
                        d="M8 14L12 10L16 14" 
                        strokeWidth="1" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
};