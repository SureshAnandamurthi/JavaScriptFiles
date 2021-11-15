//1. Write a Java Program to check if a number is divisible by 7 or not?
//Sol - 1
{
let div7 = (num) => ((num % 7 === 0)? `${num} is Divisible by 7.` : `${num} is NOT Divisible by 7.`);

let sol1 = div7(7)
console.log(sol1);
console.log();
}

//Sol - 2
{
let div7 = function(num){
    if (num % 7 === 0){
	return `${num} is Divisible by 7.`
    }else{
	return `${num} is Not Divisible by 7.`
    }
}

let sol2 = div7(79);
console.log(sol2);
console.log();
}

// 2. Write a Java Program to check if a number is multiple of 3 not not?
//Sol - 1
{
let mul3 = (num) => ((num % 3 ===0)? `${num} is Multiple of 3.` : `${num} is NOT a multiple of 3.`);
let sol1 = (mul3(37));
console.log(sol1);
console.log();
}

//Sol - 2
{
let mul3 = function(num){
    if (num % 3 ===0)
	return `${num} is Multiple of 3.`;
    else
	return `${num} is NOT a multiple of 3.`;
    }
let sol2 = mul3(30);
console.log(sol2);
console.log();
}


// 3. Write a program to check if a number is positive or not?
//Sol - 1
{
let positiveCheck = (num) => ((num>=0)? `${num} is Positive Num` : `${num} is Negative Num`);
let sol1 = positiveCheck(-30);
console.log(sol1);
console.log();
}

//Sol - 2
{
let positiveCheck = function(num){
    if (num>=0)
	return `${num} is Positive Num`;
    else
	return `${num} is Negative Num`;
    };

let sol2 = positiveCheck(30);
console.log(sol2);
console.log();
}

//4. Write a Java Program to check if a number is having 4 at the unit's place or not?
//Sol - 1
{
let unitPace4 = (num) => ((String(num)[(String(num)).length-1] === '4')? `${num} has 4 in unit's place` : `${num} does not have 4 in unit's place`);

let sol1 = unitPace4(464646);
console.log(sol1);
console.log();
}
//Sol - 2
{
let unitPace4 = function(snum){
	let num = String(snum);
    if (num[num.length-1] === '4')
	return `${num} has 4 in unit's place`;
    else
	return `${num} does not have 4 in unit's place`;
    };

let sol2 = unitPace4(49384);
console.log(sol2);
console.log();
}

//5. Write a Java Program to check if a number is a 3-digit number or not?
//Sol - 1
{
let num3Digit = (num) => ((String(num).length) === 3)? `${num} has 3 digits` : `${num} has ${String(num).length} digits`;

let sol1 = num3Digit(464646);
console.log(sol1);
console.log();
}

//Sol - 2
{
let num3Digit = function(snum){
	let num = String(snum);
    if (num.length === 3)
	return `${num} has 3 digits`;
    else
	return `${num} has ${String(num).length} digits`;
    };

let sol2 = num3Digit(494);
console.log(sol2);
console.log();
}

// 6. Write a program to print even or odd for a given number?
//Sol - 1
{
let evenOdd = (num) => (num % 2 === 0)? `${num} is Even Number` : `${num} is Odd Number`;

let sol1 = evenOdd(464647);
console.log(sol1);
console.log();
}

//Sol - 2
{
let evenOdd = function(num){
    if (num % 2 === 0)
	return `${num} is Even Number`;
    else
	return `${num} is Odd Number`;
    };

let sol2 = evenOdd(494);
console.log(sol2);
console.log();
}


//7. Write a program to print the greatest number in given two numbers?
//Sol - 1

{
let maxOf2 = ((num1, num2) => {
	if(num1 > num2){
	    return `${num1} is greater Number`;
	} else if (num1 < num2) {
	    return `${num2} is greater Number`;
	} else
	    return `${num1} and ${num2} are Equal`;
    });

let sol1 = maxOf2(5456, 345);
console.log(sol1);
console.log();
}

//Sol - 2
{
let maxOf2 = function(num1, num2){
	if(num1 > num2){
	    return `${num1} is greater Number`;
	} else if (num1 < num2) {
	    return `${num2} is greater Number`;
	} else
	    return `${num1} and ${num2} are Equal`;
    };

let sol2 = maxOf2(446, 132);
console.log(sol2);
console.log();
}

//Sol - 3
{
let maxOf2 = ((num1, num2) => Math.max(num1, num2));

let sol3 = maxOf2(452345, 565565);
console.log(sol3);
console.log();
}

// 8. Write a program to print the least number given two numbers?
//Sol - 1

