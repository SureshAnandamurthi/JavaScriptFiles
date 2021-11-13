let numArr = [23,456,654, 465, 23];

console.log("1. for Loop");
for(let i = 0; i<numArr.length; i++){
	console.log(numArr[i]);
};

console.log();
console.log("2. While Loop");
let whileLoop = ((numArr) =>{
	let i = 0; 
	while(i<numArr.length){
		console.log(numArr[i]);
		i++;
	}
});

whileLoop(numArr);

console.log();
console.log("3. Do While Loop");
let doWhileLoop = ((numArr) =>{
	let i = 0;
	do {
		console.log(numArr[i]);
		i++;
	} while (i<numArr.length);

});

doWhileLoop(numArr);

console.log();
console.log("4. For of Loop");
let forOfLoop = ((numArr) =>{
	for (let num of numArr){
		console.log(num);
	}
});

forOfLoop(numArr);

console.log();
console.log("5. For in Loop");
let forInLoop = ((numArr) => {
	for (let i of numArr){
		console.log(i);
	}
});

forInLoop(numArr);

console.log();
console.log("6. ForEach Loop");
let forEachLoop = ((numArr) =>{
	numArr.forEach((element, index, array) => {
		console.log(`Index ${index}  - Value ${element}  - Array${array}`);
	})
})

forEachLoop(numArr);

console.log();
console.log("7. Map Function");
let mapFunction = ((numArr) => {
	numArr.map((element, index, array) => {
		console.log(`Index ${index}  - Value ${element}  - Array${array}`);
	})

})

mapFunction(numArr)