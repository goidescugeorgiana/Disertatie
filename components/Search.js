// components/Search.js
import { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../styles/Search.module.css';

export default function Search({ iconColor }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
  const resultsRef = useRef(null);
  const router = useRouter();

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (query.length > 2) {
      try {
        const response = await axios.get(`/api/search?q=${query}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = (judet) => {
    router.push(`/voluntar?judet=${judet}`);
    setSearchResults([]);
  };

  const handleClickOutside = (event) => {
    if (
      resultsRef.current &&
      !resultsRef.current.contains(event.target) &&
      !searchRef.current.contains(event.target)
    ) {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div className={styles.searchContainer} ref={searchRef}>
      <FaSearch color={iconColor} className={styles.searchIcon} />
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
        className={styles.searchInput}
      />
      {searchResults.length > 0 && (
        <div className={styles.searchResults} ref={resultsRef}>
          {searchResults.map((result) => (
            <div
              key={result._id}
              className={styles.resultItem}
              onClick={() => handleResultClick(result.Județ)}
            >
              <h3>{result.ONG}</h3>
              <p>{result.Județ}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
