const info = {
  // ============ MAIN DETAILS ============
  main: {
    name: "Abu Ahamed Rafi",
    description:
      "I am a Software Engineer specializing in building scalable, production-ready web applications. With expertise in backend development using Laravel, Django, and Node.js, combined with modern frontend technologies like React and TypeScript, I create robust SaaS solutions deployed on AWS cloud infrastructure. I'm passionate about microservices architecture, REST API design, system observability, and writing clean, maintainable code that follows industry best practices.",
    role: "Software Engineer",
    photo: "photo.jpg",
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
      title: "Business Portfolio Website",
      description:
        "A business portfolio Website for a local business. It is a static website built with React and Tailwind CSS, hosted on Vercel. I worked on this project as a freelancer.",
      technologies: ["React", "Tailwind CSS", "Vite", "Vercel"],
      category: "Frontend",
      link: "https://www.safesolutioninternational.org/",
    },

    {
      title: "Ark Power Website",
      description:
        "First Live Project. Worked on the Authentication(Breeze), Role Management(Spatie), Email Verification and more. Also, Implemented a dynamic dashboard using Filament PHP with easy to add contents, images, and videos.",
      technologies: ["Laravel", "Livewire", "Blade", "Filament PHP", "MySQL"],
      category: "Full-Stack",
      github: "NDA - (CSL)",
      link: "https://arkpowerltd.com.bd/",
    },

    {
      title: "Classify Shapes",
      description:
        "This web app uses machine learning to classify hand-drawn letters, digits, and shapes in real-time. It leverages TensorFlow.js for browser-based inference, allowing users to interact with the model directly in their browser.",
      technologies: ["Vite", "TensorFlow.js", "JavaScript", "Machine Learning"],
      category: "Machine Learning",
      github: "https://github.com/AbuAhamedRafi/Classify-Shapes",
      link: "https://classifyshapes.vercel.app/",
    },

    {
      title: "Frame Fit",
      description:
        "Developed a web application with features including image cropping, resizing, and overlay customization using Fabric.js and Blade, allowing users to personalize and download framed images. Integrated an admin dashboard built with Filament PHP to manage frames and monitor download metrics effectively.",
      technologies: [
        "Laravel",
        "Blade",
        "Fabric.js",
        "Filament PHP",
        "Tailwind CSS",
        "MySQL",
      ],
      category: "Full-Stack",
      github: "https://github.com/AbuAhamedRafi/Frame-App",
      // link: ""
    },

    {
      title: "Voting App - Backend",
      description:
        "Developed a dynamic voting API backend with Laravel, supporting real-time vote updates and seamless category-based voting with customizable options. Implemented API security measures, including HTTPS, JWT (JSON Web Tokens) authentication. Tested endpoints using Postman and integrated tools for API debugging and validation.",
      technologies: ["Laravel", "PHP", "REST API", "JWT", "MySQL", "Postman"],
      category: "Backend",
      github: "https://github.com/AbuAhamedRafi/VoteApp_backend",
      // link: ""
    },

    {
      title: "Portfolio Website",
      description:
        "My Very own Portfolio Website. I also used it to learn React Framework.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Vite",
        "GitHub Pages",
      ],
      category: "Frontend",
      github: "https://github.com/AbuAhamedRafi/rafilio",
      link: "https://abuahamedrafi.me",
    },
  ],

  // ============ EDUCATION ============
  education: [
    {
      school: "Independent University, Bangladesh",
      degree: "Bachelor of Science in Computer Science and Engineering",
      duration: "2019 - 2024",
      image: "iub.jpg",
    },
    {
      school: "Dinajpur Govt. College",
      degree: "Higher Secondary School Certificate",
      duration: "2015 - 2017",
      image: "dgc.png",
    },
    {
      school: "Dinajpur Zilla School",
      degree: "Secondary School Certificate",
      duration: "2007 - 2015",
      image: "dzs.png",
    },
  ],

  // ============ EXPERIENCE ============
  experience: [
    {
      position: "Software Engineer",
      company: "JB Connect Ltd.",
      duration: "March 2025 - Present",
      image: "jbc.png",
      descriptions: [
        "Building production-ready SaaS applications using Laravel, Django, and Django Rest Framework (DRF) with microservices architecture for scalable backend systems.",
        "Architecting and deploying REST APIs on AWS infrastructure (EC2, Aurora RDS, IAM) with Docker containerization for seamless cloud deployment.",
        "Implementing observability solutions using CloudWatch for monitoring SLI/SLO metrics, ensuring 99.9% uptime for critical services.",
        "Leading full-stack development initiatives using React, Redux, and TypeScript for modern, responsive frontend experiences integrated with Node.js backends.",
        "Collaborating with cross-functional teams including Product Management and UX designers to define technical specifications and ship features from scratch.",
        "Maintaining code quality through automated testing, CI/CD pipelines, and adherence to industry best practices while mentoring junior developers on Laravel and Django patterns.",
        "Managing backlog tasking and offshore team coordination to ensure timely delivery of client requirements with excellent communication and documentation.",
      ],
    },
    {
      position: "Trainee Software Engineer",
      company: "Computer Services Limited",
      duration: "Aug 2024 - Feb 2025",
      image: "csl.jpeg",
      descriptions: [
        "Accelerated project delivery by 30% through Laravel performance optimizations, caching strategies, and efficient database query design with MySQL.",
        "Developed and maintained RESTful APIs using Laravel, implementing JWT authentication and API security best practices for client applications.",
        "Enhanced full-stack development skills by integrating React frontends with Laravel backends, managing state with modern JavaScript (ES6+).",
        "Collaborated with senior developers to learn industry-standard code review processes, Git workflows, and agile development methodologies.",
        "Built production-ready features from technical specifications, ensuring quality through unit testing and thorough documentation.",
      ],
    },
    {
      position: "Intern - Software Engineer",
      company: "Computer Services Limited",
      duration: "Feb 2024 - Jul 2024",
      image: "csl.jpeg",
      descriptions: [
        "Gained foundational expertise in Laravel MVC architecture, PHP backend development, and React component-based frontend design.",
        "Developed interactive dashboards using Laravel Blade and React for real-time performance tracking and data visualization.",
        "Mastered MySQL database design, migrations, and Eloquent ORM for efficient data management and API integration.",
        "Implemented authentication systems, role-based access control, and email verification features using Laravel Breeze and middleware.",
        "Learned version control with Git/GitHub, team collaboration workflows, and agile sprint planning methodologies.",
      ],
    },
    {
      position: "Intern - Admin",
      company: "Repliq .dev",
      duration: "Jan 2024 - Feb 2024",
      image: "repliq2x-logo.png",
      descriptions: [
        "Worked with CEO and HR Manager to take Administrative decisions.",
        "Learned about Keeping records and Productivity software ClickUP.",
      ],
    },
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
      icon: "CSL",
      link: "https://drive.google.com/file/d/1llW-cmzxwPS8eY_SoohtU54w8TkLKW7F/view?usp=drive_link",
    },
  ],

  // ============ RESUME ============
  resume: {
    description: "You can download the last updated version of my Resume",
    resumeLink: "Abu Ahamed Rafi.pdf",
  },

  // ============ CONTACT ============
  contact: {
    title: "Let's Get in Touch: Ways to Connect with Me",
    description:
      "Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at abuahamedrafi@gmail.com. I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. Finally, if you prefer to connect on social media, you can connect with me using the social media links below.",
  },

  // ============ FOOTER ============
  footer: "© {year} Abu Ahamed Rafi. All Rights Reserved",
};

export default info;
