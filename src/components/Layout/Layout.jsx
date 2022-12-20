// import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';

export const Layout = () => {
  return (
    <ul className={css.navList}>
      <li className={css.navListItem}>
        <a href="/" className={css.navListLink}>
          Home
        </a>
      </li>
      <li className={css.navListItem}>
        <a href="/" className={css.navListLink}>
          Movies
        </a>
      </li>
      <TrendingMoviesList />
    </ul>
  );
};
