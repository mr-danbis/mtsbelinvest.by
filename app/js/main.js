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
    const rentPageSlider = new Slider();
    const rentKalvPageSlider = new Slider();
    const rentKalvDownPageSlider = new Slider();
    const screenSlider = new Slider();

    if (wrapper.classList.contains("screen-page")) {
        screenSlider.addSlider(".screenled-slider__container", {
            items: 1,
        });
    }

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

    if (wrapper.classList.contains("rent-page")) {
        rentPageSlider.addSlider(".rent-slider__container", {
            margin: 40,
            responsive: {
                0: {
                    items: 1,
                },
                700: {
                    items: 2,
                },
                1430: {
                    items: 3,
                },
            },
        });
    }

    if (wrapper.classList.contains("rent_kalv-page")) {
        rentKalvPageSlider.addSlider(".rent_kalv-slider--up", {
            items: 1,
            margin: 20,
        });
        rentKalvDownPageSlider.addSlider(".rent_kalv-slider__img--down", {
            items: 4,
            responsive: {
                0: {
                    margin: 10,
                },
                1430: {
                    margin: 20,
                },
            },
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

    class formTitle {
        constructor(title, page) {
            this.title = title;
            this.page = page;
        }
        change(title, page) {
            if (wrapper.classList.contains(page)) {
                document.querySelector(".form__title").innerHTML = title;
            }
        }
    }

    const rentPageFormTitle = new formTitle();
    rentPageFormTitle.change("???????????????? ????????????", "rent-page");
    if (!wrapper.classList.contains("main-page")) {
        document.querySelector(".form").style.marginBottom = "170px";
    }

    const purchasePageFormTitle = new formTitle();
    purchasePageFormTitle.change("???????????????? ????????????", "purchase");



    function openForm() {
        const formBtn = document.querySelectorAll(".form-btn-open");
        const closeFormBtn = document.querySelectorAll(".form__close");
        const modalForm = document.querySelector(".modal");
        const modalFormBtn = document.querySelectorAll(".modal-form__btn");
        const closeModalFormBtn = document.querySelectorAll(".modal-request__form--close");
        const modalRequestForm = document.querySelector(".modal-request");

        formBtn.forEach((btn) => {
            btn.addEventListener("click", () => {
                modalForm.style.display = "block";
            });
        });

        closeFormBtn.forEach((btn) => {
            btn.addEventListener("click", () => {
                modalForm.style.display = "none";
            });
        });



        modalFormBtn.forEach(btn => {
            btn.addEventListener("click", () => {
                modalRequestForm.style.display = "block";
                modalForm.style.display = "none";
            });
        });

        closeModalFormBtn.forEach((btn) => {
            btn.addEventListener("click", () => {
                modalRequestForm.style.display = "none";
            });
        });

    }
    openForm();



    function showImg(event) {
        event = event || window.event;
        let iconImg = event.Target || event.srcElement;
        if (iconImg.tagName == "IMG") {
            const activeSlide = document.querySelector(".rent_kalv-slider--up").querySelector('.active').querySelector('.rent_kalv-slider__img--first');
            activeSlide.src = iconImg.getAttribute('src');
        }
    }


    if (wrapper.classList.contains('rent_kalv-page')) {
        const imgWrapper = document.querySelector('.rent_kalv-slider__img--down');
        imgWrapper.addEventListener('click', (e) => {
            showImg(e);
        });
    }

    function editSliderNav() {
        const img = document.querySelector('.screenled-slider__img');
        const nav = document.querySelector('.screenled-slider').querySelector('.owl-nav');
        nav.style.top = `${img.clientHeight/2}px`;

        window.onresize = function () {
            nav.style.top = `${img.clientHeight/2}px`;
        };
    }
    if (wrapper.classList.contains('screen-page')) {
        editSliderNav();
    }

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
    let map = new ymaps.Map("maps", {
        center: [53.90279733757004, 27.551026917561504],
        zoom: 19,
    });

    let placemark = new ymaps.Placemark(
        [53.90279733757004, 27.551026917561504], {}, {
            iconLayout: "default#image",
            iconImageHref: "/images/icons/maps.png",
            iconImageSize: [38, 51],
            iconImageOffset: [0, 0],
        }
    );

    map.controls.remove("geolocationControl"); // ?????????????? ????????????????????
    map.controls.remove("searchControl"); // ?????????????? ??????????
    map.controls.remove("trafficControl"); // ?????????????? ???????????????? ??????????????
    map.controls.remove("typeSelector"); // ?????????????? ??????
    map.controls.remove("fullscreenControl"); // ?????????????? ???????????? ???????????????? ?? ?????????????????????????? ??????????
    // map.controls.remove("zoomControl"); // ?????????????? ?????????????? ????????????????????????
    map.controls.remove("rulerControl"); // ?????????????? ?????????????? ????????????
    map.behaviors.disable(["scrollZoom"]); // ?????????????????? ???????????? ?????????? (??????????????????????)
    map.geoObjects.add(placemark);
}

ymaps.ready(init);