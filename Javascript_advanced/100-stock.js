const stock = {
  macbook: 2,
  iphone: 4,
};

function processPayment(itemName) {
  const item = itemName.trim().toLowerCase();
  stock[item] -= 1;
  console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
  console.log(`No more ${itemName} in stock`);
  console.log('Payment is not being processed');
}

function processOrder(itemName, callbackPayment, callbackError) {
  console.log(`Verifying the stock of ${itemName}`);
  const item = itemName.trim().toLowerCase();

  if (!Object.prototype.hasOwnProperty.call(stock, item)) {
    console.log(`Sorry, we don't sell ${itemName}`);
  } else if (stock[item] > 0) {
    callbackPayment(itemName);
  } else {
    callbackError(itemName);
  }
}

const itemName = prompt('Please enter the item you would like to purchase (Macbook, iPhone)');
if (itemName !== null && itemName.trim() !== '') {
  processOrder(itemName, processPayment, processError);
} else {
  console.log('Please enter a valid item name');
}