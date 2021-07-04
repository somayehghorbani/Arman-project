$(function() {
	$(window).scroll(function() {
		var $h = $(window).scrollTop();

		if ($h > 175) {
			$('.header-logo').addClass('animatzoomout');
		} else {
			$('.header-logo').removeClass('animatzoomout');
			// $('.header-logo').addClass("animatzoomin")
		}
	});
});
$(function() {
	$(window).scroll(function() {
		var $h = $(window).scrollTop();

		if ($h < 175) {
			// $('.header-logo').removeClass("animatzoomout")
			$('.header-logo').addClass('animatzoomin');
		} else {
			$('.header-logo').removeClass('animatzoomin');
			//
		}
	});
});
$('#submit').on('click', function validateForm() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	var atPos = email.indexOf('@');
	var dotPos = email.lastIndexOf('.');
	var error = document.getElementById('errormessage');
	if (name == null || name == '') {
		error.innerHTML = 'Please enter your name';
		return false;
	} else if (phone == null || phone == '') {
		error.innerHTML = 'Please enter your phone';
		return false;
	} else if (email == null || email == '') {
		error.innerHTML = 'Please enter your email';
		return false;
	} else if (atPos < 1 || dotPos < atPos || dotPos + 2 >= email.length) {
		error.innerHTML = 'Invalid email address';
		return false;
	} else {
		Email.send({
			Host: 'smtp.gmail.com',
			Username: 'arman.insulators2020@gmail.com',
			Password: 'arman123456',
			To: 'info@Arman-Insulators.com',
			From: 'arman.insulators2020@gmail.com',
			Subject: 'Send Message',
			Body: `Name :${document.getElementById('name').value} ;<br>
    Business : ${document.getElementById('Business').value} ;<br>
    Email :${document.getElementById('email').value} ;<br>
    Telephon :${document.getElementById('phone').value} ;<br>
    Message :${document.getElementById('message').value} ;`,
			document
		}).then(
			(error.innerHTML = 'Message sent')

			// location.reload()
		);
	}
	document.getElementById('name').value = '';
	document.getElementById('Business').value = '';
	document.getElementById('email').value = '';
	document.getElementById('phone').value = '';
	document.getElementById('message').value = '';
});

VanillaTilt.init(document.querySelectorAll('.anycard'), {
	max: 8,
	speed: 400,
	glare: true,
	'max-glare': 0.1,
	perspective: 1000,
	reverse: true,
	scale: 1.05
});
