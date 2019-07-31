console.log("script.js")

/*console.log (true);// Boolean
console.log ("Ishan" , true); // String 
console.log (75); //number there is no quote if you type the quote it will string.
console.log (null); // there is nothing


console.log (true, typeof false);// How we test type of 
console.log (75, typeof 75);
console.log (null, typeof null); // this should be a null, it's bug of Javascript
console.log (undefined, typeof undefined);*/

/*String*/

var name;
    name="Ishan";
console.log(name, typeof name);


var   firstName="Ishan",
      lastName="Gunaratne",
      fullName;

    console.log(firstName + " " + lastName);

    var myData = [];
        myData = ["Ishan","Gunaratne"];
        console.log (myData);

    myData = new Array();
    myData = new Array("Ishan","Gunaratne");
        console.log (myData);

/*Object*/

var myData = new Object (); //

myData = {};

myData.fname = "Ishan";
myData.lname = "Gunaratne";
console.log (myData, typeof myData)

var myData = {

    fname: "Ishan",
    lname: "Gunaratne"

};

console.log (myData);

/*Ex-01*/

var settings = {
    flag : true,
    name : ["Ishan","Gunaratne"],
    contacts : {
        fixed : "011-4482651",
        mobile : " 077 7 130 639"
    }

};

//console.log (settings.name[1]);
//console.log (settings.contacts.fixed);
console.log (settings ["contacts"] ["mobile"]);

var settings = {
    flag : true,
    address : [
        ["no 459/1/1","lake road","boralesgamuwa"],
        ["colombo","Sri lanka"]
    ]
};

console.log(settings.address[0][0]);

var settings = {
    flag : true,
    address : [
        ["\"no 459/1/1\",lake road","boralesgamuwa"],
        ["colombo","Sri lanka"]
    ]
};

console.log(settings.address[1][1]);

var settings = {
        0 : "some value"
};

//console.log (settings[0]);
console.log (settings[""]);

//Function 

function myFunc( firstName , lastName ) {
    
    var fullName;

    fullName = firstName + " " + lastName;

    return {
        a: fullName,
        b: firstName,
        c: lastName
    };

}
var a = myFunc("Ishan","Gunaratne")

console.log ( a.a );


document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByTagName('h1')[0].textContent = "change it";
});
        
function myfunc (){
    return "Hello World"

}

var out = myfunc()
console.log(out);

//getElement

var firstlist = document.getElementById("first-list");        

//querySelectorAll

//loop the array using native js

var array = ["item 01" , "item 02" , "item03"];

array.forEach(function (val,index) {
    console.log (val,index);

});

var firstlistLi = document.querySelectorAll ('ul > li');

firstlistLi.forEach(function(ele){
    ele.style.fontSize = "2em";
});

//how to loop the object js
//for-in type loops

var obj = {
    a : 2,
    b : 4,
    c : 6
};

for (var prop in obj) {
    console.log (prop, obj[prop]);
};


//how to loop span in js


var span = document.getElementsByTagName('span')

console.log ('getElementsByTagName', span);




