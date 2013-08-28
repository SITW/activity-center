/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },

        jqueryUI: {
            deps: ['jquery']
        },

        jshashtable: {
            deps: ['jquery']
        },

        colorpicker: {
            deps: ['jquery']
        },

        jqueryQtip: {
            deps: ['jquery']
        },

        jqueryCalendar: {
            deps: ['jquery', 'jshashtable']
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: 'vendor/bootstrap',
        jqueryCalendar: '../bower_components/jquery-frontier-cal/js/frontierCalendar/jquery-frontier-cal-1.3.2.min',
        jqueryUI: '../bower_components/jquery-frontier-cal/js/jquery-ui/smoothness/jquery-ui-1.8.1.custom.min',
        jshashtable: '../bower_components/jquery-frontier-cal/js/lib/jshashtable-2.1',
        colorpicker: '../bower_components/jquery-frontier-cal/js/colorpicker/colorpicker',
        jqueryQtip: '../bower_components/jquery-frontier-cal/js/jquery-qtip-1.0.0-rc3140944/jquery.qtip-1.0'
    }
});

require([
    'backbone',
    'views/calendar'

], function (Backbone, viewCal) {
    Backbone.history.start();

    var viewCal = new viewCal();


});
