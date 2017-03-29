/**
 * Created by Computer Clinic on 3/26/2017.
 */
 var app = angular.module('app', []);

 app.controller('ctrl', function ($scope) {
     $scope.callInController = function (city) {
         alert("calling in main controller- "+city);
     }

     $scope.name = 'sachin';
     $scope.city= 'sillod';
 });

 /*
 1. templateUrl - we can give path to new html file
 2. restrict - Four ways to restrict-
                a. as element
                b. as attribute
                c. as css
                d. as commment
 3. isolate scope: create separate scope from parent controller
                a. '@' one way binding (from controller to directive), send data in the form of 'STRING'.
                b. '=' Two way binding, send data as object or string.
                c. '&' call back function, also we can add multiple events.
 4. when scope-
                a. true - inherits scope properties from parent controller.
                b. false - using parent controller properties
                c. {} - separate isolated scope.

 */
 
 app.directive('customDir', function () {
     return {
         restrict: 'EAC',
         templateUrl: 'dir.html',
         scope: {
             oneWay: '@',
             twoWay: '=',
             callBack: '&'
         },
         link: function (scope, iElement, iAttribute) {

         }
     }
 })