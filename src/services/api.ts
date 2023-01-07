import axios from 'axios';

export const getSearchItems = (query: string, page: number) => {
  // https://www.themoviedb.org/talk/563b78c492514150af002332 issue with sorting by popularity
  return axios.get(
    `${process.env.REACT_APP_MOVIE_DB_API}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=${page}&sort_by=popularity.desc`
  );
};

export const getSearchItem = (id: string) => {
  return axios.get(
    `${process.env.REACT_APP_MOVIE_DB_API}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
  );
};
