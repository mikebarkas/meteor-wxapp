Template.layout.helpers( {

	
	description : function () {
		// Set a default.
		var city = Session.setDefault('city', 'Charlotte,NC');
		var city = Session.get('city');

		Meteor.call('getWeather', city, function (error, results) {
			console.log(results.statusCode, results.content);

			Session.set('weather', JSON.parse(results.content).weather[0].description);

		});

	return (Session.get('weather'));

	},


	icon : function () {
		var city = Session.get('city');

		Meteor.call('getWeather', city, function (error, results) {
			
			Session.set('icon', JSON.parse(results.content).weather[0].icon);
		
		});

		return Session.get('icon');
	},


	temp : function () {
		var city = Session.get('city');

		Meteor.call('getWeather', city, function (error, results) {

			Session.set('temp', JSON.parse(results.content).main.temp);

		});
		// Subtract from Kelvin.
		return (Session.get('temp') - 273.15);
	},


	humidity : function () {
		var city = Session.get('city');

		Meteor.call('getWeather', city, function (error, results) {

			Session.set('humidity', JSON.parse(results.content).main.humidity);

		});
		
		return Session.get('humidity');
	}

});


Template.layout.events({
	
	'change .cities': function (evt, tmpl) {

		Session.set('city', tmpl.find('.cities').value);
		
	}

});