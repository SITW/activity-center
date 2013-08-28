/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'collections/calendar_collection',
    'jqueryUI',
    'jshashtable',
    'colorpicker',
    'jqueryQtip',
    'jqueryCalendar'
], function ($, _, Backbone, CalActs) {

    var CalendarView = Backbone.View.extend({
        el: 'body',

        events: {
            "click #BtnPreviousMonth": "preMonth",
            "click #BtnNextMonth": "nextMonth"
        },

        initialize: function () {

            var jfcalplugin = $("#clubcal").jFrontierCal({
                date: new Date()
            }).data("plugin");
            var calActs = new CalActs();
            var now = new Date();
            var nmonth = now.getMonth();
            var nyear = now.getFullYear();

            this.updateDate(nyear, nmonth);

            this._jfcalplugin = jfcalplugin;
            this._calActs = calActs

            this.listenTo(calActs, 'add', this.addActs)
            calActs.getData(nyear, nmonth);

        },

        nextMonth: function () {
            this._jfcalplugin.showNextMonth("#clubcal");
            // update the jqeury datepicker value
            var calDate = this._jfcalplugin.getCurrentDate("#clubcal"); // returns Date object
            var cyear = calDate.getFullYear();
            // Date month 0-based (0=January)
            var cmonth = calDate.getMonth();
            var cday = calDate.getDate();

            this.updateDate(cyear, cmonth);

            this._calActs.getData(cyear, cmonth);
            // jquery datepicker month starts at 1 (1=January) so we add 1
            //$("#dateSelect").datepicker("setDate",cyear+"-"+(cmonth+1)+"-"+cday);
            return false;
        },

        preMonth: function () {
            this._jfcalplugin.showPreviousMonth("#clubcal");
            // update the jqeury datepicker value
            var calDate = this._jfcalplugin.getCurrentDate("#clubcal"); // returns Date object
            var cyear = calDate.getFullYear();
            // Date month 0-based (0=January)
            var cmonth = calDate.getMonth();
            var cday = calDate.getDate();

            this.updateDate(cyear, cmonth);

            this._calActs.getData(cyear, cmonth);
            // jquery datepicker month starts at 1 (1=January) so we add 1
            //$("#dateSelect").datepicker("setDate",cyear+"-"+(cmonth+1)+"-"+cday);
            return false;
        },

        addActs: function () {
            var acts = this._calActs.pop().attributes;

            var start_time = eval(acts.activity.start);
            var end_time = eval(acts.activity.end);

            this._jfcalplugin.addAgendaItem(
                "#clubcal",
                acts.activity.title,
                start_time,
                end_time,
                false,
                {
                    "人數": acts.activity.other.population,
                    "申請人姓名": acts.activity.other.name,
                    "活動地點": acts.activity.other.site
                }
            )

        },

        updateDate: function (year, month) {
            $("#date").html(year + ' - ' + month);
        }
    });

    return CalendarView;
});
