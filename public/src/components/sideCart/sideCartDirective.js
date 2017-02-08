/**
 * Modal Cart Directive
 * 
 * Get the modal cart widget from the shared folder
 */
angular
	.module("app")
	.directive("modalCart", function(){
		
  	return{
  		restrict: "E",
  		replace: true,
  		templateUrl: "shared/partials/modalCart.html",
  	}
	});
