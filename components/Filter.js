// components/Filter.js
import React from 'react';
import styles from '../styles/Filter.module.css';

const Filter = ({ filters = {}, selectedFilters, onFilterChange }) => {
  return (
    <div className={styles.filterContainer}>
      {Object.keys(filters).map((filterKey) => (
        <div key={filterKey} className={styles.filterSection}>
          <h3 className={styles.filterTitle}>{filterKey}</h3>
          <ul className={styles.filterList}>
            {filters[filterKey].map((filterValue) => (
              <li key={filterValue}>
                <input
                  type="checkbox"
                  id={`${filterKey}-${filterValue}`}
                  name={filterKey}
                  value={filterValue}
                  checked={selectedFilters[filterKey]?.includes(filterValue)}
                  onChange={onFilterChange}
                />
                <label htmlFor={`${filterKey}-${filterValue}`}>{filterValue}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Filter;
