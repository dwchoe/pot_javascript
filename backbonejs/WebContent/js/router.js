// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/about/about',
  'views/contact/contact'
], function($, _, Backbone,AboutView,ContactView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'about' : 'aboutPage',
      'contact': 'contactPage',
      'users': 'showUsers',
      '': 'home',

      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
	console.log('router');
	
    var app_router = new AppRouter;
    
    app_router.on('route:aboutPage', function(){
        console.log('about');
        var aboutView = new AboutView();
        aboutView.render();
    });
    
    app_router.on('route:contactPage', function(){
      console.log('contact');
      var contactView = new ContactView();
      contactView.render();
    });

    app_router.on('route:home', function(){
      console.log('home page');
    });
    
    app_router.on('route:showUsers', function(){
      console.log('show users page');
    });
    
    app_router.on('defaultAction', function(actions){
      console.log('No route:', actions);
    });
    
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});

