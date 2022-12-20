import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { TrendingMoviesList } from './TrendingMoviesList/TrendingMoviesList';
import { SearchBar } from './SearchBar/SearchBar';
import { NotFound } from './NotFound/NotFound';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<TrendingMoviesList />}></Route>
          <Route path="movies" element={<SearchBar />}>
            <Route path=":movieId">
              <Route path="cast"></Route>
              <Route path="reviews"></Route>
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
