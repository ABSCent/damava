var calendarApp = angular.module('calendarApp', ['angularMoment']);
calendarApp.constant('angularMomentConfig', {
    preprocess: 'unix', // optional
    timezone: 'Europe/London' // optional
});
