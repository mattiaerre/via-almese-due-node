(function (contactFormSent) {
	console.log('contactFormSent: ' + contactFormSent);
	if (contactFormSent) {
		location.href = '#feedback';
	}
})(contactFormSent);