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
