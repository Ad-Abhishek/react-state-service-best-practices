import axios from 'axios';

const REACT_APP_FAKEPOSTS_URL = process.env.REACT_APP_FAKEPOSTS_URL;

export class PostService {
  static getPosts = () => {
    return axios.get(REACT_APP_FAKEPOSTS_URL);
  };
}
