import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './trend.module.css';

export const TrendList = ({ trendData }) => {
  const location = useLocation();

  return (
    <>
      <ul className={css.trendList}>
        {trendData.map(({ id, title, poster_path }) => (
          <li key={id}>
            <Link
              className={css.trendListItemContent}
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
                width="300"
              />
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

TrendList.propTypes = {
  trendData: PropTypes.array.isRequired,
};
