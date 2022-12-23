import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/api';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query' ?? '');
  // console.log(query);

  useEffect(() => {
    if (query === '') {
      return;
    }
    const getMovies = async () => {
      const { results } = await getMoviesByQuery(query);
      console.log(results);
      setMovies(results);

      return;
    };
    getMovies();
  }, [query]);

  // const movies = getMoviesByQuery();

  // const visibleMovies = movies.filter(movie =>
  //   movie.name.toLowerCase().includes(query.toLowerCase())
  // );

  const updateQueryString = movieName => {
    setSearchParams(movieName !== '' ? { query: movieName } : {});
  };

  return (
    <main>
      <SearchBox onChange={updateQueryString} />
      <MovieList movies={movies} />
    </main>
  );
};
