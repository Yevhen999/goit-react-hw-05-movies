import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import MovieCard from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';
import { Oval } from 'react-loader-spinner';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const movieRequest = async () => {
      try {
        setIsLoading(true);
        const result = await getMovieById(movieId);
        setMovie(result);
        setIsLoading(false);
      } catch {
        setError('Failed to fetch');
      }
    };
    movieRequest();
  }, [movieId]);

  return (
    <>
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
      {!isLoading && <MovieCard movie={movie} />}
      {!isLoading && <AdditionalInfo />}
      {error && <h2>{error}</h2>}
      <Outlet />
    </>
  );
};

export default MovieDetails;
