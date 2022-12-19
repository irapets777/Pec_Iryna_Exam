let slider = $(document).ready(function () {
  $('.your-class').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true
  });
});

let menuBtn = document.querySelector('.burger__icon');
let menu = document.querySelector('.burger__menu');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
})

