var bio = {
			"name": "John Chen",
			"role": "Software Engineer",
			"contacts":{
				"mobile": "905 923 2688",
				"email": "chenj59@mcmaster.ca",
				"github": "@macu_123",
				"twitter": "N/A",
				"location": "Hamilton, Ontario, Canada"
			},
			"WelcomeMessage": "welcome to my site!",
			"skills": [
				"HTML",
				"CSS",
				"Bootstrap",
				"JavaScript",
				"jQuery",
				"KnockoutJS",
				"ProcessingJS",
				"Java"
			],
			"bioPic": "images/profileImg.jpg",
		}

		bio.display = function(){
				var formatedname = HTMLheaderName.replace("%data%", bio.name);
				var formatedrole = HTMLheaderRole.replace("%data%", bio.role);
				var formatedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
				var formatedemail = HTMLemail.replace("%data%", bio.contacts.email);
				var formatedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
				var formatedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
				var formatedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
				var formatedpic = HTMLbioPic.replace("%data%", bio.bioPic);
				var formatedmsg = HTMLWelcomeMsg.replace("%data%", bio.WelcomeMessage);

				$('#header').prepend(formatedrole).prepend(formatedname)
					.append(formatedpic)
					.append(formatedmsg)
					.append(HTMLskillsStart);
				$('#topContacts').append(formatedmobile)
					.append(formatedemail)
					.append(formatedgithub)
					.append(formatedtwitter)
					.append(formatedlocation);
				$('#footerContacts').append(formatedmobile)
					.append(formatedemail)
					.append(formatedgithub)
					.append(formatedtwitter)
					.append(formatedlocation);

				for(index in bio.skills){
					var formatedskill = HTMLskills.replace("%data%", bio.skills[index]);
					$('#skills').append(formatedskill);
				}
			}

		var education = {
			"schools": [
				{
					"name": "McMaster University",
				 	"location": "Hamilton, Ontario, Canada",
				 	"degree": "Bachelors",
				 	"majors": ["Software Engineering"],
				 	"dates": 2015,
				 	"url": "http://mcmaster.ca"
				 },
				{
					"name": "Dalhousie University",
				 	"location": "Halifax, Nova Scotia, Canada",
				 	"degree": "Bachelors",
				 	"majors": ["Engineering I"],
				 	"dates": 2011,
				 	"url": "http://dal.ca"
				}
			],
			"onlineCourses": [
				{
					"title": "Introduction to HTML & CSS",
					"school": "Udacity",
					"date": 2014,
					"url": "http://www.udacity.com/course/ud304"
				},
				{
					"title": "Javascript Crash Course",
					"school": "Udacity",
					"date": 2014,
					"url": "http://www.udacity.com/course/ud804"
				}
			]
		}

		education.display = function(){
			
			for(index in education.schools){
				var school = education.schools[index];
				var formatedname = HTMLschoolName.replace("%data%", school.name);
				var formateddegree = HTMLschoolDegree.replace("%data%", school.degree);
				var formateddates = HTMLschoolDates.replace("%data%", school.dates);
				var formatedlocation = HTMLschoolLocation.replace("%data%", school.location);
				var formatedmajors = HTMLschoolMajor .replace("%data%", school.majors);

				$('#education').append(HTMLschoolStart);
				$('.education-entry:last').append(formatedname + formateddegree)
					.append(formatedlocation)
					.append(formateddates)
					.append(formatedmajors)
					.children('a')
					.attr("href", school.url);
				
			}

			$('#education').append(HTMLonlineClasses);	

			for(index in education.onlineCourses){
				var onlineCourse = education.onlineCourses[index];
				var formatedtitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
				var formatedschool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
				var formateddates = HTMLonlineDates.replace("%data%", onlineCourse.date);
				
				$('#education').append(HTMLschoolStart);
				$('.education-entry:last').append(formatedtitle + formatedschool)
					.append(formateddates)
					.children('a').attr("href", onlineCourse.url);
			}

		}
			
		var work = {
			"jobs": [
				{
					"employer": "Siemens Ltd. China",
					"title": "Software Developer Intern",
					"location": "Beijing, China",
					"dates": "September 2013 - May 2014",
					"description": "Took part in a big data analysis project for Huaxia Bank, a public traded bank in China. The responsibility includes some front-end like using ProcessingJS to display data, and some back-end like debugging back-end frameworks, Morphia, Spring."
				},
				{
					"employer": "McMaster Engineering Society",
					"title": "Tutor",
					"location": "Hamilton, Ontario, Canada",
					"dates": "November 2014 - Current",
					"description": "Helped students with their engineering courses as requested."
				}
			]
		}

		work.display = function(){
			for(index in work.jobs){
				var job = work.jobs[index];
				var formatedemployer = HTMLworkEmployer.replace("%data%", job.employer);
				var formatedtitle = HTMLworkTitle.replace("%data%", job.title);
				var formateddates = HTMLworkDates.replace("%data%", job.dates);
				var formatedlocation = HTMLworkLocation.replace("%data%", job.location);
				var formateddescription = HTMLworkDescription.replace("%data%", job.description);

				$('#workExperience').append(HTMLworkStart);
				$('.work-entry:last').append(formatedemployer + formatedtitle)
					.append(formateddates)
					.append(formatedlocation)
					.append(formateddescription);
				
			}
		}

		var projects = {
			"projects": [
				{
					"title": "Website-mockups",
					"dates": "November.2014 - December.2014",
					"description": "Provided a design mockup as a PDF-file, I am required to replicate the design as closely as possible in HTML and CSS. And I am also required to develop a responsive website for a single product overview page by using the popular Twitter's Bootstrap framework.",
					"images": [
						"images/ss1-1.jpg",
						"images/ss2-1.jpg"
					],
					"images_enlarge": [
						"images/ss1-1_enlarge.jpg",
						"images/ss2-1_enlarge.jpg",
					]
					},
				{
					"title": "Design project for Human-Computer Interaction",
					"dates": "September.2014 - December.2014",
					"description": "This project is about plan and design a alarm, stopwatch and timer application, implement, evaluate with users. The project is divided into three projectmilestones. Milestone#1 is Proposal & Software Survey, Milestone#2 is Design & First Prototype, Milestone#3 is Evaluate, Refine & Final Prototype.",
					"images": [
						"images/ss2-2.jpg",
						"images/ss3-2.jpg",
						"images/ss4-2.jpg",
						"images/ss5-2.jpg"
					],
					"images_enlarge": [
						"images/ss2-2_enlarge.jpg",
						"images/ss3-2_enlarge.jpg",
						"images/ss4-2_enlarge.jpg",
						"images/ss5-2_enlarge.jpg",
					]
				}
			]
		}

		projects.display = function(){
			for(index1 in projects.projects){
				var project = projects.projects[index1];
				var formatedtitle = HTMLprojectTitle.replace("%data%", project.title);
				var formateddates = HTMLprojectDates.replace("%data%", project.dates);
				var formateddescription = HTMLprojectDescription.replace("%data%", project.description);
				
				$("#projects").append(HTMLprojectStart);
				$('.project-entry:last').append(formatedtitle)
					.append(formateddates)
					.append(formateddescription);

				for(index2 in project.images){
					var image = project.images[index2];
					var image_enlarge = project.images_enlarge[index2];
					var formatedimage = HTMLprojectImage.replace("%data%", image);
					var formatedimage_enlarge = HTMLprojectImage.replace("%data%", image_enlarge);
					var formatedmodal1 = HTMLmodal1.replace("%data%", "enlarge" + index1 + index2);

					$('.project-entry:last').append(formatedimage);
					$('.project-entry:last').children('img').last().attr({
						"data-toggle": "modal",
						"data-target": "#enlarge" + index1 + index2
					});
					$(formatedmodal1).insertAfter('#main');
					$('#enlarge' + index1 + index2).append(HTMLmodal2)
						.children('.modal-lg').append(HTMLmodal3)
						.find('.modal-content').append(formatedimage_enlarge)
						.find('img').addClass("img-responsive");
				}
			}
		}

		function inName(oldName){
			var names = oldName.split(" ");
			names[0] = names[0].slice(0, 1).toUpperCase() + names[0].splice(1).toLowerCase();
			names[1] = names[1].toUpperCase;
			var finalName = names.join(" ");

			return finalName;
		}


		

		/*$("#main").append(internationalizeButton);*/
		
		bio.display();
		education.display();
		work.display();
		projects.display();
		$('#mapDiv').append(googleMap);

