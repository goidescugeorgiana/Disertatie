import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/blog.module.css';

export default function Blog({ initialBlog }) {
  const [blog, setBlog] = useState(initialBlog);
  const router = useRouter();

  const handleImageClick = () => {
    router.push('/blog1');
  };

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Acesta este blogul nostru</h1>
        <section className={styles.blogArticle}>
          <img 
            src="https://th.bing.com/th/id/OIP.8sRju8U8_692zwEKwuzTRQAAAA?rs=1&pid=ImgDetMain" 
            alt="Article 1" 
            className={styles.articleImage}
            onClick={handleImageClick} 
            style={{ cursor: 'pointer' }} // Adăugați această linie pentru a arăta că imaginea este clicabilă
          />
          <div className={styles.articleContent}>
            <h2>Titlul articolului 1</h2>
            <p>{blog.text || 'Loading...'}</p>
          </div>
        </section>
        {/* Add more sections if needed */}
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/blog');
  const initialBlog = await res.json();

  return {
    props: { initialBlog },
  };
}
