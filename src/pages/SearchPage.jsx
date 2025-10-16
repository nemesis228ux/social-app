import { useState, useEffect } from "react"
import SearchBar from "../components/SearchBar/SearchBar"
import { getPosts } from "../api/posts";
import PostCard from "../components/PostCad/PostCard";


export default function SearchPage() {

  const [inputVal, setInputVal] = useState('');
  const [posts, setPosts] = useState([]);
  

  function handleInput(e) {
    setInputVal(e.target.value)
  }


  useEffect(() => {
    const FetchPost = async () => {
      try{
        const res = await getPosts();
        setPosts(res.data)
      } catch (e) {
        console.log(`Error de récuperation des posts: ${e}`)
      }
    };

    FetchPost();
  }, [])

  const filterdPosts = posts.filter((post) => {
    return (post.title.toLowerCase().includes(inputVal.toLowerCase()))

  })

  return(
    <>
      <div>
        <SearchBar searchValue={handleInput} valeur={inputVal}/>
        {
          inputVal.trim() === '' ? (<p className=" text-center
            text-gray-400 text-sm">Taper pour rechercher un post...</p>) :
          (
            filterdPosts.length === 0 ? (<p className=" text-center
            text-gray-400 text-sm">Aucune corespondance !</p>) :
            (
              filterdPosts.map((data) => (
                <PostCard key={data.id} aPost={data} />
              ))
            )
          )
        }
      </div>
    </>
  )
}