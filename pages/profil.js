import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profil() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      // Optionally handle the case where the username is not found in localStorage
    }
  }, []);

  return (
    <div>
      <Header />
      <main>
        <h1>Bine ai venit, {username}!</h1>
      </main>
      <Footer />
    </div>
  );
}
