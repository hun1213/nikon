$(function () {
  $(document).ready(function () {
    $(".banner2Wrap").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      infinity: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
    });

    $(".newsWrap").slick({
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
  });

  $("#productGnb a").mouseenter(function () {
    $(this).next().stop().slideDown(300);
  });

  $("#productGnb").mouseleave(function () {
    $(".productInfoMenu").stop().slideUp(300);
  });

  $(".subWrapper>a").mouseenter(function () {
    $(this).next().stop().slideDown(300);
  });

  $(".subWrapper").mouseleave(function () {
    $(this).find(".sub").stop().slideUp(300);
  });
  //search 시작
  $(".searchIcon").on("click", function () {
    $(".search").stop().slideDown(300);
    $(".modal").stop().show();
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

    video2_1On.attr("src", "/img/videoSub1_on.png");
  });
  $(".video2_2").mouseenter(function () {
    let video2_2On = $(".video2_2 a img");

    video2_2On.attr("src", "/img/videoSub2_on.png");
  });

  $(".video2_1").mouseleave(function () {
    let video2_1Off = $(".video2_1 a img");

    video2_1Off.attr("src", "/img/videoSub1_off.png");
  });
  $(".video2_2").mouseleave(function () {
    let video2_2Off = $(".video2_2 a img");

    video2_2Off.attr("src", "/img/videoSub2_off.png");
  });
  //video2 끝
});
