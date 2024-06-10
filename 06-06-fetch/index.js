import { GET } from "./GET.js";
import { API_KEY } from "./keys.js";
import { renderList } from "./renderCard.js";

const containerEl = document.querySelector(".container");
const searchBarEl = document.querySelector(".searchbar");
const buttonPage = document.querySelector(".button-page");
const categoryBtnContainer = document.querySelector(".category-container");

let actualCategory = '';
let actualType = 'movie';
let pageNumber = 1;

categoryBtnContainer.addEventListener("click", (e) => {
  const categoryId = e.target.id;

  if (e.target.tagName === "BUTTON") {
    actualCategory = `${actualType}/${categoryId}`;
    pageNumber = 1;

    render(actualCategory)
  } else {
    console.log("fuori");
  }

})

// Object options richiesto dall'API Moviedb affinchè la nostra chiamata sia autorizzata.

// Fetch a movieDB
// const pippo = fetch("https://api.themoviedb.org/3/movie/popular?page=1&include_adult=false", {
//   headers: {
//     Authorization: `Bearer ${API_KEY}`,
//   },
// })
//   .then((res) => res.json())
//   .then((data) => {
//     return data;
//     // renderList(data.results, containerEl);
//   });



const render = async (endpoint) => {
  const movieResponse = await GET(endpoint, pageNumber)

  renderList(movieResponse.results, containerEl);

}

render(`${actualType}/popular`);
actualCategory = `${actualType}/popular`;

buttonPage.addEventListener("click", () => {
  pageNumber++;
  render(actualCategory);
});

console.log(await GET('genre/movie/list'))

