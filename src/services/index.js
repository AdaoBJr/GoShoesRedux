export const CALCADOS_URL = 'https://api.mercadolibre.com/sites/MLB/search?category=categoryId&q=tenis';

const getAPI = async () => {
  const response = await fetch(CALCADOS_URL);
  return response.json();
};
export default getAPI;
