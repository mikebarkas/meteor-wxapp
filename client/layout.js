Template.layout.currentweather = function() {

	var city = Session.get('city');

	Meteor.call('getWeather', city, function (error, results) {
		console.log(results.content);
		Session.set('weather', JSON.parse(results.content).weather[0].description);
		Session.set('weather2', JSON.parse(results.content).weather[0].main);
		Session.set('weather3', JSON.parse(results.content).wind.speed);
		
	})

	return (Session.get('weather') + ' in ' + city);
	//return (Session.get('weather3') + ' wind ' + city);
};

Template.layout.events({
	
	'change .cities': function (evt, tmpl) {
		Session.set('city', tmpl.find('.cities').value);
	}

});