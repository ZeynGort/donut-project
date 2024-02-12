$(document).ready(function(){
  // Верхній слайдер
  $('.top-slider .slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: false,
    nextArrow: false,
    responsive: [
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 1,
        centerMode: false
      }
    }
  ],
    asNavFor: '.bottom-slider .slider',
  });

  const slider = $('.bottom-slider .slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.reviews__slider-butt--prev'),
    nextArrow: $('.reviews__slider-butt--next'),
    asNavFor: '.top-slider .slider',
  });

  const totalSlides = slider.slick("getSlick").slideCount;

  updateSlideInfo(0, totalSlides);

  slider.on('afterChange', function(event, slick, currentSlide){
  updateSlideInfo(currentSlide, totalSlides);
  });

  function updateSlideInfo(currentSlide, totalSlides) {
    const currentSlideNumber = currentSlide + 1;
    const text = currentSlideNumber + '/' + totalSlides;
    $('.slide-info').text(text);
  }
});
