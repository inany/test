 $(document).ready(function() {
	$("#button1").click(function() {
			$.getJSON("http://localhost/phone_collection.json").done(function(result){
				$.each(result.Collection.Phone, function(i, phoneArray){
					$("#txt").append(phoneArray.Model+ "<br/>");
				});
			});
	});
 });