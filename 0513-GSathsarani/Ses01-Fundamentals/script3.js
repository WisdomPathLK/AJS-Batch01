var settings = {

	"":"blank",
	0:"aaa",
	flag: true,
	name: ["fname","lname"],
	pet: [
 		["cat","cuu"],
 		["dogs","rocky"]
 ],
 contactNumber:{
 	mobile:"123456",
 	fixed:"xxxxxx"
 },
};
 console.log(settings.name[1]);

 
 console.log(settings.pet);
 console.log(settings.pet[0]);
 console.log(settings.pet[0][0]);

  console.log(settings.contactNumber.mobile);
  console.log(settings["contactNumber"]["mobile"]);
  console.log(settings["0"]);
  console.log(settings[""]);