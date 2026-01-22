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
  loop: true,
  slidesPerView: 5,
  centeredSlides: true,
  speed: 2000,
  spaceBetween: 10,
  preventInteractionOnTransition: true,
  // spaceBetween: 10,
  autoplay: {
    delay: 0,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false,
  },

  // If we need pagination
  // pagination: {
  //     el: ".swiper-renewal-pagination",
  //     type: "fraction",
  // },

  // Navigation arrows
  // navigation: {
  //     nextEl: ".swiper-renewal-button-next",
  //     prevEl: ".swiper-renewal-button-prev",
  // },

  // And if we need scrollbar
  // scrollbar: {
  //     el: ".swiper-scrollbar",
  //     draggable: true,
  // },
});

const overViewSwiper01 = new Swiper(".productSlider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  centeredSlides: true,
  speed: 1000,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
  },

  // If we need pagination

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: "clickable",
  },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-products-button-next',
  //   prevEl: '.swiper-products-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  //   draggable: true,
  // },
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
  const swiperStampCard = new Swiper(".swiperStampCard", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 2,
    // speed: 8000,
    // autoplay: {
    //   delay: 0,
    // 	stopOnLastSlide: false,
    // 	disableOnInteraction: false,
    // 	reverseDirection: false
    // },

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

  // 矢印ボタンの表示/非表示を制御
  swiperStampCard.on("slideChange update", function () {
    const { isBeginning, isEnd } = swiperStampCard;

    // 前矢印を制御
    if (isBeginning) {
      $(".swiper-stampCard-button-prev").hide();
    } else {
      $(".swiper-stampCard-button-prev").show();
    }

    // 次矢印を制御
    if (isEnd) {
      $(".swiper-stampCard-button-next").hide();
    } else {
      $(".swiper-stampCard-button-next").show();
    }
  });

  // 初期状態の更新
  swiperStampCard.emit("update");
}

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // モーダル・マイページ
  // if (
  // 	$(".sheetInner").hasClass("sheet01") &&
  // 	$(".sheetWrap").hasClass("complete") &&
  // 	$(".wrap").attr("id") == "bingo01"
  // ) {
  // 	$(".modal").fadeIn();
  // 	srlpos = $(window).scrollTop();
  // 	$("html").addClass("fix").css({ top: -srlpos });
  // 	$(".close").click(function () {
  // 		$(".modal").fadeOut();
  // 		$("html").removeClass("fix").css({ top: 0 });
  // 		$(window).scrollTop(srlpos);
  // 		return false;
  // 	});
  // 	return false;
  // }
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

$(function () {
  $(".tab").on("click", function () {
    $(".tab, .panel").removeClass("active");

    $(this).addClass("active");

    var index = $(".tab").index(this);
    $(".panel").eq(index).addClass("active");
  });
});
