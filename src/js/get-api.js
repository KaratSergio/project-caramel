import axios from 'axios';

const BASE_URL = 'https://food-boutique.b.goit.study/api/';
axios.defaults.baseURL = BASE_URL;

export function getProducts() {
  return axios.get('products/discount').then(response => response.data);
}
export async function getProductsCategories() {
  const response = await axios.get(`${BASE_URL}products/categories`);

  return response.data;
}

export async function getProductsByParams({
  keyword,
  category,
  page,
  limit,
  sort,
} = {}) {
  const params = {
    keyword,
    category,
    page,
    limit,
  };

  if (sort && sort.key && sort.value) {
    params[sort.key] = sort.value;
  }

  const response = await axios.get(`${BASE_URL}products`, { params });

  return response.data;
}

export async function getProductById(id) {
  const response = await axios.get(`${BASE_URL}products/${id}`);

  return response.data;
}

export async function getPopularProducts(limit) {
  const response = await axios.get(`${BASE_URL}products/popular`, {
    params: { limit },
  });

  return response.data;
}

export async function getDiscountProducts() {
  const response = await axios.get(`${BASE_URL}products/discount`);

  return response.data;
}

export async function orderSubscriptionToNewProducts(email) {
  const response = await axios.post(`${BASE_URL}subscription/`, {
    email,
  });

  return response.data;
}

export async function createNewOrder(email, products) {
  return await axios
    .post(`${BASE_URL}orders`, {
      email,
      products,
    })
    .then(response => response.data);
}