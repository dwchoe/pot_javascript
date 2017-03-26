// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone',
  'models/about'
], function($, _, Backbone,About){
  var AboutPageView = Backbone.View.extend({
    el: $(".main"),
    render: function() {
    	console.log('about page render called');
    	var that = this;
    	var about = new About();
    	
    	$.get('templates/about.html', function (data) {
            template = _.template(data,{});//Option to pass any dynamic values to template
            that.$el.html(template({msg : about}));//adding the template content to the main template.
        }, 'html');
    }
  });
  // Returning instantiated views can be quite useful for having "state"
  return AboutPageView;
});