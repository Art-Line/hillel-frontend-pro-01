const EXCHANGE = 41;
const DISCOUNT_STARTS_FROM = 100000;
const DISCOUNT_STR = 10;
const DISCOUNT = DISCOUNT_STR / 100;

let products = [
    {
        name: 'AKM',
        price: 700,
    },
    {
        name: 'AR-15',
        price: 1500,
    },
    {
        name: 'Savage 110',
        price: 500,
    },
    {
        name: 'Mossberg 500',
        price: 1000
    },
    {
        name: 'Glock 17',
        price: 600,
    },
];


// Show products
function showProducts(goods) {
    for (let i = 0; i < goods.length; i++) {
        console.log(`#${(i + 1)} Name: ${goods[i].name} \nPrice: ${goods[i].price}`);
    }
}

// Get product number
function getProductNumber(goods) {
    let productNumber;
    do {
        productNumber = prompt('Enter the product you wanna buy:');
        productNumber--;
    } while (productNumber < 0 || productNumber > goods.length - 1 || isNaN(productNumber));
    return goods[productNumber];
}

// Get amount of products to be bought
function amount() {
    let amount;
    do {
        amount = parseInt(prompt('Enter the amount of products you wanna buy:'));
    } while (amount <= 0 || isNaN(amount));
    return amount;
}

// Calculate the initial price
function priceCalc(goods, product, quantity) {
    const finalPrice = product(goods).price * quantity();
    console.log('---------------------------')
    console.log('The price is $' + finalPrice);
    // Check if discount needed
    if (finalPrice * EXCHANGE > DISCOUNT_STARTS_FROM) {
        const superFinalPrice = finalPrice - finalPrice * DISCOUNT;
        console.log(`Congrats! You got discount ${DISCOUNT_STR}%:`);
        console.log('Please pay $' + superFinalPrice);
    }
}

showProducts(products);
priceCalc(products, getProductNumber, amount)
