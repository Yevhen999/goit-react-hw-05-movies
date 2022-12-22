import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'services/api';

export const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    console.log(movieId);
    const getCast = async () => {
      const { cast } = await getCastById(movieId);
      const castData = await cast.map(({ name, profile_path, character }) => ({
        name,
        profile_path,
        character,
      }));
      setCast(castData);
      return;
    };

    getCast();
  }, [movieId]);

  // const { name, profile_path, character } = cast;
  // const baseUrl = 'https://image.tmdb.org/t/p/w500';
  // const url = `${baseUrl}/${profile_path}`;

  return (
    <div>
      Cast:
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
      </div>
    </div>
  );
};
