define(function(require, exports, module) {
    'use strict';

    // app dependencies
    var $ = require('jquery');
    // var _ = require('underscore');
    // var Backbone = require('backbone');
    // var JST = require('templates');
    // var app = require('app');

    // module dependencies
    var ASpot = require('modules/aspot');

    // module tests
    describe('A-Spot Module', function() {
        var module;

        beforeEach(function() {
            module = $('<div data-module-type="aspot">');
            $(document.body).append(module);
        });

        it('should have a default view', function() {
            var view = new ASpot.Views.Default();

            expect(view.$el.length).toBe(1);
        });

        afterEach(function() {
            module.remove();
            module = null;
        });
    });
});
