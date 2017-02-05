
angular
	
	.module("app")

	.controller("SideCartController", function($scope, $http, shoppingCart, inventoryData){
		
		//Array of items currently in cart
		$scope.items = shoppingCart.getItemsInCart();
		
		//Determines whether the cart is visible in the view
		$scope.cartVisible = false;
		
		$scope.getTotal = shoppingCart.getTotal;
		$scope.removeItem = shoppingCart.removeItem;
		$scope.getItemCount = shoppingCart.getItemCount;
		
		//Toggles cart visibility
		$scope.toggleModalCart = function(){
			$scope.cartVisible = !$scope.cartVisible;
		};

		$scope.cartEmpty = shoppingCart.isEmpty;
		$scope.cartEmptyMsg = shoppingCart.cartEmptyMsg();

		

	});
