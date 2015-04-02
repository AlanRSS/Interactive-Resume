







var bio = {
"name" : "Alan Santos",
"role" : "developer",
"welcomeMessage" : "Hey Guys!",
"contact" : "923747301",
"skills" : ["programing", "css","html","git","animation","windows server","linux","tribox", "n+", "SQL","C#","Adobe Creative suite"],
"email" : "alanrss_1@hotmail.com",
"location" : "Lubango, Angola",
"image" : "images/Alan.jpg"
};

var education = {
"schools": [
	{
	"name": "Colegio 123",
	"city": "Lubango ANG",
	"degree": "High School",
	"major" : "biological and phisical sciences",
	"year": "2004-2010"
	},
	{
	"name": "WLS- Witts language school",
	"city": "Johannesburg SA",
	"degree": "Language",
	"major" : "English for academical objectives",
	"year": "2011"
	},
	{
	"name":"CTI- Heriot Watt",
	"city":"Johannesburg SA",
	"degree": "BSC",
	"major" :"CompEngi",
	"year" : "2012-2014"
	}
	]
	,
	"onlineCourses": [
	{
	"name" : "Udacity",
	"degree" : "Front End Web Developer",
	"URL" : "www.udacity.com",
	"year" : "2015"
	}
	]
}	
	
var work = [
	{
	"employer" : "PSL",
	"role" : "web designer and developer",
	"year" : "2015",
	"location" : "Lubango ANG",
	"description" : " Development of logos, business cards and website for the company."
	},
	{
	"employer" : "Farost",
	"role" : "student",
	"year" : "1998-2015",
	"location" : "Lubango ANG, Johannesburg SA",
	"description" : " Under the orientation of my parents I studied and built my academical curriculum"
	}]

var projects =[ {
	"title" : "PSLLogo",
	"year" : "2015",
	"location" : "Luanda, ANG",
	"description" : "logo development for a company that is being built in Angola, the development took several hours and the logo elemnts reference cultural and business related elements",
	"image" : "images/logo.jpg"
}]



 
function displaybio(){
var specialname = HTMLheaderName.replace("%data%", bio.name);
var specialrole = HTMLheaderRole.replace("%data%", bio.role);
var Picture= HTMLbioPic.replace("%data%", bio.image);
var specialWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
var specialContact = HTMLmobile.replace("%data%", bio.contact);
var specialMail = HTMLemail.replace("%data%", bio.email);
var specialLocation = HTMLlocation.replace("%data%", bio.location);
$("#main").prepend(specialWelcomeMessage);
$("#main").prepend(Picture+specialname+"<p></p>"+specialrole);
$("#header").append(HTMLskillsStart);
for(value in bio.skills) {
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[value]);
	$("#skills").append(formattedSkill);
}
$("#topContacts").append("<br>"+"<p>"+ specialMail+"</p><p> "+ specialContact+"</p><p>"+specialLocation+"</p>");
}
function displayEducation(){
for(value in education.schools) {
$("#education").append(HTMLschoolStart);

	if(education.schools.hasOwnProperty(value)===true){
	var formattedSchool = HTMLschoolName.replace("%data%", education.schools[value].name)
	$(".education-entry:last").append(formattedSchool);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[value].degree)
	$(".education-entry:last").append(formattedDegree);
	var formattedDate = HTMLschoolDates.replace("%data%", education.schools[value].year)
	$(".education-entry:last").append(formattedDate);
	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[value].major)
	$(".education-entry:last").append(formattedMajor);

	}
}
}
function displayWork(){
for(value in work) {
$("#workExperience").append(HTMLworkStart);

	if(work.hasOwnProperty(value)===true){
		var formattedWork = HTMLworkEmployer.replace("%data%", work[value].employer)
	$(".work-entry:last").append(formattedWork);
	var formattedTitle = HTMLworkTitle.replace("%data%", work[value].role)
	$(".work-entry:last").append(formattedTitle);
	var formattedDate = HTMLworkDates.replace("%data%", work[value].year)
	$(".work-entry:last").append(formattedDate);
	var formattedDescription = HTMLworkDates.replace("%data%", work[value].description)
	$(".work-entry:last").append(formattedDescription);

	}
}
}
function displayOnline(){
for(value in education.onlineCourses) {
$(".education-entry:last").append(HTMLonlineClasses);

	if(education.onlineCourses.hasOwnProperty(value)===true){
	var formattedName = HTMLonlineSchool.replace("%data%", education.onlineCourses[value].name)
	$(".education-entry:last").append(formattedName);
	var formattedDegree = HTMLonlineTitle.replace("%data%", education.onlineCourses[value].degree)
	$(".education-entry:last").append(formattedDegree);
	var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[value].year)
	$(".education-entry:last").append(formattedDate);
	var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[value].URL)
	$(".education-entry:last").append(formattedURL);

	}
}
}
function displayProjects(){
	for(value in projects){
	$("#projects").append(HTMLprojectStart);
		if(projects.hasOwnProperty(value)===true){
			var formattedName = HTMLprojectTitle.replace("%data%", projects[value].title)
	$(".project-entry:last").append(formattedName);
	var formattedDate = HTMLprojectDates.replace("%data%", projects[value].year)
	$(".project-entry:last").append(formattedDate);
	var formattedDesc = HTMLprojectDescription.replace("%data%", projects[value].description)
	$(".project-entry:last").append(formattedDesc);
	var formattedURL = HTMLprojectImage.replace("%data%", projects[value].image)
	$(".project-entry:last").append(formattedURL);

		}

	}
}

displaybio();
displayWork();
displayEducation();
displayOnline();
displayProjects();
$("#main").append(internationalizeButton)

function inName(name)
{
	try{
var NameArray = bio.name.trim().split(" ");
}
catch(e){
	console.log("yo",e)
}
console.log(NameArray)
NameArray[1] = NameArray[1].toUpperCase();
NewName = NameArray.join(" ")
name = NewName;
return name;

}
$("#mapDiv").append(googleMap);
