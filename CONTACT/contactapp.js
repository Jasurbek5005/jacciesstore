$(document).ready(function(){
 
$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});


 
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;

});
});




$(document).ready(function) {          
$('#signup').validate({
	rules: {
		name: 'required',
		email: {
			required:true,
			email:true
		}
	}
}); // end validate()
});



