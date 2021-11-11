// 1. Write a program to print 1 to 10 numbers using a while loop
let r = 1;

while (r<=10){
    console.log(r);
    r++;
}

// 2. Write a program to print 10 to 1 number using a while loop

let z = 10;

while (z>0){
    console.log(z);
    z--;
}

//  3. Write a program to print 5 to 15 numbers using For Loop
for (let i = 5; i<=15; i++){
    console.log(i);
}

// 4. Write a program to print 15 to 10 numbers using for Loop
for (let i = 15; i>=10; i--){
    console.log(i);
}

// 5. Write a program to print 1 to 10 even numbers using a while loop

let i = 1;
while (i<11){
    if (i % 2 == 0){
        console.log(i);
        i++;
    } else{
        i++;
        continue;
    }
}
// 6. Write a program to print 1 to 10 odd numbers using For Loop
for (let i=1; i<11; i++){
    //console.log((i % 2 != 0)? i : "");
    if (i % 2 != 0){
        console.log(i);
    }else{
        continue;
    }
}

// 7. Write a program first ten multiples of 4 using a while loop
let w = 1;
while (w < 11){
    console.log(`4 * ${w}  = ${4*w}`);
    w++;
}

// 9. Write a program to print a multiplication table of 6 using a while loop.
let o = 1;
while (o < 11){
    console.log(`6 * ${o}  = ${6*o}`);
    o++;
}

// 10. Write a program Factors of 24 using while loop
let n = 1;
while (n<=(24/2)){
    if (24 % n == 0){
        console.log(n);
        n++;
    } else{
        n++;
        continue;
    }
}


let obj1 = {
  cls: 1,
  rollnum: 101,
  fname: 'Suresh',
  lname: 'Anandamurthi',
  fee: 30000,
  disc: 10,
  email: function(){
		return `${fname}.${lname}'@co.com'`;
	}
}

for (let key of Object.keys(obj1)){
	console.log(key, obj1[key]);
}