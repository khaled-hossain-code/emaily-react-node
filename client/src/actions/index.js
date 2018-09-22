import { FETCH_USER } from './type';
import axios from 'axios';

const fetch_user = () => {
  return function(dispatch) {
    axios.get('/api/current_user')
    .then(user => dispatch({type: FETCH_USER, payload: user}));
  }
}