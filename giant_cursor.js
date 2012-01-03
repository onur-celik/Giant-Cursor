

$(function(){
	$(document).bind('mousemove', function(e){
		$('#giant_cursor').css({top: e.pageY, left:e.pageX-12});
	});
});