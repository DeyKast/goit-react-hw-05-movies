import { GetFilmInfo } from 'components/service/GetFilmInfo';
import { useEffect, useState, Suspense } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';

import css from './FilmDetails.module.css';

const DEFAULT_IMG = 'https://openclipart.org/image/800px/323563';

const FilmDetails = () => {
  const [film, setFilm] = useState(null);
  const { id } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';

  useEffect(() => {
    GetFilmInfo(id).then(data => setFilm(data));
  }, [id]);

  const imgSrc =
    film && film.poster_path
      ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
      : DEFAULT_IMG;

  return (
    film && (
      <div className={css.filmBlockContainer}>
        <Link className={css.seeMoreLink} to={backLinkHref}>
          go back
        </Link>
        <div className={css.filmBlock}>
          <div className={css.filmBlockItem}>
            <img src={imgSrc} alt={film.title} width="300" />
          </div>
          <div className={css.filmBlockItem}>
            <h2 className={css.filmTitle}>{film.title}</h2>
            <p className={css.filmDate}>{film.release_date}</p>
            <p>Rating {Math.round(film.vote_average)}/10</p>
            <p className={css.filmOverviewTitle}>Overview</p>
            <p className={css.filmOverviewTitleText}>{film.overview}</p>
            <p className={css.filmGenresTitle}>Genres :</p>
            {film.genres.map(({ name }, index) => (
              <p key={index} className={css.filmGenresTitleText}>
                {name}
              </p>
            ))}
          </div>
          <div className={css.filmBlockItem}>
            <div className={css.filmBlockItemLinks}>
              <Link className={css.seeMoreLink} to="cast">
                Cast
              </Link>
              <Link className={css.seeMoreLink} to="reviews">
                Reviews
              </Link>
            </div>

            <Suspense fallback={<div>Loading page...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    )
  );
};

export default FilmDetails;
