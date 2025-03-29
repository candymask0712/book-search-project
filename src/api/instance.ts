import axios from 'axios';

const defaultInstance = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
});

defaultInstance.interceptors.request.use(config => config);

export default defaultInstance;
