/*var sideMenu = (function(){
	function sideMenuControl(selector ,diraction, btnControl){
		var self = this;
		this.target = $(selector);
		this.targetWrap = this.target.parents('#wrap');
		this.menuDir = diraction;
		this.btnMenu = $(btnControl);


		this.target.addClass(this.menuDir);
		
		this.btnMenu.on('click',function(){
			var self = $(this);
			console.log(self)
			self.menuAppear();
			return false;
		});

		$('.dimmed').on('click', function(){
			self.menuDisappear();
			return false;
		});
	}

	
	sideMenuControl.prototype = {
		menuAppear : function(){
			this.targetWrap.addClass('active');
			this.target.addClass(this.menuDir);
		},
		menuDisappear : function(){
			this.targetWrap.removeClass('active');
		}
	};
	
	return sideMenuControl;
}());*/

var sideMenu = (function(){
	var context;
	function sideMenuControl(options){
		context = this;
		this.target = $(options.selector);
		this.targetWrap = $(options.wrap);
		this.menuDir = options.side || 'left';
		this.btnMenu = $(options.btnControl);

		this.finished = options.finished;
		


		this.target.addClass(this.menuDir);
		
		this.btnMenu.on('click',()=>{
			this.menuAppear();
			
			if(this.finished){
				this.finished(context);	
			}

			return false;
		});

		$('.dimmed').on('click', function(){
			context.menuDisappear();
			return false;
		});
	}

	
	sideMenuControl.prototype = {
		menuAppear : function(){
			this.targetWrap.addClass('active');
			this.target.addClass(this.menuDir);
		},
		menuDisappear : function(){
			this.targetWrap.removeClass('active');
		}
	};
	
	return sideMenuControl;
}());