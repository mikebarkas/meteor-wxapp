// graph js

Template.graph.helpers({

});

Template.graph.rendered = function() {




$('#chart').highcharts({

        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
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
