

function myFunc(){
    return "hello world";
}


var out = myFunc();

console.log( out );

var selfExecute = function(){
   return "Sameval"; 
}();


console.log( selfExecute );


var firstLevelLi = document.querySelectorAll('ul > li');

firstLevelLi.forEach(function( ele ){
	ele.style.fontSize = "2em";
});


