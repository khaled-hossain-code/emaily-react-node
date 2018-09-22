import { FETCH_USER } from './type';
import axios from 'axios';

const fetch_user = () => {
  axios.get('/api/current_user');
}