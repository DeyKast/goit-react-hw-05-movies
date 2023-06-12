import { GetFilmCast } from 'components/service/GetFilmCast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import css from './Cast.module.css';

const DEFAULT_IMG = 'https://openclipart.org/download/324734/koala.svg';

const Cast = () => {
  const [filmCast, setFilmCast] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    GetFilmCast(id)
      .then(data => {
        setFilmCast(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  return (
    <>
      {filmCast && (
        <ul className={css.castList}>
          {filmCast.map(({ id, profile_path, name, character }) => {
            const imgSrc = profile_path
              ? `https://image.tmdb.org/t/p/w500/${profile_path}`
              : DEFAULT_IMG;
            return (
              <li key={id} className={css.castListItem}>
                <img src={imgSrc} alt={name} width="100px" />
                <div className={css.castListItemTextWrapper}>
                  <p className={css.castListItemTextName}>{name}</p>
                  <p className={css.castListItemTextHero}>{character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
