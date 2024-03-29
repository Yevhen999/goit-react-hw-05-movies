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

export const getMoviesByQuery = async query => {
  const response = await fetch(
    `${baseUrl}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  const data = response.json();

  return data;
};

export const getMovieById = async movieId => {
  const response = await fetch(
    `${baseUrl}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data;
};

export const getCastById = async movieId => {
  const repsonse = await fetch(
    `${baseUrl}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  const data = await repsonse.json();
  return data;
};

export const getReviewsById = async movieId => {
  const response = await fetch(
    `${baseUrl}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await response.json();
  return data;
};
