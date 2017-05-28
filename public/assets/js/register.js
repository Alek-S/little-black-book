$(document).ready(function(){

	$('#submit').on('click', function(){
		event.preventDefault();

		// form fields
		var $email = $('#email').val();
		var $password = $('#password').val();
		var $passwordconfirm = $('#passwordConfirm').val();
		var $firstName = $('#firstName').val();
		var $lastName = $('#lastName').val();
		var $gender = $('#gender').val();
		var $age = $('#age').val();
		var $state = $('#state').val();
		var $zip = $('#zip').val();

		var $error = $('#errorMsg');
		var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var alphaRegEx= /^[A-Za-z]+$/;

		if( !emailRegEx.test($email) ){
			$error.hide();
			$error.text('Error: Email not formatted correctly');
			$error.fadeIn();
		}else if( $password !== $passwordconfirm ){
			$error.hide();
			$error.text('Error: Passwords do not match');
			$error.fadeIn();
		}else if( $password.length < 6 ){
			$error.hide();
			$error.text('Error: Passwords too short (min length 6)');
			$error.fadeIn();
		}else if( !alphaRegEx.test($firstName) || !alphaRegEx.test($lastName) ){
			$error.hide();
			$error.text('Error: Name not formatted correctly');
			$error.fadeIn();
		}else if( $zip.length !== 5 ){
			$error.hide();
			$error.text('Error: Zipcode not formatted correctly');
			$error.fadeIn();
		}else{
			alert('passed');
			$.ajax({
				method: 'POST',
				url: window.location.origin + '/api/user/new',
				data: {
					email: $email,
					firstName: $firstName,
					lastName: $lastName,
					password: $password,
					gender: $gender,
					age: $age,
					state: $state,
					zip: $zip, 
				}
			}).done( function(response){

				if(response === true){
					//if registration passed
					location.replace('/');
				}

			});
		}
	});

});