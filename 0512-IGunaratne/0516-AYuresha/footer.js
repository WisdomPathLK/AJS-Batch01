




/*
for( var prop in span){
	console.log( prop, span[ prop ]);
}*/

var spans = document.getElementsByTagName('span');


for( var prop in spans ){
	var that = spans[prop];

	that.style.color ="red";
	
}

