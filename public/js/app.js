"use strict";

(function(){
  angular
  .module("compliments", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    "$urlRouterProvider",
    Router
  ])
  .factory("Compliment", [
    "$resource",
    ComplimentFactory
  ])
  .controller("complimentIndexCtrl", [
    "Compliment",
    "$state",
    complimentIndexCtrl
  ]);

  function Router($stateProvider, $locationProvider, $urlRouterProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("index", {
      url: "/compliments",
      templateUrl: "/public/html/comps-index.html",
      controller: "complimentIndexCtrl",
      controllerAs: "vm"
    })
  }



}());
