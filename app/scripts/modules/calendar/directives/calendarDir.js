angular.module('calendarApp').directive("calendar", function () {
    return {
        restrict: "E",
        templateUrl: 'scripts/modules/calendar/views/calendarTpl.html',
        scope: {
            selected: "="
        },
        link: function (scope) {
            scope.selected = _removeTime(scope.selected || moment());
            scope.month = scope.selected.clone();
            var start = scope.selected.clone();
            scope.next = function () {
                start.add(1, 'days');
                _buildWeek(scope, start, scope.month);
            };

            scope.previous = function () {
                start.subtract(1, 'days');
                _buildWeek(scope, start, scope.month);

            };
            _buildHours(scope);
            _buildWeek(scope, start, scope.month);
        
        }

    };

    function _removeTime(date) {
        return date.day(0).hour(0).minute(0).second(0).millisecond(0);
    }

    function _buildWeek(scope, date, month) {
        scope.days = [];
        for (var i = 0; i < 7; i++) {
            scope.days.push({
                name: date.format("ddd"),
                number: date.date(),
                date: date
            });
            date = date.clone();
            date.add(1, "d");
        }
        console.log(scope.days);
    }

    function _buildHours(scope) {
        var isHalf = false;
        scope.hours = [];
        for (var i = 0; i <= 23; i++) {
            if (i < 10) {
                scope.hours.push({
                    time: "0" + i + ":00",
                    isHalf: false
                });
                scope.hours.push({
                    time: "0" + i + ":30",
                    isHalf: true
                });
            } else {
                scope.hours.push({
                    time: i + ":00",
                    isHalf: false
                });
                scope.hours.push({
                    time: i + ":30",
                    isHalf: true
                });
            }
        }
    }
});
