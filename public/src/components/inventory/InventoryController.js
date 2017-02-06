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

			// Convert all price properties to have 2 decimals 
			// Place them inside new object property to avoid further
			// conversion work
			for(var i = 0; i < $scope.inventory.length; i++){
				$scope.inventory[i]["priceString"] = shoppingCart.dollarRound($scope.inventory[i]["price"]);
			}	
		});
		
	    
    $scope.addItem = shoppingCart.addItem;
    $scope.getItemCount = shoppingCart.getItemCount;
	});
