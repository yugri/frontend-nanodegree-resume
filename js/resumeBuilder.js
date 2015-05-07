var awesomeThoughts,
    funThoughts,
    formattedName,
    formattedRole,
    name,
    role;

name = "Yuri Gritsai";
role = "Web Developer";
// awesomeThoughts = "I am Yuri and I am AWESOME!";
// funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);
// console.log(awesomeThoughts);
// console.log(funThoughts);

formattedName = HTMLheaderName.replace("%data%", name);
formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
