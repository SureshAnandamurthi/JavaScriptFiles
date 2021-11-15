let arrList = ["Suresh", "Karthik", "Bhanu", "Prashanth"]
//  to find the index position of a value.  This searches from index 0 onwards. ie., forward search 
// If value does not exists the result is always -1. Else results in the index Position of First Occurence Only.
console.log(arrList.indexOf("Karthik")); 

console.log(arrList.indexOf("Karthik", 2)); //Default 0 index.  But we can change it.  It starts searching from index 2 onwards. Index 0 and 1 are excluded.

console.log(arrList.lastIndexOf("Karthik")); //It starts searching upper bound or backwards.

console.log(arrList.includes("Karthik")); // returns boolean value and forward search.
console.log(arrList.includes("Karthik", 1)); // returns boolean value and forward search. 

const prices = [200, 300, 350, 400, 450, 500, 600]
// find and findIndex returns first occurence of the element which meets the condition
const findElems1 = prices.find((eleVal, ind, arr) => {
    return eleVal >= 400;
});

console.log(findElems1);
console.log();
const findElems2 = prices.find((eleVal, ind, arr) => eleVal >= 400);
console.log(findElems2);

const findElems3 = prices.findIndex((eleVal, ind, arr) => {
    return eleVal >= 400;
});

console.log(findElems3);
console.log();
const findElems4 = prices.findIndex((eleVal, ind, arr) => eleVal >= 400);
console.log(findElems4);


// returns the array back with Index and values;

const filt = prices.filter((val, ind, arr) => val<400);
console.log(filt);
console.log(filt.reverse());
console.log(filt);
console.log(filt.sort());

const animal = ['goats', 'sheep', 'checken']

animal.push('cow', 'baffelo'); // adds the item or items at the end of an array
console.log(animal);
animal.pop(); // removes the last item form an array
console.log(animal);

animal.unshift('jersey', 'zebra'); // adds the item or items in the start of an array
console.log(animal);
animal.shift(); // removes the first item form an array
console.log(animal);

let months = ["Jan", "Feb", "mar", "Apr", "Jun", "Jul"]

//solution 1:
months.splice(months.length, 0, "Dec", "Nov", "Oct"); 
// index to start, how many items to delete(0 means nothing to delete) and items to add at the end of an array
console.log(months);
console.log();
// deleting "mar" and adding "March" using splice method.
const indexOfMonth = months.indexOf("mar");
if (indexOfMonth != -1){
    const updateMonth = months.splice(indexOfMonth,1,"March");
    console.log(updateMonth);
} else{
    console.log("Value not found");
}

console.log(months);
console.log();
// map method returns the boolean value
const arr1 = [1, 4, 9, 16, 25]
const newArr = arr1.map((element, ind, arr) => {
    return element >=10;
});
console.log(arr1);
console.log(newArr);
console.log();
const newArr1 = arr1.map((element, ind, arr) => {
    return `${ind}, ${element}, ${arr}`;
});
console.log(newArr1);

arr1.forEach((element, ind, arr) => console.log(`${ind}, ${element}, ${arr}`));

const arrSqrt = arr1.map((element, ind, arr) => Math.sqrt(element));
console.log(arrSqrt);

arr1.forEach((ele,index, ar) => console.log(ele **0.5));

let arr2 = [25, 36, 49, 64, 81];
const arr2Sqrt = arr2.map((element, ind, arr) => element ** 0.5);
console.log(arr2Sqrt);
console.log();
const arr2Mul = arr2.map((item, pos, arr) => item * 2);
console.log(arr2Mul);
console.log();

let arr3 = [2, 3, 4, 6, 8]

const arr3Mul = arr3.map((ele, ind, arr) => ele * 2).filter((element, index, arr) => element >=10);
console.log(arr3Mul);

const tot = arr3.map((ele, ind, arr) => ele * 2).filter((element, index, arr) => element >=10).reduce((accumulator, element, index, arr) => accumulator+=element);
console.log(tot);

const mul = arr2.reduce((accumulator, val, ind, arr) => accumulator*=val,1); // reduce take initial value of accumulatore before closing parenthisis. 1 is given as to demonstrate.
console.log(mul);

const arr4 = [[1,2], [3,4], [5,6], [7,8]];
console.log(arr4);
const flatArr4 = arr4.flat(2);
console.log(flatArr4);
