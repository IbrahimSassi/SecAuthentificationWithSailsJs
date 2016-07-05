angular.module('dashMod')

    .controller('dashCtrl',['$scope','$http',function($scope,$http){
        console.log('dash Controller ...');

        $scope.getUser = function () {
            console.log('Getting Userr ...');

            $http.get('/getUser')
                .then(function onSuccess(user) {
                    console.log(user);
                    $scope.user = user.data;
                })
                .catch(function onError(err) {
                    console.log(err);
                })
        }



    }]);