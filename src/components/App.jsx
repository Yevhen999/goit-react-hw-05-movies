import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import TrendingMoviesList from './TrendingMoviesList/TrendingMoviesList';
import NotFound from 'pages/NotFound/NotFound';
import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews';
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<TrendingMoviesList />}></Route>
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
