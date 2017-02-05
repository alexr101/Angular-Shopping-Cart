/**
 * Shopping Controller
 * 
 * Gets inventory data from local json file, and sends it
 * to the shopping view through $scope.items
 */
angular
	.module("app")
	.directive("addToCartBtn", function(){

  	return{
  		restrict: "E",
  		scope: false,
  		replace: false,
  		templateUrl: "shared/widgets/modalCart.html",
  		link: function(scope, elem, attrs){
  			//elem.bind
  			return console.log("hello");
  		}
  	}
	});
