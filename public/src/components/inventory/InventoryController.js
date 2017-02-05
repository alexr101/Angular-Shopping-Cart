/**
 * Shopping Controller
 * 
 * Gets inventory data from local json file, and sends it
 * to the shopping view through $scope.items
 */
angular
	
	.module("app")

	.controller("InventoryController", function($scope, $http, shoppingCart, inventoryData){

  	inventoryData.get().$promise.then(function(value) {
			$scope.inventory = value.chocolates;
		});
    
    $scope.addItem = shoppingCart.addItem;
    $scope.getItemCount = shoppingCart.getItemCount;
	});
