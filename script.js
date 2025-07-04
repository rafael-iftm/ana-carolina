const images = [
  "https://via.placeholder.com/600x300/ff7f7f/333333?text=Imagem+1",
  "https://via.placeholder.com/600x300/7fbfff/333333?text=Imagem+2",
  "https://via.placeholder.com/600x300/7fff7f/333333?text=Imagem+3"
];

let currentIndex = 0;

function moveSlide(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  document.getElementById("carousel-image").src = images[currentIndex];
}
