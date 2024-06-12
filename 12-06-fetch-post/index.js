const inputTitleEl = document.querySelector('.title');
const inputPriceEl = document.querySelector('.price');
const inputDescriptionEl = document.querySelector('.description');
const inputCategoryEl = document.querySelector('.category-id');
const inputImagesEl = document.querySelector('.images');
const buttonSendEl = document.querySelector('.button-send');

buttonSendEl.addEventListener('click', e => {
    e.preventDefault();
    const objProductForm = {
        title: inputTitleEl.value,
        price: inputPriceEl.value,
        description: inputDescriptionEl.value,
        categoryId: inputCategoryEl.value,
        images: [inputImagesEl.value]
    };

    POST(objProductForm)
})

const BASE_URL = "https://api.escuelajs.co/";

const getProductEndpoint = "api/v1/products";

// fetch(`${BASE_URL}${getProductEndpoint}/276`)
//   .then((res) => res.json())
//   .then((data) => console.log("get" ,data));

// method: DELETE
// funzione che eliminerà un dato dalla nostra API tramite il suo ID
const deleteById = async (id) => {
    const res = await fetch(`${BASE_URL}${getProductEndpoint}/${id}`, {
        method: "DELETE"
    })

    const data = await res.json()

    console.log(data)
}

const POST = async (product) => {
  // FETCH con metodo POST
  // richiede un body che verrà parsato a stringa con il metodo JSON.stringify()
  // dentro il body andranno i nostri dati che vogliamo comunicare al server
  const res = await fetch(`https://fakestoreapi.com/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  const data = await res.json();

  // console.log(data.images.map(img => img.split('"')[1]))

  return data.id;
};

// deleteById(275)