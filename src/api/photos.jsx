import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
})


// Recuperer tous ls photos
export const getAllPhotos = () => {
  return instance.get("/photos")
}

// Recuperer une phote specifique
export const getPhotoByAlbumId = (id) => {
  return instance.get(`/photos?albumId=${id}`)
}
