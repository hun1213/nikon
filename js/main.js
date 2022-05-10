$(function () {
  $(document).ready(function () {
    $(".banner2-wrapper").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      infinity: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
    });

    $(".news-wrapper").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      infinity: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      vertical: true,
    });

    $(".eshop-mobile-box-wrapper").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      infinite: false,
    });
  });

  $("#product-gnb a").mouseenter(function () {
    $(this).next().stop().slideDown(300);
  });

  $("#product-gnb").mouseleave(function () {
    $(".product-info-menu").stop().slideUp(300);
  });

  $(".sub-wrapper>a").mouseenter(function () {
    $(this).next().stop().slideDown(300);
  });

  $(".sub-wrapper").mouseleave(function () {
    $(this).find(".sub").stop().slideUp(300);
  });

  //search 시작
  $(".search-icon").on("click", function () {
    $(".search").stop().slideDown(300);
    $(".modal").stop().show();
    if ($(".hamburger-icon-tm").hasClass("active-1") === true) {
      $(".hamburger-icon-tm").removeClass("active-1");
      $(".gnb-menu-wrapper-tm").slideUp(300);
    }
  });

  $(".search button").on("click", function () {
    $(".search").stop().slideUp(300);
    $(".modal").stop().hide();
  });
  $(".modal").on("click", function () {
    $(".search").stop().slideUp(300);
    $(this).stop().hide();
  });

  //search 끝

  //video2 시작
  $(".video2_1").mouseenter(function () {
    let video2_1On = $(".video2_1 a img");

    video2_1On.attr("src", "img/main/videoSub1_on.png");
  });
  $(".video2_2").mouseenter(function () {
    let video2_2On = $(".video2_2 a img");

    video2_2On.attr("src", "img/main/videoSub2_on.png");
  });

  $(".video2_1").mouseleave(function () {
    let video2_1Off = $(".video2_1 a img");

    video2_1Off.attr("src", "img/main/videoSub1_off.png");
  });
  $(".video2_2").mouseleave(function () {
    let video2_2Off = $(".video2_2 a img");

    video2_2Off.attr("src", "img/main/videoSub2_off.png");
  });
  //video2 끝
  const swiper = new Swiper(".swiper", {
    // Optional parameters
  });

  //tablet 햄버거 메뉴 시작
  let width = $(window).width();
  if (width >= 1080) {
    $(".gnb-menu-wrapper-tm").css("display", "none");
  } else {
    $(".hamburger-icon-tm").click(function () {
      if ($(".hamburger-icon-tm").hasClass("active-1") === true) {
        $(this).removeClass("active-1");
        $(".gnb-menu-wrapper-tm").stop().slideUp(300);
      } else {
        $(this).addClass("active-1");
        $(".gnb-menu-wrapper-tm").stop().slideDown(300);
      }
    });
  }
  $(".logo, .gnb-logo-tm").click(function () {
    $(".hamburger-icon-tm").removeClass("active-1");
    $(".gnb-menu-wrapper-tm").stop().slideUp(300);
    $(".search").stop().slideUp(300);
    $(".modal").stop().hide();
  });
  //tablet 햄버거 메뉴 시작
});
