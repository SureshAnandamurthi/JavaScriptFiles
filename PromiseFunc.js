/*
const prom2 = new Promise((resolve, reject) =>{
    outcome = "";
    if (outcome === "Good")
	resolve(`${outcome} : All went fine`);
    else
	reject(`${outcome} : Unable to connect`);	
});

const fullFill = ((successMessage) =>{
    console.log(successMessage);
    console.log("Perf Production Tasks!");
});

const rej = ((errorMessage)=>{
    console.log(errorMessage);
    console.log("Contact DB team and Raise Sev1 Ticket");
});

prom2.then(fullFill)
     .catch(rej);
*/

const prom3 = new Promise((resolve, reject) =>{
    result = "Success";
    if (result === "Success"){
	resolve(result + " : Data imported Successfully.");
    } else{
	reject (result + " : No Data Found.");
    }

});

const onFullfillment = ((sucMessage) =>{
    console.log(sucMessage);
    console.log("Great Job!");
    console.log("Peform other Operations / Excute other Methods");
});

const onRejection = ((errorMessage) =>{
    console.log(errorMessage);
    console.log("Try to trouble shoot and raise Sev1 Ticket");
    console.log("Better Luck Next Time!");
});

prom3.then(onFullfillment).catch(onRejection);

/*
const promise = new Promise((resolve, reject) => {
    result = "Success";
    if (result === "No")
	resolve("Successfully received the data");
     else (result === "Success")
	reject("Unable to connect to DB");
    
});

const onFullfillment = (message) => {
    console.log(message + " Yepeee");
    console.log("Please perform clean up activity");
}; // promises passes the result automatically to this callbackFunc
const onRejection = (error) =>{
    console.log(error + "Ooops"); 
    console.log("Please raise the Ticket to DB team.");
};// promises passes the error automatically to this callbackFunc


promise.then(onFullfillment);
promise.catch(onRejection);



{
let prom = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2){
	resolve("Success");
    }else{
	reject("Rejected");
    }
});

prom.then((message) => {
    console.log(message + " Successfully implimented");
}).catch((error) => {
    console.log(error + " Server Rejected Request");
})
}
*/