const swiper = new Swiper('.mySwiper', {
  loop: true,
  spaceBetween: '10',
  slidesPerView: 3,
  centeredSlides: true,

  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "fraction",
  // },
});
const swiper2 = new Swiper('.mySwiper2', {
  loop: true,
  spaceBetween: '10',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiper,
  },
});

swiper2.on('slideChange', handleSlideChange);
function handleSlideChange() {
  const activeSlideIndex = swiper2.activeIndex;
  const activeSlide = swiper2.slides[activeSlideIndex];
}
