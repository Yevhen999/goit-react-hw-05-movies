import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      try {
        const { cast } = await getCastById(movieId);
        const castData = await cast.map(
          ({ name, profile_path, character }) => ({
            name,
            profile_path,
            character,
          })
        );
        setCast(castData);
      } catch {
        setError('Failed to fetch');
      }
    };

    getCast();
  }, [movieId]);

  return (
    <div>
      <div>
        <ul>
          {cast.map(({ name, profile_path, character }) => (
            <li key={name}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt="actor"
                width={300}
              />
              <h2>{name}</h2>
              <p>{character}</p>
            </li>
          ))}
        </ul>
        {error && <h2>{error}</h2>}
      </div>
    </div>
  );
};

export default Cast;
