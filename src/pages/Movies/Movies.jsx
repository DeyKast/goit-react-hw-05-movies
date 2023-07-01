import SearchForm from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieList from 'components/MovieList/MovieList';
import { SearchFilm } from 'components/service/SearchFilm';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const film = searchParams.get('film') ?? '';
    if (!film) {
      return;
    }
    SearchFilm(film)
      .then(data => {
        setFilms(data);
      })
      .catch(error => {
        alert(error.message);
      });
  }, [searchParams]);

  const onSubmit = film => {
    setSearchParams({ film });
  };

  return (
    <div>
      <SearchForm onSubmit={onSubmit} />
      <MovieList films={films} />
    </div>
  );
};

export default Movies;
