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
  loop: true, // ループ有効
  slidesPerView: 3.5, // 一度に表示する枚数
  speed: 3000, // ループの時間
  // spaceBetween: 10,
  allowTouchMove: false, // スワイプ無効
  autoplay: {
    delay: 0, // 途切れなくループ
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false, // 逆方向有効化
  },
});

const couponSlider = new Swiper(".couponSlider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  centeredSlides: true,
  speed: 1000,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
  },

  // If we need pagination

  pagination: {
    el: ".coupon_pagenation",
    type: "bullets",
    clickable: "clickable",
  },

  // // Navigation arrows
  navigation: {
    nextEl: ".swiper-products-button-next",
    prevEl: ".swiper-products-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  //   draggable: true,
  // },
});

const overViewSwiper01 = new Swiper(".productSlider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  centeredSlides: true,
  speed: 1000,
  spaceBetween: 10,
  autoplay: {
    delay: 2000,
  },

  // If we need pagination

  pagination: {
    el: ".product_pagenation",
    type: "bullets",
    clickable: "clickable",
  },

  // // Navigation arrows
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
  $(".modalBtn").each(function () {
    $(this).on("click", function () {
      var target = $(this).data("target");
      var $modal = $("#" + target);
      $modal.fadeIn();

      srlpos = $(window).scrollTop();
      $("html").addClass("fix").css({ top: -srlpos });

      $modal.find(".close").on("click", function () {
        $modal.fadeOut();
        $("html").removeClass("fix").css({ top: 0 });
        $(window).scrollTop(srlpos);
        return false;
      });
      return false;
    });
  });

  // $(".js-modal-trigger").click(function () {});

  $('input[name="submit"]').on("click", function (e) {
    e.stopPropagation(); //バブリング対策
  });
});

$(document).ready(function () {
  const $listItems = $(".mvLIst li img"); // すべてのimg要素を取得
  let currentIndex = 0;

  function toggleActiveClass() {
    // すべてのimg要素からactiveクラスを削除
    $listItems.removeClass("active");

    // 現在のインデックスのimgにactiveクラスを追加
    $listItems.eq(currentIndex).addClass("active");

    // インデックスを更新
    currentIndex = (currentIndex + 1) % $listItems.length; // リストの最後に到達したら最初に戻る
  }

  // 2秒ごとにtoggleActiveClass関数を実行
  setInterval(toggleActiveClass, 4000);
});
