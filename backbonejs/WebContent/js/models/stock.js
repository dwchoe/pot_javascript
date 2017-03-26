// Filename: models/stock
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var Stock = Backbone.Model.extend({
    defaults: {
      name: "Harry Potter"
    }
  });
  // Return the model for the module
  return Stock;
});