import { FaUser } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { FaRegSquarePlus } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import { IoAlbumsOutline } from "react-icons/io5";

const AppBar = ({setCurrentPage}) => {


  return (
    <>
      <div className="sm:w-[600px] bg-black fixed bottom-0 left-0 right-0 flex justify-between items-center mx-auto 
      p-3 text-white border-t border-gray-500/30">
        <GoHomeFill onClick={() => 
          setCurrentPage("home")
        } className="mx-4 text-2xl cursor-pointer" />
        <BiSearch onClick={() => 
          setCurrentPage("search")
        } className="mx-4 text-2xl cursor-pointer" />
        <FaRegSquarePlus className="mx-4 text-2xl cursor-pointer" />
        <IoAlbumsOutline onClick={() =>
          setCurrentPage("pictures")
        } className="mx-4 text-2xl cursor-pointer" />
        <FaUser onClick={() => 
          setCurrentPage("account")
        } className="mx-4 text-2xl cursor-pointer" />
      </div>
    </>
  );
};

export default AppBar;