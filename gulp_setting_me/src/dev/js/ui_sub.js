var BtnTopAppearControl = function(btn,space){
	var docuHeight = $(document).outerHeight(),
		scrollTop,
		winHeight = $(window).outerHeight(),
		footerHeight = $('#footer').outerHeight(),
		Btn = $(btn);

	Btn.hide();
	$(window).on("scroll",function(){
		scrollTop = $(this).scrollTop();
		scrollTop<10 || (scrollTop+winHeight) >= (docuHeight - footerHeight + space) ? Btn.hide() : Btn.show();
	});
};


var preScrollTop = 0;
function isScrollToBottom(e){
	console.log(e.target.body.scrollTop);
	var isBottom = preScrollTop < e.target.body.scrollTop /*|| e.originalEvent.target.scrollingElement.scrollTop*/;
	preScrollTop = e.target.body.scrollTop /*|| e.originalEvent.target.scrollingElement.scrollTop*/;
	return isBottom;
}
function scrollHandler(options){
	options.up = options.up || function(){};
	options.down = options.down || function(){};
	$(window).scroll(function(e){
		if(isScrollToBottom(e)){
			options.up(e);
		}else{
			options.down(e);
		}
	})
}

function getEleHeight(ele){
	return parseInt($(ele).css('height'),10);
}

$(function(){

	//탑버튼
	BtnTopAppearControl('#btn_top',70);

	//헤더부분
	var wrapperHeight = getEleHeight('#header');
	var headerHeight = getEleHeight('#common_header')-10;
	scrollHandler({
		up : function(e){
			if(e.target.body.scrollTop /*e.originalEvent.target.scrollingElement.scrollTop */ > wrapperHeight){
				$('.sub #header').css({'transform':'translate3d(0, -'+headerHeight+'px, 0)'});
			}
		},
		down : function(e){
			$('.sub #header').css({'transform':'translate3d(0, 0, 0)'});
		}
	});


	//FAQ
	var FAQListOpenControl = function(selectorWrap){
		var faqTit = $(selectorWrap).find('.tit');

		faqTit.on('click',function(e){
		 e.preventDefault();
		 var self = $(this);
		 allClose(self);
		 heightToggle(self);
		});

		function heightToggle(t){
			t.parent('.faq_box').hasClass('open') ? t.parent('.faq_box').removeClass('open') : t.parent('.faq_box').addClass('open');
		}
		function allClose(t){
			t.parent('.faq_box').siblings().removeClass('open');
		}
	};
	FAQListOpenControl('#faqList');


  /*브라우저 체크
	if(/Android/i.test(navigator.userAgent)){
		alert('안드로이드!');
	}else if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){
		alert('아이퐁!');
	}else{
		alert('이외의!');
	}*/


});
