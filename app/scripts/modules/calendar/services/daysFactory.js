angular.module('calendarApp').factory('daysFactory',function($http){
  return{
    getList:function(path) {
      return $http.get(path);
    }
  }
});
