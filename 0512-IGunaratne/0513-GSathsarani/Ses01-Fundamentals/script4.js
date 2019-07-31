function myfunc( firstName, lastName){
	//var firstName = arguments[0];
	//var lastName = arguments[1];

	var fullName;

	fullName = firstName + "" + lastName;

	return {

		firstvalue: "my first name is" + fullName,
		secondvalue: "my last name is " + firstName,
		thirdvalue: "my full name is" + lastName
	};
}

var a = myfunc("Gaya","Sathsarani");
console.log(a.firstvalue);