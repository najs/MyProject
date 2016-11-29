/* ----------------------------------------------
 * HanbitSoft Service Development Team
 * 오디션 Mobile 메인 UI Script
 * Author - njs2000@hanbitsoft.co.kr 201611
 ------------------------------------------------- */

$(function(){
	if($('.main_promotion_banner').length > 0){
		var loopDecide;
		loopDecide = $('.main_promotion_banner .swiper-slide').length>1 ? true : false;
		var main_roll = new Swiper('.main_promotion_banner', {
			pagination:'.swiper-pagination',
			slidesPerView:'auto',
			centeredSlides:true,
			paginationClickable:true,
			spaceBetween:10,
			loop:loopDecide,
			nextButton:'.swiper-button-next',
			prevButton:'.swiper-button-prev',
			paginationType:'fraction',
			resistance:true,
			resistanceRatio:0.7,
			noSwiping:false
		});
	}

	var newItem = new Swiper('.main_hotItem_banner', {
		pagination: '.swiper-pagination',
		slidesPerView: 'auto',
		centeredSlides: true,
		paginationClickable: true,
		spaceBetween: 10,
		loop : true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		resistance:true,
		resistanceRatio: 0.85,
		noSwiping: false
	});
});