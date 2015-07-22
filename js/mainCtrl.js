    app.controller('mainCtrl', function($scope, MainService) {
        
        $scope.getData = function() {
        $scope.data = MainService.getData();
    }
        $scope.getData()
        
        $scope.addData = function(quote, author) {
            MainService.addData(quote, author);
        }
    
});

