app.controller("jsController",function($scope,$state){
   $scope.test1 = "jsController";

      $scope.handlebuttonClick = function(){
        $state.go('css');
     }
});