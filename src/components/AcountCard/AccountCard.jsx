import img from "../../assets/whyl9s.jpg"
import { FaPlus } from "react-icons/fa6"


const AccountCard = () => {
  
  return (
    <>
      <div>
        {/**profil and infos followers/wings */}
        <div className="flex items-center my-2">
          <div className="relative w-30 h-20 rounded-full my-6 px-4">
            <img className="object-cover rounded-full" src={img} alt="" />
            <div className="absolute rounded-full p-1 bg-white bottom-0 right-[15px]">
              <FaPlus size={11} className="text-black" />
            </div>
          </div>

          <div className="text-white/70 grid grid-cols-3 gap-8 ">
            <div className="flex flex-col">
              <p className="font-semibold">Barry Ali</p>
              <p className="text-sm">31</p>
              <p className="text-sm">posts</p>
            </div >
            <div className="flex flex-col">
              <p className="text-gray-900/10">_</p>
              <p className="text-sm">433</p>
              <p className="text-sm">followers</p>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-900/10">_</p>
              <p className="text-sm">245</p>
              <p className="text-sm">following</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default AccountCard