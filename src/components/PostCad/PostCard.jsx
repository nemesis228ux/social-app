import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa6";
import { TbMessageCircle } from "react-icons/tb";
import { RiTelegram2Line } from "react-icons/ri";


const PostCard = ({data}) => {

  const [heartColor, setHeartColor] = useState(false);
  const [counter, setCounter] = useState(0);

  function handleHeartLike() {
    setHeartColor(!heartColor)
    if (!heartColor) {
      setCounter(counter + 1)
    } else {
      setCounter(counter - 1) 
    }
    
  }

  // useEffect(() => {
  //   const FetchData = await 
  // })

  return (
    <>
      <div className="text-white/80 mb-6 p-5 border-b border-gray-800/90" key={data.id}>
        <div>
          
        </div>
        {/**Data display section */}
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-2xl line-clamp-2">{data.title}</h1>
          <p>{data.body}</p>
        </div>

        {/**buttons sections */}
        <div className="flex gap-4">
          {/**Like button and discounter section */}
          <div className="flex items-center gap-1 py-3" >
            <div onClick={handleHeartLike} className="cursor-pointer">
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
      </div>
    </>
  );
};

export default PostCard;