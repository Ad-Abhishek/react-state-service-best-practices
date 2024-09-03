import axios from 'axios';

const REACT_APP_FAKEUSERS_URL=process.env.REACT_APP_FAKEUSERS_URL

export class UserService {
  static getUsers = () => {
    return axios.get(REACT_APP_FAKEUSERS_URL);
  };
}

