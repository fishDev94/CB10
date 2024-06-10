import { API_KEY } from "./keys.js";
import { renderList } from "./renderCard.js";

// export const GET = (container) => {
//     fetch("https://api.themoviedb.org/3/movie/popular?page=1&include_adult=false", options)
//     .then((res) => res.json())
//     .then((data) => {
//       renderList(data.results, container);
//     }).catch(err => {
//         console.log(err);
//     })
// }

// ASYNC FUNCTION
// async function GET() {
// }

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

// categorie = "https://api.themoviedb.org/3/genre/movie/list"
//popularlist= "https://api.themoviedb.org/3/movie/popular"


const BASE_URL = "https://api.themoviedb.org/3/"

// ASYNC ARROW FUNCTION
export const GET = async (endpoint, page = 1) => {
  const response = await fetch(
    `${BASE_URL}${endpoint}?page=${page}&include_adult=false`,
    options
  );

  const data = await response.json();

  console.log(data)

  console.log("log di get", {
    page: data.page,
    endpoint,
  });

  return data;
};
