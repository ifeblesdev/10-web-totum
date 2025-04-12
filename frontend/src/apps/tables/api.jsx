import axios from 'axios';


const tablesApi = axios.create({
  // baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/tables/',
  baseURL: 'http://127.0.0.1:8000/api/tables/',
                                 
});


export const getTables = () => tablesApi.get("/");

export const createTable = (table) => tablesApi.post("/", table);

export const getTable = (id) => tablesApi.get(`/${id}/`)

export const deleteTable = (id) => tablesApi.delete(`/${id}/`);

export const updatedTable = (id, table) => tablesApi.put(`/${id}/`, table)