const sales = [
    { item: "Laptop", quantity: 2, price: 800 },
    { item: "Monitor", quantity: 1, price: 150 },
    { item: "Mouse", quantity: 4, price: 25 }
];

function calculateTotalSales(sales) {
    let total = 0;
    for (let i = 0; i < sales.length; i++) {
        total += sales[i].quantity * sales[i].price;
    }
    return total;
}

console.log("Total Sales Amount:", calculateTotalSales(sales));

const orders = [
    { item: "Espresso", quantity: 2, price: 3.5 },
    { item: "Latte", quantity: 3, price: 4.0 },
    { item: "Cappuccino", quantity: 1, price: 4.5 }
];

function generateReceipt(orders) {
    let grandTotal = 0;
    console.log("Receipt:");
    console.log("----------------------");

    orders.forEach((order)=>{
    	const itemTotal = order.quantity * order.price;
        grandTotal += itemTotal;
        console.log(`${order.item} - Quantity: ${order.quantity}, Price: $${order.price}, Total: $${itemTotal}`);
    })

    console.log("----------------------");
    console.log(`Grand Total: $${grandTotal}`);
}

generateReceipt(orders);

const passwords = ["Password123", "short", "ValidPass123", "too_long_password_example", "12345"];

function validatePasswords(passwords) {
    const regex = /^[a-zA-Z0-9]{8,20}$/;
    passwords.forEach((password)=>{
            if (regex.test(password)) {
                console.log(`${password} is valid.`);
            } else {
                console.log(`${password} is invalid.`);
            }
        })
}
validatePasswords(passwords);

const products = [
    { product: "Laptop", stock: 5 },
    { product: "Headphones", stock: 0 },
    { product: "Smartphone", stock: 3 }
];

function checkStockLevels(products) {
	products.forEach((product)=>{
		if (product.stock > 0) {
            console.log(`${product.product} is In Stock.`);
        } else {
            console.log(`${product.product} is Out of Stock.`);
        }
	})
}
checkStockLevels(products);
