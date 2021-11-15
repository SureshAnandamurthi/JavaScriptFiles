let findMin = (a, b, c) => Math.min(a,b,c);

let findMax = (a,b,c) => Math.max(a,b,c);
 
let resMin  = findMin(100112, 56, 555);
let resMax  = findMax(10000, 56, 555);
console.log(resMin);
console.log(resMax);

let numArr = [20,34, 77,29, 10]

let findEven = numArr.map((val, ind, numArr) => val).filter((val) => (val % 2 ==0)).reduce((acc, val) => acc+=val);

console.log(findEven);


let findDiv7 = ((num) => (num%2 == 0)? "Divisible by 7" : "NOT Divisible by 7");

console.log(findDiv7(75));

let findDiv17 = function (num){
	if (num % 2 == 0){
		console.log("Given num is Divisible by 7");
	} else{
		console.log("Given num is NOT Divisible by 7");
	}
}

findDiv17(646464);

let findFib = (n)