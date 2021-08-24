import axios from 'axios';

export const CALCADOS_URL = 'https://api.mercadolibre.com/sites/MLB/search?category=categoryId&q=tenis';

const fetchAPI = () => {
  const axiosAPI = axios.create({
    baseURL: CALCADOS_URL,
    responseType: 'json',
  });
  return axiosAPI;
};

export default fetchAPI;
