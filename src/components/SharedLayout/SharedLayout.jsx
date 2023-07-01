import { Link, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav className={css.navigationList}>
          <Link className={css.navigationListItem} to="/">
            Home
          </Link>
          <Link to="/movies" className={css.navigationListItem}>
            Movies
          </Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
