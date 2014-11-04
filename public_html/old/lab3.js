 $(document).ready(function() {
	$('#sdiv').append('<p id="b1"></p>');
	$('div:last').hover(
	function () {$('#b1').text('About to select a link …');}, 
	function () {$('#b1').text('');}
	);
	
	$('#b1').click(function() {
alert('b1');
});

	function greet( event ) {
		alert( "Hello " + event.data.name );
	}
	$( "b1" ).on( "click", {
		name: "Karl"
	}, greet );
	$( "b2" ).on( "click", {
	name: "Addy"
}, greet );
 });