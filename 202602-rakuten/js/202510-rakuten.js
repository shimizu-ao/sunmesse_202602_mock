/** @format */

// fixBtnArea//Smooth scroll
$(function () {
  //タブ切替えのaタグ除く
  var headerHight = 100;
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
  allowTouchMove: false,
  slidesPerView: "auto",
  spaceBetween: 20,
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 0,
    stopOnLastSlide: false,
  },
});

["1", "2", "3"].forEach((num) => {
  new Swiper(`.productSlider${num}`, {
    direction: "horizontal",
    loop: true,
    slidesPerView: 2.1,
    centeredSlides: true,
    speed: 1000,
    spaceBetween: 10,
    autoplay: {
      delay: 2000,
    },
    scrollbar: {
      el: `.pd-scrollbar${num}`,
      draggable: true,
    },
  });
});

const makerSlider = new Swiper(".makerSlider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 2.4,
  centeredSlides: true,
  speed: 3000,
  spaceBetween: 40,
  autoplay: {
    delay: 4000,
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

  $(document).ready(function () {
    var header = $("#header");
    var menuBottom = $("#menu").offset().top + $("#menu").outerHeight();

    header.hide();

    $(window).on("scroll", function () {
      var scrollPos = $(window).scrollTop();

      // スクロール位置がメニューセクションを超えたら表示、それ以外は非表示
      if (scrollPos > menuBottom) {
        header.fadeIn(200);
      } else {
        header.fadeOut(200);
      }
    });
  });
});
