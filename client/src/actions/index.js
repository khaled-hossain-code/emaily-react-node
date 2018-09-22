import { FETCH_USER } from './type';
import axios from 'axios';

export const fetchUser = () => {
  return function(dispatch) {
    axios.get('/api/current_user')
    .then( ({data}) => dispatch({type: FETCH_USER, payload: data}));
  }
}