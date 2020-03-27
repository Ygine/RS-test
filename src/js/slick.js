import $ from 'jquery';
$(document).ready(function () {
  $('.slide_list').slick({
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
    cssEase: 'linear',
  });
});