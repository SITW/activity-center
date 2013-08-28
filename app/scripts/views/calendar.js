/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'jqueryUI',
    'jshashtable',
    'colorpicker',
    'jqueryQtip',
    'jqueryCalendar'
], function ($, _, Backbone, JST) {
    'use strict';

    var CalendarView = Backbone.View.extend({
        template: JST['app/scripts/templates/calendar.ejs'],

        initialize: function () {
            /**
             * Initialize with current year and date. Returns reference to plugin object.
             */
            var jfcalplugin = $("#mycal").jFrontierCal({
                date: new Date(),
                dayClickCallback: myDayClickHandler,
                agendaClickCallback: myAgendaClickHandler,
                agendaDropCallback: myAgendaDropHandler,
                dragAndDropEnabled: true
            }).data("plugin");

            jfcalplugin.addAgendaItem(
                "#mycal",
                "Indiana Jones and the Last Crusade",
                new Date(2013,7,24,1,0,0,0),
                new Date(2013,7,24,23,59,59,999),
                false,
                {
                    fname: "Indiana",
                    lname: "Jones",
                    artifact: "Holy Grail"
                },
                {
                    backgroundColor: "#FF0000",
                    foregroundColor: "#FFFFFF"
                }
            );
            /**
             * Get the date (Date object) of the day that was clicked from the event object
             */
            function myDayClickHandler(eventObj){
                var date = eventObj.data.calDayDate;
                alert("You clicked day " + date.toDateString());
            };
            /**
             * Get the agenda item that was clicked.
             */
            function myAgendaClickHandler (eventObj){
                var agendaId = eventObj.data.agendaId;
                var agendaItem = jfcalplugin.getAgendaItemById("#mycal",agendaId);
            };
            /**
             * get the agenda item that was dropped. It's start and end dates will be updated.
             */
            function myAgendaDropHandler(eventObj){
                var agendaId = eventObj.data.agendaId;
                var date = eventObj.data.calDayDate;
                var agendaItem = jfcalplugin.getAgendaItemById("#mycal",agendaId);
                alert("You dropped agenda item " + agendaItem.title +
                    " onto " + date.toString() + ". Here is where you can make an AJAX call to update your database.");
            };

            console.log(jfcalplugin.getCurrentDate('#mycal'));



            jfcalplugin.setAspectRatio("#mycal",0.75);

        }
    });

    return CalendarView;
});
