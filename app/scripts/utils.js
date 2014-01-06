define(function(require, exports, module) {
    'use strict';

    var app = require('app');
	var utils = {};

	utils.noop = function() {
        console.log('  ==> dependencies: ', app); // REMOVE ME
    };

	return utils;
});
