

/**
 * HTML Body style
 */

var body = document.body;
    body.style.color = "red";

var firstList = document.getElementById('first-list');

    console.log( firstList );

    firstList.style.backgroundColor = "gold";
    
/***
 * querySelectorAll
 */

 var firstLevelLi = document.querySelectorAll('ul > li');


    console.log( "querySelectorAll", firstLevelLi );
    firstLevelLi.forEach(function( ele ){
        ele.style.fontSize = "2em";
    });


/***
 * How to loop JS Array natively
 */
 var array = ["item 01","item 02","item 03","item 04"];

 array.forEach(function( val, index){
    console.log(val,index);
 });
    
/***
 * How to loop JS Object
 */

 var obj = {
     a:2,
     b:4,
     c:8
 };

 for( var prop in obj ){
    console.log( prop, obj[ prop ]  );
 }
 
 console.log( [1,2,3] instanceof Array )
 console.log( {a:2,b:3} instanceof Object )




