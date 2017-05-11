var bio = {
    name: "Ji Qingyuan",
    role: "PhD Student and GIS Engineer",
    contacts: {
        mobile: "+49-12345678",
        email: "jqyheroes3@126.com",
        github: "BurningWish",
        twitter: "@BurningWish",
        location: "Newcastle upon Tyne, England"
    },
    welcomeMessage: "Hello there! I am a GIS student and a self taught Web Developer",
    skills: ["GIS", "Python", "HTML/CSS", "Javascript", "jQuery"],
    biopic: "images/fry.jpg",

    display: function() {
        // Display Bio information at the Header
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedName, formattedRole);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

        $("#header").append(formattedBioPic, formattedWelcomMsg);

        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });

        // Display Bio information at the Footer
        $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
    }
};

var education = {

    schools: [{
            name: "Newcastle University",
            location: "Newcastle upon Tyne, England",
            degree: "PhD",
            majors: ["Geoinformatics"],
            dates: "2015 - 2019",
            url: "http://www.ncl.ac.uk"
        },
        {
            name: "Zhejiang University",
            location: "Hangzhou, China",
            degree: "Master of Engineering",
            majors: ["Geological Resources and Engineering"],
            dates: "2012 - 2015",
            url: "http://www.zju.edu.cn"
        },
        {
            name: "Zhejiang University",
            location: "Hangzhou, China",
            degree: "Bachelor of Science",
            majors: ["Geoinformation Science and Technology"],
            dates: "2008 - 2012",
            url: "http://www.zju.edu.cn"
        }
    ],

    onlineCourses: [{
            title: "Full Stack Web developer Nanodegree",
            school: "Udacity",
            dates: "2017",
            url: "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
        },
        {
            title: "Front-End Web Developer Nanodegree",
            school: "Udacity",
            dates: "2017",
            url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ],

    displaySchool: function() {
        // Display Schools Education using forEach loop
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedExperience = formattedName + formattedDegree;
            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);

            $(".education-entry:last").append(formattedExperience, formattedDates, formattedLocation);

            var majorString = "";
            // Loop through the major array, concatenate all the majors into a large string
            school.majors.forEach(function(major) {
                majorString = majorString + major + "";
            });
            var formattedMajor = HTMLschoolMajor.replace("%data%", majorString);
            $(".education-entry:last").append(formattedMajor);

            // If this education entry doesn't correspond to the last school, append an <hr> tag at the end of it
            if (school != education.schools[education.schools.length - 1]) {
                $(".education-entry:last").append("<hr class=section-divider>");
            }
        });
    },

    displayCourse: function(){
        // Add the heading of online classes only once
        $("#education").append(HTMLonlineClasses);

        // Display Online Courses using forEach loop
        education.onlineCourses.forEach(function(course) {
            $("#education").append(HTMLschoolStart);

            var formattedTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url);
            var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedCourse = formattedTitle + formattedSchool;
            var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
            var formattedUrl = HTMLonlineURL.replace("%data%", course.url).replace("#", course.url);

            $(".education-entry:last").append(formattedCourse, formattedDates, formattedUrl);

            // If this online course entry doesn't correspond to the last course, append an <hr> tag at the end of it
            if (course != education.onlineCourses[education.onlineCourses.length - 1]) {
                $(".education-entry:last").append("<hr class=section-divider>");
            }
        });
    }
};

education.display = function(){
    education.displaySchool();
    education.displayCourse();
};

var work = {
    jobs: [{
            employer: "Arup",
            title: "GIS Algorithm Engineer",
            location: "Newcastle upon Tyne, England",
            dates: "Feb - May, 2017",
            description: "Arup is a company for future urban planning and management. I was involved in a big project called 'Arup Global Challenge', which aims to develop a decision supporting tool for future city planning. I was resiponsible for developing spatial algorithm mainly at the backend part.",
            url: "http://www.arup.com"
        },
        {
            employer: "Ito World",
            title: "GIS counselor",
            location: "London, England",
            dates: "May - Aug, 2017",
            description: "Itoworld is a company for providing spatial and temporal data visulization solutions to different customers. I was involved in a project, whose customer is a company from Beijing, China. Itoworld was responsible for developing a transit data visulization platform and I was a traslator for project proposal and an GIS engineer to explain technical details to the customer.",
            url: "http://www.itoworld.com"
        }
    ],

    display: function() {
        // Display Work using forEach loop
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("#", job.url);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

            $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);


            // If this work entry doesn't correspond to the last job, append an <hr> tag at the end of it
            if (job != work.jobs[work.jobs.length - 1]) {
                $(".work-entry:last").append("<hr class=section-divider>");
            }
        });
    }
};

var projects = {
    projects: [{
            title: "Multi User Blog",
            dates: "2017",
            description: "An online blog developed based on google app engine. Different users can login and make their comments to the posts.",
            images: ["images/P1-1.jpeg", "images/P1-2.jpeg", "images/P1-3.jpeg"],
            url: "https://github.com/BurningWish/FSND-P3-Multi-User-Blog"
        },
        {
            title: "Catalog App",
            dates: "2017",
            description: "An online item catalog developed based on Flask and OAuth2. Different users can add or remove items to the catalogs.",
            images: ["images/P2-1.jpeg", "images/P2-2.jpeg", "images/P2-3.jpeg"],
            url: "https://github.com/BurningWish/FSND-P5-Catalog-App"
        },
        {
            title: "Neighbourhood Map",
            dates: "2017",
            description: "A single page web application showing several places of interest in the beautiful city - Florence, Italy. It is built based on using several ajax API calls to fetch data from Flicker, Wikipedia, Google Maps and Google Street View.",
            images: ["images/P3-1.jpeg", "images/P3-2.jpeg", "images/P3-3.jpeg"],
            url: "https://github.com/BurningWish/FSND-P6-Neighbourhood-Map"
        },

    ],

    display: function() {
        // Display Projects using forEach loop
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

            $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

            // Each project has multiple pictures, there is another forEach loop
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });

            $(".project-entry a:last").attr("href", project.url);

            // If this project entry doesn't correspond to the last project, append an <hr> tag at the end of it
            if (project != projects.projects[projects.projects.length - 1]) {
                $(".project-entry:last").append("<hr class=section-divider>");
            }
        });
    }
};


// Display all my associated information in the resume
bio.display();
education.display();
work.display();
projects.display();


// Add the googleMap to the resume as well
$("#mapDiv").append(googleMap);