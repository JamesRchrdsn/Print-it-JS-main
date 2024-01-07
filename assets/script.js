const slides = [
  {
    image: "assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
const img = document.querySelector(".banner-img");
const textLine = document.querySelector(".textLine");
let dotSelect = 0;

// Fonction du clique sur la fleche gauche avec le suivi
// du dot au changement d'image
function Left() {
  arrowLeft.addEventListener("click", () => {
    const slideDots = document.querySelectorAll(".dots .dot");
    slideDots[dotSelect].classList.remove("dot_selected");
    dotSelect--;
    if (dotSelect < 0) {
      dotSelect = 3;
    }
    slideDots[dotSelect].classList.add("dot_selected");
    img.src = slides[dotSelect].image;
    textLine.innerHTML = slides[dotSelect].tagLine;
  });
}

// Fonction du clique sur la fleche droite avec le suivi
// du dot au changement d'image
function Right() {
  arrowRight.addEventListener("click", () => {
    const slideDots = document.querySelectorAll(".dots .dot");
    slideDots[dotSelect].classList.remove("dot_selected");
    dotSelect++;
    if (dotSelect > slides.length - 1) {
      dotSelect = 0;
    }
    slideDots[dotSelect].classList.add("dot_selected");
    img.src = slides[dotSelect].image;
    textLine.innerHTML = slides[dotSelect].tagLine;
  });
}

// Fonction qui créer le nombre de dot en conséquence du nombre de slides
// ainsi  que le dot actif
function createDots() {
  for (let i = 0; i < slides.length; i++) {
    let bulletElement = document.createElement("div");
    bulletElement.classList.add("dot");
    dotsContainer.appendChild(bulletElement);
    if (i === dotSelect) {
      bulletElement.classList.add("dot_selected");
    }
  }
}

createDots();
Right();
Left();
