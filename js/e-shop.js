$(function () {
  //search 시작
  $(".search-icon").on("click", function () {
    openSearch();
  });

  $(".search button, .modal").on("click", function () {
    closeSearch();
  });

  openSearch = () => {
    $(".search").stop().slideDown(300);
    $(".modal").stop().show();
  };
  closeSearch = () => {
    $(".search").stop().slideUp(300);
    $(".modal").stop().hide();
  };
  //search 끝

  $(document).ready(function () {
    $(".product-box").slick({
      infinite: false,
      slidesToShow: 5,
      arrows: true,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1567,
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
          breakpoint: 1567,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          },
        },
      ],
    });
  });
});
