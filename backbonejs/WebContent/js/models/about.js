define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var About = Backbone.Model.extend({
    defaults: {
      message: "My Message from Model"
    }
  });
  // Return the model for the module
  return About;
});