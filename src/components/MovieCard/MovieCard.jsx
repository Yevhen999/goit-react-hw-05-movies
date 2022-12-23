import { Link, useLocation } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const { title, genres, release_date, overview, vote_average, poster_path } =
    movie;
  const userScore = (vote_average / 10) * 100;
  const userAverageScore = userScore.toFixed(0);
  const imgUrl = `https://image.tmdb.org/t/p/w300/${poster_path}`;

  return (
    <main>
      <Link to={backLinkHref}>Go back</Link>
      <div style={{ display: 'flex', gap: '15px' }}>
        <img src={imgUrl} alt="film-card" />
        <div style={{ width: '550px' }}>
          <h1>{title}</h1>
          <h3>Release: {release_date}</h3>
          <p>User score: {userAverageScore}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genre</h2>
          <p>{genres && genres[0].name}</p>
        </div>
      </div>
    </main>
  );
};

export default MovieCard;
