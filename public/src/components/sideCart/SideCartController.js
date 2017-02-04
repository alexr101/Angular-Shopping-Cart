
angular
	
	.module("app")

	.controller("SideCartController", function($scope, $http, shoppingCart, inventoryData){

		inventoryData.get().$promise.then(function(value) {
			$scope.items = value.chocolates;
		});

		
		$scope.cartVisible = false;

		$scope.toggleModalCart = function(){
			$scope.cartVisible = !$scope.cartVisible;
		}

		$scope.getItemCount = shoppingCart.getItemCount;
		$scope.getItemsInCart = shoppingCart.getItemsInCart;

		console.log($scope.getItemsInCart())



	});
