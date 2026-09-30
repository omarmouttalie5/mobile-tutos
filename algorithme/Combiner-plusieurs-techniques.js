
const prices = [12.50, 45.00, 8.00, 100.00, 24.50];

let subtotal = 0;
for (let i = 0; i < prices.length; i++) {
  subtotal += prices[i];
}

let discount = 0;
if (subtotal >= 100.00) {
  discount = subtotal * 0.10; 
}

let finalTotal = subtotal - discount;

console.log("--- Store Checkout Summary ---");
console.log("Subtotal: $" + subtotal.toFixed(2));
console.log("Discount (10%): $" + discount.toFixed(2));
console.log("Final Total: $" + finalTotal.toFixed(2));