 $(document).ready(function() {
 	$(document).click(function() {
	alert('click doc');
		});
	$('body').click(function() {
		alert('click body');
		});
	$('div').click(function() {
		alert('click div');
		});
	$('img').click(function(e) {
		alert('click img');
		});
	$('p').click(function(e) {
		alert('click p');
		});
 });