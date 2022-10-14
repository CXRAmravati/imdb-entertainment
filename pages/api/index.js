const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "?api_key=5dafbcec878e899abc01d7af254508e2";
async function executeHttpRequest(url, options = { method: "GET" }) {
  const { method, data } = options;
  const response = await fetch(`${BASE_URL}${url}${API_KEY}`, {
    method,
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw { statusText: response.statusText, code: response.status, ...json };
  }
  return json;
}

export const getTrendingMovies = () => {
  return executeHttpRequest(`/trending/all/day`);
};
export const getAllGerners = () => {
  return executeHttpRequest(`/genre/movie/list`);
};
export const getNowInTheatreMovies = () => {
  return executeHttpRequest(`/movie/now_playing`);
};
export const getUpComingMovies = () => {
  return executeHttpRequest(`/movie/upcoming`);
};
export const getPopularMovies = () => {
  return executeHttpRequest(`/movie/popular`);
};
export const getTopRatedMovies = () => {
  return executeHttpRequest(`/movie/top_rated`);
};
export const getTVPopular = () => {
  return executeHttpRequest(`/tv/popular`);
};
export const getTVTodayAiring = () => {
  return executeHttpRequest(`/tv/airing_today`);
};
export const getTVTopRated = () => {
  return executeHttpRequest(`/tv/top_rated`);
};
export const getMovieDetail = (id) => {
  return executeHttpRequest(`/movie/${id}`);
};
export const getMovieCastCrew = (id) => {
  return executeHttpRequest(`/movie/${id}/credits`);
};
export const getMovieVideos = (id) => {
  return executeHttpRequest(`/movie/${id}/videos`);
};
export const getMovieImages = (id) => {
  return executeHttpRequest(`/movie/${id}/images`);
};