const API_KEY = '5835afd3'; // Replace with your actual API key
const BASE_URL = 'http://www.omdbapi.com/';

export const fetchMovies = async (query, page = 1, type = '') => {
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}&type=${type}`
    );
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch movies');
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`
    );
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch movie details');
  }
};
