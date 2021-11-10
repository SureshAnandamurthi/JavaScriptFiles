// 1. Write a program to check if a number is divisible by 7 or not?
function div7(){
    let num = window.prompt("Enter a Number: ");
    num = Number(num);
    if (num % 7 == 0){
        console.log(`${num} is divisible by 7`);
        return (`${num} is divisible by 7`);
    } else{
        console.log(`${num} is NOT divisible by 7`);
        return (`${num} is NOT divisible by 7`);
    }
}

let result1 = div7();

// 2. Write a program to check if a number is multiple of 3 or not?
function mulOf3(){
    let num = window.prompt("Enter a Number: ");
    num = Number(num);
    if (num % 3 == 0){
        console.log(`${num} is multiple of 3.`);
        return (`${num} is multiple of 3.`);
    } else{
        console.log(`${num} is NOT multiple of 3.`);
        return (`${num} is NOT multiple of 3.`);
    }
}

let result2 =  mulOf3();
//3. Write a program to check if a number is positive or not?
function positiveCheck(){
    let num = window.prompt("Enter a Number: ");
    num = Number(num);
    return (num>=0)? "Pos Num" : "Neg Num";
}

let result3 = positiveCheck();

// 4. Write a program to check if a number is having 4 at the unit's place or not?

// 5. Write a program to check if a number is 3-digit numbers or not?
function checkDigit(){
    let num = prompt("Enter a num: ");
    return (num.length == 3)? `${num.length} digit number`: `${num.length} digit number`;
}
let result5 = checkDigit();

// 6. Write a program to print even or odd for a given number?
function oddEven(){
    let num = prompt("Enter a num: ");
    num = +num;
    return (num % 2 == 0)? `${num} Even Num`: `${num} Odd Num`;
}
let result6 = oddEven();
// 7. Write a program to print the greatest number in given two numbers?
function greatestNum(){
    let num1 = Number(prompt("Enter a First Num: "));
    let num2 = Number(prompt("Enter a Second Num: "));
    if (num1 > num2){
        return `${num1} is greatest.`
    } else if (num1 < num2){
        return `${num2} is greatest.`
    } else{
        return `${num1} and ${num2} are equal.`
    }
}
let result7 = greatestNum();
result7
// 8. Write a program to print the least number given two numbers?
function smallestNum(){
    let num1 = Number(prompt("Enter a First Num: "));
    let num2 = Number(prompt("Enter a Second Num: "));
    if (num1 > num2){
        return `${num2} is smallest.`
    } else if (num1 < num2){
        return `${num1} is smallest.`
    } else{
        return `${num1} and ${num2} are equal.`
    }
}
let result8 = smallestNum();
result8

// 9. Write a program to print the greatest number in given three numbers?
function maxNum(){
    let num1 = Number(prompt("Enter a First Num: "));
    let num2 = Number(prompt("Enter a Second Num: "));
    let num3 = Number(prompt("Enter a Second Num: "));
    return Math.max(num1, num2, num3);
}
let result9 = maxNum();
result9

// 10. Write a program to print the least number in given three numbers?
function minNum(){
    let num1 = Number(prompt("Enter a First Num: "));
    let num2 = Number(prompt("Enter a Second Num: "));
    let num3 = Number(prompt("Enter a Second Num: "));
    return Math.min(num1, num2, num3);
}
let result10 = minNum();
result10