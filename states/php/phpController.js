app.controller("phpController",function($scope,$state){
   $scope.test1 = "phpController";

   $scope.handlebuttonClick = function(){
      $state.go('js');
   }

});
