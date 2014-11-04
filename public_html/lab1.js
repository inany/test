 $(document).ready(function() {
	$('#b1').click(function() {
		alert('b1');
		});
	$('#b2').on("click", function() {
		alert('b2');
		});
	$('#b3').on("click", klik3); 
	klik6();
	klik4();
 });
 
 
 function klik3(){
	alert('b3');
}

 function klik6() {
		alert('no button');
 }

 function klik4() {
	$('#b4').click(function() {
		alert('b4');
		}); 
}
 
$('#b5').click(function() {
		alert('b5');
		});  
 

 

 
