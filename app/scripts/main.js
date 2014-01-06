'use strict';

window.addEventListener('load', function () {
    var t = window.performance && window.performance.timing;
    if (t) {
        console.log('___ URI downloaded in', t.responseEnd - t.navigationStart, 'ms');
        console.log('___ DOM loaded in    ', t.domComplete - t.domLoading, 'ms');
        setTimeout(function () {
            console.log('___ Total loadtime   ', t.loadEventEnd - t.navigationStart, 'ms');
        },0);
    }

    // Show flu alert after 2 seconds and then close
    // if (Response.band(720) && $("body").hasClass("index")) {
    //   $(".alert-trigger").delay(5000).trigger("click");

    //   setTimeout(function () {
    //       $(".alert-trigger").trigger("click");
    //   }, 2000);
    // }

}, false);

require(['config'], function() {

    // initialize the app
    require([
        'app'
    ], function (app) {
        app.initialize();
    });
});
