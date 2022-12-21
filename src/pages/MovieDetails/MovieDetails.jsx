import { useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';

export const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const movie = async () => {
    const result = await getMovieById(movieId);
    console.log(result);
    return;
  };

  const { title, release_date, overview, vote_average, poster_path } = movie;
  const userScore = (vote_average / 10) * 100;
  const imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div style={{ display: 'flex', gap: '15px' }}>
      <img style={{ width: '300px' }} src={imgUrl} alt="" />
      <div style={{ width: '500px' }}>
        <h1>
          {title} ({release_date})
        </h1>
        <p>User score: {userScore}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>???</p>
      </div>
    </div>
  );
};
