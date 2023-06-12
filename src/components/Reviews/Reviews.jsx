import { useEffect, useState } from 'react';
import { GetFilmReviews } from 'components/service/GetFilmReviews';
import { useParams } from 'react-router-dom';

import css from './Reviews.module.css';

const DEFAULT_IMG = 'https://openclipart.org/download/324734/koala.svg';

const Reviews = () => {
  const [filmReview, setFilmReview] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    GetFilmReviews(id)
      .then(data => {
        setFilmReview(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  return (
    <>
      {filmReview && (
        <ul className={css.reviewsList}>
          {filmReview.map(({ id, author, avatar_path, content }) => {
            const imgSrc = avatar_path
              ? `https://image.tmdb.org/t/p/w500/${avatar_path}`
              : DEFAULT_IMG;

            return (
              <li key={id} className={css.reviewsListItem}>
                <div className={css.reviewsListItemAuthorWrapper}>
                  <img src={imgSrc} alt={author} width="100px" />
                  <p className={css.reviewsListItemAuthorName}>{author}</p>
                </div>
                <p className={css.reviewsListItemText}>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
