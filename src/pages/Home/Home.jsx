import { NavLink, Outlet } from 'react-router-dom';
import css from './Home.module.css';
import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';
import { Suspense } from 'react';

const Home = () => {
  return (
    <>
      <header>
        <nav>
          <ul className={css.navList}>
            <li className={css.navListItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.activeNavListLink : css.navListLink
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className={css.navListItem}>
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  isActive ? css.activeNavListLink : css.navListLink
                }
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={null}>
        <Outlet>
          <TrendingMoviesList />
        </Outlet>
      </Suspense>
    </>
  );
};

export default Home;
