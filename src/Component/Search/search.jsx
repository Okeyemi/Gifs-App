import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = () => {
//     onSearch(searchTerm);
//   };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(searchTerm);
    }
  };
  return (
    <div>
      <div className="logo bg-white rounded-lg  shadow-md  ">
        <input
          className="w-full p-4 bg-transparent focus:outline-none"
          type="search"
          placeholder="Search for GIFs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      
      </div>
    </div>
  );
};
