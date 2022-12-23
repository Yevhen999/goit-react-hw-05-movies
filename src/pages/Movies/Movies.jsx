import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/api';
import SearchBox from 'components/SearchBox/SearchBox';
import MovieList from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { Oval } from 'react-loader-spinner';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query' ?? '');

  useEffect(() => {
    if (query === '') {
      return;
    }
    const getMovies = async () => {
      setIsLoading(true);
      const { results } = await getMoviesByQuery(query);
      setMovies(results);
      setIsLoading(false);
      return;
    };
    getMovies();
  }, [query]);

  const updateQueryString = movieName => {
    setSearchParams(movieName !== '' ? { query: movieName } : {});
  };

  return (
    <main>
      {isLoading && (
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      )}
      {!isLoading && <SearchBox onSubmit={updateQueryString} />}
      {!isLoading && query !== null && <MovieList movies={movies} />}
    </main>
  );
};

export default Movies;
