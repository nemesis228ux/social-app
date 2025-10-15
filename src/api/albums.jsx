import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
})


// Recuperer tous albums
export const getAllAlbums = () => {
  return instance.get("/albums")
}

// Recuperer un albums specifique
export const getAlbumById = (id) => {
  return instance.get(`/albums/${id}`)
}
