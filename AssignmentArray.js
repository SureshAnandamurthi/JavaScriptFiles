// 1. How to Create Arrays in JavaScript.
// Sol - 1
{
let arr = [];
console.log(arr);
arr[0] = 0;
arr[1] = 1;
arr[2] = 2;
console.log(arr);
}

// Sol - 2
{
let arrList = [1, 2, 3];
console.log(arrList);
for (let item in arrList){
    console.log(arrList[item]);
}
console.log();
for (let item of arrList){
    console.log(item);
} 
console.log();
arrList.forEach((element, index, arr) =>{
    console.log(index, element);
    console.log(arr);
});
console.log();
console.log(`last item is ${arrList[arrList.length-1]}`)
console.log();

for (let i = 0; i<=(arrList.length-1); i++){
    console.log(arrList[i]);
}
arrList.push(4);
arrList.unshift(10);
console.log(arrList);
console.log();
console.log(arrList.pop());
console.log(arrList.shift());
console.log(arrList);
console.log();
}

//14. JavaScript Array Splice Method Explanation

{
let arrList = [1, 2, 3];
console.log(arrList.splice(1,2));
console.log(arrList);
arrList.push(10,20,30);
console.log(arrList);
arrList.pop();
console.log(arrList);
}