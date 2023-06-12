import axios from 'axios';
import { searchParams } from './SearchParams';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const GetTrend = async () => {
  const path = '/trending/movie/day';

  const response = await axios.get(`${path}?${searchParams}`);

  return response.data.results;
};
