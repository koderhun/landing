
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
});