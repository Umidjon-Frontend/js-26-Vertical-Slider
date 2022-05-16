const slideContainer = document.querySelector(".slide-container");
const slideLeft = document.querySelector(".slide__left");
const slideRight = document.querySelector(".slide__right");
const btnDown = document.querySelector(".btn__down");
const btnUp = document.querySelector(".btn__up");
const slidesLength = document.querySelectorAll(".slide__right div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

btnDown.addEventListener("click", () => changeSlide("down"));
btnUp.addEventListener("click", () => changeSlide("up"));

function changeSlide(direction) {
  const sliderHeight = slideContainer.clientHeight;

  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  }
  if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
}
