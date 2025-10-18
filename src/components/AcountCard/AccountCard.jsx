import img from "../../assets/whyl9s.jpg"
import img2 from "../../assets/react.svg"
import { FaPlus } from "react-icons/fa6"
import { FaLinkSlash } from "react-icons/fa6"
import { FaRegBookmark } from "react-icons/fa6"
import { BiSolidGrid } from "react-icons/bi"
import { TbSwitchHorizontal } from "react-icons/tb"
import { LuContact } from "react-icons/lu"
import { GoVideo } from "react-icons/go"

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

          <div>
            <p className="text-white font-semibold">Barry Ali</p>
            <div className="text-white/70 grid grid-cols-3 gap-8 ">
              <div className="flex flex-col">
                <p className="text-sm">31</p>
                <p className="text-sm">posts</p>
              </div >
              <div className="flex flex-col">
                <p className="text-sm">433</p>
                <p className="text-sm">followers</p>
              </div>
              <div className="flex flex-col">
                <p className="text-sm">245</p>
                <p className="text-sm">following</p>
              </div>
            </div>
          </div>
        </div>

        {/**Abount section */}
        <div className="text-white/80 text-sm px-4">
          <span className="text-blue-600">#alisco</span>- Fulani na my origins😊🥳🥳 "Toujours garder espoir que 
          demain sera meileur et qu'on aura une toujours une deuxieme chance" <br />
          <span className="uppercase">
            we believe
          </span> <br />
          <span className=" flex items-center gap-2">
            <FaLinkSlash/>
            <a href="https://eshopbarry.netlify.app/">eshopbarry.netlify.app/ and 2 more</a>
          </span> <br />
          <span >
            @bar_ryali
          </span>
        </div>

        {/**Edit profil section */}
        <div className="text-white/80 flex m-2 items-center">
          <div className="bg-gray-600/40 py-0.5 text-sm px-11 mr-2 rounded-sm cursor-pointer">
            Edit profile
          </div>

          <div className="bg-gray-600/40 py-0.5 text-sm px-11 mr-2 rounded-sm cursor-pointer">
            Share profile
          </div>

          <div className="bg-gray-600/40 text-sm px-2 py-1.5 rounded-sm cursor-pointer">
            <FaRegBookmark size={12}/>
          </div>
        </div>

        {/**Headlights sections */}
        <div className="text-white flex items-center mx-2 my-4 gap-5">
          <div className="flex flex-col items-center text-white/50 text-sm">
            <div className="flex items-center justify-center w-[55px] h-[55px] rounded-full border border-white">
              <FaPlus/>
            </div>
            <p>New</p>
          </div>

          <div className="flex flex-col items-center text-white/50 text-sm">
            <div className="flex items-center justify-center w-[55px] h-[55px] rounded-full border border-gray-600">
              <img className="p-1" src={img2} alt="" />
            </div>
            <p>Tech</p>
          </div>

          <div className="flex flex-col items-center text-white/50 text-sm">
            <div className="flex items-center justify-center w-[55px] h-[55px] rounded-full border border-gray-600">
              <img className="p-1 rounded-full object-cover" src={img} alt="" />
            </div>
            <p>A la une</p>
          </div>

        </div>

        {/**All posts */}
        <div className="text-white/60">
          <div className="flex text-2xl justify-between items-center m-6">
            <BiSolidGrid className="cursor-pointer"/>
            <GoVideo className="cursor-pointer"/>
            <TbSwitchHorizontal className="cursor-pointer"/>
            <LuContact className="cursor-pointer"/>
          </div>

          <div className="grid grid-cols-3 gap-1 mb-16">
            <div className="border flex items-center p-13 justify-center border-white">
              1
            </div>
            <div className="border flex items-center p-13 justify-center border-white">
              2
            </div>
            <div className="border flex items-center p-13 justify-center border-white">
              3
            </div>
            <div className="border flex items-center p-13 justify-center border-white">
              4
            </div>
            <div className="border flex items-center p-13 justify-center border-white">
              5
            </div>
            <div className="border flex items-center p-13 justify-center border-white">
              6
            </div>
            <div className="border flex items-center p-13 justify-center border-white">
              7
            </div>
            <div className="border flex items-center p-13 justify-center border-white">
              8
            </div>
            <div className="border flex items-center p-13 justify-center border-white">
              9
            </div>
            <div className="border flex items-center p-13 justify-center border-white">
              10
            </div>
            <div className="border flex items-center p-13 justify-center border-white">
              11
            </div>
            <div className="border flex items-center p-13 justify-center border-white">
              12
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountCard