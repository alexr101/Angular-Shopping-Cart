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
		var balance = 0;
		var msg = {
			empty: "This cart is empty",
		};

		// Internal functions


		//Adds $ amount to current shopping cart balance
		//will take positive and negative values from other methods	
		function adjustBalance(amount){
			if(balance > -1) balance = balance + amount;
		}

		//Add 1 to the item count
		function adjustCount(amt){
			itemCount = itemCount + amt;
		}

		//Public Functions API

		//prompt messages for different cart statuses
		function getMsg(){
			return msg.empty;
		}

		function getItemsInCart(){
			return items;
		}

		//Get the amount of items currently in cart
		function getItemCount(){
			return itemCount;
		}

		//Remove all items from cart and adjust the count
		function emptyCart(){
			adjustCount((items.length-1)*-1);
			items = [];
		}

		function isEmpty(){
			return (itemCount === 0);
		}

		//Adds a qty property to the item to keep track of 
		//how many items of the same are in the cart
		function addItemQty(item){
			if(!item.qty) item.qty = 1;
			else item.qty++;
		}

		//Add an item to the cart, and update the count
		function addItem(item){
			if(!item.qty) items.push(item);

			addItemQty(item);
			adjustBalance(item.price)
			adjustCount(1);
			console.log("balance" + balance)
		}

		//Removes and item from cart, and readjusts balance
		function removeItem(item){

			//Make sure cart is not empty
			if(!isEmpty()){

				//get the amount of items of this kind
				var itemQty = item.qty;

				//Remove the item 
				items.splice(items.indexOf(item), 1);

				console.log(items)

				//remove all the items of this kind from cart count
				adjustCount(item.qty * -1);
			}
		}

		return {			
			getMsg: getMsg,
			getItemsInCart: getItemsInCart,
			getItemCount: getItemCount,
			addItem: addItem,
			removeItem: removeItem,
			isEmpty: isEmpty,
			emptyCart: emptyCart
		};

	});

