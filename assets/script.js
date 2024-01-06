const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
let dotSelect = 0;

arrowLeft.addEventListener("click", () => {
  console.log("gauche");
});

arrowRight.addEventListener("click", () => {
  console.log("droite");
});

function createDots() {
  for (let i = 0; i < slides.length; i++) {
    let bulletElement = document.createElement("a");
    bulletElement.href = "#";
    bulletElement.classList.add("dot");
    dotsContainer.appendChild(bulletElement);

    if (i === dotSelect) {
      bulletElement.classList.add("dot_selected");
    }
  }
}

createDots();
