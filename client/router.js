Router.map(function() {

  this.route('home', {
    path: '/',
    template: 'basic'
  });

  this.route('graph', {
    path: '/graph',
    template: 'graph'
  });

});