{
let minOf2 = ((num1, num2) => {
	if(num1 < num2){
	    return `${num1} is smaller Number`;
	} else if (num1 > num2) {
	    return `${num2} is smaller Number`;
	} else
	    return `${num1} and ${num2} are Equal`;
    });

let sol1 = minOf2(5456, 345);
console.log(sol1);
console.log();
}

//Sol - 2
{
let minOf2 = function(num1, num2){
	if(num1 < num2){
	    return `${num1} is smaller Number`;
	} else if (num1 > num2) {
	    return `${num2} is smaller Number`;
	} else
	    return `${num1} and ${num2} are Equal`;
    };

let sol2 = minOf2(446, 132);
console.log(sol2);
console.log();
}

//Sol - 3
{
let minOf2 = ((num1, num2) => Math.min(num1, num2));

let sol3 = minOf2(452345, 565565);
console.log(sol3);
console.log();
}

// 9. Write a program to print the greatest number in given three numbers?
//Sol - 1

{
let maxOf3 = ((num1, num2, num3) => {
	let max = 0
	if ((num1 > num2) || (num1 === num2)){
	    max = num1
	} else
	    max = num2
	if ((max > num3) || (max === num3))
	    return `${max} is greater`;
	else
	    return `${num3} is greater`;
    });

let sol1 = maxOf3(54856, 5856, 5456);
console.log(sol1);
console.log();
}

//Sol - 2
{
let maxOf3 = function(num1, num2, num3){
	let maxnum = 0;
	if(num1 >= num2){
	    maxnum = num1;
	} else if (num2 > num1){
	    maxnum = num2;
	}
	if (num3 >= maxnum)
	    maxnum = num3;
	
	return `${maxnum} is greater Number`;
    };

let sol2 = maxOf3(5856, 4856, 456);
console.log(sol2);
console.log();
}

//Sol - 3
{
let maxOf3 = ((num1, num2, num3) => Math.max(num1, num2, num3));

let sol3 = maxOf3(4856, 5456, 856);
console.log(sol3);
console.log();
}

// 10. Write a program to print the least number in given three numbers?
//Sol - 1

{
let minOf3 = ((num1, num2, num3) => {
	let min = 0
	if ((num1 > num2) || (num1 === num2)){
	    min = num2
	} else
	    min = num1
	if ((min > num3) || (min === num3))
	    return `${num3} is smaller`;
	else
	    return `${min} is smaller`;
    });

let sol1 = minOf3(5456, 54856, 5856);
console.log(sol1);
console.log();
}

//Sol - 2
{
let minOf3 = function(num1, num2, num3){
	let minnum = 0;
	if(num1 >= num2){
	    minnum = num2;
	} else if (num2 > num1){
	    minnum = num1;
	}
	if (num3 >= minnum){
	    return `${minnum} is smaller Number`
	} else 
	    return `${num3} is smaller Number`;	
    };

let sol2 = minOf3(5856, 456, 4856);
console.log(sol2);
console.log();
}

//Sol - 3
{
let minOf3 = ((num1, num2, num3) => Math.min(num1, num2, num3));

let sol3 = minOf3(4856, 5456, 856);
console.log(sol3);
console.log();
}

// 11. Write a program to print the given 3 numbers in ascending orders?
{
let ascSort3 = ((num1, num2, num3) => {
	let min = Math.min(num1, num2);
	let max = Math.max(num1, num2);
	if (num3 <= min){
	    return `${num3}, ${min}, ${max}`;
	} else if (num3 <= max){
	    return `${min}, ${num3}, ${max}`;
	} else
	    return `${min}, ${max}, ${num3}`;
    });

let sol1 = ascSort3(54856, 5456, 5856);
console.log(sol1);
console.log();
}

//Sol - 2
{
let ascSort3 = function(num1, num2, num3){
	let arr = [num1, num2, num3]
	return arr.sort((a, b) => a - b);
    };

let sol2 = ascSort3(5856, 456, 4856);
console.log(sol2);
console.log();
}

//12. Write a program to print the given 3 numbers in descending orders?
{
let ascSort3 = ((num1, num2, num3) => {
	let min = Math.min(num1, num2);
	let max = Math.max(num1, num2);
	if (num3 <= min){
	    return `${max}, ${min}, ${num3}`;
	} else if (num3 <= max){
	    return `${max}, ${num3}, ${min}`;
	} else
	    return `${num3}, ${max}, ${min}`;
    });

let sol1 = ascSort3(54856, 5456, 5856);
console.log(sol1);
console.log();
}

//Sol - 2
{
let ascSort3 = function(num1, num2, num3){
	let arr = [num1, num2, num3]
	return arr.sort((a, b) => b - a);
    };

let sol2 = ascSort3(5856, 456, 4856);
console.log(sol2);
console.log();
}
