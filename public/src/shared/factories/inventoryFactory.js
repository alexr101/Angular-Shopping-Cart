
angular
	.module("app")
	.factory("inventoryData", function($http, $resource){

		var resource = $resource("./data/inventory.json");

		return resource;
	});