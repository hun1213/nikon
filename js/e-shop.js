$(function () {
  //search 시작
  $(".search-icon").on("click", function () {
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

  $(document).ready(function () {
    $(".product-box").slick({
      infinite: false,
      slidesToShow: 5,
      arrows: true,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1568,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          },
        },
      ],
    });
  });

  $(document).ready(function () {
    $(".timesale-box").slick({
      infinite: false,
      slidesToShow: 5,
      arrows: true,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1568,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          },
        },
      ],
    });
  });
});
