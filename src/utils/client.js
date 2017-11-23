import axios from 'axios';
import { apiBaseURL } from './config';
// Set config defaults when creating the instance
const client = axios.create({
  baseURL: apiBaseURL,
});

client.setAuthorizationHeader = (authorization) => {
  client.defaults.headers.common.Authorization = authorization;
};

export default client;
