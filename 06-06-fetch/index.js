import { GET } from "./GET.js";
import { API_KEY } from "./keys.js";
import { renderList } from "./renderCard.js";

const containerEl = document.querySelector(".container");
const searchBarEl = document.querySelector(".searchbar");
const buttonPage = document.querySelector(".button-page");
const categoryBtnContainer = document.querySelector(".category-container");

let actualEndpoint = '';
let actualType = 'movie';
let pageNumber = 1;

categoryBtnContainer.addEventListener("click", (e) => {
  // abbiamo definito sull'HTML degli ID di tipo:
  // 'popular' 'top_rated'
  const categoryId = e.target.id;

  if (e.target.tagName === "BUTTON") {
    // componiamo l'endpoint movie/popular o movie/top_rated
    actualEndpoint = `${actualType}/${categoryId}`;
    pageNumber = 1;

    render(actualEndpoint)
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
actualEndpoint = `${actualType}/popular`;

buttonPage.addEventListener("click", () => {
  // incrementiamo la pagina
  pageNumber++;

  // renderizziamo la nuova pagina con l'endpoint corrente
  render(actualEndpoint);
});

// console log della lista dei generi dei movie
// abbiamo a disposizione anche la lista dei generi delle tv series? proviamo:
console.log(await GET('genre/movie/list'))

