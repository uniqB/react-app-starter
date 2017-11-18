import axios from 'axios';

// Set config defaults when creating the instance
const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

client.setAuthorizationHeader = (authorization) => {
  client.defaults.headers.common.Authorization = authorization;
};

export default client;
