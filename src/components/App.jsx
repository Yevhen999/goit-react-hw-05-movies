import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

// import { getTrending } from '../services/api';
export const App = () => {
  // getTrending();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="movies">Home</Route>
          <Route path="movies">Movies</Route>
        </Route>
      </Routes>
    </div>
  );
};
