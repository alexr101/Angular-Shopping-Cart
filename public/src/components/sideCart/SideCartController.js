/**
 * Side Cart Controller
 * 
 * Contains a directive from which we can call the modal cart
 */
angular
	.module("app")
	.controller("SideCartController",[
		"$scope", "shoppingCart",
		function($scope, shoppingCart){
		
		//Brind shopping cart object to the local scope
		//We can now use all the shopping cart functions directly in our view
		$scope.cart = shoppingCart;

	}]);
