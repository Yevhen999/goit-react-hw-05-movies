import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { TrendingMoviesList } from './TrendingMoviesList/TrendingMoviesList';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="movies" element={<TrendingMoviesList />}>
            Home
          </Route>
          <Route path="movies">Home</Route>
          <Route path="movies">Movies</Route>
        </Route>
      </Routes>
    </div>
  );
};
