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

const BASE_URL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};


// ASYNC FUNCTION
// async function GET() {
//   const response = await fetch(
//     `${BASE_URL}${endpoint}?page=${page}&include_adult=false`,
//     options
//   );

//   const data = await response.json();

//   console.log("log di get", {
//     page: data.page,
//     endpoint,
//   });

//   return data;
// }

// ASYNC ARROW FUNCTION
export const GET = async (endpoint, page = 1) => {
  const response = await fetch(
    `${BASE_URL}${endpoint}?page=${page}&include_adult=false`,
    options
  );

  const data = await response.json();

  console.log("log di get", {
    page: data.page,
    endpoint,
  });

  return data;
};
