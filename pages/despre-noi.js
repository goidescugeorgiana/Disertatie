import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/despre-noi.module.css';

export default function DespreNoi() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.textContainer}>
            <h1>
                Despre Noi</h1>
            <p>
              Bine ați venit pe site-ul "Vreau să fiu Voluntar"! Suntem o comunitate dedicată
              sprijinirii dezvoltării sociale și comunitare prin voluntariat. Povestea noastră
              a început cu dorința de a aduce împreună oameni care doresc să facă o diferență
              în societate.
            </p>
            <p>
              Misiunea noastră este să conectăm voluntarii cu organizațiile care au nevoie de
              ajutorul lor. Credem cu tărie că fiecare persoană are potențialul de a contribui
              pozitiv la comunitatea sa și că voluntariatul este o modalitate excelentă de a 
              învăța noi abilități, de a cunoaște oameni noi și de a face lumea un loc mai bun.
            </p>
            <p>
              De-a lungul anilor, "Vreau să fiu Voluntar" a colaborat cu numeroase ONG-uri și
              instituții pentru a oferi oportunități variate de voluntariat în diverse domenii,
              de la educație și sănătate, la protecția mediului și ajutorarea persoanelor defavorizate.
            </p>
            <p>
              Alăturați-vă comunității noastre și contribuiți la construirea unui viitor mai bun.
              Fiecare mic gest de voluntariat contează și împreună putem face o schimbare semnificativă.




              
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img src="/images/imageD.png" alt="Despre noi" className={styles.image} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
