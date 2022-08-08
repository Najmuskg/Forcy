window.addEventListener("load",() => {
    const preload = document.querySelector(".preload");
    preload.classList.add("preload-finish");
})

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction:false,
    },
});

var swiper = new Swiper('.swiper--container', {
    direction: 'vertical',
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction:false,
    },
  });