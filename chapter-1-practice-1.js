const phonePrice = 10;
const accessoriesPrice = 5;
let walletBalance = 0;
let phonePurchaseQuantity = 0;
let accessoriesPurchaseQuantity = 0;
let totalPrice = 0;
let taxedPrice = 0;

function getWalletBalance() {
  return parseFloat(prompt("Input your Wallet Balance: $", 200));
}
getWalletBalance()

while (walletBalance >= totalPrice + phonePrice + accessoriesPrice) {
  phonePurchaseQuantity++;

  totalPrice =
    phonePrice * phonePurchaseQuantity +
    accessoriesPrice * accessoriesPurchaseQuantity;

  if (totalPrice <= walletBalance) {
    accessoriesPurchaseQuantity++;

    totalPrice =
      phonePrice * phonePurchaseQuantity +
      accessoriesPrice * accessoriesPurchaseQuantity;
  }
}

console.log(`Total Price: $${totalPrice}`);
console.log(`Phone Quantity: ${phonePurchaseQuantity}`);
console.log(`Accessory Quantity: ${accessoriesPurchaseQuantity}`);

function addTax() {
  taxedPrice = totalPrice + 0.08 * totalPrice;
}
addTax();

console.log(`Price after 8% Tax: $${taxedPrice}`);

function canAfford() {
  if (taxedPrice <= walletBalance) {
    return true;
  } else {
    return false;
  }
}
if (!canAfford()) console.log("You cannot afford this purchase!");
