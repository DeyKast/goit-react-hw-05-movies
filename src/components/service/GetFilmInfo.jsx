import axios from 'axios';
import { Notify } from 'notiflix';
import { searchParams } from './SearchParams';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const GetFilmInfo = async id => {
  const path = `/movie/${id}`;
  const response = await axios.get(`${path}?${searchParams}`);

  if (response.data.total_results < 1) {
    Notify.failure(`Sorry we can't find information for your film`);
    return;
  }
  return response.data;
};
