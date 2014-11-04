$(document).ready(function() {
$('p').css("background-color","grey");
$('p').css("color","white");
$('p').attr('id', 'sp');
$('p:first').attr('id', 'sp');
$('p:last').hide('id', 'fp');
$( "button" ).click(function() {
	$( "p" ).after('hello');
	});
});
