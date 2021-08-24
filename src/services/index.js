export const CALCADOS_URL = 'https://api.mercadolibre.com/sites/MLB/search?category=categoryId&q=tenis';

const getAPI = async () => {
  try {
    const response = await fetch(CALCADOS_URL);
    return response.json();
  } catch (error) {
    return console.log(error);
  }
};
export default getAPI;
