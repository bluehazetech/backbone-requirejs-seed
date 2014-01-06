define(function(require, exports, module) {
    'use strict';

    // var $ = require('jquery');
    // var _ = require('underscore');
    var Backbone = require('backbone');
    var JST = require('templates');
    var app = require('app');

	var Module = app.module();

    /**
     * A-spot model
     *
     * @return {Object} extended Backbone A-spot model
     */
	Module.Models.Default = Backbone.Model.extend({});



    /**
     * A-spot collection
     *
     * @return {Object} extended Backbone A-spot collection
     */
	Module.Collections.Default = Backbone.Collection.extend({});



    /**
     * A-spot view
     *
     * @return {Object} extended Backbone A-spot view
     */
	Module.Views.Default = Backbone.View.extend({
		template: JST['app/scripts/templates/module.hbs'],

		el: '[data-module-type="module"]',

		model: new Module.Models.Default(),

		initialize: function() {
			var self = this;

			self.model.set('moduleDataKey', 'moduleDataValue');

			self.render();
		},

		render: function() {
			var self = this;
			var html = self.template(self.model.toJSON());

			self.$el.html(html);
		}
	});


	// *************************************************************************
	// initialize the module - gets called by app.js
	// *************************************************************************
	Module.initialize = function() {
		new Module.Views.Default();
	};

    return Module;
});
