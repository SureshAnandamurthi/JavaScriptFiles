const prod = {
	prodCateg: "Mobile",
	prodBrand: "Apple",
	prodName: "Apple1",
	prodPrice: 100000,
	prodDisc: 5,
}

console.log(prod);

// Factory Function

function creatProd(prodCateg, prodBrand, prodName, prodPrice, prodDisc){
	return {
		prodCateg: prodCateg, 
		prodBrand: prodBrand, 
		prodName: prodName, 
		prodPrice: prodPrice, 
		prodDisc:prodDisc,
	}

}

const sams1 = creatProd("Mobile","SAMSUNG", "S10", 52000, 0);
console.log(sams1);

// Constructor Function
function CreatProds(prodCateg, prodBrand, prodName, prodPrice, prodDisc){
	this.prodCateg = prodCateg;
	this.prodBrand = prodBrand;
	this.prodName=prodName;
	this.prodPrice=prodPrice;
	this.prodDisc=prodDisc;
}

const prod1 = new CreatProds("Mobile", "Vivo", "V2S", 60000, 0);
console.log(prod1);
prod1.offer = true;
prod1.prodDisc = 10;
prod1.discVal = function(prodPrice, prodDisc){
	return ((this.prodPrice * this.prodDisc)/100);
}
prod1.netPrice = function(prodPrice, discVal){
	return (this.prodPrice - this.discVal());
}

console.log(prod1);
console.log(prod1.discVal());
console.log(prod1.netPrice());