//const conteudo = document.getElementById('conteudo');
//const preload = document.getElementById('preload');

//setTimeout(() => {
   // preload.classList.add("close");
   // preload.style.display = "none";
//}, 4000);

const items = document.querySelectorAll('.carousel-item');
let currentIndex = 1;

function updateCarousel() {
  console.log("Current Index:", currentIndex);
  items.forEach((item, index) => {
    console.log(`Item ${index}:`, item);
    item.classList.remove('active', 'left', 'right');
    if (index === currentIndex) {
      item.classList.add('active');
    } else if (index === (currentIndex - 1 + items.length) % items.length) {
      item.classList.add('left');
    } else if (index === (currentIndex + 1) % items.length) {
      item.classList.add('right');
    }
  });
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}



updateCarousel();