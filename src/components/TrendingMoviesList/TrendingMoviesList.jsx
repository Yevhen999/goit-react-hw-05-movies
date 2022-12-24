import { useState, useEffect } from 'react';
import { getTrending } from 'services/api';
import { Link, useLocation } from 'react-router-dom';
import { getMovieById } from 'services/api';
import { Oval } from 'react-loader-spinner';

const TrendingMoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const popularMovies = async () => {
      try {
        setIsLoading(true);
        const resp = await getTrending();
        const { results } = await resp;
        setMovies(results);
        setIsLoading(false);
      } catch {
        setError('Failed to fetch');
        setMovies([]);
      }
    };
    popularMovies();
  }, []);

  const selectMovie = async id => {
    const resp = await getMovieById(id);
    setSelectedMovie(resp);
    return;
  };

  return (
    <div>
      <h2>Trending today</h2>
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
      {selectedMovie === null && (
        <ul>
          {movies.map(({ title, id }) => (
            <li key={id}>
              <Link
                to={`/movies/${id}`}
                state={{ from: location }}
                onClick={() => selectMovie(id)}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default TrendingMoviesList;
