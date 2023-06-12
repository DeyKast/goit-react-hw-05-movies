import React, { useEffect, useState } from 'react';

import { SearchFilm } from 'components/service/SearchFilm';
import { SearchEngineResult } from 'components/SearchEngine/SearchEngine';

import css from './movies.module.css';

const Movies = () => {
  const [searchData, setSearchData] = useState('');

  let timer = null;

  useEffect(() => {
    if (!searchData) {
      return;
    }
    SearchFilm(searchData);
  });

  const handleInputChange = async event => {
    clearTimeout(timer);

    timer = setTimeout(async () => {
      if (!event.target.value.trim()) {
        return;
      }
      const searchData = await SearchFilm(event.target.value);
      if (!searchData) {
        console.log('error');
        return;
      }
      setSearchData(searchData.results);
    }, 500);
  };

  return (
    <main className={css.mainContainer}>
      <h1 className={css.mainTitle}>MOVIES</h1>
      <input
        type="text"
        onChange={handleInputChange}
        className={css.searchInput}
        placeholder="Search"
      />
      {searchData && <SearchEngineResult data={searchData} />}
    </main>
  );
};

export default Movies;
