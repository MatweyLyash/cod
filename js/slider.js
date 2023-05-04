let slider = new Swiper('.swiper-container', {
    loop:true,
    spaceBeetwen:30,
    
      freeMode: true,
      slidesPerView: 1,
      loop: true,
      
      keyboard: {
          enabled: true,
      },
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      }
});
