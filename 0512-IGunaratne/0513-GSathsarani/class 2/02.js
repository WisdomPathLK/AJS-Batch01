var obj = {
	a:1,
	b:2,
	c:3
};

for ( var prop in obj){
	console.log( prop, obj[ prop ]);
}

var span = document.getElementsByTagName('span');

for ( var sp in span){
	console.log( sp, span[sp] );
}