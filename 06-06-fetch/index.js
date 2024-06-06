const containerEl = document.querySelector(".container");
// import data from './data.json' with { type: "json" };

// console.log(data);

fetch("https://fakestoreapi.com/products")
// then - attesa della chiamata fetch
.then((res) => res.json())
// then - attesa della risposta json
.then((data) => {
    // fase di creazione della card
      const productCard = document.createElement('div');
      const title = document.createElement('p');
      const productImage = document.createElement('img');
      productCard.classList.add('product-card');
      title.textContent = data[0].title;
      productImage.src = data[0].image

      productCard.append(productImage, title);
      containerEl.append(productCard);
    console.log("DATA", data);
  });

  // console log di una Promise - sincrono
console.log("PROMISE", fetch("https://fakestoreapi.com/products"));

  // console log di una stringa - sincrono
console.log("potrebbe essere dopo la fetch");