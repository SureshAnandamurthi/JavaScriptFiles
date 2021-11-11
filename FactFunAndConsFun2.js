//Factory Function

function emp(num, name, dept){
	return {
		num: num,
		name: name,
		dept: dept,
	}
}

const emp1 = emp(101, "Suresh A", "1ZZ");
console.log(emp1);

function CreatEmp(num, name, dept){
	this.num = num;
	this.name = name;
	this.dept = dept;
	this.email = function(){
		return (this.name+"@co.com");
	}
}


const emp2 = new CreatEmp(102, "Srinivas", "ZZIT");
console.log(emp2);

const emp3 = new CreatEmp(103, "bhat", "ZUIT");
console.log(emp3);
console.log(emp3.name);
console.log(emp3.email());
console.log(emp2.email());