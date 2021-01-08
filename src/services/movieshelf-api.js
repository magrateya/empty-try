const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a3f5e27baa2a1b83c70151e237938652';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchPopularMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`,
  );
}

export function fetchMovieDetails(movie_id) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movie_id}?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchCast(movie_id) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchReviewers(movie_id) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchMoviesByQuery(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
  );
}
