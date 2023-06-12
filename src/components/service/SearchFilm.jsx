import axios from 'axios';
import { Notify } from 'notiflix';
import { searchParams } from './SearchParams';
import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const SearchFilm = async query => {
  const path = '/search/movie';

  const response = await axios.get(`${path}?${searchParams}&query=${query}`);

  if (response.data.total_results < 1) {
    Notify.failure(`Sorry we can't find your film`);
    return;
  }
  return response.data;
};

SearchFilm.propTypes = {
  query: PropTypes.string.isRequired,
};
