import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import Select2 from "select2";
import "select2/dist/css/select2.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

export function initializeStickyAndScrollUp() {
    window.addEventListener("scroll", function () {
        var scroll = window.scrollY;
        var headerSticky = document.querySelector(".header-sticky");
        var backTop = document.getElementById("back-top");

        if (scroll < 400) {
            headerSticky.classList.remove("sticky-bar");
            if (backTop) backTop.style.display = "none";
        } else {
            headerSticky.classList.add("sticky-bar");
            if (backTop) backTop.style.display = "block";
        }
    });
}

export function initializeSwipers() {
    new Swiper(".h1-Hero-active", {
        effect: "fade",
        loop: true,
        slidesPerView: 1,
        speed: 4000,
        clickable: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: false,
        },
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        scrollbar: {
            el: ".swiper-pagination",
        },
    });

    new Swiper(".testimonialTwo-active", {
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 6000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    new Swiper(".testimonialThree-active", {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
    });

    new Swiper(".tourSwiper-active", {
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 24,
        autoplay: {
            delay: 6000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
            },
        },
    });

    new Swiper(".favSwiper-active", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 24,
        autoplay: {
            delay: 6000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
        },
    });

    new Swiper(".brandSwiper-active", {
        centeredSlides: true,
        loop: true,
        speed: 500,
        slidesPerView: 2,
        spaceBetween: 40,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            992: {
                slidesPerView: 5,
            },
            768: {
                slidesPerView: 3,
            },
        },
    });

    new Swiper(".whySwiper-active", {
        loop: true,
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 24,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
        },
    });

    new Swiper(".bulletLeftSwiper-active", {
        allowTouchMove: true,
        slidesPerView: 1,
        speed: 6000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: true,
            reverseDirection: true,
            pauseOnMouseEnter: true,
        },
        spaceBetween: 24,
        breakpoints: {
            1400: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
        },
    });

    new Swiper(".bulletRightSwiper-active", {
        allowTouchMove: true,
        slidesPerView: 1,
        speed: 6000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        spaceBetween: 24,
        breakpoints: {
            1400: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
        },
    });

    new Swiper(".destinationSwiper-active", {
        slidesPerView: 1,
        speed: 1000,
        loop: true,
        fadeEffect: { crossFade: true },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
    });
}

export function initializeSelect2() {
    $(".select2").select2({
        placeholder: "Choose one",
        width: "100%",
    });
}

export function initializeFancybox() {
    document.querySelectorAll("[data-fancybox]").forEach(function (element) {
        element.addEventListener("click", function (event) {
            event.preventDefault();
            var videoUrl = this.getAttribute("href");
            Fancybox.show([{ type: "iframe", src: videoUrl }]);
        });
    });
}

export function initializeHoverIcons() {
    document.querySelectorAll(".hover-icon").forEach(function (hoverIcon) {
        hoverIcon.addEventListener("click", function () {
            var socialIcons = this.nextElementSibling;
            socialIcons.classList.toggle("active");
        });
    });
}

export function initializePriceRangeSlider() {
    var sliderRange = document.getElementById("slider-range");
    var amount = document.getElementById("amount");

    if (sliderRange && amount) {
        noUiSlider.create(sliderRange, {
            start: [130, 250],
            connect: true,
            range: {
                min: 130,
                max: 500,
            },
            tooltips: true,
            format: {
                to: function (value) {
                    return "$" + value;
                },
                from: function (value) {
                    return Number(value.replace("$", ""));
                },
            },
        });

        sliderRange.noUiSlider.on("update", function (values) {
            amount.value = values.join(" - ");
        });
    }
}

export function initializeCustomDropdown() {
    function updateTotalQuantity() {
        var totalQuantity = 0;
        document.querySelectorAll(".input-qty").forEach(function (input) {
            totalQuantity += parseInt(input.value, 10);
        });
        var userResult = document.querySelector(".user-result");
        if (totalQuantity > 0) {
            userResult.textContent = totalQuantity;
        } else {
            userResult.textContent = "";
        }
    }

    function updateTotalQuantityTwo() {
        var totalQuantity = 0;
        document.querySelectorAll(".input-qty-two").forEach(function (input) {
            totalQuantity += parseInt(input.value, 10) || 0;
        });
        var calcUser = document.querySelector(".calc-user");
        if (totalQuantity > 0) {
            calcUser.textContent = totalQuantity;
        } else {
            calcUser.textContent = "";
        }
    }

    document.querySelectorAll(".qty-btn-plus, .qty-btn-minus").forEach(function (btn) {
        btn.addEventListener("click", function () {
            var input = this.closest(".input-qty").querySelector(".input-qty");
            var value = parseInt(input.value, 10) || 0;

            if (this.classList.contains("qty-btn-plus")) {
                input.value = value + 1;
            } else {
                input.value = value > 0 ? value - 1 : 0;
            }

            updateTotalQuantity();
        });
    });

    document.querySelectorAll(".qty-btn-two-plus, .qty-btn-two-minus").forEach(function (btn) {
        btn.addEventListener("click", function () {
            var input = this.closest(".input-qty-two").querySelector(".input-qty-two");
            var value = parseInt(input.value, 10) || 0;

            if (this.classList.contains("qty-btn-two-plus")) {
                input.value = value + 1;
            } else {
                input
                .value = value > 0 ? value - 1 : 0;
            }

            updateTotalQuantityTwo();
        });
    });

    var destination = [
        { id: "", text: "Destination" },
        { id: "1", text: "Pakistan" },
        { id: "2", text: "India" },
        { id: "3", text: "United States" },
        { id: "4", text: "Spain" },
        { id: "5", text: "Istanbul" },
    ];

    $(".location").select2({
        data: destination,
        minimumResultsForSearch: Infinity,
    });

    $(".location").on("select2:select", function (e) {
        var data = e.params.data;
        console.log(data);
    });

    var selectElement = document.querySelector(".category");
    var category = [
        { id: "", text: "Category" },
        { id: "1", text: "Hotel" },
        { id: "2", text: "Tour" },
        { id: "3", text: "Travel" },
        { id: "4", text: "Food" },
    ];

    var selectCategory = new Select2(selectElement, {
        data: category,
        minimumResultsForSearch: Infinity,
    });

    selectElement.addEventListener("select2:select", function (e) {
        var data = e.params.data;
        console.log(data);
    });
}
