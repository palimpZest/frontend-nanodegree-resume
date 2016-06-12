/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
    "name" : "Polo Martín",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "+1 (000) 000 000",
        "email": "johndoe@gmail.com",
        "github" : "@palimpZest",
        "twitter" : "@johndoe",
        "location" : "France"
    },
    "welcome_message" : "Hi there! Welcome to my online resumé!",

    "skills" : [
    "Python", "HTML", "CSS", "Javascript"
    ],
    "bioPic" : "images/Addesso_opie.jpg"
};

var work = {
	"jobs" : [
	{
		"employer" : "Employer 1",
		"title" : "Position held 1",
		"location" : "Tokyo",
		"dates" : "2016",
		"description" : "Curabitur ut ornare elit, ac placerat ligula. Nam consectetur, sem euismod pretium eleifend, dui odio dictum dolor, ut faucibus justo massa eu lorem. Phasellus tristique tempus ornare. Nam eget porta purus. Fusce luctus arcu eu sollicitudin laoreet. Etiam rhoncus gravida neque sit amet posuere. Suspendisse consequat eu lectus nec facilisis."
	},
	{
		"employer" : "Employer 2",
		"title" : "Position held 2",
		"location" : "Paris",
		"dates" : "2015",
		"description" : "Ut a erat eget nisi rhoncus hendrerit nec convallis diam. Nullam nulla massa, hendrerit rutrum congue non, luctus eu libero. Vivamus blandit condimentum pellentesque. Nunc facilisis euismod nunc vitae blandit. Phasellus pellentesque, mauris quis ultrices venenatis, felis neque cursus justo, eu vulputate leo dui at purus. "
	},
	{
		"employer" : "Employer 3",
		"title" : "Position held 3",
		"location" : "London",
		"dates" : "2014",
		"description" : "Praesent sodales sem eu arcu bibendum, a feugiat urna interdum. Aliquam id mi ut diam porttitor ornare. Nunc ornare augue eget nibh fermentum, a vehicula urna tristique. Aenean vitae eleifend nisl. Nullam quis metus ut lacus cursus dictum. Sed pellentesque lorem at ligula sollicitudin pulvinar. Aenean lobortis elit vel tortor rutrum, id laoreet ante faucibus."
	},
	{
		"employer" : "Employer 4",
		"title" : "Position held 4",
		"location" : "Sydney",
		"dates" : "2013",
		"description" : "Curabitur congue justo in justo laoreet semper porta et velit. Nulla ut mauris lacus. Nullam condimentum tortor a sodales condimentum. In vel lacinia turpis. Vivamus auctor ultrices diam, sit amet efficitur neque scelerisque id. Morbi pellentesque turpis ut molestie gravida. Fusce vel semper justo, id iaculis lacus."
	}
  ]
};

var projects = {
	"projects" : [
	{
		"title" : "Internet Website",
		"dates" : "2016",
		"description" : "A website about the internet created using HTML and CSS:",
		"images" : ["images/first_website.gif"]
	},
	{
		"title" : "Game Quiz",
		"dates" : "2016",
		"description" : "A Fill-in-the-blanks quiz created using Python:",
		"images" : ["images/quiz_game.gif"]
	},
	{
		"title" : "Movie Website",
		"dates" : "2016",
		"description" : "A movie website displaying trailers using HTML, CSS and Python:",
		"images" : ["images/movie_website.gif"]
	}
  ]
};

var education = {
    "schools" : [
    {
        "name": "School1",
        "location": "Paris",
        "degree": "Degree 1",
        "majors" : ["Major A", " Major B"],
        "dates" : "2010 - 2013",
        "url" : ""
    },
    {
        "name": "School2",
        "location": "São Paulo",
        "degree": "Degree 2",
        "majors" : ["Major A", " Major B"],
        "dates" : "2009-2010",
        "url" : ""
    },
    {
        "name": "School3",
        "location": "Madrid",
        "degree": "Degree 3",
        "majors" : ["Major A", " Major B"],
        "dates" : "2006-2009",
        "url" : ""
    }
  ],
    "onlineCourses" : [
    {
        "title" : "Introduction to Programming Nanodegree",
        "school" : "Udacity",
        "dates" : "2016",
        "url" : "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    },
    {
        "title" : "How to Use Git and Github",
        "school" : "Udacity",
        "dates" : "2016",
        "url" : "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
    }
  ]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcome_message);
	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
	$('#header').prepend(formattedName, formattedRole).append(formattedBioPic, formattedWelcomeMsg);
	$('#topContacts').append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
	$('#footerContacts').append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
	$('#header').append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace('%data%', bio.skills[skill]);
		$('#skills').append(formattedSkills);                                    // https://discussions.udacity.com/t/online-resume-skills-at-a-glance-section/41885
	}
};

