
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
			it("Returns correct data", function(){
				var value; 
				
				//Create a mockup of the items needed for the test
				var items = { chocolates: [ {price: 1.5}, {price: 3.5} ] };
				var itemResults = [{ price: 1.5, priceString: '1.50' }, { price: 3.5, priceString: '3.50' }];

				//Use an array as data response because the 
				//inventory control http call needs a length property inside it
				$httpBackend.expectGET("./data/inventory.json").respond(items);
				inventoryData.then(function(value){ });

				$httpBackend.flush()

				expect($scope.inventory).toEqual( itemResults );
			});
		});
	});
