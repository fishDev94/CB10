
// Funzione che renderizza una singola card
export const renderCard = (titleCard, image, container) => {
    const productCard = document.createElement('div');
        const title = document.createElement('p');
        const productImage = document.createElement('img');
        productCard.classList.add('product-card');
        title.textContent = title;
        productImage.src = image;
  
      productCard.append(productImage, titleCard);
      container.append(productCard);
  
      return titleCard
  }

  // funzione di renderList, pulisce il container e renderizza un array di cards
  export const renderList = (dataList, container) => {
    container.innerHTML = "";

    dataList.forEach((product) => {
        renderCard(product.title, product.image, container);
      });
  }