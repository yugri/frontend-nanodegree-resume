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
        "dates": "2004-2007"
    },
    {
        "employee": "Elcom",
        "title": "service engineer",
        "location": "Kiev",
        "dates": "2008-2011"
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


