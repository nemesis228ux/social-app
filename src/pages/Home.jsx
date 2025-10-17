import { useEffect, useState } from "react";
import PostCard from "../components/PostCard/PostCard";
import { getPosts } from "../api/posts"

const Home = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const FetchPost = async () => {
      try{
        const res = await getPosts();
        setPosts(res.data);
      } catch (e) {
        console.log(`Error de récuperation des posts: ${e}`)
      }
    };

    FetchPost();
  }, [])

  return(
    <>
      <div >
        {
          posts.length == 0 ? (
            <p className=" text-center
            text-gray-400 text-sm mt-8">Chargement...</p>
          ) : (
            posts.map((post) => (
              <PostCard aPost={post} />
            ))
          )
        }
      </div>
    </>
  )
}

export default Home;