import { useState, useEffect } from 'react';
import { getTrending } from 'services/api';
import { Link, useLocation } from 'react-router-dom';
import { getMovieById } from 'services/api';

const TrendingMoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const popularMovies = async () => {
      const resp = await getTrending();
      const { results } = await resp;
      setMovies(results);
      return;
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
    </div>
  );
};

export default TrendingMoviesList;
