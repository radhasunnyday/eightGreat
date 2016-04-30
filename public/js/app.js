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
  ])
  .controller("complimentShowCtrl", [
    "Compliment",
    "$stateParams",
    complimentShowCtrl
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
    .state("show", {
      url: "/compliments/:title",
      templateUrl: "/public/html/comps-show.html",
      controller: "complimentShowCtrl",
      controllerAs: "vm"
    });
    $urlRouterProvider.otherwise("/");
  }

  function ComplimentFactory($resource){
    var Compliment = $resource("/api/compliments/:title", {}, {
      update:  {method: "PUT"}
    });
    Compliment.all = Compliment.query();
    Compliment.find = function(property, value, callback){
      Compliment.all.$promise.then(function(){
        Compliment.all.forEach(function(compliment){
          if(compliment[property] == value) callback(compliment);
        });
      });
    };
    return Compliment;
  }

  function complimentIndexCtrl(Compliment, $state){
    var vm = this;
    vm.compliments = Compliment.all;
  }

  function complimentShowCtrl(Compliment, $stateParams){
    var vm = this;
    Compliment.find("title", $stateParams.title, function(compliment){
      vm.compliment = compliment;
    });
  }

}());
