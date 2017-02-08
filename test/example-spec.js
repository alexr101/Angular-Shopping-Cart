
describe("controllers", function(){
	describe("inventoryController", function(){

		beforeEach(module("app"));

		var $controller, $scope, shoppingCart, $httpBackend, inventoryData;

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

	describe("Shopping Cart", function(){
		var shoppingCart;

		beforeEach(module("app"));

		beforeEach(inject(function($injector){
			shoppingCart = $injector.get("shoppingCart");
		}));

		describe("Cart", function(){
			it("should exist", function(){
				expect(shoppingCart).toBeTruthy();
			})
		})

		describe("Add item", function(){

			var tempItem = { price: 5 };

			it("add item price to total", function(){

				shoppingCart.addItem(tempItem);

				expect(shoppingCart.getTotal()).toEqual(5);
			});

			it("adds 1 to total items in cart count", function(){

				shoppingCart.addItem(tempItem);

				expect(shoppingCart.getItemCount()).toEqual(1);
			});

		});

		describe("Remove Item",function(){
			var tempItem1 = { price: 7 };
			var tempItem2 = { price: 5 };

			it("subtracts item price from total", function(){

				shoppingCart.addItem(tempItem1)
				shoppingCart.addItem(tempItem2);
				shoppingCart.removeItem(tempItem2);

				expect(shoppingCart.getTotal()).toEqual(7);
			});

			it("cannot remove item that is not in cart", function(){
				
				shoppingCart.removeItem(tempItem2);

				expect(shoppingCart.getItemCount()).toEqual(0);
			});

			it("cannot adjust total to less than 0", function(){
				
				shoppingCart.removeItem(tempItem2);

				expect(shoppingCart.getTotal()).toEqual(0);
			});

			it("removes all items from this type from the cart", function(){

				shoppingCart.addItem(tempItem1);
				shoppingCart.addItem(tempItem2);
				shoppingCart.removeItem(tempItem2);

				expect(shoppingCart.getItemCount()).toEqual(1);
			});
		});

		describe("Empty Cart", function(){
			it("removes all items from cart", function(){

				var items = [ { item: "item" }, { item: "item" }, { item: "item" } ];

				for(var i = 0; i < items.length; i++){ 
					shoppingCart.addItem(items[i]);
				};

				shoppingCart.emptyCart();

				expect(shoppingCart.getItemCount()).toEqual(0);

			});
		});

		// Cart starts invisible
		// Initial toggle call would make it visible (truthy)
		describe("Toggle Cart", function(){
			it("toggles cart visibility property", function(){

				shoppingCart.toggle();

				expect(shoppingCart.isVisible()).toBeTruthy();
			});
		});



	});
});

describe("factories", function(){

	describe("inventory", function(){

		beforeEach(module("app"));

		var $controller, $scope, $httpBackend, inventoryData;

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

				var items = { chocolates: [ {price: 1.5}, {price: 3.5} ] };
				var itemResults = [{ price: 1.5, priceString: '1.50' }, { price: 3.5, priceString: '3.50' }];

				//Use an array as data response because the 
				//inventory control http call needs a length property inside it
				$httpBackend.expectGET("./data/inventory.json").respond(items);
				inventoryData.then(function(value){ });

				$httpBackend.flush()

				expect($scope.inventory).toEqual( itemResults );
			})
			
		})

	});

})

describe("Directives", function(){

	var $rootScope, $compile;

	beforeEach(module("app"));

	beforeEach(inject(function(_$rootScope_, _$compile_){
		$rootScope = _$rootScope_;
		$compile = _$compile_;
	}));

	describe("view", function(){
		it("renders", function(){
			var element = $compile("<modal-cart></modal-cart>")($rootScope);
			//$rootScope.$digest();
			
			console.log(element)


			expect(element.html()).toContain("Your cart");
		})
	})
})






