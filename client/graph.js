// graph js

Template.graph.helpers({

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

Template.graph.events({
  'change .cities': function (evt, tmpl) {
    Session.set('city', tmpl.find('.cities').value);
  }
});



Template.graph.rendered = function() {


$('#chart').highcharts({

        chart: {
            type: 'column'
        },
        title: {
            text: 'name'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges', 'Grapes']
        },
        yAxis: {
            title: {
                text: 'Fruit Eaten'
            }
        },
        colors: ['#39c733', '#336699', '#222222', '#f7a35c', '#8085e9'],
        series: [{
            name: 'Jane',
            data: [1, 0, 2, 3]
        }, {
            name: 'Tom',
            data: [2, 3, 3, 1]
        }, {
          name: 'Mike',
          data: [2, 1, 3, 4]
        }],
        credits: { enabled: false}
    });

}
