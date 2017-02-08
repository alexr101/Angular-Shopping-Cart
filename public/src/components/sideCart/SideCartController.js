
angular
	
	.module("app")

	.controller("SideCartController", function($scope, $http, shoppingCart, inventoryData){
		
		//Brind shopping cart object to the local scope
		$scope.cart = shoppingCart;

	});
