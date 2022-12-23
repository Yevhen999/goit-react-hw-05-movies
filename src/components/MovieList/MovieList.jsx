import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { getMovieById } from 'services/api';

export const MovieList = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const location = useLocation();

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
