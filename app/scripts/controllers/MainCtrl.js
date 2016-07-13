var app = angular.module('smartApp');

app.controller('MainCtrl',function($scope) {
  $scope.patient = {
    mrn: '123',
    familyName: 'Jones',
    givenName: 'Joe'  
  };
  $scope.patient.labs = [{code:'Na',value:'140',collectDate:'07/01/2016'}, {code:'SCR',value:'1.7',collectDate:'07/03/2016'}];

  $scope.searchByMRN = function() {
    $scope.searchString = 'test';
  };

});
