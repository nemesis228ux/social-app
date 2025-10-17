import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa6";
import { FaBookmark, FaUser } from "react-icons/fa";
import { TbMessageCircle } from "react-icons/tb";
import { RiTelegram2Line } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa6";
import img from "../../assets/whyl9s.jpg"


const ImageCard = ({user, photo}) => {

  const [heartColor, setHeartColor] = useState(false);
  const [counter, setCounter] = useState(0);
  const [save, setSave] = useState(false)
  

  function handleHeartLike() {
    setHeartColor(!heartColor)
    if (!heartColor) {
      setCounter(counter + 1)
    } else {
      setCounter(counter - 1) 
    }
    
  }

  function handleSave() {
    setSave(!save)
  }

  

  // const url1 = "https://sl.bing.net/cSUl2IprHUW"

  return (
    <>
      <div className="text-white/80 mb-6 p-5 border-b border-gray-800/90" >
        <div className="flex items-center gap-4 mb-2 border-b border-gray-400/40">
          <div className="bg-gray-300 p-2 rounded-full mb-1 cursor-pointer">
            <FaUser size={21} className="text-gray-500"/>
          </div>
          <div>
            <h1 className="text-md italic text-gray-500">{user.username} a publié</h1>
            <p className="text-sm/tight italic text-gray-500">habite a {user?.address?.city}</p>
          </div>
        </div>
        {/**Data display section */}
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-2xl font-semibold line-clamp-2">{photo.title}</h1>
          <div>
            <img src={img} alt="" />
          </div>
        </div>

        {/**buttons sections */}
        <div className="flex gap-4 justify-between items-center">
          <div className="flex gap-4">
              {/**Like button and discounter section */}
            <div className="flex items-center gap-1 py-3" >
              <div onClick={() => {
                handleHeartLike(photo.id)
              }} className="cursor-pointer">
                {
                  heartColor === false ? (<AiOutlineHeart size={24} />) :
                  (<FaHeart size={24} className="text-red-700" />)
                }
              </div>
              <span>{counter}</span>
            </div>

            {/**comment button */}
            <div className="flex items-center gap-1 py-3" >
              <div className="cursor-pointer">
                <TbMessageCircle size={24} className="transform rotate-y-180" />
              </div>
              <span>125k</span>
            </div>

            {/**comment button */}
            <div className="flex items-center gap-1 py-3" >
              <div className="cursor-pointer">
                <RiTelegram2Line size={24} />
              </div>
              <span>125k</span>
            </div>
          </div>
          
          {/**save button section */}
          <div>
            <div onClick={handleSave} className="cursor-pointer">
              {
                save ? (<FaBookmark size={20}/>) : (<FaRegBookmark size={20} />)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCard;