let arrList = ["Suresh", "Karthik", "Bhanu", "Prashanth"]

console.log("for loop using Initialize, Condition and Increment/Decrement");
for (let i=0; i<arrList.length; i++){
    console.log(arrList[i]);
}
console.log();

console.log("while loop using Initialize, Condition and Increment/Decrement");
let a = () =>{
    let i = 0;
    while (i<arrList.length){
        console.log(arrList[i]);
        i++;
    }
}
a();
console.log();
console.log("do while loop using Initialize, Condition and Increment/Decrement");
let b = () =>{
    let i = 0;
    do {
        console.log(arrList[i]);
        i++;
    } while(i<arrList.length);
}
b()
console.log();
console.log("for of loop:");
for (let name of arrList){
    console.log(name);
}

console.log();
console.log("for in loop, which gives the Index");
for (let i in arrList){
    console.log(i, arrList[i]);
}

console.log();
console.log("forEach loop, which gives value, index position and arrayitself);
arrList.forEach((ele, ind, arr) => {
    console.log(`${ele} ${ind} ${arr}`);
});