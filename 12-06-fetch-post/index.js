import errorHandler from "./errorHandler.js";

const inputTitleEl = document.querySelector('.title');
const inputPriceEl = document.querySelector('.price');
const inputDescriptionEl = document.querySelector('.description');
const inputCategoryEl = document.querySelector('.category-id');
const inputImagesEl = document.querySelector('.images');
const buttonSendEl = document.querySelector('.button-send');

const mainContainerEl = document.querySelector('.main-container');

buttonSendEl.addEventListener('click', async e => {
    e.preventDefault();
    const objProductForm = {
        title: inputTitleEl.value,
        price: Number(inputPriceEl.value),
        description: inputDescriptionEl.value,
        categoryId: Number(inputCategoryEl.value),
        images: [inputImagesEl.value]
    };

    const productId = await POST(objProductForm)

    console.log("log al click", productId);
})

const BASE_URL = "https://api.escuelajs.co/";

const getProductEndpoint = "api/v1/products";

// fetch(`${BASE_URL}${getProductEndpoint}/276`)
//   .then((res) => res.json())
//   .then((data) => console.log("get" ,data));

// method: DELETE
// funzione che eliminerà un dato dalla nostra API tramite il suo ID
const getById = async (id) => {
    const res = await fetch(`${BASE_URL}${getProductEndpoint}/${id}`, {
        method: "GET"
    })

    const data = await res.json()

    console.log(data)
}

const POST = async (product) => {
  try {
    const res = await fetch(`${BASE_URL}${getProductEndpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();

    console.log(data)

    if (data.error) {
      if (product.categoryId === 0) {
        data.message.push("category must be a positive number")
      }
      console.log(data)
      throw data;
    }

    if (product.categoryId === 0) {
      throw {
        message: ["category must be a positive number"]
      }
    }

    mainContainerEl.innerHTML = "";
    return data.id;

  } catch (err) {
    errorHandler(err, mainContainerEl)
  }
};

const PUT = async (id, product) => {
  const res = await fetch(` ${BASE_URL}${getProductEndpoint}/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
  })

  const data = res.json();

  return data;
}

// getById(828)

const staticProduct = {
  title: "Non sono super",
  price: 28,
  description: "EHEH ti ho modificato",
  categoryId: 8,
  images: ["https://asd.asd"]
}

const editById = async (id, product) => {
  console.log(await PUT(id, product))
}

// editById(828, staticProduct)

