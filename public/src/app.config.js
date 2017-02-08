/**
 * Separate configurations by utility to keep concerns separated
 */
angular.module("app")
	
	//Gets rid of unwanted prefixes in routes
	.config(function($locationProvider){
		$locationProvider.hashPrefix("");
	})

	//Ui-routes
	.config(["$stateProvider", "$urlRouterProvider", 
    function($stateProvider, $urlRouterProvider) {
    	//Make shopping our default route for this test
      $urlRouterProvider.otherwise("/shopping");

      $stateProvider
	      .state("shopping", {
	      	url: "/shopping",
	      	views:{
	      		"sideCart": {
	      			templateUrl: "components/sideCart/sideCartView.html",
	      		},
	      		"inventory": {
	      			templateUrl: "components/inventory/inventoryView.html",
	      		},
	      	},
	      });
    }
  ]);
