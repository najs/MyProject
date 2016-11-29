
var asideMenu = (function(){
	var _this;
	var BODY;
	function sideMenuControl(options){
		_this = this;
		BODY = $('body');
		this.target = $(options.selector);
		this.targetWrap = $(options.wrap);
		this.menuDir = options.side || 'left';
		this.btnMenu = $(options.btnControl);
		this.dim = options.dim;
		this.btnCloseSideM = options.btnCloseM;
		this.target.addClass(this.menuDir);

		this.ClickEvt(this.btnMenu,this.menuAppear);
		this.ClickEvt(this.dim,this.menuDisappear);
		this.ClickEvt(this.btnCloseSideM,this.menuDisappear);
	}

	sideMenuControl.prototype = {
		menuAppear : function(){
			BODY.addClass('asideOn');
			_this.targetWrap.toggleClass('open');
			_this.target.addClass(this.menuDir);

		},
		menuDisappear : function(){
			_this.targetWrap.removeClass('open');
			BODY.removeClass('asideOn');
		},
		ClickEvt : function(clickSelec,Fnc){
			$(clickSelec).on('click',function(e){
				e.preventDefault();
				Fnc();
			});
		}
	};
	return sideMenuControl;
}());

/* common - sideMenu, sideMenuDepth */
$(function(){
	//common - sideMenu
	var menu = new asideMenu({
		selector : '#aside_nav',
		side : 'right',
		btnControl : '.btn.menu',
		wrap : '#wrap',
		btnCloseM :'.btn_Mclose',
		dim : '.dimmed'

	});

	//common - sideMenuDepth
	var sideDepth = function(options){
		$('#aside_nav .list_wrap .depth1_list').parent('li').addClass('plus').prepend('<span class="icon"></span>');
		var btnDepth = $('#aside_nav .icon');
		var selfIdx;
		var preIdx;
		preIdx = options.intOpen; //초기 오픈되어 있는 메뉴 index
		$('.m'+preIdx).addClass('active');//초기 오픈되어 있는 메뉴 class추가

		var sideDepthControl = {
			clickEv : function(){
				btnDepth.on('click',function(e){
					e.stopPropagation();
					var self = $(this);
					var selfLi = self.parent('li');
					var selfIdx = selfLi.index();
					if (selfIdx === preIdx){
						selfLi.toggleClass('active');
						sideDepthControl.heightToggle(selfIdx);
					}else{
						$('.m'+preIdx).removeClass('active');
						$('.m'+selfIdx).addClass('active');
						sideDepthControl.heightControl(preIdx, 0);
						sideDepthControl.heightControl(selfIdx, 1);
					}
					preIdx = selfIdx;
				});
			},
			heightControl : function(eleIdx, heightN){
				var eleDepth1 = $('.m'+ eleIdx).children('.depth1_list'),
						eleSize = eleDepth1.children('li').size(),
						eleHeight = eleDepth1.children('li').innerHeight(),
						H;
				H = heightN !== 0 ? eleSize*eleHeight : 0;
				eleDepth1.css({'height':H+'px'},300);
			},
			heightToggle : function(eleIdx){
				var eleDepth1 = $('.m'+ eleIdx).children('.depth1_list'),
					eleSize = eleDepth1.children('li').size(),
					eleHeight = eleDepth1.children('li').innerHeight(),
					H;
				H = eleDepth1.height() <= 0 ? eleSize*eleHeight : 0;
				eleDepth1.css({'height':H+'px'},300);
			}
		};
		sideDepthControl.heightToggle(preIdx);
		sideDepthControl.clickEv();
	};
	sideDepth({intOpen:null});
});





