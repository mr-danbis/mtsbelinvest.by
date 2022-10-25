document.addEventListener("DOMContentLoaded", function () {
  $.noConflict();
  const main = document.querySelector(".main");
  const header = document.querySelector(".header");
  const wrapper = document.querySelector(".wrapper");
  class Slider {
    constructor(owlElement, owlOptions) {
      this.owlElement = owlElement;
      this.owlOptions = owlOptions;
    }

    addSlider(owlElement, owlOptions) {
      $(owlElement).owlCarousel(owlOptions);
    }
  }

  const mainPageSlider = new Slider();

  if (wrapper.classList.contains("main-page")) {
    mainPageSlider.addSlider(".slider", {
      items: 1,
      margin: 40,
    });
  }
  function resizeMainPadding() {
    main.style.paddingTop = `${header.clientHeight + 30}px`;
  }
  resizeMainPadding();

  function openMobileSidebar() {
    const burgerBtn = document.querySelector(".header__mobile-btn");
    const closeMenuBtn = document.querySelector(".sidebar__close-btn");
    const mobMenu = document.querySelector(".sidebar");

    burgerBtn.addEventListener("click", () => {
      mobMenu.style.transform = "translateX(0%)";
    });

    closeMenuBtn.addEventListener("click", () => {
      mobMenu.style.transform = "translateX(200%)";
    });
  }
  openMobileSidebar();
});
