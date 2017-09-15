app.controller("jqueryController",function($scope,$state){
   $scope.test1 = "jqueryController";

      $scope.handlebuttonClick = function(){
        $state.go('php');
     }

});
