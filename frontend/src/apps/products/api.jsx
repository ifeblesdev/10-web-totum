import axios from 'axios';


const productsApi = axios.create({
  // baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/products/',
  baseURL: 'http://127.0.0.1:8000/api/products/',
                                 
});


export const getProducts = () => productsApi.get("/");

export const createProduct = (product) => productsApi.post("/", product);

export const getProduct = (id) => productsApi.get(`/${id}/`)

export const deleteProduct = (id) => productsApi.delete(`/${id}/`);

export const updatedProduct = (id, product) => productsApi.put(`/${id}/`, product)