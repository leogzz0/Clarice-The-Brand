import axios from 'axios';
import process from 'process';

export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers:{
    Authorization: 'bearer ' + process.env.REACT_APP_API_TOKEN,
  }
});