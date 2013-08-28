/*global define*/

define([
    'underscore',
    'backbone',
    'models/calendar_collection'
], function (_, Backbone, CalendarCollectionModel) {
    'use strict';

    var CalendarCollectionCollection = Backbone.Collection.extend({
        model: CalendarCollectionModel
    });

    return CalendarCollectionCollection;
});