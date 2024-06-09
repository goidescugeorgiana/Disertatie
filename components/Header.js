import Link from 'next/link';
import styles from '../styles/header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <a>
                        <img src="/logo.png" alt="Logo" />
                    </a>
                </Link>
            </div>
            <nav>
                <ul className={styles.navList}>
                    <li><Link href="/despre-noi"><a>Despre noi</a></Link></li>
                    <li><Link href="/voluntar"><a>Voluntariat</a></Link></li>
                    <li><Link href="/blog"><a>Blog</a></Link></li>
                    <li><Link href="/contact"><a>Contact</a></Link></li>
                </ul>
            </nav>
        </header>
    );
}
