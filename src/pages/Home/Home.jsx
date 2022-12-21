import { Link, Outlet } from 'react-router-dom';
import css from './Home.module.css';
import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';

export const Home = () => {
  return (
    <nav>
      <ul className={css.navList}>
        <li className={css.navListItem}>
          <Link to="/" className={css.navListLink}>
            Home
          </Link>
        </li>
        <li className={css.navListItem}>
          <Link to="/movies" className={css.navListLink}>
            Movies
          </Link>
        </li>
      </ul>
      <Outlet>
        <TrendingMoviesList />
      </Outlet>
    </nav>
  );
};
