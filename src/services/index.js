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

export const fetchAPI2 = async () => {
  try {
    const response = await fetch(CALCADOS_URL);
    return response.json();
  } catch (error) {
    return console.log(error);
  }
};
