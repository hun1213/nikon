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

    $(".event-mobile-box-wrapper").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      infinite: false,
    });
  });
  // gnb PC
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

  //gnb Mobile

  $(".gnb-li-tm > a").click(function () {
    if ($(this).next().is(":visible")) {
      $(".gnb-li-tm > a, .gnb-li-tm, .gnb-sub-tm").removeClass("active-2");
      $(this).next().stop().slideUp(200);
    } else {
      $(".gnb-li-tm > a, .gnb-li-tm, .gnb-sub-tm").removeClass("active-2");
      $(this).addClass("active-2");
      $(this).parent().addClass("active-2");
      $(this).next().addClass("active-2");

      $(".gnb-sub-tm").stop().slideUp(200);
      $(this).next().stop().slideDown(200);
    }
  });

  //search 시작
  $(".search-icon").on("click", function () {
    openSearch();
    if ($(".hamburger-icon-tm").hasClass("active-1") === true) {
      closeMobileMenu();
    }
  });

  $(".search button").on("click", function () {
    closeSearch();
  });
  $(".modal").on("click", function () {
    closeSearch();
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

  //swiper
  const swiper = new Swiper(".swiper", {
    // Optional parameters
  });

  // gnb 메뉴 상호작용
  $(window).resize(function () {
    const windowWidth = $(window).width();
    if (windowWidth >= 1080) {
      $(".gnb-menu-wrapper-tm").css("display", "none");
      $(".hamburger-icon-tm").removeClass("active-1");
    }
  });

  $(".hamburger-icon-tm").click(function () {
    toggleMobileMenu();
  });

  $(".logo, .gnb-logo-tm").click(function () {
    closeMobileMenu();
    closeSearch();
  });

  // 함수
  toggleMobileMenu = () => {
    if ($(".hamburger-icon-tm").hasClass("active-1") === true) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  openMobileMenu = () => {
    $(".hamburger-icon-tm").addClass("active-1");
    $(".gnb-menu-wrapper-tm").stop().slideDown(300);
  };
  closeMobileMenu = () => {
    $(".hamburger-icon-tm").removeClass("active-1");
    $(".gnb-menu-wrapper-tm").stop().slideUp(300);
    $(".gnb-sub-tm").stop().hide();
  };
  closeSearch = () => {
    $(".search").stop().slideUp(300);
    $(".modal").stop().hide();
  };
  openSearch = () => {
    $(".search").stop().slideDown(300);
    $(".modal").stop().show();
  };
});
