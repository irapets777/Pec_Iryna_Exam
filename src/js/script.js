let slider = $(document).ready(function () {
  $('.your-class').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    
  });
});

let menuBtn = document.querySelector('.burger__icon');
let menu = document.querySelector('.burger__menu');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
})
