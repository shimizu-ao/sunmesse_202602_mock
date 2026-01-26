/** @format */

// fixBtnArea//Smooth scroll
$(function () {
  //タブ切替えのaタグ除く
  var headerHight = 49;
  $("a[href^=#]")
    .not("#exceptScroll a")
    .click(function () {
      var speed = 400;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? "html" : href);
      var position = target.offset().top - headerHight;
      $("body,html").animate({ scrollTop: position }, speed, "swing");
      return false;
    });
});

//fixBTN
window.addEventListener("load", function () {
  document.getElementById("btn").style.display = "block";
});
function clickBtn() {
  const fixAppBtn = document.getElementById("btn");
  if (fixAppBtn.style.display == "block") {
    fixAppBtn.style.display = "none";
  }
}

//Accordion
$(function () {
  $(".toggle_title").click(function () {
    $(this).toggleClass("selected");
    $(this).next().slideToggle();
  });
});

$(function () {
  $(".toggle_title_other").click(function () {
    $(this).toggleClass("selected");
    $(this).next().slideToggle();
  });
});

// LP・Swiper
const swiperMV = new Swiper(".mvSlider", {
  // Optional parameters
  direction: "horizontal",
  centeredSlides: true,

  autoplay: {
    delay: 0,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-renewal-pagination",
    // type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-renewal-button-next",
    prevEl: ".swiper-renewal-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

const overViewSwiper01 = new Swiper(".productSlider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  centeredSlides: true,
  speed: 1000,
  // spaceBetween: 40,
  disableOnInteraction: false,
  autoplay: {
    delay: 2000,
  },

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "bullets",
  //   clickable: "clickable",
  // },

  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-products-button-next",
  //   prevEl: ".swiper-products-button-prev",
  // },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

const makerSlider = new Swiper(".makerSlider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 2.5,
  centeredSlides: true,
  speed: 2000,
  spaceBetween: 25,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-products-pagination",
    // type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-products-button-next",
    prevEl: ".swiper-products-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // モーダル・マイページ
});

jQuery(function ($) {
  $('input[name="submit"]').on("click", function (e) {
    e.stopPropagation(); //バブリング対策
  });
});
