// pages/profil.js
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Profil.module.css';
import axios from 'axios';

export default function Profil() {
  const [profile, setProfile] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = '12345'; // Înlocuiește cu userId-ul real

    const fetchProfile = async () => {
      try {
        const response = await axios.get(`/api/profil?userId=${userId}`);
        setProfile(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.response ? error.response.data.message : 'Error loading profile');
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = '12345'; // Înlocuiește cu userId-ul real
    try {
      const response = await axios.post('/api/profil', { userId, ...profile });
      alert('Profile updated successfully');
    } catch (error) {
      setError(error.response ? error.response.data.message : 'Error updating profile');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.profileTitle}>Profil</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>Nume:</label>
            <input type="text" id="name" name="name" value={profile.name} onChange={handleChange} required className={styles.formInput} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Email:</label>
            <input type="email" id="email" name="email" value={profile.email} onChange={handleChange} required className={styles.formInput} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.formLabel}>Telefon:</label>
            <input type="tel" id="phone" name="phone" value={profile.phone} onChange={handleChange} required className={styles.formInput} />
          </div>
          <button type="submit" className={styles.submitButton}>Actualizează</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
