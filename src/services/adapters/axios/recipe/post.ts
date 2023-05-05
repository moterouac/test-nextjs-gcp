import axios from '../axiosConfiguration';

function postRecipeAxios(data: any) {
  return axios.post('/nlp-food/recipe', data, { 'Content-Type': 'application/json' });
}

export default postRecipeAxios;
