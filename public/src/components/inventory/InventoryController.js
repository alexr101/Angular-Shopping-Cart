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
			fixDecimalPrices($scope.inventory, "price");
		});
		
	function fixDecimalPrices(arr, prop){
		for(var i = 0; i < arr.length; i++){
			var item = arr[i].price;
			item["price"] = item["price"].toFixed(2);
		}
	};
    
    $scope.addItem = shoppingCart.addItem;
    $scope.getItemCount = shoppingCart.getItemCount;
	});
