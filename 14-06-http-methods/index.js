import { DELETE, GET, PATCH, POST, PUT } from "./api-calls.js";

const inputTitleEl = document.querySelector('.title');
const inputPriceEl = document.querySelector('.price');
const inputDescriptionEl = document.querySelector('.description');
const inputCategoryEl = document.querySelector('.category-id');
const inputImagesEl = document.querySelector('.images');
const buttonSendEl = document.querySelector('.button-send');
const inputSearchById = document.querySelector('.check-id');
const buttonSearchById = document.querySelector('.check-id-button');

const updateProduct = {};
let id = ""

buttonSearchById.addEventListener('click', async (e) => {
    id = inputSearchById.value

    // const result = await GET(id)
    // console.log(result)
    // inputTitleEl.value = result.title
    // inputPriceEl.value = result.price
    // inputDescriptionEl.value = result.description
    // inputCategoryEl.value = result.category.id
    // inputImagesEl.value = result.images.join('').replace(/[\[\]"]/g, '');
})

buttonSendEl.addEventListener('click', async (e) => {

    console.log(e)
    if (inputTitleEl.value === "") {
        console.log('scrivi qualcosa')
    }
    updateProduct.title = inputTitleEl.value;
    updateProduct.price = inputPriceEl.value;
    updateProduct.description = inputDescriptionEl.value;
    updateProduct.categoryId = inputCategoryEl.value;
    updateProduct.images = [inputImagesEl.value];

    // const editedProd = await PUT(id, updateProduct);

    // console.log(editedProd);
});

const mainContainerEl = document.querySelector('.main-container');

const myUrl = new URL("https://api.escuelajs.co/api/v1/products/23?limit=8&offset=0")

console.log(myUrl)

console.log(myUrl.searchParams.set('miosearchparam', 'valoreasd'))

// const newProduct = {
//     title: "PippoPhone",
//     price: 899,
//     description: "Best Phone",
//     categoryId: 2,
//     images: ["https://pippo.asd/"]
// }

// const updateProduct = {
//     title: "UNICA MODIFICA",
// }

// const updateProductTitle = await PATCH(915, updateProduct)

// console.log("AGGIORNO IL TITOLO =>", updateProductTitle)

// const postResult = await POST(newProduct)

// console.log(postResult);

// const putResult = await PUT(915, updateProduct)

// console.log("AGGIORNATO CON PUT ===>", putResult)

// console.log("GET prima del Delete ===>", await GET(915));

// console.log("Risposta del DELETE ===>", await DELETE(915));

// console.log("GET dopo il Delete ===>", await GET());