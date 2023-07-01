import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from './trend.module.css';

const DEFAULT_IMG = 'https://openclipart.org/image/800px/323563';

const MovieList = ({ films }) => {
  console.log(films);

  const location = useLocation();

  return (
    <div>
      <ul className={css.trendList}>
        {films.map(({ id, title, poster_path }) => {
          const imgSrc = poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : DEFAULT_IMG;

          return (
            <li key={id}>
              <Link
                className={css.trendListItemContent}
                to={`/movies/${id}`}
                state={{ from: location }}
              >
                <img src={imgSrc} alt={title} width="300" />
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MovieList;
