import axios from 'axios';


const groupsApi = axios.create({
  // baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/groups/',
  baseURL: 'http://127.0.0.1:8000/api/groups/',
                                 
});

console.log(groupsApi)


export const getGroups = () => groupsApi.get("/");

export const createGroup = (group) => groupsApi.post("/", group);

export const getGroup = (id) => groupsApi.get(`/${id}/`)

export const deleteGroup = (id) => groupsApi.delete(`/${id}/`);

export const updatedGroup = (id, group) => groupsApi.put(`/${id}/`, group)