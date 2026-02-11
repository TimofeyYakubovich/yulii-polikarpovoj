import React, { useState } from 'react';
import styles from './ManualSlider.module.css';

interface Slide {
  id: number;
  src: string;
  alt: string;
}

interface SwiperProps {
  slides: Slide[];
}

export const ManualSlider: React.FC<SwiperProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.swiperContainer}>
      <div className={styles.swiperWrapper}>
        <div
          className={styles.swiperTrack}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={styles.swiperSlide}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className={styles.swiperImage}
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className={`${styles.swiperButton} ${styles.swiperButtonPrev}`}
        onClick={goToPrev}
        aria-label="Предыдущий слайд"
      />
      
      <button
        className={`${styles.swiperButton} ${styles.swiperButtonNext}`}
        onClick={goToNext}
        aria-label="Следующий слайд"
      />

      <div className={styles.swiperPagination}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.swiperPaginationDot} ${
              index === currentIndex ? styles.swiperPaginationDotActive : ''
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>

      <div className={styles.swiperText}>
        <span>Мои дипломы и сертификаты</span>
      </div>
    </div>
  );
};