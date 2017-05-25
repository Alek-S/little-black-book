$(document).ready(function(){
	console.log('login loaded');
	$('#submit').on('click', function(){
		event.preventDefault();

		var $email = $('#email').val();
		var $password = $('#password').val();

		$.ajax({
			method: 'POST',
			url: window.location.origin + '/api/password/',
			data: {
				password: $password, 
				email: $email 
			}
		}).done( function(response){
			console.log(response);
		});
	});
});