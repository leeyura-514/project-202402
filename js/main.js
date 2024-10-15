$(function(){
  /**
   * 메인비주얼 슬라이드
   * */
  const mainSwiper = new Swiper(".main-slide", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-btn.next",
      prevEl: ".swiper-btn.prev",
    },
  });
})