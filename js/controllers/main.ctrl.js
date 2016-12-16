app.controller('mainCtrl', function($scope){
    $scope.containers = {
        moreLpContainerShow:    false,
        moreOtherShow:          false
    };

    $scope.showMore = function(containerName){
        $scope.containers[containerName] = !$scope.containers[containerName];
    }
});