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
      setIsLoading(true);
      const result = await getMovieById(movieId);

      // MAP //

      setMovie(result);
      setIsLoading(false);
      return;
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
      <Outlet />
    </>
  );
};

export default MovieDetails;
