const std = {
	name: "Suresh A",
	age : 38,
	rolNo: 101,
	course : "Java",
	courseFee : 30000,
	offer : false,
	disc : 0,
}

console.log(std);

// Factory Function

function createStd(name, age, rolNo, course, courseFee, offer, disc){
	return{
		name : name,
		age : age,
		rolNo : rolNo,
		course : course,
		courseFee : courseFee,
		offer : offer,
		disc : disc,
	}
}

const std1 = createStd("Raju", 35, 102, "Python", 30000, true, 15);
console.log(std1);

// Constructor Function

function CreatStdObj(name, age, rolNo, course, courseFee, offer, disc){
	this.name = name;
	this.age = age;
	this.rolNo = rolNo;
	this.course = course;
	this.courseFee = courseFee;
	this.offer = offer;
	this.disc = disc;
	this.discVal = function(courseFee, disc, offer){
		return (this.offer == true)? ((this.courseFee * this.disc)/100) : 0;
	}
	this.netFee = function(){
		return (this.courseFee - this.discVal());
	}
}

const std2 = new CreatStdObj("Shiva", 40, 103, "FullStack", 30000, true, 50);
console.log(std2);
console.log(std2.discVal());
console.log(std2.netFee());