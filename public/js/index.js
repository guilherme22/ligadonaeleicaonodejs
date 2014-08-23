
"use strict"
$(document).ready(function(){
	var request = $.get('/estados');

	function requestHandler( data ){
		console.log( data );
	}
	$.when(request).done(requestHandler);
});