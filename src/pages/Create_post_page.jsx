import { useState } from "react";
import { createPost } from "../api/posts";


const CreatePost = () => {

  const [title, setTitle] = useState("")
  const [contenu, setContenu] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    const data = {
      title,
      contenu,
      userId: 1
    }
    try {
      const res = await createPost(data) 
      alert(`Vous avez partagez un post`)
      console.log(res.data)
      setTitle("")
      setContenu("")
    } catch (e) {
      console.log(`Erreur lors de l'envoi: ${e}`)
      alert(`Vous avez partagez un post`)
    }

  }

  return (
    <>
      <div>
        <div className="flex justify-between text-white mx-4 mt-2">
          <p className="cursor-pointer">New post</p>
          <p className="text-blue-900 cursor-pointer">Next</p>
        </div>
        <div className="text-white my-32">
          <form onSubmit={(e) => {handleSubmit(e)}} className="flex flex-col mx-4 gap-6">
            <input className="p-3 rounded-2xl bg-gray-300/10 border border-white" type="text" placeholder="Post title"
            value={title} 
            onChange={(e) => {setTitle(e.target.value)}}/>
            <textarea className="rounded-2xl p-5 bg-gray-300/10 border border-white" name="contenu" id="#" rows={10} placeholder="Votre post"
            value={contenu} 
            onChange={(e) => {setContenu(e.target.value)}}></textarea>
            <button className="bg-blue-600/50 cursor-pointer hover:scale-95 duration-300  text-white p-2 rounded-xl" type="submit">
              Share
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePost