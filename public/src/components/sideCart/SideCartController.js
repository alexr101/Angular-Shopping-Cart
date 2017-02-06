
angular
	
	.module("app")

	.controller("SideCartController", function($scope, $http, shoppingCart, inventoryData){
		
		$scope.getStringTotal = shoppingCart.getStringTotal;
		$scope.removeItem = shoppingCart.removeItem;
		$scope.getItemCount = shoppingCart.getItemCount;

		//Array of items currently in cart
		$scope.items = shoppingCart.getItemsInCart();
		
		//Determines whether the cart will be visible in the view
		$scope.cartVisible = false;

		//Check if cart is empty
		$scope.isEmpty = shoppingCart.isEmpty;

		//Remove all items from shopping cart
		$scope.emptyCart = shoppingCart.emptyCart;

		//Returns a cart is empty msg 
		$scope.cartEmptyMsg = shoppingCart.cartEmptyMsg();

		//Toggles cart visibility
		$scope.toggleModalCart = function(){
			$scope.cartVisible = !$scope.cartVisible;
		};

	});
