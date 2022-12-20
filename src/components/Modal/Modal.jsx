// import { getMovieById } from '../../services/api';

export const Modal = ({ selectedMovie }) => {
  const { title, release_date, overview, genres, vote_average, poster_path } =
    selectedMovie;
  const userScore = (vote_average / 10) * 100;
  const imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div style={{ display: 'flex', gap: '15px' }}>
      <img style={{ width: '300px' }} src={imgUrl} alt="" />
      <div>
        <h1>
          {title} ({release_date})
        </h1>
        <p>User score: {userScore}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genres[0].name}</p>
      </div>
    </div>
  );
};
