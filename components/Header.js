import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Search from './Search';
import { FaUser } from 'react-icons/fa';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    if (router.pathname !== '/') {
      setScrolled(true);
    } else {
      setScrolled(false);
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [router.pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <Link href="/">
          <img src={scrolled ? "/images/logo.png" : "/images/logo2.png"} alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Search />
          </li>
          <li><Link href="/despre-noi">Despre noi</Link></li>
          <li><Link href="/voluntar">Voluntariat</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li>
            <FaUser
              className={`${styles.profileIcon} ${router.pathname !== '/' || scrolled ? styles.scrolled : ''}`}
              onClick={() => router.push('/login')}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
