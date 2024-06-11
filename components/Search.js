import { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import styles from '../styles/search.module.css';
import { useRouter } from 'next/router';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchBoxRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchBoxRef]);

  const handleSearchChange = async (event) => {
    const value = event.target.value;
    setQuery(value);
    if (value) {
      const response = await axios.get(`/api/search?query=${value}`);
      setResults(response.data);
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  };

  const handleResultClick = (ong) => {
    router.push(`/voluntar?ong=${encodeURIComponent(ong)}`);
    setShowResults(false);
  };

  return (
    <div className={styles.searchContainer} ref={searchBoxRef}>
      <FaSearch className={styles.searchIcon} />
      <input
        type="text"
        className={styles.searchInput}
        value={query}
        onChange={handleSearchChange}
        placeholder="Caută ONG..."
      />
      {showResults && (
        <div className={styles.resultsContainer}>
          {results.map((result) => (
            <div
              key={result._id}
              className={styles.resultItem}
              onClick={() => handleResultClick(result.ONG)}
            >
              <p>{result.ONG}</p>
              <p>{result.Județ}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
