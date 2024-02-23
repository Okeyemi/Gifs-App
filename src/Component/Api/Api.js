import axios from "axios";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const BASE_URL = "https://api.giphy.com/v1";
// const itemsPerPage = 20;

export const searchGifs = async (query, page, itemsPerPage) => {
  try {
    const offset = (page - 1) * itemsPerPage;
    const response = await axios.get(`${BASE_URL}/gifs/search`, {
      params: {
        q: query,
        api_key: API_KEY,
        limit: itemsPerPage,
        offset: offset,
      },
    });
    console.log("beans", response.data);

    const { data, pagination } = response.data;
    return { gifs: data, pagination };
  } catch (error) {
    error("Error fetching GIFs:", error);
    throw error;
  }
};
