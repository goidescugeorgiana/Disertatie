// pages/login.js
import Link from 'next/link';
import Header from '../components/Header';
import styles from '../styles/Login.module.css';

export default function Login() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Conectare</h1>
        <form className={styles.form}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          
          <label htmlFor="password">Parola:</label>
          <input type="password" id="password" name="password" required />
          
          <button type="submit">Autentificare</button>
        </form>
        <div className={styles.links}>
          <Link href="/resetare">Ați uitat parola?</Link>
        </div>
        <div className={styles.register}>
          <p>Nu aveți încă cont?</p>
          <Link href="/inregistrare">Înregistrează-te</Link>
        </div>
      </main>
    </div>
  );
}
