app.controller("angularController",function($scope,$state){
   $scope.test1 = "angularController";

      $scope.handlebuttonClick = function(){
      $state.go('jquery');
   }

});
