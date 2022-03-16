import axios from 'axios';

export const ROOT_URL = process.env.REACT_APP_ROOT_URL;
export const ROOT_URL_IP = process.env.REACT_APP_ROOT_URL_IP;
export const SECRET_KEY = process.env.REACT_APP_SECRET_API_KEY;

export const getData = async (url) => {
  const data = await axios.get(url, {}).catch((err) => console.log(err));
  return data;
};
