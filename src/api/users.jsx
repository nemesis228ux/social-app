import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
})


// Recuperer tous la users
export const getAllUsers = () => {
  return instance.get("/users")
}

// Recuperer un user specifique
export const getUserById = (id) => {
  return instance.get(`/users/${id}`)
}

// Creer un user
export const CreateUser = (data) => {
  return instance.post("/users", data)
}

// Mettre a jour un user
export const UpdateUser = (id, data) => {
  return instance.put(`/users/${id}`, data)
}

// delete user
export const DeleteUser = (id) => {
  return instance.delete(`/users/${id}`)
}