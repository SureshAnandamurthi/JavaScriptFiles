// 12. Write a program to print reverse of digits of numbers
function reversed(val){
    let num = String(val)
    let len = num.length-1
    let reversed;
    for (let i = num.length-1; i>=0; i--){
            console.log(num[i]);        
    }
}

reversed(123456);

