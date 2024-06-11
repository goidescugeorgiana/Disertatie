import Link from 'next/link';
import Search from './Search';
import styles from '../styles/Header.module.css';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <Link href="/">
          <img src={isScrolled ? "/images/logo.png" : "/images/logo2.png"} alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Search iconColor={isScrolled ? "#135440" : "white"} />
          </li>
          <li><Link href="/despre-noi" className={isScrolled ? styles.navLinkScrolled : styles.navLink}>Despre noi</Link></li>
          <li><Link href="/voluntar" className={isScrolled ? styles.navLinkScrolled : styles.navLink}>Voluntariat</Link></li>
          <li><Link href="/blog" className={isScrolled ? styles.navLinkScrolled : styles.navLink}>Blog</Link></li>
          <li><Link href="/contact" className={isScrolled ? styles.navLinkScrolled : styles.navLink}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
