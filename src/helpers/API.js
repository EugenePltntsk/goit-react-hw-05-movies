import axios from 'axios';

const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '094c8fd5de10f821a95f28767be2e726',
  },
});

export const getTrendingMovies = async () => {
  const { data } = await moviesApi.get('/trending/movie/week');

  return data.results;
};


export const findMovie = async (query) => {
    const { data } = await moviesApi.get("/search/movie", {params: {query}});
    return data.results;
}

