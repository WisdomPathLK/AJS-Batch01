/* 
console.log("script.js");
console.log(true); //this is Boolean

console.log ("string",typeof "string");
console.log ("string",true,typeof true);
console.log (43, typeof 43); //Number

console.log(null, typeof null);

console.log(undefined, typeof undefined);
*/

var name;

console.log (name);
console.log (name,typeof name);


var hello;

console.log (hello);
console.log (hello,typeof hello);


/*var fName = "Srinath";
var lName = "Perera";
var	fullName = fName + " " + lName;
console.log (fName + " " + lName);


var myData = ["Dhananjaya","Karandana"];*/
//var myData = new Array ("Dhananjaya","Karandana");


console.log(myData, typeof myData);

/* Object */

//var myData = new Object(); //{}

var myData = {};
myData.fname = "Srinath";
myData.lname = "Perera";
myData.age	 = 30;
myData.city	 = "jaela";
console.log (myData, typeof myData);
console.log (myData.age, typeof myData.age);



var myData2 = {
	fname:"Srinath2",
	lname:"Perera 2",
	age:40
}

console.log (myData2.age, typeof myData2.age);



var settings = {
	0:"some value",
	null:"hello",
	"":"Im completly blank",
	flag : true,
	name : ["Srinath","Perera"], //Array
	address : [
		["\" himalaya \"no 451/1/1","Lake Road","Boralasgamuwa"],
		["Colombo","Sri Lanka"]
	],
	contacts: {
				landline:9544578512,//Object
				mobile:94776532995
			}

};
console.log (settings.name[1]);
console.log (settings.address[0][0]);
console.log (settings.contacts.mobile);
console.log (settings["contacts"]["landline"]);
console.log (settings[0]);
console.log (settings[null]);
console.log (settings[""]);




// Functions

function myfunc( firstname, lastname){

	console.log ("my func call",arguments);
	// var firstname = arguments[0];
	// var lastname = arguments[1];

	var	 fullName = firstname +" "+lastname;

//	return fullName;

	return {

		fullName:"My Full Name: " + fullName,
		firstName:"My First Name: " + firstname,
		LastName:"My Last Name: " + lastname,
	}

}

var a = myfunc("Dhananjaya","Karandana");
console.log(a.fullName);


// 				INPUT									PROCESS					OUTPUT

//first name 			last name 			=> 			func 		=> 			fullName

//First Name 				Last Name 											return 


document.addEventListener("DOMContentLoaded",function(){

document.getElementsByTagName("h1")[1].textContent="Change it";
});







