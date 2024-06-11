// pages/voluntar.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import SignUpForm from '../components/SignUpForm';
import styles from '../styles/voluntar.module.css';

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/records`);
  const initialRecords = await res.json();

  const filters = {
    Județ: [...new Set(initialRecords.map(record => record.Județ))],
    Oras: [...new Set(initialRecords.map(record => record.Oras))],
    Tip: [...new Set(initialRecords.map(record => record.Tip))],
    Frecventa: [...new Set(initialRecords.map(record => record.Frecventa))],
    Nivel: [...new Set(initialRecords.map(record => record.Nivel))],
    Beneficiar: [...new Set(initialRecords.map(record => record.Beneficiar))],
    Disponibilitate: [...new Set(initialRecords.map(record => record.Disponibilitate))],
  };

  const ongOptions = [...new Set(initialRecords.map(record => record.ONG))];

  return {
    props: { initialRecords, filters, ongOptions },
  };
}

export default function Voluntar({ initialRecords, filters, ongOptions }) {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [selectedOng, setSelectedOng] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (router.query.ong) {
      setSelectedOng(router.query.ong);
    }
  }, [router.query.ong]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setSelectedFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (event.target.checked) {
        if (newFilters[name]) {
          newFilters[name].push(value);
        } else {
          newFilters[name] = [value];
        }
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
        if (newFilters[name].length === 0) {
          delete newFilters[name];
        }
      }
      return newFilters;
    });
  };

  const handleOngChange = (event) => {
    setSelectedOng(event.target.value);
  };

  const filteredRecords = initialRecords.filter((record) => {
    const matchesFilters = Object.keys(selectedFilters).every((filterKey) => {
      return selectedFilters[filterKey]?.includes(record[filterKey]);
    });

    const matchesOng = selectedOng ? record.ONG === selectedOng : true;

    return matchesFilters && matchesOng;
  });

  const handleSignUpClick = (record) => {
    setSelectedRecord(record);
    setShowForm(true);
  };

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.records}>
            {filteredRecords.length > 0 ? (
              filteredRecords.map(record => (
                <div key={record._id} className={styles.recordBox}>
                  <div className={styles.imageBox}>
                    <img src={record.ImageURL} alt="ONG" className={styles.image} />
                  </div>
                  <div className={styles.infoBox}>
                    <h2>{record.ONG}</h2>
                    <p><strong>Oras:</strong> {record.Oras}</p>
                    <p><strong>Județ:</strong> {record.Județ}</p>
                    <p><strong>Adresa:</strong> {record.Adresa}</p>
                    <p><strong>Site:</strong> <a href={record.Site} target="_blank" rel="noopener noreferrer">{record.Site}</a></p>
                    <p><strong>Nume:</strong> {record.Nume}</p>
                    <p><strong>Prenume:</strong> {record.Prenume}</p>
                    <p><strong>Email:</strong> {record.Email}</p>
                    <p><strong>Telefon:</strong> {record.Telefon}</p>
                  </div>
                  <div className={styles.buttonContainer}>
                    <button onClick={() => handleSignUpClick(record)} className={styles.signUpButton}>Mă înscriu!</button>
                  </div>
                </div>
              ))
            ) : (
              <p>Pentru moment, nu avem cauze de voluntariat pe baza criteriilor selectate de dumneavoastră</p>
            )}
          </div>
          <div className={styles.filter}>
            <Filter
              filters={filters}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
              onOngChange={handleOngChange}
              ongOptions={ongOptions}
            />
          </div>
        </div>
      </main>
      <Footer />
      <SignUpForm show={showForm} onClose={() => setShowForm(false)} record={selectedRecord} />
    </div>
  );
}
