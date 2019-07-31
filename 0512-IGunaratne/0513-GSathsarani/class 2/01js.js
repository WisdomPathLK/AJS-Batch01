function myFunc() {
	return "hello world"
}

var out = myFunc();

console.log( out );

var firstLevelElemnts = document.querySelectorAll('ul > li');

firstLevelElemnts.forEach(
function(ele){
	ele.style.fontSize = "2em";
}
	);



//var selfexecute = function(){
//return "same"
//};();

//console.log(selfexecute); 