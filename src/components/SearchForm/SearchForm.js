import PropTypes from 'prop-types';
import { useState } from 'react';

import s from './SearchForm.module.css';

export default function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return;
    }
    onSubmit(query);

    setQuery('');
  };

  return (
    <>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          value={query}
          onChange={handleChange}
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
      </form>
    </>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};
