import axios from 'axios';
// waiting on BE URL to fill baseURL: ("");
export const AxiosWithAuth = () => {

  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: ('url'),
    headers: {
      Authorization: token
    }
  });
};