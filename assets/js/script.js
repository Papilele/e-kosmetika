/*services1.onmouseover = function() {
    let dropMenu = document.querySelector('.drop-menu');
    dropMenu.classList.remove('hidden');
    dropMenu.classList.add('visible');
};

services1.onmouseout = function() {
    let dropMenu = document.querySelector('.drop-menu');
    dropMenu.classList.remove('visible');
    dropMenu.classList.add('hidden');
};

services2.onmouseover = function() {
    let dropMenu = document.querySelector('.drop-menu2');
    dropMenu.classList.remove('hidden');
    dropMenu.classList.add('visible');
};

services2.onmouseout = function() {
    let dropMenu = document.querySelector('.drop-menu2');
    dropMenu.classList.remove('visible');
    dropMenu.classList.add('hidden');
};
*/

$(document).ready(function() {
    $('.slider-popular').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        appendArrows: $('.but-arrows-popular'),
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false
            }
          }
        ]
    });

    $('.slider-new').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        appendArrows: $('.but-arrows-new'),
        responsive: [
            {
              breakpoint: 1399,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                dots: false
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                dots: false
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: false
              }
            }
          ]
    });
    $('.slider-welcome').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      fade: true,
      dots: true,
      dotsClass: 'dots-style',
      appendArrows: $('.but-arrows-welcome'),
      responsive: [
          {
            breakpoint: 1500,
            settings: {
              autoplay: true,
              autoplaySpeed: 4000,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              autoplay: true,
              autoplaySpeed: 4000,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }
        ]
    });

    $('#favourite-product').click( function () {
      $('#favourite-product').toggleClass('favourite-product-active');
      $('#favourite-product').toggleClass('favourite-product-disable');
    });

    $('.slider-product').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-product',
      responsive: [
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-product'
          }
        
      }
      ]
    });


    $( function() {
      $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 25000,
        values: [ 1200, 12000 ],
        slide: function( event, ui ) {
          $( "#price-min" ).val( ui.values[ 0 ] +" ₽");
          $( "#price-max" ).val( ui.values[ 1 ] + " ₽");
        }
      });
      /*$( "#price" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - ₽" + $( "#slider-range" ).slider( "values", 1 ) );*/
      $( "#price-min" ).val( $( "#slider-range" ).slider( "values", 0 ) + " ₽" );
      $( "#price-max" ).val( $( "#slider-range" ).slider( "values", 1 ) + " ₽" );
    } );

    /*
    slide: function( event, ui ) {
          $( "#price" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
      });
      $( "#price" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - ₽" + $( "#slider-range" ).slider( "values", 1 ) ); */



    let totalSlides = $('li[role]').length;
    if (totalSlides < 10) {
        $('#total-slides').text('/0' + totalSlides);
    } else {
        $('#total-slides').text(totalSlides);
    };

    let curSlide = 1;
    let refreshSlide = function(currentSlide) {
        if (currentSlide < 10) {
            $('#cur-slide').text('0' + currentSlide + ' ');
        } else {
            $('#cur-slide').text(currentSlide + ' ');
        }
        
    };
    refreshSlide(curSlide);

    let refDelay = function() {
        $('.slick-prev').toggleClass('but-dis');
        $('.slick-next').toggleClass('but-dis');
    };
 

    $('.slick-prev').click( function () {
        curSlide-=1;
        setTimeout(refreshSlide, 450, curSlide);
        refDelay();
        setTimeout(refDelay, 550);
    });



    $('.slick-next').click( function () {
        curSlide+=1;
        setTimeout(refreshSlide, 450, curSlide);
        refDelay();
        setTimeout(refDelay, 550);
    });

    let productCount = 1;
    $('#product-count').text(productCount);
    
    $('#minus').click( function () {
      if (productCount > 1) {
        productCount -= 1;
        $('#product-count').text(productCount);
      }
      refreshCount();
    });
    $('#plus').click( function () {
      if (productCount < 20) {
        productCount += 1;
        $('#product-count').text(productCount);
      }
      refreshCount();
    });
    let refreshCount = function () {
      if (productCount == 20) {
        $('#plus').addClass("disabled");
      } else {
        $('#plus').removeClass("disabled");
      };

      if (productCount == 1) {
        $('#minus').addClass("disabled");
      } else {
        $('#minus').removeClass("disabled");
      };
    };
    
});




let linkCatalog = document.getElementById("link-catalog");
let catalog = document.getElementById("offcanvasCatalog");
let imageCatalog = document.getElementById("icon-catalog");

function changeIcon () {
  if (catalog.classList.contains("show")) {
    imageCatalog.src = "assets/images/icon_close.svg";
  } else {
    imageCatalog.src = "assets/images/icon_catalog.svg";
  };
}

linkCatalog.addEventListener("click", changeIcon, false);

