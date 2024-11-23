const info = {
    // ============ MAIN DETAILS ============
    main: {
        name: "Abu Ahamed Rafi",
        description: "I am a software engineer with expertise in backend web development. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards.",
        role: "Software Engineer",
        photo: "../photo.jpg",
        email: "abuahamedrafi@gmail.com",
    },

    // ============ SOCIAL LINKS ============
    socials: {
        twitter: "https://x.com/AbuAhamedRafi",
		github: "https://github.com/AbuAhamedRafi",
		linkedin: "https://www.linkedin.com/in/abu-ahamed-rafi/",
		instagram: "https://www.instagram.com/theineffableguy/",
		facebook: "https://www.facebook.com/abuahamedrafi",
    },

    // ============ PROJECTS ============
    projects: [
        {
			title: "Frame Generator",
			description: "A web application that allows users to upload an image and add a customized banner (frame) to it.",
            technologies: "Laravel, Tailwind",
			github: "https://github.com/AbuAhamedRafi/Frame-App",
            // link: ""
		},

        {
			title: "Draw & Classify",
			description: "Draw & Classify is a web application designed to test my machine learning model, which classifies drawn letters, digits, or shapes.",
			technologies: "React, Tailwind, Tensorflow",
			github: "https://github.com/AbuAhamedRafi/Classify-Shapes",
            // link: ""
		},

        {
			title: "Inventory Management System",
			description: "Developed an Inventory Management System for Computer Services Limited.",
			technologies: "Livewire, Laravel",
			github: "https://github.com/AbuAhamedRafi/CSL-Inventory-_Management",
            // link: ""
		},

        
		{
			title: "Vote App - Backend",
			description: "Created a simple vote app backend to learn and implement Rest API in Laravel.",
			technologies: "Laravel, PHP , Rest API",
			github: "https://github.com/AbuAhamedRafi/VoteApp_backend",
            // link: "https://sudoku-solver-sa.netlify.app/"
		},
    ],

    // ============ EDUCATION ============
    education: [
        {
            school: "Independent University, Bangladesh",
            degree: "Bachelor of Science in Computer Science",
            duration: "Sep 2019 - Sep 2024",
            image: "iub.jpg"
        },
        {
            school: "Dinajpur Govt. College",
            degree: "Higher Secondary School Certificate",
            duration: "2015 - 2017",
            image: "dgc.png"
        },
        {
            school: "Dinajpur Zilla School",
            degree: "Secondary School Certificate",
            duration: "2015 - 2017",
            image: "dzs.png"
        }
    ],

    // ============ EXPERIENCE ============
    experience: [
        {
            position: "Junior Software Engineer (Part Time)",
            company: "Computer Services Limited",
            duration: "Aug 2024 - Present",
            image: "csl.jpeg",
            descriptions: [
                "Completed an extensive training program in full-stack web development.",
                "Actively contributed to the ongoing development of a web application.",
                "Mentored by senior developers on best practices and code optimization.",
            ]
        },
        {
            position: "Intern - Software Engineer",
            company: "Computer Services Limited",
            duration: "Feb 2024 - Jul 2024",
            image: "csl.jpeg",
            descriptions: [
                "Learned Laravel Framework and React Basics",
                "Contributed to backend development and enhancing project functionality.",
                "Created interactive dashboards in Tableau for performance tracking and reporting."
            ]
        },
        {
            position: "Intern - Admin",
            company: "Repliq .dev",
            duration: "Jan 2024 - Feb 2024",
            image: "repliq2x-logo.png",
            descriptions: [
                "Worked with CEO and HR Manager to take Administrative decisions.",
                "Learned about Keeping records and Productivity software ClickUP."
            ]
        }
    ],

    // ============ CERTIFICATES ============
    certificates: [
        {
            title: "CCNAv7: Introduction to Networks",
            description: "Provided by Cisco Network Aademy",
            icon: "Cisco",
            link: "https://drive.google.com/file/d/1KcDI83UfyEMjrnArYFlkj9zqNNcxDLBi/view?usp=sharing",
        },
        {
            title: "Software Engineer - Internship",
            description: "Provided by Computer Services Limited",
            icon: "",
            link: "",
        },
        
    ],

    // ============ RESUME ============
    resume: {
        description: "You can download the last updated version of my Resume",
        resumeLink: "/path/to/your/resume.pdf",
      },

    // ============ CONTACT ============
    contact: {
        title: "Let's Get in Touch: Ways to Connect with Me",
        description: "Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at abuahamedrafi@gmail.com. I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. Finally, if you prefer to connect on social media, you can connect with me using the social media links below.",
    },

    // ============ FOOTER ============
    footer: "© 2024 Abu Ahamed Rafi. All Rights Reserved"
}

export default info;

