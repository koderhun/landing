
$(function(){
  $('.burger, .momenu__close').on('click', () => {
    $('.momenu').toggleClass('active')
  });
  const swiper = new Swiper(".ncard-slider", {
    slidesPerView: 1,
    spaceBetween: 6,
    breakpoints: {
      1440: {
        slidesPerView: 6
      },

      1024: {
        slidesPerView: 4
      },

      680: {
        slidesPerView: 3
      },
      480: {
        slidesPerView: 2
      }
    }
  });

  const gslider = new Swiper(".gslider", {
    slidesPerView: 1,
    spaceBetween: 6,
    breakpoints: {
      1440: {
        slidesPerView: 6
      },

      1024: {
        slidesPerView: 4
      },

      680: {
        slidesPerView: 3
      },
      480: {
        slidesPerView: 2
      }
    }
  });


  const weofferTabs = new Swiper(".weofferblock__list", {
    slidesPerView: 1,
    spaceBetween: 6,
    breakpoints: {
      1440: {
        slidesPerView: 6
      },
    }
  }); 


  const weoffer = new Swiper(".swiper-weoffer", {
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: ".weofferblock__dots",
      clickable: true,
      bulletActiveClass: 'active',
      bulletClass: 'weofferblock__dot',
      thumbs: {
        swiper: weofferTabs
      }
    },
    
  });

  // $('.weofferblock__list > a').on('click', (e) => {
  //   $('.weofferblock__list > a').removeClass('active')
  //   $(e.target).addClass('active')
  // })
});