import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Contactați-ne</h1>
        <div className={styles.contactInfo}>
          <h2>Informații de contact</h2>
          <p>Email: contact@eusuntvoluntar.ro</p>
          <p>Telefon: +40 123 456 789</p>
          <p>Adresă: Strada Exemplu, Nr. 10, București, România</p>
        </div>
        <div className={styles.contactForm}>
          <h2>Trimite-ne un mesaj</h2>
          <form>
            <label htmlFor="name">Nume:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Mesaj:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Trimite</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}