bootbox.setLocale("ru");

var bootboxExtend = {
	_imgs :   ["attention.png", "error.png", "success.png"],
	_titles : ["Внимание!",     "Ошибка",    "Успех!"],
	_img : 0,
	alert : {
		info : function(){
			this.Parent._img = 0;
			this._doThis.apply(this, arguments);
		},
		error : function(){
			this.Parent._img = 1;
			this._doThis.apply(this, arguments);
		},
		success : function(){
			this.Parent._img = 2;
			this._doThisIconLeft.apply(this, arguments);
		},
		_doThis : function(){
			if (arguments.length && typeof arguments[0] == 'string'){
				arguments[0] = '<div class="text-center"><img src="Assets/js/bootbox/' + (this.Parent._imgs[this.Parent._img]) + '"></div>' +
					'<div class="text-center"><div style="font-size: 22px;">'+(this.Parent._titles[this.Parent._img])+'</div>' + arguments[0] + '</div>';
				bootbox.alert.apply(this, arguments);
			}
		},
		_doThisIconLeft : function(){
			if (arguments.length && typeof arguments[0] == 'string'){
				arguments[0] = '<div class="text-left"><img style="float: left; margin:0 15px;" src="Assets/js/bootbox/' + (this.Parent._imgs[this.Parent._img]) + '">' +
					'<div style="font-size: 22px;">'+(this.Parent._titles[this.Parent._img])+'</div>' + arguments[0] + '</div><div class="clearfix"></div>';
				bootbox.alert({
					message: arguments[0],
					buttons:{
						'ok' : {
							label: 'ОК',
							className: 'btn-warning'
						}
					}
				});
			}
		}
	},
	confirm :  function(){
		if (arguments.length && typeof arguments[0] == 'string'){
			arguments[0] = '<div class="text-center"><img src="Assets/js/bootbox/' + (this._imgs[0]) + '"></div><div class="text-center">' + arguments[0] + '</div>';
			bootbox.confirm({
				message: arguments[0],
				callback: arguments[1],
				buttons: {
					'cancel': {
						label: 'Отменить',
						className: 'btn-default'
					},
					'confirm': {
						label: 'ОК',
						className: 'btn-warning'
					}
				}
			});
		}
	},
	Init : function(){
		this.alert.Parent = this;
		delete this.Init;
		return this;
	}
}.Init();