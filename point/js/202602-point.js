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

function createSwiper(containerSelector, scrollbarSelector) {
  return new Swiper(containerSelector, {
    direction: "horizontal",
    loop: true,
    slidesPerView: 2.2,
    centeredSlides: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 2000,
    },
    scrollbar: {
      el: scrollbarSelector,
      draggable: true,
    },
    // 必要に応じて以下を有効に
    // pagination: {
    //   el: ".swiper-pagination",
    //   type: "bullets",
    //   clickable: true,
    // },
    // navigation: {
    //   nextEl: '.swiper-products-button-next',
    //   prevEl: '.swiper-products-button-prev',
    // },
  });
}

// 初期化
const overViewSwiper01 = createSwiper(".productSlider01", ".sp_scroll01");
const overViewSwiper02 = createSwiper(".productSlider02", ".sp_scroll02");
const overViewSwiper03 = createSwiper(".productSlider03", ".sp_scroll03");
const overViewSwiper04 = createSwiper(".productSlider04", ".sp_scroll04");

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
  $("#modalBtn").on("click", function () {
    $(".modal").fadeIn();
    srlpos = $(window).scrollTop();
    $("html").addClass("fix").css({ top: -srlpos });
    $(".close").click(function () {
      $(".modal").fadeOut();
      $("html").removeClass("fix").css({ top: 0 });
      $(window).scrollTop(srlpos);
      return false;
    });
    return false;
  });

  // $(".js-modal-trigger").click(function () {});

  $('input[name="submit"]').on("click", function (e) {
    e.stopPropagation(); //バブリング対策
  });

  // $('.modal__content').click(function() {
  //   $('.myModal').fadeOut();
  //   $('html').removeClass('is-fixed');
  //   $('.fixBtnArea').toggleClass('modalActive');
  //   return false
  // });
});
