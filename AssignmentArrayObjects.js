const product = {
    itemName : "Flower",
    price : 50,
    discount : 20,
    itemCode : 'F50'
}

console.log(product);

const createProd = ((itemName, price, discount, itemCode) => {
    return { itemName, price, discount, itemCode };
});

const product1 = createProd("Rose", 60, 15, 'F60');
console.log(product1);