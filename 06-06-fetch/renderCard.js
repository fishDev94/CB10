
// Funzione che renderizza una singola card
export const renderCard = (movie, container) => {
    const productCard = document.createElement('div');
        const title = document.createElement('p');
        const productImage = document.createElement('img');
        productCard.classList.add('product-card');

        // title.textContent = movie.title ? movie.title : movie.name;
        // title.textContent = movie.title || movie.name;
        title.textContent = movie.title ?? movie.name;
        productImage.src = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
  
      productCard.append(productImage, title);
      container.append(productCard);
  }

  // funzione di renderList, pulisce il container e renderizza un array di cards
  export const renderList = (dataList, container) => {
    container.innerHTML = "";

    dataList.forEach((item) => {
      // 
        renderCard(item, container);
      });
  }