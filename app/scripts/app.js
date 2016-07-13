'use strict';
// TODO: put iffe around this e.g. (function() {})

var app = angular.module('smartApp',['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/patient', {
        templateUrl: 'app/views/patient.html',
        controller: 'MainCtrl'
    })
    .when('/labs', {
        templateUrl: 'views/labs.html',
        controller: 'MainCtrl'
    })
    .when('/meds', {
        templateUrl: 'views/meds.html',
        controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/patient'
    });
});
