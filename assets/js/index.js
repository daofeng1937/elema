
$(function(){
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop > 0){
			$('.search').addClass('fixed-search');
			$('.clear-zhe').css('height','280px');
		}else{
			$('.search').removeClass('fixed-search');
			$('.clear-zhe').css('height','140px');
		}
		

		if(scrollTop>1500){
			$('.fixed-right').show();
		}else{
			$('.fixed-right').hide();
		}
	})
	$('.fixed-right').click(function(){
		$(window).scrollTop(0);
	})
	var mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            slidesPerGroup: 1,
            effect : 'slide',
            pagination: '.swiper-pagination',
            pagination: {
			el: '.swiper-pagination',
			clickable: true,
			},
	  	})      
})