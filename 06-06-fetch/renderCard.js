
// Funzione che renderizza una singola card
export const renderCard = (movie, container) => {
    const productCard = document.createElement('div');
        const title = document.createElement('p');
        const productImage = document.createElement('img');
        productCard.classList.add('product-card');

        // condizionale per stampare il title in quantoù
        // l'oggetto per la serie è diverso rispetto al movie
        //
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
      //passiamo tutto l'oggetto movie a renderCard
        renderCard(item, container);
      });
  }