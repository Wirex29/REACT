import axiosInstance from './api';

export const category = {
  movie: 'movie',
  series: 'series',
  episode: 'episode',
};

const omdbapi = {
  getMoviesList: (type, key) => {
    const url = `&s=${key}&type=${category[type]}`;
    return axiosInstance.get(url);
  },
  getMovie: id => {
    const url = `&i=${id}`;
    return axiosInstance.get(url);
  },
  search: (cate, params) => {
    const url = 'search/' + category[cate];
    return axiosInstance.get(url, params);
  },
};

export default omdbapi;
