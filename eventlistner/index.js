const divParent = document.querySelector(".container");
const buttonOneEl = document.querySelector(".button_one");
const buttonTwoEl = document.querySelector(".button_two");
const inputEl = document.querySelector(".input-text");
const submitButtonEl = document.querySelector(".submit-button");

let inputValue = "";

inputEl.addEventListener("input", (e) => {
    inputValue = e.target.value;
    console.log(e.target.value)
})

submitButtonEl.addEventListener("click", () => {
    console.log(inputValue);
})
// console.log(buttonOneEl.className);


// EVENT LISTENER in ascolto su ogni singolo button element
// buttonOneEl.addEventListener("click", () => {
//   console.log("sono button one");
// });

// buttonTwoEl.addEventListener("click", () => {
//   console.log("sono button two");
// });

// // EVENT LISTENER in ascolto sul div parent dei button
// divParent.addEventListener("click", (event) => {
//   const eventTarget = event.target;
// //   console.dir(eventTarget)
//   logName.call(eventTarget)

//   // controllo di chi viene effettivamente cliccato
//   if (
//     eventTarget.tagName === "BUTTON" &&
//     eventTarget.className === "button_one"
//   ) {
//     console.log("sono button one");
//   } else if (eventTarget.tagName === "BUTTON") {
//     console.log("sono button two");
//   } else if (eventTarget.tagName === "UL" || eventTarget.tagName === "LI") {
//     console.log("sono nella lista")
//   } else {
//     console.log("sono soltanto il div da fuori");
//   }
// });

divParent.addEventListener('click', function(event) {
    if (event.target.classList.contains('child-button')) {
        logName.call(event.target)   
        console.log(`Hai cliccato ${event.target.textContent}`);
    }
});


// SCOPE

// const pippo = "pippo variable"

const pippoUser = {
    name: "pippo",
    age: "25",
    getUserName: logName
}

const plutoUser = {
    name: "pluto",
    age: "30",
    getUserName: logName,
    getUserAge() {
        return this.age
    }
}

const getUserAge = (user) => {
    return user.age
}

const myUser = {
    name: "myUser",
    age: "14"
}

// const getGenericAge = (arg) => plutoUser.getUserAge.bind(arg)()

console.log( getUserAge(pippoUser) );

// Funzione globale che legge un contesto this generico
function logName() {
    console.log("SONO LOG NAME", this)
};

// Utilizzo del metodo .call() che chiama la funzione con il contesto dichiarato a parametro
// quindi il this si riferirà a pippoUser in questo caso
// logName.call(pippoUser)

// logName.call(plutoUser)

// Esecuzione della funzione getUserName che prende come valore dentro ogni oggetto la funzione logName e quindi leggerà il contesto dell'oggetto in questione
// plutoUser.getUserName()