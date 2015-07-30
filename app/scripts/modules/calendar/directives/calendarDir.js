angular.module('calendarApp').controller('calendarDirCtrl', function ($scope) {

});
angular.module('calendarApp').directive('calendar', function () {
    return {
        templateUrl: 'scripts/modules/calendar/views/calendarTpl.html',
        restrict: 'E',
        replace: true,
        controller: 'calendarDirCtrl',
        link: function (scope, element, attrs, ctrl) {
            function createDateObjects(startTime) {
                    var times = [],
                        row,
                        time = new Date(startTime.getTime()),
                        currentHour = time.getHours(),
                        currentDate = time.getDate();

                    for (var hour = 0; hour < 24; hour += 1) {
                        row = [];
                        for (var day = 0; day < 7; day += 1) {
                            time.setHours(currentHour + hour);
                            time.setDate(currentDate + day);
                            row.push({
                                time: new Date(time.getTime())
                            });
                        }
                        times.push(row);
                    }
                    return times;
                }
        }
    }
});
