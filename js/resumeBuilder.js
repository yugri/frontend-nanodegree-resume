var awesomeThoughts,
    funThoughts,
    formattedName,
    formattedRole,
    name,
    role;

name = "Chuck Norris";
role = "Texas Ranger";
// awesomeThoughts = "I am Yuri and I am AWESOME!";
// funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);
// console.log(awesomeThoughts);
// console.log(funThoughts);

var skills = ["Python", "JavaScript", "TwitterBootstrap", "PostgreSQL", "OOP", "HTML5", "CSS3", "LESS"];

var bio = {
    "name": "Yuri Gritsai",
    "role": "Web Developer",
    "age": 29,
    "skills": skills,
    "image_url": "images/avamy.JPG",
    "short_message": "I glad to see you here friend",
    "contacts": {
        "mobile": "+380500152281",
        "email": "yugritsai@gmail.com"
    }
};

var work = [
    {
        "employee": "Walker",
        "title": "policeman",
        "location": "Texas",
        "dates": "2004-2007",
        "description": "Job desc..."
    },
    {
        "employee": "Elcom",
        "title": "service engineer",
        "location": "Kiev",
        "dates": "2008-2011",
        "description": "Job desc..."
    }
];
var projects = [
    {
        "title": "",
        "dates": "",
        "description": "",
        "image": ""
    },
    {
        "title": "",
        "dates": "",
        "description": "",
        "image": ""
    }
];
var education = [
    {
        "name": "National Aviation University",
        "location": "Kiev",
        "degree": "electronics engineer",
        "majors": ["BA"],
        "url": "http://nau.edu.ua/"
    },
    {
        "name": "Intro to computer science",
        "location": "Udacity",
        "degree": "Python developer",
        "majors": [""],
        "url": "http://udacity.com/"
    }
];


formattedName = HTMLheaderName.replace("%data%", name);
formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#main").prepend(bio["city"]);

if (bio.skills.length != 0) {
    $("#header").append(HTMLskillsStart);
    for (var i=0; i<=bio.skills.length-1; i++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}


function displayWork() {
    for (var j = 0; j <= work.length - 1; j++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployeeTitle = HTMLworkEmployer.replace("%data%", work[j].employee) + HTMLworkTitle.replace("%data%", work[j].title);
        var formattedDates = HTMLworkDates.replace("%data%", work[j].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work[j].description);
        $(".work-entry:last").append(formattedEmployeeTitle).append(formattedDates).append(formattedDescription);
    }
}

displayWork();

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});


