import { useState, useEffect } from 'react';
import { getTrending } from 'services/api';
import { Link } from 'react-router-dom';
import { getMovieById } from 'services/api';

export const TrendingMoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

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
      {selectedMovie === null && (
        <ul>
          {movies.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} onClick={() => selectMovie(id)}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
