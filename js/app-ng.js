"use strict"; 

angular.module('thisApp',[
  'thisApp.footer',
  // 'thisApp.service'
])
.controller('appCtrl', ['$scope', function($scope){
   $scope.date = new Date();
   $scope.url = "http://www.omdbapi.com/?";
   // $scope.data = getAPI($scope.url);
}])