work.display = function() {
	for(job in work.jobs) {
	$('#workExperience').append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace(
		'%data%', work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace(
		'%data%', work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedWorkLocation = HTMLworkLocation.replace(
		'%data%', work.jobs[job].location);
	var formattedWorkDates = HTMLworkDates.replace(
		'%data%', work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace(
		'%data%', work.jobs[job].description);

	$('.work-entry:last').append(formattedEmployerTitle);
	$('.work-entry:last').append(formattedWorkLocation);
	$('.work-entry:last').append(formattedWorkDates);
	$('.work-entry:last').append(formattedDescription);
	}
};

projects.display = function() {
	for (project in projects.projects) {
	$('#projects').append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace(
		'%data%', projects.projects[project].title);
	var formattedDates = HTMLprojectDates.replace(
		'%data%', projects.projects[project].dates);
	var formattedDescription = HTMLprojectDescription.replace(
		'%data%', projects.projects[project].description);

	$('.project-entry:last').append(formattedTitle);
	$('.project-entry:last').append(formattedDates);
	$('.project-entry:last').append(formattedDescription);

	if (projects.projects[project].images.length > 0) {
		for (image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace(
				'%data%', projects.projects[project].images[image]);
		$('.project-entry:last').append(formattedImage);
		}
		}
	}
};

education.display = function() {
	for(school in education.schools) {
	$('#education').append(HTMLschoolStart);

	var formattedSchoolName = HTMLschoolName.replace(
		'%data%', education.schools[school].name);
	var formattedSchoolDegree = HTMLschoolDegree.replace(
		'%data%', education.schools[school].degree);
	var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
	var formattedSchoolLocation = HTMLschoolLocation.replace(
		'%data%', education.schools[school].location);
	var formattedSchoolDates = HTMLschoolDates.replace(
		'%data%', education.schools[school].dates);
		var formattedSchoolMajor = HTMLschoolMajor.replace(
		'%data%', education.schools[school].majors);

	$('.education-entry:last').append(formattedSchoolNameDegree);
	$('.education-entry:last').append(formattedSchoolLocation);
	$('.education-entry:last').append(formattedSchoolDates);
	$('.education-entry:last').append(formattedSchoolMajor);
	}

	$('.education-entry:last').append(HTMLonlineClasses);
	for(onlineCourse in education.onlineCourses) {

	var formattedOnlineTitle = HTMLonlineTitle.replace(
		'%data%', education.onlineCourses[onlineCourse].title);
	var formattedOnlineSchool = HTMLonlineSchool.replace(
		'%data%', education.onlineCourses[onlineCourse].school);
	var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
	var formattedOnlineDates = HTMLonlineDates.replace(
		'%data%', education.onlineCourses[onlineCourse].dates);
	var formattedOnlineUrl = HTMLonlineURL.replace(
		'%data%', education.onlineCourses[onlineCourse].url);

	$('.education-entry:last').append(formattedOnlineTitleSchool);
	$('.education-entry:last').append(formattedOnlineDates);
	$('.education-entry:last').append(formattedOnlineUrl);
	}
};

function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }

    return locationArray;
}

console.log(locationizer(work));

function inName(name) {
    name = name.trim().split(' ');
    var firstName = name[0][0].toUpperCase() + name[0].slice(1).toLowerCase();
    var lastName = name[1].toUpperCase();
    return firstName + ' ' + lastName;
}

$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);

education.display();

projects.display();

work.display();

bio.display();