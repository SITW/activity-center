/*global define*/

define([
    'underscore',
    'backbone',
    'models/calendar_model'
], function (_, Backbone, CalModel) {
    'use strict';

    var CalendarCollection = Backbone.Collection.extend({
        model: CalModel,

        getData: function (year, month) {

            var _this = this;

            $.getJSON("../convert-data/" + year + "/" + year + "-" + (parseInt(month, 10) + 1)  + ".json", function(data) {
                for (var i = data.length - 1; i >= 0; i--) {
                    _this.add({activity: data[i]});
                };

            });
        }
    });

    return CalendarCollection;
});
