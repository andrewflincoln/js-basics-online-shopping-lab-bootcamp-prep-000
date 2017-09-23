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
    var cartList = "In your cart, you have"

    for (var c = 0; c < cart.length; c++) {
      var item = Object.keys(cart[c])
      var priceGrabber = cart[c]
      var price = priceGrabber[item]

      if (cart.length === 1) {
        cartList = cartList + ` ${item} at $${price}.`
        { break; }
      }

      else if (c === 0) {
        if (cart.length == 2) {
            cartList = cartList + ` ${item} at $${price}`
        }

        else {
            cartList = cartList + ` ${item} at $${price},`
        }
      }//else if

      else if (c === cart.length - 1) {
          cartList = cartList + ` and ${item} at $${price}.`
          { break; }
      }

      else {
          cartList = cartList + ` ${item} at $${price},`
      }
    }//for loop
    console.log(cartList);
  } //else
}// function

function total() {
  var totes = 0;
  for (var c = 0; c < cart.length; c++) {
    var item = Object.keys(cart[c])
    var priceGrabber = cart[c]
    var price = priceGrabber[item]
    totes = totes + price
  }
  return totes
}

function removeFromCart(item) {

  for (var c = 0; c < cart.length; c++) {
  //  var cand = Object.keys(cart[c])
    //if (cand === item) {

    if (cart[c].hasOwnProperty(item) === true) {
        cart.splice(c, 1)
        return cart
        { break; }
    }

    else if (c === cart.length - 1) {
      console.log("That item is not in your cart.")
    }
    else {
      { continue; }
    }


  }

}

function placeOrder(cardNumber) {
  // write your code here
}
