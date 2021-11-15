//1. Write a program to print 1 to 10 numbers using a while loop
//Sol - 1
{
let numPrint = (num) => {
    let i = 1;
    while (i<=num){
	console.log(i);
	i++;
    }
}
numPrint(10);
console.log();
}

//Sol - 2
{
let numPrint = function(num){
    let i = 1;
    while (i<=num){
	console.log(i);
	i++;
    }
};

numPrint(10);
console.log();
}

//2. Write a program to print 10 to 1 number using a while loop
//Sol - 1
{
let numPrint = (num) => {
    let i = 10;
    while (i>=num){
	console.log(i);
	i--;
    }
}
numPrint(1) // Please give number b/w 1 to 9 to print the numbers from 10 in backwards to the given number;
console.log();
}

//Sol - 2
{
let numPrint = function(num){
    let i = 10;
    while (i>=num){
	console.log(i);
	i--;
    }
};

numPrint(1);
console.log();
}

//3. Write a program to print 5 to 15 numbers using For Loop
//Sol - 1
{
let numPrint = (num) => {
    for (let i = 5; i<=num; i++){
	console.log(i);
    }
    }
numPrint(15);
console.log();
}
// 4. Write a program to print 15 to 10 numbers using for Loop
//Sol - 1
{
let numPrint = (num) =>{
    for (let i=15; i>=num; i--){
	console.log(i);
    }
    }
numPrint(10);
console.log();
}

// 5. Write a program to print 1 to 10 even numbers using a while loop
{
let numPrint = (num) =>{
    let i = 1;
    while (i<= num){
	if (i % 2 === 0)
	    console.log(i);
	    i++;
    }
}
numPrint(10);
console.log();
}

// 6. Write a program to print 1 to 10 odd numbers using For Loop
{
let numPrint = (num) =>{
    let i = 1;
    while (i<= num){
	if (i % 2 !== 0)
	    console.log(i);
	    i++;
    }
}
numPrint(10);
console.log();
}

//7. Write a program first ten multiples of 4 using a while loop
// 9. Write a program to print a multiplication table of 6 using a while loop.

{
let numPrint = (num) =>{
    let i = 1;
    while (i<=10){
	console.log(`${num} * ${i}  = ${num * i}`);
	i++;
    }
}

numPrint(4);
console.log();
numPrint(6);
}

// 10. Write a program Factors of 24 using while loop
{
let numPrint = (num) => {
    let i = 1;
    while (i <= Math.floor(num/2)){
	if (num % i ===0){
	    console.log(i);
	}
	i++;
    }
    console.log(num);
}
numPrint(24);
console.log();
};

// 12. Write a program to print reverse of digits of numbers
{
let numPrint = (num) => {
    let snum = String(num);
    let i = snum.length - 1;
    let newNum = ''
    while (i>=0){
	newNum = newNum + snum[i];
	i--;
    }
    return Number(newNum);
}
console.log(numPrint(1234567891011));
console.log();
};
/*
// 13. Write a program to read 5 numbers and print only the even numbers
// npm install prompt

{ 
const prompt = require('prompt');
prompt.start();
prompt.get(['val1', 'val2', 'val3', 'val4', 'val5'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  val1: ' + result.val1);
    console.log('  val2: ' + result.val2);
    console.log('  val3: ' + result.val3);
    console.log('  val4: ' + result.val4);
    console.log('  val5: ' + result.val5);
    if (result.val1 % 2 ===0)
	console.log(`${result.val1} is Even number`);
    if (result.val2 % 2 ===0)
	console.log(`${result.val2} is Even number`);
    if (result.val3 % 2 ===0)
	console.log(`${result.val3} is Even number`);
    if (result.val4 % 2 ===0)
	console.log(`${result.val4} is Even number`);
    if (result.val5 % 2 ===0)
	console.log(`${result.val5} is Even number`);
});

function onErr(err) {
    console.log(err);
    return 1;
}
};
*/
// to take command line agrguments
//const args1 = process.argv[2];
//const args2 = process.argv[3];
//console.log(args1, args2);

// 14. Write a program to print the Fibonacci number series up to a given number
// Sol - 1
{
let fibSer = (num) =>{
    let f = 0;
    let s = 1;
    let holder = 0;
    let counter = 0
    console.log(0);
    console.log(s);
    while (counter <= (num-2)){
	console.log(f+=s);
        holder = f;
        f = s;
        s = holder;
	counter++;
    }

}
fibSer(17);
}
// Sol - 2
{
let fibSer = (num) =>{
    let fibArr = [0, 1];
    if (num<=2){
	return fibArr;
    } else{
	let i = 0;
	while (i<=(num-2)){
	    fibArr.push(fibArr[fibArr.length-1] + fibArr[fibArr.length-2]);
	    i++;
	}
    }
    return fibArr;
}
console.log(fibSer(17));
console.log();
}

//16. Write a program to check a given number is Armstrong number or not
{
let checkArmstrong = (num) =>{
    let strNum = new String(num);
    let length = strNum.length;
    let res = 0;
    for (let i of strNum){
	res+=Math.pow(Number(i), length);
	console.log(res, i, length);
    } 
    return ((num === res)? "Yes. It is" : "No. It is NOT");
}
console.log(checkArmstrong(1634));
}