import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/api';
import SearchBox from 'components/SearchBox/SearchBox';
import MovieList from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query' ?? '');

  useEffect(() => {
    if (query === '') {
      return;
    }
    const getMovies = async () => {
      const { results } = await getMoviesByQuery(query);
      setMovies(results);
      return;
    };
    getMovies();
  }, [query]);

  const updateQueryString = movieName => {
    setSearchParams(movieName !== '' ? { query: movieName } : {});
  };

  return (
    <main>
      <SearchBox onSubmit={updateQueryString} />
      {query !== null && <MovieList movies={movies} />}
    </main>
  );
};

export default Movies;
