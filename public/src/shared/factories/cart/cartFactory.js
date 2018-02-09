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
		var cartVisible = false;

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

		function itemInCart(item){
			return item.qty > 0;
		}
		
		// Adds a qty property to the item to keep track of 
		// how many items of the same are in the cart
		function addItemQty(item, quantity){
			if(!item.qty) item.qty = quantity;
			else item.qty += quantity;
		}

		// Public Functions API
		
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

		function getItemCount(item) {
			return item.qty
		}
		
		//Message when the cart is empty
		function getEmptyMsg(){
			return "There are no items in your cart";
		}

		// Get the amount of items currently in cart
		function getTotalItemCount(){
			return itemCount;
		}
		
		//Get an array of the items in the cart
		function getItemsInCart(){
			return items;
		}

		// Add an item to the cart, and update the count
		function addItem(item, qty){
			qty = qty || 1;
			if(!item.qty) items.push(item);
			addItemQty(item, qty);
			adjustTotal(item.price);
			adjustCount(qty);

			return items;
		}

		// Removes and item from cart, and readjusts total
		function removeItem(item){

			// Make sure cart is not empty
			if((!isEmpty()) && itemInCart(item) ){

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
		
		// Remove all items from cart and adjust the count
		function emptyCart(){
			var itemsLength = items.length;
			
			for(var i = items.length-1; i > -1; i--){
				var item = items[i];
				removeItem(item);
			}
		}
		
		// Toggle the view for the cart
		function toggle(){
			cartVisible = !cartVisible;
		}

		// Returns boolean to determine if cart is currently visible
		function isVisible(){
			return cartVisible;
		}
		
		function isEmpty(){
			return (itemCount === 0);
		}

		// Rounds decimal numbers to two decimal places
		// Note: Returns string
		function dollarRound(num){
			return num.toFixed(2);
		}

		return {			
			getTotal: getTotal,
			getStringTotal: getStringTotal,
			getEmptyMsg: getEmptyMsg,
			getItemCount: getItemCount,
			getTotalItemCount: getTotalItemCount,
			getItemsInCart: getItemsInCart,
			addItem: addItem,
			removeItem: removeItem,
			emptyCart: emptyCart,
			toggle: toggle,
			isVisible: isVisible,
			isEmpty: isEmpty,
			dollarRound: dollarRound,
		};
	});
