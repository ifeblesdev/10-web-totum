import axios from 'axios';


const environmentsApi = axios.create({
  // baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/groups/',
  baseURL: 'http://127.0.0.1:8000/api/environments/',
                                 
});


export const getEnvironments = () => environmentsApi.get("/");

export const createEnvironment = (environment) => environmentsApi.post("/", environment);

export const getEnvironment = (id) => environmentsApi.get(`/${id}/`)

export const deleteEnvironment = (id) => environmentsApi.delete(`/${id}/`);

export const updatedEnvironment = (id, environment) => environmentsApi.put(`/${id}/`, environment)