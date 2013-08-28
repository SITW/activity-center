/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var CalendarModelModel = Backbone.Model.extend({
        defaults: {
            "activity": null
        }
    });

    return CalendarModelModel;
});
