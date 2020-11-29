import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:5000/api/nca',
  headers: {
    'Content-type': 'application/json',
  },
});
