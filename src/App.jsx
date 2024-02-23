import { useState, useEffect } from "react";
import "./App.css";
import { NavBar } from "./Component/NavBar/NavBar";
import { searchGifs } from "./Component/Api/Api";

function App() {
  const [gifs, setGifs] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    handleSearch("love");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const handleSearch = async (query) => {
    try {
      const { gifs, pagination } = await searchGifs(
        query,
        currentPage,
        itemsPerPage
      );
      if (gifs.length === 0) {
        setError("No GIFs found for your search");
      } else {
        setGifs(gifs);
        setTotalPages(Math.ceil(pagination.total_count / itemsPerPage));
        setError(null);
      }
    } catch (error) {
      setError(
        "An error occurred while fetching GIFs. Please try again later."
      );
    }
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div>
      {/* Navbar */}
      <div className="md:mx-20 md:p-3">
        <NavBar onSearch={handleSearch} />
      </div>
      {/* Gifs card */}
      <div className="md:mx-40">
        {error && <div className="text-red-500">{error}</div>}
        {gifs?.length === 0 && !error && (
          <div>No GIFs found for your search </div>
        )}
        <div className="grid md:grid-cols-4  grid-cols-2  mt-4 ">
          {gifs.map((gif) => (
            <div key={gif.id} className="rounded-lg overflow-hidden p-1">
              <img
                src={gif.images.fixed_height.url}
                alt={gif.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-4">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Prev
          </button>
          <p className="md:mx-4 mx-1 text-white md:text-base text-sm text-center">
            Page {currentPage} of {totalPages}
          </p>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
