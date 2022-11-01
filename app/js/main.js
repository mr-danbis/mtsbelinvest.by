document.addEventListener("DOMContentLoaded", function () {
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
  const mmPageSlider = new Slider();

  if (wrapper.classList.contains("main-page")) {
    mainPageSlider.addSlider(".main-slider", {
      items: 1,
      margin: 40,
    });
  }

  if (wrapper.classList.contains("mm-page")) {
    mmPageSlider.addSlider(".mm-slider", {
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

$(document).ready(function () {
  $(".sidebar__nav-item--drop").click(function (event) {
    $(this).toggleClass("active").next().slideToggle();
  });

  $(".answer__content-question").click(function (event) {
    if ($(".answer__info").hasClass("one")) {
      $(".answer__content-question").not($(this)).removeClass("active");
      $(".answer__content-answer").not($(this).next()).slideUp();
    }
    $(this).toggleClass("active").next().slideToggle();
  });
});



function init() {
	let map = new ymaps.Map('maps', {
		center: [53.90279733757004,27.551026917561504],
		zoom: 19
	});

	let placemark = new ymaps.Placemark([53.90279733757004,27.551026917561504], {}, {
		iconLayout: 'defualt#image',
		iconImageHref: '',
		iconImageSize: [38, 51],
		iconImageOffset: [10, 10]
	});


	map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
	map.geoObjects.add(placemark);
}

ymaps.ready(init);
