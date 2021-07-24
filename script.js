$(function () {
	$(window).scroll(function () {
		var $h = $(window).scrollTop();

		if ($h > 175) {
			$('.header-logo').addClass('animatzoomout');
		} else {
			$('.header-logo').removeClass('animatzoomout');
			// $('.header-logo').addClass("animatzoomin")
		}
	});
});
$(function () {
	$(window).scroll(function () {
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
			To: 'sghkkdoa2@gmail.com',
			From: 'arman.insulators2020@gmail.com',
			Subject: 'Send Message',
			Body: `Name :${document.getElementById('name').value} ;<br>
    Business : ${document.getElementById('Business').value} ;<br>
    Email :${document.getElementById('email').value} ;<br>
    Telephon :${document.getElementById('phone').value} ;<br>
    Message :${document.getElementById('message').value} ;`,
			document
		}).then(
			// (error.innerHTML = 'Message sent')

			// location.reload()
		);

	}
	modal.style.visibility = "visible";
	modal.style.cursor = "pointer"
	document.getElementById('name').value = '';
	document.getElementById('Business').value = '';
	document.getElementById('email').value = '';
	document.getElementById('phone').value = '';
	document.getElementById('message').value = '';
	document.getElementById('errormessage').innerHTML = '';
});
// Get the modal
var modal = document.getElementById("popup");

// Get the button that opens the modal
var btn = document.getElementById("submit");

// Get the <span> element that closes the modal
var spanclose = document.getElementById("spanclose");
// Get the <span> element that closes the modal
var buttomclose = document.getElementById("buttomclose");
 

// When the user clicks on <span> (x), close the modal
spanclose.onclick = function () {
	modal.style.visibility = "hidden";

}
// When the user clicks on buttom, close the modal
buttomclose.onclick = function () {
	modal.style.visibility = "hidden";

}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.visibility = "hidden";
	}
}





VanillaTilt.init(document.querySelectorAll('.anycard'), {
	max: 8,
	speed: 400,
	glare: true,
	'max-glare': 0.1,
	perspective: 1000,
	reverse: true,
	scale: 1.05
});