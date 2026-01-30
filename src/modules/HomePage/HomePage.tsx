import React from 'react';
import styles from './HomePage.module.css';
import yuliyaPolikarpova from '../../resources/img/partner-psiholog-yuliya-polikarpova.jpg'

export const HomePage = () => {
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
            </div>
        </div>
    );
};