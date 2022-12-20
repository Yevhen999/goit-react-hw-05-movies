// import axios from 'axios';

const API_KEY = '9593e82df53f500ce20f9f064c8219d2';
const baseUrl = 'https://api.themoviedb.org/3/';
export const getTrending = async () => {
  const response = await fetch(
    `${baseUrl}trending/movie/day?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

export const getMovieById = async movieId => {
  const response = await fetch(
    `${baseUrl}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data;
};
