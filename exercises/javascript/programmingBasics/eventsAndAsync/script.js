// // // Click Events

window.onclick = (event) => {
    console.log(`${event.target.tagName} was clicked`);
}

const logo = document.querySelector('.header__logo');

logo.addEventListener("click", changeBackground)

function changeBackground() {
    logo.classList.toggle("header__logo--highlighted")
};

// Arrow function

// logo.addEventListener("click", () =>
//     logo.classList.toggle("header__logo--highlighted"));

// // Keypress Events

const search = document.querySelector(".search");
const heroTittle = document.querySelector(".hero-title");

search.addEventListener('keyup', () =>
    heroTittle.innerHTML = search.value);


const cardContent = document.querySelector(".card__content")
search.addEventListener('keyup', (event) => {
    cardContent.innerHTML = event.target.value
})