let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  showCart();
}

function showCart() {
  const items = cart.map((item, i) => `${i + 1}. ${item.name} - ₹${item.price}`).join("<br>");
  document.getElementById("cart-items").innerHTML = items || "No items yet.";
  document.getElementById("cart-total").textContent = total;
}
