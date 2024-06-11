// pages/blog1.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/blog.module.css';

export default function Blog1() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Articolul 1</h1>
        <p>Detalii despre articolul 1...</p>
      </main>
      <Footer />
    </div>
  );
}
