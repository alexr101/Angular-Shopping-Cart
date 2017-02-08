/**
 * Inventory not tested here 
 * 
 */
describe("InventoryController", function(){
	var $controller, $scope, shoppingCart, $httpBackend, inventoryData;

	beforeEach(module("app"));
	
	beforeEach(inject(function(_$controller_, $injector){
		$httpBackend = $injector.get("$httpBackend");
		inventoryData = $injector.get("inventoryData")
		shoppingCart = $injector.get("shoppingCart");
		$scope = {};

		$controller = _$controller_("InventoryController",{
			$scope: $scope
		});
	}));

	describe("$scope.shoppingCart", function(){
		it("to equal shopping cart factory object", function(){
			expect($scope.shoppingCart).toEqual(shoppingCart);
		});
	});

});
