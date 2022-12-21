import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { TrendingMoviesList } from './TrendingMoviesList/TrendingMoviesList';
import { Movies } from 'pages/Movies/Movies';
import { NotFound } from 'pages/NotFound/NotFound';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<TrendingMoviesList />}></Route>
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast"></Route>
            <Route path="reviews"></Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
