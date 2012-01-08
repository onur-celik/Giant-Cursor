// Giant Cursor
// by Onur Celik (onur@onur.ws)

(function($){
	$.fn.extend({
		giantCursor : function(settings){

			// default settings..
			settings = $.extend({
				cursorUrl	: 'http://onur.ws/giant_cursor/img/arrow.png', // giant cursor's url
				width  		: '48px',	// giant cursor's width
				height 		: '48px',	// giant cursor's height
				hideOriginal: true,		// hides the original cursor of your borwser or OS
				top			: 0,		// giant cursor's top
				left		: -12,		// giant cursor's left
				blink		: true		// if true, the giant cursor blinks
			}, settings);

			// define the cursor
			var cursor = $(this);
			
			// if yes hide the original cursor
			if ( settings.hideOriginal == true ){
				$('html, body, a, a:hover').css({cursor : 'none'});
			}
			
			// cursor style
			cursor.css({	width 		: settings.width, 
							height 		: settings.height,
							background 	: 'url('+settings.cursorUrl+') no-repeat',
							position	: 'absolute',
						});
						
			// follow the mouse coordinates
			$(document).bind('mousemove', function(e){
				cursor.css({	top		: e.pageY + settings.top, 
								left	: e.pageX + settings.left
							});
			});
			
			if ( settings.blink == true ){
					function blink(){
						cursor.animate({opacity : '0'},1000, function(){
							cursor.animate({opacity : '1'},1000);
							blink();
						});
					}
					blink();
			}
		}
		
	});
}(jQuery));