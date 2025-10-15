import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

//Recuperer tous les post 
export const getPosts = () => {
  return axios.get(`${API_URL}/posts`);
}

//Recuperer un post specifique
export const getPostById = (id) => {
  return axios.get(`${API_URL}/posts/${id}`);
}

//Creer un post 
export const createPost = (data) => {
  return axios.post(`${API_URL}/posts`, data);
}


//Update un post 
export const updatePost = (id, data) => {
  return axios.put(`${API_URL}/posts/${id}`, data);
}


export const deletePost = (id) => {
  return axios.delete(`${API_URL}/posts/${id}`);
}



