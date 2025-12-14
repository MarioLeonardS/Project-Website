document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("slide");

  track.innerHTML += track.innerHTML;

  let position = 0;
  const speed = 1;

  function animate() {
    position -= speed;
    track.style.transform = `translateX(${position}px)`;

    if (Math.abs(position) >= track.scrollWidth / 1.998) {
      position = 0;
    }

    requestAnimationFrame(animate);
  }

  animate();
});
