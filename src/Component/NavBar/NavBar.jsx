
import { Search } from "../Search/search"

// eslint-disable-next-line react/prop-types
export const NavBar = ({ onSearch }) => {

  return (
    <div  >
      <div className="md:flex md:gap-72  items-center text-center ">
      <h1 className="logo text-white bg-[#1a1a1a] p-3 rounded-lg ">ROYAL GIFS  APP</h1>
        {/* search? */}
      <div className="mt-5 md:mt-0">
        <Search onSearch={onSearch} />
      </div>
      </div>
    </div>
  )
}
