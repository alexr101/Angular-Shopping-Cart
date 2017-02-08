describe("Inventory", function(){
	var $controller, $scope, $httpBackend, inventoryData;

	beforeEach(module("app"));

	beforeEach(inject(function(_$controller_, $injector){
		$httpBackend = $injector.get("$httpBackend");
		inventoryData = $injector.get("inventoryData")
		$scope = {};

		$controller = _$controller_("InventoryController",{
			$scope: $scope
		});
	}));


	describe("HTTP Request", function(){
		it("Returns data", function(){
			
			//Create a mockup of the items needed for the test
			var items = { chocolates: { price: 1.5 } };

			$httpBackend.expectGET("./data/inventory.json").respond(items);
			inventoryData.then(function(value){ });
			$httpBackend.flush()

			expect($scope.inventory).toEqual( jasmine.objectContaining({
				price: 1.5
			}) );
		});
	});

	describe("HTTP Request", function(){
		it("Returns price string", function(){
			
			//Create a mockup of the items needed for the test
			var items = { chocolates: [ {price: 1.5} ]  };

			$httpBackend.expectGET("./data/inventory.json").respond(items);
			inventoryData.then(function(value){ });
			$httpBackend.flush()

			//request should create a price string
			expect($scope.inventory[0]).toEqual(jasmine.objectContaining({
				priceString: "1.50"
			}) );
		});
	});
});
