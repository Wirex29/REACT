import axios from 'axios';
import {apiConfig} from './apiConfig';

const axiosInstance = axios.create({
  baseURL: `${apiConfig.baseUrl}?apikey=${apiConfig.apiKey}&`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
