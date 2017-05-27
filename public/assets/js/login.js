$(document).ready(function(){

	$('#submit').on('click', function(){
		event.preventDefault();

		var $email = $('#email').val();
		var $password = $('#password').val();
		var $error = $('#errorMsg');
		var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		//if email is formatted correctly make ajax call to check
		if( emailRegEx.test($email)){
			$.ajax({
				method: 'POST',
				url: window.location.origin + '/api/password/',
				data: {
					password: $password, 
					email: $email 
				}
			}).done( function(response){

				if(response === true){
					//if login passed
					location.reload();
				}else{
					//login failed, notify user
					$error.hide();
					$error.text('Error: Incorrect email or password');
					$error.fadeIn();
				}
			});
		}else{
			//email not formatted correctly
			$error.hide();
			$error.text('Error: Email not formatted correctly');
			$error.fadeIn();
		}
	});
});