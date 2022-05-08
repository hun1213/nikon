$(function () {
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
