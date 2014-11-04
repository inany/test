 $(document).ready(function() {
	$('#fdiv').append('<p id="tp"></p>');
	$('div:last').hover(
	function () {$('#tp').text('About to select a link …');}, 
	function () {$('#tp').text('');
		function () {$('#tp').text('About to select a link 1');}, 
	function () {$('#tp').text('');
		function () {$('#tp').text('About to select a link 2');}, 
	function () {$('#tp').text('');
		function () {$('#tp').text('About to select a link 3');}, 
	function () {$('#tp').text('');}
	);
 });