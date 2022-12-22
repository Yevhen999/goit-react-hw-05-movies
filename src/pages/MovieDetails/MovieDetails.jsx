import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const movieRequest = async () => {
      const result = await getMovieById(movieId);

      // MAP //

      setMovie(result);
      return;
    };
    movieRequest();
  }, [movieId]);

  const { title, genres, release_date, overview, vote_average, poster_path } =
    movie;
  const userScore = (vote_average / 10) * 100;
  const imgUrl = `https://www.themoviedb.org/t/p/w300${poster_path}`;

  return (
    <>
      <div style={{ display: 'flex', gap: '15px' }}>
        <img src={imgUrl} alt="film-card" />
        <div style={{ width: '500px' }}>
          <h1>
            {title} ({release_date})
          </h1>
          <p>User score: {userScore}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genre</h2>
          <p>{genres && genres[0].name}</p>
          <ul>
            <li>
              <Link to="/movies/cast">Cast</Link>
            </li>
            <li>
              <Link to="/movies/reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
