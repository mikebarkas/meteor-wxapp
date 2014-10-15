Template.layout.helpers( {

	wx : function () {
		// Set a default.
		var city = Session.setDefault('city', 'Charlotte,NC');
		// Get select list.
		var city = Session.get('city');

		Meteor.call('getWeather', city, function (error, results) {
			console.log(results.statusCode, results.content);

			Session.set('wx', JSON.parse(results.content));

		});

		return (Session.get('wx'));
	},

});

// Subtract from Kelvin.  kelvin - 273.15 = f.

Template.layout.events({
	'change .cities': function (evt, tmpl) {
		Session.set('city', tmpl.find('.cities').value);
	}
});
