// components/Layout.js
import Header from './Header';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
