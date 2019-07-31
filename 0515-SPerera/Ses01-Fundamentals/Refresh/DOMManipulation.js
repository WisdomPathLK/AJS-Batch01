'use strict';

var authors = [
	{
		name:"Zeev Suraski",
		avatar:"https://s9.postimg.org/76bz3mrx7/zeev.jpg",
		twitter:"https://twitter.com/zeevs"
	},
	{
		name:"Rasmus Lerdorf",
		avatar:"https://s9.postimg.org/ijyieu2fv/Rasmus_Lerdorf.jpg",
		twitter:"https://twitter.com/rasmus"
	},
	{
		name:"Andi Gutmans",
		avatar:"https://s9.postimg.org/9l3uo2863/andi.jpg",
		twitter:"https://twitter.com/andigutmans     "
	},
	{
		name:"derick",
		avatar:"https://s9.postimg.org/87c7sr8wr/Derick.jpg",
		email:"derick@php.net"
	}
],addToContacts, contactList ;

// get DOM Element by using selector - ID

contactList = document.getElementById("contact-list");

addToContacts = function( contact ){

	var contactWrapper,
		validEmail = true,
		validURL = true;

	contactWrapper = document.createElement('div');
	contactWrapper.setAttribute('class','contact-block');

	contact.name = contact.hasOwnProperty('name') ? contact.name.trim() : null;
	contact.email = contact.hasOwnProperty('email') ? contact.email.trim() : null;
	contact.twitter = contact.hasOwnProperty('twitter') ? contact.twitter.trim() : null;
	contact.avatar = contact.hasOwnProperty('avatar') ? contact.avatar.trim() : null;

	if( contact.avatar ){
		contact.avatarImg = document.createElement('img');
		contact.avatarImg.setAttribute('src', contact.avatar );
		contact.avatarImg.setAttribute('class', 'thumbnail' );

		contactWrapper.appendChild( contact.avatarImg );
		delete contact.avatarImg;
	}

	if( contact.name ){
		contact.nameEle = document.createElement('h4');
		contact.nameEle.setAttribute('class','name');
		contact.nameEle.appendChild( document.createTextNode( contact.name ) );
		
		contactWrapper.appendChild( contact.nameEle );
		delete contact.nameEle;
	}

	

	if( contact.email && validEmail ){
		
		contact.emailTo = document.createElement('a');
		contact.emailTo.setAttribute('href','mailto:' + contact.email );
		contact.emailTo.setAttribute('class','link-to');

		contact.emailTo.appendChild( document.createTextNode( contact.email ) );

		contactWrapper.appendChild( contact.emailTo );
		delete contact.emailTo;
	}

	if( contact.twitter && validURL ){

		contact.twLink = document.createElement('a');
		contact.twLink.setAttribute('href', contact.twitter );
		contact.twLink.setAttribute('class','link-to');
		
		contact.twLink.appendChild( document.createTextNode( "@" + contact.twitter ) );

		contactWrapper.appendChild( contact.twLink );
		delete contact.twLink;
	}


	contactList.appendChild( contactWrapper );
};

/* add contacts into screen */

for( var auth in authors){
	addToContacts( authors[ auth ] );
}

