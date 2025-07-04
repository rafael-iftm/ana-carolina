const items = [
  {
    src: "videos/tartaruga.mp4",
    caption: "🔥 Ana Carolina em momento de pura selvageria 🐢",
    type: "video",
    poster: "img/tartaruga-thumb.jpg"
  },
  {
    src: "img/dormindo.jpg",
    caption: "😴 Ana Carolina depois de postar o story",
    type: "image"
  },
  {
    src: "img/resultado-lol.jpg",
    caption: "💀 Resultado da MD5 de ontem",
    type: "image"
  },
  {
    src: "img/lobo.jpg",
    caption: "🐺 El Lobo sempre cuida de su Loba ❤️",
    type: "image"
  }
];

let currentIndex = 0;

function renderSlide(index) {
  const container = document.getElementById("carousel-content");
  const caption = document.getElementById("carousel-caption");
  container.innerHTML = "";

  const item = items[index];

  if (item.type === "video") {
    const video = document.createElement("video");
    video.src = item.src;
    video.controls = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.borderRadius = "12px";

    if (item.poster) {
      video.setAttribute("poster", item.poster);
    }

    container.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = "Slide";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    img.style.borderRadius = "12px";
    container.appendChild(img);
  }

  caption.textContent = item.caption;
}

function moveSlide(direction) {
  currentIndex = (currentIndex + direction + items.length) % items.length;
  renderSlide(currentIndex);
}

window.onload = () => renderSlide(currentIndex);
