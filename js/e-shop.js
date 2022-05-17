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

  $(window).resize(function () {
    const windowWidth = $(window).width();
    if (windowWidth >= 1273) {
      $(".gnb-panel.tm").css("display", "none");
      $(".modal").css("display", "none");
    }
  });

  toggleMobileMenu = () => {
    if ($(".hamburger-icon-tm").hasClass("active-1") === true) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  openMobileMenu = () => {
    $(".hamburger-icon-tm").addClass("active-1");
    $(".gnb-panel-tm").stop().slideDown(300);
    $(".modal").show();
  };
  closeMobileMenu = () => {
    $(".hamburger-icon-tm").removeClass("active-1");
    $(".gnb-panel-tm").stop().slideUp(300);
    $(".modal").hide();
  };

  $(window).resize(function () {
    const windowWidth = $(window).width();
    if (windowWidth >= 1080) {
      $(".gnb-menu-wrapper-tm").css("display", "none");
      $(".hamburger-icon-tm").removeClass("active-1");
    }
  });

  $(".modal").click(function () {
    closeMobileMenu();
  });
  $(".hamburger-icon-tm").click(function () {
    toggleMobileMenu();
  });

  $(".logo, .gnb-logo-tm").click(function () {
    closeMobileMenu();
    closeSearch();
  });

  //search focus

  const SEARCHINPUT = $(".search-tm form input");
  SEARCHINPUT.focus(function () {
    $(".x-icon span").css("display", "block");
  });
  SEARCHINPUT.blur(function () {
    $(".x-icon span").css("display", "none");
  });
  //x버튼 input 텍스트 삭제
  $(".delete-input").click(function () {
    $("search-tm input").val("");
  });

  //search 끝

  $(window).resize(function () {
    const windowWidth = $(window).width();
    if (windowWidth < 480) {
      $(".product-box-li-fake").remove();
    }
  });

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
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true,
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
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true,
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
