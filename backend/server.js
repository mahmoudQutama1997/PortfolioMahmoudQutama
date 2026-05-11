const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/about", (req, res) => {
  res.json({
    personal_info: {
      name: "Mahmoud",
      title: "Full Stack Developer",
      location: "Palestine",
      bio: "Passionate Full Stack Developer with a background in Mechatronics Engineering. Skilled in building modern, scalable, and responsive web applications using Django, React, and Node.js. Interested in AI, OpenCV, Machine Learning, and real-time systems."
    },

    education: {
      field: "Mechatronics Engineering",
      academy: "Axsos Academy",
      specialization: "Full Stack Web Development"
    },

    skills: {
      frontend: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Vite",
        "Bootstrap"
      ],

      backend: [
        "Python",
        "Django",
        "Django REST Framework",
        "Node.js",
        "Express.js"
      ],

      databases: [
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "SQLite"
      ],

      tools: [
        "Git",
        "GitHub",
        "Docker",
        "Postman",
        "VS Code"
      ],

      other: [
        "REST APIs",
        "Authentication",
        "WebSockets",
        "Responsive Design",
        "OpenCV",
        "Machine Learning"
      ]
    },

    projects: [
      {
        name: "Doctor Booking System",
        description:
          "A full-stack medical appointment booking platform where patients can book appointments with doctors based on availability.",
        technologies: [
          "Django",
          "React",
          "SQLite",
          "Bootstrap"
        ],
        features: [
          "Doctor and Patient Authentication",
          "Appointment Booking",
          "Availability Scheduling",
          "Doctor Likes System",
          "Dashboard System"
        ]
      },

      {
        name: "Saned NGO Platform",
        description:
          "A platform connecting NGOs, donors, and beneficiaries with campaign and reservation management.",
        technologies: [
          "Django",
          "JavaScript",
          "Bootstrap"
        ],
        features: [
          "Campaign Management",
          "Donations",
          "Notifications",
          "Reservation System",
          "Admin Dashboard"
        ]
      },

      {
        name: "Smart Home Dashboard",
        description:
          "A smart system dashboard for monitoring and controlling devices in real time.",
        technologies: [
          "Django REST Framework",
          "WebSockets",
          "React"
        ]
      }
    ],

    experience: {
      level: "Junior Developer",
      interests: [
        "Artificial Intelligence",
        "Machine Learning",
        "Computer Vision",
        "Real-Time Applications",
        "Backend Development"
      ],

      goals: [
        "Become a Senior Full Stack Developer",
        "Build AI-powered applications",
        "Work on scalable systems",
        "Improve system architecture skills"
      ]
    },

    contact: {
      email: "mahmoud@example.com",
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername"
    }
  });
});
app.get("/api/contact", (req, res) => {
  res.json({
    description:
      "Feel free to contact me for freelance projects, collaborations, or job opportunities.",

    email: "mahmudqutami19@gmail.com",

    phone: "+972 56 2095102",

    location: "Ramallah,Palestine"
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});