import axios, { AxiosError } from 'axios';

const url = 'https://api.instantwebtools.net/v1/passenger';

axios.interceptors.response.use((config) => config, (error: AxiosError) => {
  error.validationMessage = error.response?.data.message;
  return Promise.reject(error);
})

axios.post(url, {
  name: 'dummy new passenger',
}).catch((error: AxiosError) => {
  console.log('Validation error message:', error.validationMessage);
})