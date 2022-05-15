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

  //햄버거 메뉴
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
        {
          breakpoint: 722,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
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
        {
          breakpoint: 722,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });

  //장바구니

  $(".put-in-the-cart img").on("click", function () {
    const HEARTOFF = "img/Eshop/icons/heart.svg";
    const HEARTON = "img/Eshop/icons/heart_on.svg";
    let heartSrc = $(this).attr("src") === HEARTOFF ? HEARTON : HEARTOFF;

    $(this).attr("src", heartSrc);

    const HIDECOUNT = $(".count-reserved-items").hide();
    showCount = () => {
      $(".count-reserved-items").show();
      $(".count-reserved-items").text(CountReservedItems);
    };
    let CountReservedItems = $(
      "img[src$='img/Eshop/icons/heart_on.svg'"
    ).length;

    if (CountReservedItems >= 1) {
      showCount();
    } else {
      HIDECOUNT;
    }
  });
});
