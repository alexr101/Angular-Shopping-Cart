
angular
	.module("app")
	.factory("inventoryData", function($http){
		return $http.get("./data/inventory.json");
	});