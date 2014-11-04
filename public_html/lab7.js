$(document).on("mobileinit", function(){
$.mobile.defaultPageTransition = ”slideup”;
$.mobile.pageLoadErrorMessage =”Load error – your fault”;
});

$(document).on("pageinit", function(){
$("#fp").click(function() {
alert('clicked some text paragraph');
});
});