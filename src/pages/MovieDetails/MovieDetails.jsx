import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
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

  return (
    <>
      <MovieCard movie={movie} />
      <AdditionalInfo />
      <Outlet />
    </>
  );
};
