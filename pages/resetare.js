// pages/resetare.js
import Header from '../components/Header';
import styles from '../styles/Resetare.module.css';

export default function Resetare() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Resetare Parola</h1>
        <form className={styles.form}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <button type="submit">Trimite</button>
        </form>
      </main>
    </div>
  );
}
