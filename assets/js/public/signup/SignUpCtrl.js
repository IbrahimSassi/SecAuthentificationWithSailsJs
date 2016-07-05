angular.module('SignUpMod')

.controller('SignUpCtrl',['$scope','$http',function($scope,$http){
    console.log('Sign Up Contoller ...');
    
    $scope.runSignup = function(){
        console.log('SignIn Up ' + $scope.name);
        
        //Submit to sail server
        
        $http.post('/signup',{
            name: $scope.name,
            email: $scope.email,
            password:  $scope.password
        })
        .then(function onSuccess(response){
            window.location = '/user';
        })
        .catch(function onError(error){
            console.log(error);
        })
       
    }
    
    
}]);