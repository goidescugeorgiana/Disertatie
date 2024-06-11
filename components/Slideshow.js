import { useState, useEffect } from 'react';
import styles from '../styles/Slideshow.module.css';

const slides = [
  { text: "VREI SĂ FII VOLUNTAR? APLICĂ ACUM!", image: "/images/image1.jpg" },
  { text: "DESCOPERĂ MULTITUDINEA DE OPORTUNITĂȚI!", image: "/images/image2.png" },
  { text: "TU FACI DIFERENȚA!", image: "/images/image3.jpg" },
];

export default function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((slideIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.slideshowContainer}>
      <img src={slides[slideIndex].image} alt="Volunteering" className={styles.image} />
      <div className={styles.gradientOverlay}></div>
      <div className={styles.text}>{slides[slideIndex].text}</div>
      <a className={styles.prev} onClick={prevSlide}>&#10094;</a>
      <a className={styles.next} onClick={nextSlide}>&#10095;</a>
    </div>
  );
}
