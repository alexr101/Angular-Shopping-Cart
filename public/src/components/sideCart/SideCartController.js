
angular
	
	.module("app")

	.controller("SideCartController", function($scope, $http, shoppingCart, inventoryData){

		inventoryData.get().$promise.then(function(value) {
			$scope.inventory = value.chocolates;
		});

		
		$scope.cartVisible = false;

		$scope.toggleModalCart = function(){
			$scope.cartVisible = !$scope.cartVisible;
		}

		$scope.items = shoppingCart.getItemsInCart();

		$scope.removeItem = shoppingCart.removeItem;
		$scope.getItemCount = shoppingCart.getItemCount;
		$scope.getItemsInCart = shoppingCart.getItemsInCart;

		console.log($scope.getItemsInCart())



	});
