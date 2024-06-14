import { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Login.module.css';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      const { username } = response.data;
      localStorage.setItem('username', username);
      router.push('/profil');
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.error);
      } else {
        setError('Combinația email/parola este incorectă, asigură-te că introduci datele corecte');
      }
    }
  };

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Conectare</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input 
            type="text" 
            id="email" 
            name="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          
          <label htmlFor="password">Parola:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          
          {error && <p className={styles.error}>{error}</p>}
          
          <button type="submit">Autentificare</button>
        </form>
        <div className={styles.links}>
          <a href="/resetare">Ați uitat parola?</a>
          <p>Nu aveți încă cont? <a href="/inregistrare">Înregistrează-te</a></p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
