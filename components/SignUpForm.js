// components/SignUpForm.js
import { useState } from 'react';
import styles from '../styles/SignUpForm.module.css';

export default function SignUpForm({ show, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/inscrisi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Registration successful');
        onClose();
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred. Please try again.');
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.formContainer}>
        <h2>Înscriere voluntariat</h2>
        <form onSubmit={handleSubmit} className={styles.signUpForm}>
          <label>
            Nume:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Prenume:
            <input type="text" name="surname" value={formData.surname} onChange={handleChange} required />
          </label>
          <label>
            Telefon:
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} required />
            Sunt de acord
          </label>
          <button type="submit" className={styles.submitButton}>Trimite</button>
        </form>
        <button onClick={onClose} className={`${styles.button} ${styles.closeButton}`}>Închide</button>
      </div>
    </div>
  );
}
