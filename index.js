var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = { [item]: Math.floor(Math.random() * 100) }

 cart.push(newItem);

 console.log(`${item} has been added to your cart.`)
 return cart
}


function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }

  else {
    var cartList = "In your cart, you have "

    for (var c = 0; c < cart.length; c++) {
      var item = Object.keys(cart[c])
      
      if (cart.length === 1) {
        cartList = cartList + `${item} at $${cart[c].item}.`
      }


      
    }
    console.log(cartList);
    }

  }



}



function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
