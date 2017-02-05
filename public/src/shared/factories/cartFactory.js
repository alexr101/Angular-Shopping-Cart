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

		// Adds $ amount to current shopping cart total
		// will take positive and negative values from other methods	
		function adjustTotal(amount){
			if(total > -1) total = total + amount;
		}

		// Add amt to the item count
		function adjustCount(amt){
			itemCount = itemCount + amt;
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
		
		//Get the balance total for the cart contents
		function getTotal(){
			return total;
		}
		
		function cartEmptyMsg(){
			return "This cart is empty";
		}

		// Remove all items from cart and adjust the count
		function emptyCart(){
			var itemsLength = items.length;
			
			for(var i = items.length-1; i > -1; i--){
				console.log(items)
				var item = items[i];
				console.log(item);
				removeItem(item);
			}
			//adjustCount((items.length-1)*-1);
			//items = [];
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

		return {			
			getMsg: getMsg,
			getItemsInCart: getItemsInCart,
			getItemCount: getItemCount,
			addItem: addItem,
			removeItem: removeItem,
			isEmpty: isEmpty,
			emptyCart: emptyCart,
			cartEmptyMsg: cartEmptyMsg,
		};

	});

