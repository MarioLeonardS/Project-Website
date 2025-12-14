const track = document.getElementById("carousel-track");
const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");

let currentIndex = 0;
const totalSlides = track.children.length;

function updateCarousel() {
  const offset = currentIndex * -100;
  track.style.transform = `translateX(${offset}%)`;
}

next.addEventListener("click", () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateCarousel();
  }
});

prev.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});
