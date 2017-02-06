/**
 * shoppingCart System
 * 
 * Lightweight reusable cart system specializing in chocolate e-commerce :)
 */
angular
	.module("app")
	.factory("shoppingCart", function(){

		var items = [];
		var itemCount = 0;
		var total = 0;

		// Internal functions

		// Adds or subs amount to current shopping cart total
		// will take positive and negative values from other methods	
		function adjustTotal(amount){
			if(total > -1) total = total + amount;
		}

		// Add or subt amt to the item count
		function adjustCount(amount){
			itemCount = itemCount + amount;
		}


		// Public Functions API

		// prompt messages for different cart statuses
		function getMsg(){
			return msg.empty;
		}

		function getItemsInCart(){
			return items;
		}

		// Get the amount of items currently in cart
		function getItemCount(){
			return itemCount;
		}
		
		// Get the balance total in double type
		// Use this for calculations
		function getTotal(){
			return total;
		}

		// Get the balance total in string type
		// Use this for display purposes
		function getStringTotal(){
			return dollarRound(total);
		}
		
		function cartEmptyMsg(){
			return "There are no items in your cart";
		}

		// Remove all items from cart and adjust the count
		function emptyCart(){
			var itemsLength = items.length;
			
			for(var i = items.length-1; i > -1; i--){
				var item = items[i];
				removeItem(item);
			}
		}

		function isEmpty(){
			return (itemCount === 0);
		}

		// Adds a qty property to the item to keep track of 
		// how many items of the same are in the cart
		function addItemQty(item){
			if(!item.qty) item.qty = 1;
			else item.qty++;
		}

		// Add an item to the cart, and update the count
		function addItem(item){
			if(!item.qty) items.push(item);
			addItemQty(item);
			adjustTotal(item.price);
			adjustCount(1);
		}

		// Removes and item from cart, and readjusts total
		function removeItem(item){

			// Make sure cart is not empty
			if(!isEmpty()){

				// remove all the items of this kind from cart count
				adjustCount(item.qty * -1);
				
				// Adjust total based on item qty
				adjustTotal((item.price*item.qty)*-1);

				// Remove the item from array 
				items.splice(items.indexOf(item), 1);
				
				// reset item qty
				// Remember the reference to this item is coming straight from the item data copy in the controller,
				// so the item is never removed we just reuse the same reference. Meaning we
				// have to reset its qty property!
				item.qty = 0;
			}
		}

		// Rounds decimal numbers to two decimal places
		// Note: Returns string
		function dollarRound(num){
			return num.toFixed(2);
		}

		return {			
			getMsg: getMsg,
			getTotal: getTotal,
			getStringTotal, getStringTotal,
			getItemsInCart: getItemsInCart,
			getItemCount: getItemCount,
			addItem: addItem,
			removeItem: removeItem,
			isEmpty: isEmpty,
			emptyCart: emptyCart,
			cartEmptyMsg: cartEmptyMsg,
			dollarRound: dollarRound,
		};

	});

