//Smooth scroll
$(function () {
  $("a[href^=#]").click(function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - 100;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

//Accordion
$(function () {
  $(".accTitle").on("click", function () {
    var findElm = $(this).next(".accBox");
    $(findElm).slideToggle();

    if ($(this).hasClass("close")) {
      $(this).removeClass("close");
    } else {
      $(this).addClass("close");
    }
  });
});

//ドラッグ禁止
//function imageGuard(selector){
//  var guard_selector = document.querySelectorAll(selector);
//  for(var n = 0; n < guard_selector.length; n++){
//    guard_selector[n].addEventListener("contextmenu", function(e){
//      e.preventDefault();
//    }, false);
//  }
//  var guard_style = {
//    'pointer-events':'none',
//    '-webkit-touch-callout':'none',
//    '-moz-touch-callout':'none',
//    'touch-callout':'none',
//    '-webkit-user-select':'none',
//    '-moz-user-select':'none',
//    'user-select':'none'
//  }
//  Object.keys(guard_style).forEach(function(v, i, a){
//    for(var n = 0; n < guard_selector.length; n++){
//      guard_selector[n].style[v] = guard_style[v];
//    }
//  });
//}

//document.addEventListener("DOMContentLoaded", function() {
//  imageGuard('img');
//});

// document.oncontextmenu = function () {
//   return false;
// };
// document.body.oncontextmenu = "return false;";

// document.onselectstart = function () {
// 	return false
// }
// document.onmousedown = function () {
// 	return false
// }
// document.body.onselectstart = "return false;"
// document.body.onmousedown = "return false;"

$(function () {
  $(".hbg").on("click", function () {
    $(".nav,body,.hbg").toggleClass("active");
  });

  $(".nav_menu a").on("click", function () {
    if ($(".nav").hasClass("active")) {
      $(".nav,body,.hbg").removeClass("active");
    }
  });
});

const swiperConfig = {
  slidesPerView: 2,
  centeredSlides: true,
  loop: true,
  speed: 1000,
  spaceBetween: 10,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2000,
    // disableOnInteraction: false,
    // waitForTransition: true,
  },

  loopAdditionalSlides: 1,
  loopedSlides: 1,
};

const overViewSwiper01 = new Swiper(".productSlider1", swiperConfig);
const overViewSwiper02 = new Swiper(".productSlider2", swiperConfig);

$(document).ready(function () {
  var currentMonth = new Date().getMonth();

  // var today = new Date("2026-03-01");
  // var currentMonth = today.getMonth();

  if (currentMonth === 0 || currentMonth === 1) {
    // 1月の場合
    $(".mth02").css("display", "flex");
    $(".mth03").css("display", "none");
  } else if (currentMonth === 2) {
    // 2月の場合
    $(".mth02").css("display", "none");
    $(".mth03").css("display", "flex");
  }
});

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
