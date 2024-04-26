import './vendor'

console.log('Hello World')

$('.burger, .momenu__close').on('click', () => {
  $('.momenu').toggleClass('active')
})
