angular.module('LoginMod')

    .controller('LoginCtrl',['$scope','$http','toastr',function($scope,$http,toastr){
        console.log('Login Controller ...');


        $scope.runLogin = function () {
            console.log('Login Submited');

            $http.put('/login',{
                email: $scope.email,
                password : $scope.password
            }).then(function onSuccess() {
                console.log('Success');
             //   window.location('/');
            }).catch(function onError(err) {
                if(err.status == 400 || 404){
                    toastr.error('Invalid Credentials , Please try again','Error',{
                        closeButton:true
                    });
                    return;
                }
                toastr.error('An error hac occured , Please try again','Error',{
                    closeButton:true
                });
                return;

            })

        }


    }]);