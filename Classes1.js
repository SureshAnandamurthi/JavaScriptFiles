class ClassMethods{
	constructor(cls, rollnum, fname, lname, fee, disc){
		this.cls = cls;
		this.rollnum=rollnum;
		this.fname=fname;
		this.lname=lname;
		this.fee=fee;
		this.disc=disc;
		this.domain = "@co.com"
	}

	get getFee(){
		return this.fee;
	}

	set setFee(fee){
		this.fee = fee;
	}

	calculateDisc(){
		return (this.fee * this.disc) / 100;
	}

	netFee(offer){
		if (offer == true){
			return this.fee - this.calculateDisc();
		} else {
			return this.fee;
		}
		
	}
	
	setemail(){
		let emailID = `${this.fname}.${this.lname}${this.domain}`;
		emailID = emailID.toLowerCase();
		return emailID
	}

}

const cls1 = new ClassMethods(1, 101, "Suresh", "Anandamurthi", 30000, 10);

console.log(cls1);
console.log(cls1.getFee);
console.log(cls1.setFee = 45000);
console.log(cls1.calculateDisc());
console.log(cls1.setFee = cls1.netFee(true));
console.log(cls1.getFee);
console.log(cls1.setemail());

for (let key of Object.keys(cls1)){
	console.log(key, cls1[key]);
}