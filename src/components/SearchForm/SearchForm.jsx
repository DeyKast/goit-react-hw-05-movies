import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import css from './searchFrom.module.css';

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!value) {
      Notify.failure('Enter film name');
      return;
    }
    onSubmit(value);
    setValue('');
  };

  return (
    <div>
      <form className={css.formWrapper} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          onChange={handleChange}
        />
        <button className={css.fromButton} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
