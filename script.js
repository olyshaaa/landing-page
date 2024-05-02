
new Swiper(".mySwiper", {
	spaceBetween: 30,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	pagination: {
	  el: ".swiper-pagination",
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: true,
	},
	keyboard: true,
	loop: true,
	observer: true,
    observeParents: true
  });