import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from '../TrendList/trend.module.css';

export const SearchEngineResult = ({ data }) => {
  const location = useLocation();
  const DEFAULT_IMG = 'https://openclipart.org/image/800px/323563';

  return (
    <>
      <ul className={css.trendList}>
        {data.map(({ id, title, poster_path }) => {
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
    </>
  );
};

SearchEngineResult.propTypes = {
  data: PropTypes.array.isRequired,
};
