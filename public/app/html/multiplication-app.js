var ngModule = angular.module('MultiplicationApp', []);

ngModule.controller('mainController', function($scope) {
  $scope.items = [1,2,3,4,5];
});

ngModule.directive('multiplicationTable', function() {
  console.log('aaaa');
  return {
    templateUrl : 'html/multiplication-table-tpl.html',
    controllerAs : 'ctrl',
    bindToController: true,
    scope: {
      x : '=',
      y : '='
    },
    restrict: 'E',
    controller : function() {
      var x = this.x || 0;
      var y = this.y || 0;

      var table = this.rows = [];
      for(var i=0;i<y;i++) {
        var array = table[i] = [];
        for(var j=0;j<x;j++) {
          array.push(1); 
        }
      }
    }
  }
});