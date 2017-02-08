/**
 * Shopping Controller
 * 
 * Gets inventory data from local json file, and sends it
 * to the shopping view through $scope.items
 */
angular
	
	.module("app")

	.controller("InventoryController", function($scope, $http, shoppingCart, inventoryData){

		$scope.shoppingCart = shoppingCart;

		// Get inventory data
  	inventoryData.then(function(value) {
			$scope.inventory = value.data.chocolates;

			// Convert all price properties to have 2 decimals 
			// Place them inside new object property to avoid further
			// conversion work
			for(var i = 0; i < $scope.inventory.length; i++){
				$scope.inventory[i]["priceString"] = shoppingCart.dollarRound($scope.inventory[i]["price"]);
			}	
		});

	});
