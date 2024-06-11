import Header from '../components/Header';
import Footer from '../components/Footer';
import Slideshow from '../components/Slideshow';
import styles from '../styles/index.module.css';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleVolunteerClick = () => {
    router.push('/voluntar');
  };

  const handleDespreNoiClick = () => {
    router.push('/despre-noi');
  };

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <section className={styles.slideshowSection}>
          <Slideshow />
          <button 
            id="applyButton" 
            className={styles.applyButton} 
            onClick={handleVolunteerClick}
          >
            Vreau să fiu Voluntar!
          </button>
        </section>
        <section className={styles.aboutSection}>
          <div className={styles.container}>
            <div className={styles.imageContainer}>
              <img src="/images/imageD.webp" alt="Despre noi" className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              <h2>DESPRE NOI</h2>
              <p>Împreună sprijinim dezvoltarea comunității, Devino și tu VOLUNTAR</p>
              <button 
                id="despreButton"
                className={styles.despreButton} 
                onClick={handleDespreNoiClick}
              >
                Despre noi
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
