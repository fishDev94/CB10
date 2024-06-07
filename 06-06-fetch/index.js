import { API_KEY } from "./keys.js";
import { renderList } from "./renderCard.js";

const containerEl = document.querySelector(".container");
const searchBarEl = document.querySelector(".searchbar");

fetch("https://fakestoreapi.com/products")
  // then - attesa della chiamata fetch
  .then((res) => res.json())
  // then - attesa della risposta json
  .then((data) => {
    // renderizziamo la lista di prodotti
    renderList(data, containerEl);

    searchBarEl.addEventListener("input", (event) => {
      const inputValue = event.target.value.toLowerCase();
      filterProducts(inputValue, data);
    });
  })
  // Esempio di ErrorHandler
  // Catturiamo l'errore e gestiamo il comportamento dell'app
  .catch((err) => {
    console.error("SONO l'ERRORE", err);

    const title = document.createElement("h1");
    title.textContent = "Errore nel caricamento dei prodotti";

    containerEl.append(title);
  });

function filterProducts(title, data) {
  const filteredProducts = data.filter((product) => {
    return product.title.toLowerCase().includes(title);
  });

  containerEl.innerHTML = "";
  renderList(filteredProducts, containerEl);
}

// Object options richiesto dall'API Moviedb affinchè la nostra chiamata sia autorizzata.
const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

// Fetch a movieDB
fetch("https://api.themoviedb.org/3/movie/popular?page=2", options)
  .then((res) => res.json())
  .then((data) => console.log(data));
