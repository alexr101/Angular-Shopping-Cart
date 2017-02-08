	describe("Shopping Cart", function(){
		var shoppingCart;

		beforeEach(module("app"));

		beforeEach(inject(function($injector){
			shoppingCart = $injector.get("shoppingCart");
		}));

		describe("Cart", function(){
			it("should exist", function(){
				expect(shoppingCart).toBeTruthy();
			});
		});

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

		describe("Remove Item", function(){
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
				//create a mockup array of items
				var items = [ { item: "item" }, { item: "item" }, { item: "item" } ];
				
				//Add each item to the cart
				for(var i = 0; i < items.length; i++){ 
					shoppingCart.addItem(items[i]);
				};
	
				shoppingCart.emptyCart();

				expect(shoppingCart.getItemCount()).toEqual(0);
			});
		});

		// Cart starts as invisible
		// Initial toggle call would make it visible (truthy)
		describe("Toggle Cart", function(){
			it("toggles cart visibility property", function(){
				//this should toggle the visibility of the cart
				shoppingCart.toggle();

				expect(shoppingCart.isVisible()).toBeTruthy();
			});
		});

		describe("Dollar round", function(){
			it("rounds doubles to 2 decimal places", function(){
				expect(shoppingCart.dollarRound(1.5)).toEqual('1.50');
			})
		});
	});


