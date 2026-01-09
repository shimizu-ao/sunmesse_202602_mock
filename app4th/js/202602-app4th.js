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
$(function () {
  $(".btn_mdl").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      var target = $(this).data("mdl");
      var mdl = $("#" + target);
      $(mdl).fadeIn();
      srlpos = $(window).scrollTop();
      $("html").addClass("fix").css({ top: -srlpos });
      console.log(target);
      return false;
    });
    $(".close").click(function () {
      $(".modal").fadeOut();
      $("html").removeClass("fix").css({ top: 0 });
      $(window).scrollTop(srlpos);
      return false;
    });
  });
});

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

const productSlider = new Swiper(".productSlider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3.5,
  centeredSlides: true,
  speed: 4000,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false,
  },
});

const makerSlider = new Swiper(".makerSlider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 2.5,
  centeredSlides: true,
  speed: 4000,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
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

if ($(".swiperStampCard .swiper-slide").length > 1) {
  $(".swiper-stampCard-button-next,.swiper-stampCard-button-prev").css("display", "block");
  const swiperStampCard = new Swiper(".swiperStampCard", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 2,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-stampCard-button-next",
      prevEl: ".swiper-stampCard-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });
  // スライドが変更されたときのボタン表示の更新
  swiperStampCard.on("slideChange", function () {
    if (swiperStampCard.isBeginning) {
      $(".swiper-stampCard-button-prev").css("display", "none");
    } else {
      $(".swiper-stampCard-button-prev").css("display", "block");
    }

    if (swiperStampCard.isEnd) {
      $(".swiper-stampCard-button-next").css("display", "none");
    } else {
      $(".swiper-stampCard-button-next").css("display", "block");
    }
  });

  // 初期状態のチェック
  if (swiperStampCard.isBeginning) {
    $(".swiper-stampCard-button-prev").css("display", "none");
  }
  if (swiperStampCard.isEnd) {
    $(".swiper-stampCard-button-next").css("display", "none");
  }
}

$(function () {
  $(".tab").on("click", function () {
    $(".tab, .panel").removeClass("active");

    $(this).addClass("active");

    var index = $(".tab").index(this);
    $(".panel").eq(index).addClass("active");
  });
});
