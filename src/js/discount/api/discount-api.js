import axios from 'axios';
axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api/';

export function getProducts() {
  return axios.get('products/discount').then(response => response.data);
}
