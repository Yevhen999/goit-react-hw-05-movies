// import css from './TrendingMoviesList.module.css';
import { useState, useEffect } from 'react';
import { getTrending } from 'services/api';
import { Modal } from 'components/Modal/Modal';

export const TrendingMoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const popularMovies = async () => {
      const resp = await getTrending();
      const { results } = await resp;
      const clearResults = results.map(movie => movie.title);
      setMovies(results);
      console.log(clearResults);
      return;
    };
    popularMovies();
  }, []);

  // useEffect(() => {
  //   setSelectedMovie(selectedMovie);
  // }, [selectedMovie]);

  const selectMovie = id => {
    console.log(id);
    setSelectedMovie(id);
  };

  return (
    <div>
      <ul>
        {movies.map(({ title, id }) => (
          <li key={id} onClick={() => selectMovie(id)}>
            {title}
          </li>
        ))}
      </ul>
      {selectedMovie && <Modal selectedMovie={selectedMovie} />}
    </div>
  );
};
