define(function(require, exports, module) {
    'use strict';

    // var $ = require('jquery');
    // var _ = require('underscore');
    var Backbone = require('backbone');
    var JST = require('templates');
    var app = require('app');

    var ModuleTemplate = app.module();

    /**
     * Module model
     *
     * @return {Object} extended Backbone Module model
     */
    ModuleTemplate.Models.Default = Backbone.Model.extend({});



    /**
     * Module collection
     *
     * @return {Object} extended Backbone Module collection
     */
    ModuleTemplate.Collections.Default = Backbone.Collection.extend({});



    /**
     * Module view
     *
     * @return {Object} extended Backbone Module view
     */
    ModuleTemplate.Views.Default = Backbone.View.extend({
        template: JST['app/scripts/templates/moduleTemplate.hbs'],

        el: '[data-module-type="moduleTemplate"]',

        model: new ModuleTemplate.Models.Default(),

        initialize: function() {
            var self = this;

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
    ModuleTemplate.initialize = function() {
        new ModuleTemplate.Views.Default();
    };

    return ModuleTemplate;
});
