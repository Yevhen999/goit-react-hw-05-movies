import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { getMovieById } from 'services/api';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  const selectMovie = async id => {
    try {
      const resp = await getMovieById(id);
      setSelectedMovie(resp);
    } catch {
      setError('Failed to fetch');
    }
  };
  return (
    <div>
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

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
