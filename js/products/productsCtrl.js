var app = angular.module('miniRouting');
app.controller('productsCtrl', function($scope, $stateParams, productsService) {

	if ($stateParams.id === 'shoes') {
		$scope.productData = productsService.shoeData;
	}
	else if ($stateParams.id === 'socks') {
		$scope.productData = productsService.sockData;
	};

});