

function myFunc(){
    return "hello world";
}


var out = myFunc();

console.log( out );

var selfExecute = function(){
   return "Sameval"; 
}();


console.log( selfExecute );
