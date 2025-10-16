import { BiSearch } from "react-icons/bi";

const SearchBar = ({searchValue, valeur}) => {
  return (
    <>
      <div className="my-5 px-6">
        <div className="text-white flex items-center gap-6 bg-zinc-900 px-3 rounded-sm 
        py-2">
          <BiSearch className="text-gray-500/45" size={22}/>
          <input value={valeur} onChange={searchValue} type="text" placeholder="Rechercher..."
          className="focus:outline-none w-full"/>
        </div>
      </div>
    </>
  )
}

export default SearchBar;