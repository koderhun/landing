
$(function(){
  $('.burger, .momenu__close').on('click', () => {
    $('.momenu').toggleClass('active')
  });
  const swiper = new Swiper(".ncard-slider", {
    slidesPerView: 6,
    spaceBetween: 6,
  });
});