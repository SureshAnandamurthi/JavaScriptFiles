const product = {
	itemName: "Flower",
	itemPrice: 100, 
	itemCode : 'F120',
	itemDisc : 10,
}

console.log(product);
product.category = "Bouquet";
console.log(product);

// Factor Function

function creatProd(name, price, code, disc){
	 return{
		itemName : name,
		itemPrice : price,
		itemCode : code,
		itemDisc : disc,
	}
}

console.log(creatProd('rose', 90, 'RF-10', 10));

// Constructor Fuction

function creatProd1(itemName, itemPrice, itemCode, itemDisc){
	this.itemName = itemName;
	this.itemPrice = itemPrice;
	this.itemCode = itemCode;
	this.itemDisc = itemDisc;
	this.itemDiscVal = function(itemPrice){
	return (this.itemPrice * this.itemDisc)/100;
	};

}

const ball = new creatProd1('Tennis', 20, 'T10', 10);
console.log(ball);
console.log(ball.itemDiscVal());
const flow = new creatProd1('rose', 90, 'RF-10', 50);
console.log(flow);
console.log(flow.itemDiscVal());