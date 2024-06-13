import Header from '../components/Header';
import Footer from '../components/Footer';
import Slideshow from '../components/Slideshow';
import styles from '../styles/index.module.css';
import { useRouter } from 'next/router';

export async function getServerSideProps() {
  const [resInscrisi, resRecords, resAjutate] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/inscrisi/count`),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/records/count`),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/ajutate/count`),
  ]);

  const [countInscrisi, countRecords, countAjutate] = await Promise.all([
    resInscrisi.json(),
    resRecords.json(),
    resAjutate.json(),
  ]);

  return {
    props: {
      countInscrisi,
      countRecords,
      countAjutate,
    },
  };
}

export default function Home({ countInscrisi, countRecords, countAjutate }) {
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
        <section className={styles.statsSection}>
          <div className={styles.statsContainer}>
            <div className={styles.statsItem}>
              <img src="/images/voluntari.png" alt="Voluntari" />
              <p>{countInscrisi}</p>
            </div>
            <div className={styles.statsItem}>
              <img src="/images/cauze.png" alt="Cauze" />
              <p>{countRecords}</p>
            </div>
            <div className={styles.statsItem}>
              <img src="/images/ajutate.png" alt="Ajutate" />
              <p>{countAjutate}</p>
            </div>
          </div>
        </section>
        <section className={styles.aboutSection}>
          <div className={styles.container}>
            <div className={styles.imageContainer}>
              <img src="/images/imageD.png" alt="Despre noi" className={styles.image} />
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
        <section className={styles.callToActionSection}>
          <div className={styles.callToActionContainer}>
            <div className={styles.leftSection}>
              <h2>Vrei să fii voluntar? Alege din varietatea cauzelor noastre de voluntariat! Filtrează în funcție de preferințele tale și înscrie-te!</h2>
              <button 
                id="volunteerButton" 
                className={styles.callToActionButton} 
                onClick={handleVolunteerClick}
              >
                Mă înscriu!
              </button>
            </div>
            <div className={styles.rightSection}>
              <h2>Ești un ONG și vrei să te înscrii în catalogul nostru pentru a oferi utilizatorilor posibilitatea să facă voluntariat? Înscrie-te pe pagina noastră și te vom contacta în cel mai scurt timp!</h2>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
