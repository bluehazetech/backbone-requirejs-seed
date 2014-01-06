define(function(require, exports, module) {
    'use strict';

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');

    // alias the module for easier identification
    var app = module.exports;

    // 3rd-party libs to be initialized BEFORE app modules are loaded
    var beforeModules = function beforeModules() {
        // new FastClick(document.body);
    };

    // 3rd-party libs to be initialized AFTER app modules are loaded
    var afterModules = function afterModules() {};

    return _.extend(app, {
        /**
         * prepare modules for MVC usage
         *
         * @return {Object} app.module
         */
        module: function module( additionalProps ) {
            return _.extend({
                Models: {},
                Collections: {},
                Views: {}
            }, additionalProps);
        },

        /**
         * Bootstrap the app, and initialize the appropriate modules.
         *
         * @return {Object} app
         */
        initialize: function initialize() {
            console.log('••• app.initialize'); // REMOVE ME

            beforeModules();

            // Instantiate all modules
            var moduleElements = $('[data-module-type]');
            moduleElements.each(function () {
                app.createModule(this);
            });

            afterModules();

            // Overwrite the initialize function so that it cannot be called
            // again. If it is called again, log the attempt to console.
            app.initialize = function () {
                if (console && console.trace) {
                    console.trace();
                }
                console.log('Warning: Attempting to run start function more than once!');
            };

            return app;
        },

        /**
         * Take an element and convert it and its contents into a module.
         *
         * This script expects the element to have a "data-module-type" attribute
         * specifying which module constructor to use.
         *
         * @param {HTMLElement} elem The containing element of the module.
         *
         * @return {object} The object representing the module.
         */
        createModule: function createModule( elem ) {
            var moduleType = elem.getAttribute('data-module-type');
            var module = null;
            var modules = app.modules = [];
            var start = $.now();
            var end;

            console.log('~~~ Module:', moduleType);

            require(['modules/' + moduleType], function ( Module ) {
                module = new Module.initialize(elem);
                end = $.now();
                console.log('###', moduleType, 'module loaded in', end - start, 'ms');
            }, function( err ) {
                console.log('Attempted to initialize a', moduleType, 'using', elem, 'but there was an error:', err);
            });

            if (module) {
                modules.push(module);
            }
        }
    }, Backbone.Events);
});
