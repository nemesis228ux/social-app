import ImageCard from "../components/ImageCard/ImageCard"
import { useEffect, useState } from "react";
import { getUserById } from "../api/users";
import { getAlbumById } from "../api/albums";
import { getPhotoByAlbumId } from "../api/photos";


const PicturesPage = () => {

  const [user, setUser] = useState({})
  const [album, setAblbum] = useState({})
  const [photos, setPhotos] = useState([])


  useEffect(() => {
      const FetchAlbum = async () => {
        try{
          const res = await getAlbumById(1);
          setAblbum(res.data)
        } catch (err) {
          console.log(`Error lors de la recupération du user: ${err}`)
        }
      }
  
      FetchAlbum()
    }, [])
  
    useEffect(() => {
      const FetchPhotos = async () => {
        try{
          const res = await getPhotoByAlbumId(album.id);
          setPhotos(res.data)
        } catch (err) {
          console.log(`Error lors de la recupération du user: ${err}`)
        }
      }
  
      FetchPhotos()
    }, [album.id])
  
    useEffect(() => {
      const FetchData = async () => {
        try{
          const res = await getUserById(album.userId);
          setUser(res.data)
        } catch (err) {
          console.log(`Error lors de la recupération du user: ${err}`)
        }
      }
  
      FetchData()
    }, [album.userId])


  return(
    <div>
      {
        photos.length === 0 ? (<p>Chargement...</p>) :
        (
          photos.map((photo) => (<ImageCard user={user} photo={photo} key={photo.id} />))
        )
      }
    </div>
  )
}

export default PicturesPage