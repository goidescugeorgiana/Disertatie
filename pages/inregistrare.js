// pages/inregistrare.js
import Header from '../components/Header';
import styles from '../styles/Inregistrare.module.css';

export default function Inregistrare() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Înregistrare</h1>
        <form className={styles.form}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="password">Parola:</label>
          <input type="password" id="password" name="password" required />
          
          <button type="submit">Înregistrează-te</button>
        </form>
      </main>
    </div>
  );
}
