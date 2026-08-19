import { useState } from "react";
import careers from "../data/careers";

const roadmapDatabase = {
  "AI / ML Engineer": [
    {
      number: "01",
      icon: "🐍",
      title: "Python Fundamentals",
      level: "BEGINNER",
      duration: "3–4 weeks",
      description:
        "Learn Python programming, data structures, functions, OOP and problem solving.",
      skills: ["Python", "Logic Building", "OOP"],
      project: "Build a Python Expense Tracker",
    },
    {
      number: "02",
      icon: "📊",
      title: "Mathematics & Statistics",
      level: "BEGINNER",
      duration: "2–3 weeks",
      description:
        "Build the mathematical and statistical foundation required for machine learning.",
      skills: ["Statistics", "Probability", "Linear Algebra"],
      project: "Analyze a Real-World Dataset",
    },
    {
      number: "03",
      icon: "🤖",
      title: "Machine Learning",
      level: "INTERMEDIATE",
      duration: "5–6 weeks",
      description:
        "Learn supervised and unsupervised learning and build predictive models.",
      skills: ["Scikit-learn", "Regression", "Classification"],
      project: "Student Performance Predictor",
    },
    {
      number: "04",
      icon: "🧠",
      title: "Deep Learning",
      level: "INTERMEDIATE",
      duration: "5–6 weeks",
      description:
        "Learn neural networks and build intelligent applications.",
      skills: ["Neural Networks", "TensorFlow", "PyTorch"],
      project: "Image Classification System",
    },
    {
      number: "05",
      icon: "💻",
      title: "AI Projects",
      level: "ADVANCED",
      duration: "4–6 weeks",
      description:
        "Apply your knowledge by building practical AI applications.",
      skills: ["APIs", "Deployment", "GitHub"],
      project: "AI Career Recommendation System",
    },
    {
      number: "06",
      icon: "🏆",
      title: "Hackathons",
      level: "ADVANCED",
      duration: "Ongoing",
      description:
        "Participate in hackathons and solve real-world problems with a team.",
      skills: ["Teamwork", "Problem Solving", "Presentation"],
      project: "Build & Submit a Hackathon Project",
    },
    {
      number: "07",
      icon: "🎤",
      title: "Interview Preparation",
      level: "JOB READY",
      duration: "3–4 weeks",
      description:
        "Prepare for technical interviews, coding rounds and HR interviews.",
      skills: ["DSA", "System Design", "Communication"],
      project: "Complete a Mock Interview",
    },
  ],

  "Software Engineer": [
    {
      number: "01",
      icon: "💻",
      title: "Programming Fundamentals",
      level: "BEGINNER",
      duration: "3–4 weeks",
      description:
        "Build a strong foundation in programming, logic and problem solving.",
      skills: ["Java / Python", "Logic Building", "OOP"],
      project: "Build a Student Management System",
    },
    {
      number: "02",
      icon: "🧩",
      title: "Data Structures & Algorithms",
      level: "INTERMEDIATE",
      duration: "5–7 weeks",
      description:
        "Learn the core data structures and algorithms used in software development and interviews.",
      skills: ["Arrays", "Trees", "Graphs", "Algorithms"],
      project: "Build an Algorithm Visualizer",
    },
    {
      number: "03",
      icon: "🗄️",
      title: "Databases & APIs",
      level: "INTERMEDIATE",
      duration: "3–4 weeks",
      description:
        "Learn how applications store data and communicate with other services.",
      skills: ["SQL", "Databases", "REST APIs"],
      project: "Build a Backend API",
    },
    {
      number: "04",
      icon: "🌐",
      title: "Application Development",
      level: "INTERMEDIATE",
      duration: "5–6 weeks",
      description:
        "Build complete applications using modern development technologies.",
      skills: ["Frontend", "Backend", "Authentication"],
      project: "Build a Full Stack Application",
    },
    {
      number: "05",
      icon: "🚀",
      title: "Real-World Projects",
      level: "ADVANCED",
      duration: "4–6 weeks",
      description:
        "Create portfolio projects that demonstrate your software engineering skills.",
      skills: ["Git", "Testing", "Deployment"],
      project: "Deploy a Production-Ready Application",
    },
    {
      number: "06",
      icon: "🏆",
      title: "Hackathons & Open Source",
      level: "ADVANCED",
      duration: "Ongoing",
      description:
        "Gain practical experience by collaborating on real-world software projects.",
      skills: ["GitHub", "Teamwork", "Problem Solving"],
      project: "Build and Submit a Hackathon Project",
    },
    {
      number: "07",
      icon: "🎤",
      title: "Interview Preparation",
      level: "JOB READY",
      duration: "3–4 weeks",
      description:
        "Prepare for coding rounds, technical interviews and system design discussions.",
      skills: ["DSA", "System Design", "Communication"],
      project: "Complete a Mock Technical Interview",
    },
  ],

  "Full Stack Developer": [
    {
      number: "01",
      icon: "🌐",
      title: "HTML, CSS & JavaScript",
      level: "BEGINNER",
      duration: "3–4 weeks",
      description:
        "Learn the fundamentals of modern web development.",
      skills: ["HTML", "CSS", "JavaScript"],
      project: "Build a Personal Portfolio",
    },
    {
      number: "02",
      icon: "⚛️",
      title: "React Development",
      level: "INTERMEDIATE",
      duration: "4–5 weeks",
      description:
        "Learn component-based frontend development using React.",
      skills: ["React", "Components", "State Management"],
      project: "Build a Student Dashboard",
    },
    {
      number: "03",
      icon: "⚙️",
      title: "Backend Development",
      level: "INTERMEDIATE",
      duration: "4–5 weeks",
      description:
        "Learn how to build backend applications and APIs.",
      skills: ["Node.js", "Express", "REST APIs"],
      project: "Build a REST API",
    },
    {
      number: "04",
      icon: "🗄️",
      title: "Database Development",
      level: "INTERMEDIATE",
      duration: "2–3 weeks",
      description:
        "Learn how applications store, retrieve and manage information.",
      skills: ["SQL", "MongoDB", "Database Design"],
      project: "Build an Application Database",
    },
    {
      number: "05",
      icon: "🚀",
      title: "Full Stack Projects",
      level: "ADVANCED",
      duration: "5–6 weeks",
      description:
        "Combine frontend, backend and database skills into complete applications.",
      skills: ["React", "Node.js", "Database"],
      project: "Build an E-Commerce Application",
    },
    {
      number: "06",
      icon: "☁️",
      title: "Deployment & Cloud",
      level: "ADVANCED",
      duration: "2–3 weeks",
      description:
        "Learn how to deploy applications and make them accessible online.",
      skills: ["Git", "Cloud", "Deployment"],
      project: "Deploy Your Full Stack Application",
    },
    {
      number: "07",
      icon: "🎤",
      title: "Interview Preparation",
      level: "JOB READY",
      duration: "3–4 weeks",
      description:
        "Prepare for frontend, backend and full stack developer interviews.",
      skills: ["JavaScript", "DSA", "Communication"],
      project: "Complete a Mock Interview",
    },
  ],

  "Data Scientist": [
    {
      number: "01",
      icon: "🐍",
      title: "Python for Data Science",
      level: "BEGINNER",
      duration: "3–4 weeks",
      description:
        "Learn Python programming and the tools used for data analysis.",
      skills: ["Python", "Pandas", "NumPy"],
      project: "Analyze a Public Dataset",
    },
    {
      number: "02",
      icon: "📊",
      title: "Statistics & Probability",
      level: "BEGINNER",
      duration: "3–4 weeks",
      description:
        "Build the statistical foundation required for data science.",
      skills: ["Statistics", "Probability", "Data Analysis"],
      project: "Statistical Analysis Project",
    },
    {
      number: "03",
      icon: "📈",
      title: "Data Visualization",
      level: "INTERMEDIATE",
      duration: "2–3 weeks",
      description:
        "Learn to communicate insights using charts, dashboards and visualizations.",
      skills: ["Matplotlib", "Visualization", "Storytelling"],
      project: "Build a Data Dashboard",
    },
    {
      number: "04",
      icon: "🤖",
      title: "Machine Learning",
      level: "INTERMEDIATE",
      duration: "5–6 weeks",
      description:
        "Learn machine learning algorithms and model evaluation.",
      skills: ["Scikit-learn", "Regression", "Classification"],
      project: "Build a Prediction Model",
    },
    {
      number: "05",
      icon: "🧠",
      title: "Advanced Data Science",
      level: "ADVANCED",
      duration: "4–6 weeks",
      description:
        "Work with advanced machine learning techniques and real-world datasets.",
      skills: ["Feature Engineering", "Model Evaluation", "ML"],
      project: "Build a Real-World ML Solution",
    },
    {
      number: "06",
      icon: "🏆",
      title: "Competitions & Hackathons",
      level: "ADVANCED",
      duration: "Ongoing",
      description:
        "Apply your data science skills to practical problems and competitions.",
      skills: ["Problem Solving", "Data Analysis", "Presentation"],
      project: "Complete a Data Science Challenge",
    },
    {
      number: "07",
      icon: "🎤",
      title: "Interview Preparation",
      level: "JOB READY",
      duration: "3–4 weeks",
      description:
        "Prepare for data science technical interviews.",
      skills: ["Statistics", "ML", "SQL"],
      project: "Complete a Data Science Mock Interview",
    },
  ],

  "Cybersecurity Engineer": [
    {
      number: "01",
      icon: "🌐",
      title: "Networking Fundamentals",
      level: "BEGINNER",
      duration: "3–4 weeks",
      description:
        "Understand networks, protocols, addressing and communication.",
      skills: ["Networking", "TCP/IP", "Protocols"],
      project: "Build a Network Monitoring Dashboard",
    },
    {
      number: "02",
      icon: "🐧",
      title: "Linux Fundamentals",
      level: "BEGINNER",
      duration: "2–3 weeks",
      description:
        "Learn Linux commands, permissions and system administration.",
      skills: ["Linux", "Command Line", "System Administration"],
      project: "Create a Linux Security Lab",
    },
    {
      number: "03",
      icon: "🛡️",
      title: "Cybersecurity Fundamentals",
      level: "INTERMEDIATE",
      duration: "4–5 weeks",
      description:
        "Learn common threats, vulnerabilities and security principles.",
      skills: ["Security", "Threats", "Vulnerabilities"],
      project: "Build a Security Awareness Platform",
    },
    {
      number: "04",
      icon: "🔍",
      title: "Security Tools",
      level: "INTERMEDIATE",
      duration: "4–5 weeks",
      description:
        "Practice defensive security using industry-standard tools.",
      skills: ["Wireshark", "Nmap", "Security Monitoring"],
      project: "Build a Network Security Analyzer",
    },
    {
      number: "05",
      icon: "🚨",
      title: "Threat Detection",
      level: "ADVANCED",
      duration: "4–6 weeks",
      description:
        "Learn to detect, analyze and respond to cybersecurity incidents.",
      skills: ["Threat Detection", "Incident Response", "Logs"],
      project: "Build a Security Log Analyzer",
    },
    {
      number: "06",
      icon: "🏆",
      title: "Security Challenges",
      level: "ADVANCED",
      duration: "Ongoing",
      description:
        "Practice cybersecurity through labs, competitions and practical challenges.",
      skills: ["Problem Solving", "Security Analysis", "Teamwork"],
      project: "Complete a Security Challenge",
    },
    {
      number: "07",
      icon: "🎤",
      title: "Security Interview Preparation",
      level: "JOB READY",
      duration: "3–4 weeks",
      description:
        "Prepare for cybersecurity interviews and security operations roles.",
      skills: ["Networking", "Linux", "Security"],
      project: "Complete a Mock Security Interview",
    },
  ],
  "Cloud / DevOps Engineer": [
  {
    number: "01",
    icon: "☁️",
    title: "Cloud Fundamentals",
    level: "BEGINNER",
    duration: "3–4 weeks",
    description:
      "Learn cloud computing concepts, services, virtualization and cloud architecture.",
    skills: ["Cloud Computing", "Virtualization", "Cloud Architecture"],
    project: "Deploy a Static Website on Cloud",
  },
  {
    number: "02",
    icon: "🐧",
    title: "Linux & Networking",
    level: "BEGINNER",
    duration: "3–4 weeks",
    description:
      "Build strong Linux and networking fundamentals required for cloud engineering.",
    skills: ["Linux", "TCP/IP", "Networking"],
    project: "Build a Linux Server Lab",
  },
  {
    number: "03",
    icon: "⚙️",
    title: "DevOps Fundamentals",
    level: "INTERMEDIATE",
    duration: "4–5 weeks",
    description:
      "Learn version control, CI/CD and modern software delivery practices.",
    skills: ["Git", "GitHub", "CI/CD"],
    project: "Create a CI/CD Pipeline",
  },
  {
    number: "04",
    icon: "🐳",
    title: "Containers & Docker",
    level: "INTERMEDIATE",
    duration: "3–4 weeks",
    description:
      "Learn containerization and package applications using Docker.",
    skills: ["Docker", "Containers", "Images"],
    project: "Dockerize a Web Application",
  },
  {
    number: "05",
    icon: "☸️",
    title: "Kubernetes",
    level: "ADVANCED",
    duration: "4–6 weeks",
    description:
      "Learn container orchestration and scalable application deployment.",
    skills: ["Kubernetes", "Pods", "Services"],
    project: "Deploy an Application on Kubernetes",
  },
  {
    number: "06",
    icon: "🚀",
    title: "Cloud Projects",
    level: "ADVANCED",
    duration: "4–6 weeks",
    description:
      "Build and deploy real-world cloud and DevOps projects.",
    skills: ["AWS / Azure", "Docker", "CI/CD"],
    project: "Build a Cloud Deployment Platform",
  },
  {
    number: "07",
    icon: "🎤",
    title: "Cloud & DevOps Interview",
    level: "JOB READY",
    duration: "3–4 weeks",
    description:
      "Prepare for cloud engineer and DevOps technical interviews.",
    skills: ["Cloud", "Linux", "DevOps"],
    project: "Complete a Mock DevOps Interview",
  },
],

"Electronics / VLSI Engineer": [
  {
    number: "01",
    icon: "📡",
    title: "Electronics Fundamentals",
    level: "BEGINNER",
    duration: "3–4 weeks",
    description:
      "Learn basic electronic components, circuits and electrical concepts.",
    skills: ["Circuits", "Diodes", "Transistors"],
    project: "Build a Basic Electronic Circuit",
  },
  {
    number: "02",
    icon: "🔢",
    title: "Digital Electronics",
    level: "BEGINNER",
    duration: "3–4 weeks",
    description:
      "Learn logic gates, Boolean algebra, combinational and sequential circuits.",
    skills: ["Logic Gates", "Boolean Algebra", "Digital Circuits"],
    project: "Build a Digital Counter",
  },
  {
    number: "03",
    icon: "💻",
    title: "HDL Programming",
    level: "INTERMEDIATE",
    duration: "4–5 weeks",
    description:
      "Learn hardware description languages used for digital system design.",
    skills: ["Verilog", "SystemVerilog", "RTL"],
    project: "Design a Digital Logic Module",
  },
  {
    number: "04",
    icon: "🧩",
    title: "VLSI Design",
    level: "INTERMEDIATE",
    duration: "5–6 weeks",
    description:
      "Understand VLSI design flow, RTL design and verification concepts.",
    skills: ["VLSI", "RTL", "Verification"],
    project: "Design a Small Processor Module",
  },
  {
    number: "05",
    icon: "🔬",
    title: "FPGA Development",
    level: "ADVANCED",
    duration: "4–6 weeks",
    description:
      "Implement digital designs on FPGA development platforms.",
    skills: ["FPGA", "Verilog", "Digital Design"],
    project: "Build an FPGA-Based System",
  },
  {
    number: "06",
    icon: "🏆",
    title: "Electronics Projects",
    level: "ADVANCED",
    duration: "4–6 weeks",
    description:
      "Build practical electronics and VLSI projects for your portfolio.",
    skills: ["Circuit Design", "Simulation", "Testing"],
    project: "Build an IoT Hardware Prototype",
  },
  {
    number: "07",
    icon: "🎤",
    title: "VLSI Interview Preparation",
    level: "JOB READY",
    duration: "3–4 weeks",
    description:
      "Prepare for electronics, embedded and VLSI engineering interviews.",
    skills: ["Digital Electronics", "Verilog", "VLSI"],
    project: "Complete a Mock VLSI Interview",
  },
],

"Electrical Engineer": [
  {
    number: "01",
    icon: "⚡",
    title: "Electrical Fundamentals",
    level: "BEGINNER",
    duration: "3–4 weeks",
    description:
      "Learn voltage, current, resistance, power and basic electrical circuits.",
    skills: ["Circuits", "Voltage", "Current"],
    project: "Build a Basic Electrical Circuit",
  },
  {
    number: "02",
    icon: "🔌",
    title: "Electrical Machines",
    level: "BEGINNER",
    duration: "4–5 weeks",
    description:
      "Understand transformers, motors and generators.",
    skills: ["Transformers", "Motors", "Generators"],
    project: "Study and Simulate an Electric Motor",
  },
  {
    number: "03",
    icon: "🏭",
    title: "Power Systems",
    level: "INTERMEDIATE",
    duration: "4–5 weeks",
    description:
      "Learn generation, transmission, distribution and protection systems.",
    skills: ["Power Systems", "Transmission", "Protection"],
    project: "Design a Small Power Distribution System",
  },
  {
    number: "04",
    icon: "🎛️",
    title: "Control Systems",
    level: "INTERMEDIATE",
    duration: "4–5 weeks",
    description:
      "Learn feedback systems, controllers and system modeling.",
    skills: ["Control Systems", "Feedback", "MATLAB"],
    project: "Build a Motor Speed Controller Simulation",
  },
  {
    number: "05",
    icon: "🔋",
    title: "Power Electronics",
    level: "ADVANCED",
    duration: "4–6 weeks",
    description:
      "Learn power semiconductor devices and converters.",
    skills: ["Power Electronics", "Converters", "Inverters"],
    project: "Design a DC-DC Converter",
  },
  {
    number: "06",
    icon: "🌱",
    title: "Renewable Energy Systems",
    level: "ADVANCED",
    duration: "4–6 weeks",
    description:
      "Explore solar, wind and modern electrical energy systems.",
    skills: ["Solar", "Wind Energy", "Energy Systems"],
    project: "Design a Solar Power System",
  },
  {
    number: "07",
    icon: "🎤",
    title: "Electrical Interview Preparation",
    level: "JOB READY",
    duration: "3–4 weeks",
    description:
      "Prepare for electrical engineering technical interviews.",
    skills: ["Power Systems", "Machines", "Circuits"],
    project: "Complete a Mock Electrical Interview",
  },
],

"Mechanical Engineer": [
  {
    number: "01",
    icon: "⚙️",
    title: "Engineering Mechanics",
    level: "BEGINNER",
    duration: "3–4 weeks",
    description:
      "Learn forces, motion, equilibrium and fundamental mechanics.",
    skills: ["Mechanics", "Forces", "Motion"],
    project: "Analyze a Mechanical System",
  },
  {
    number: "02",
    icon: "📐",
    title: "Engineering Drawing & CAD",
    level: "BEGINNER",
    duration: "4–5 weeks",
    description:
      "Learn technical drawing and computer-aided design.",
    skills: ["CAD", "Technical Drawing", "3D Modeling"],
    project: "Design a Mechanical Component",
  },
  {
    number: "03",
    icon: "🔩",
    title: "Manufacturing Processes",
    level: "INTERMEDIATE",
    duration: "4–5 weeks",
    description:
      "Understand machining, casting, welding and modern manufacturing.",
    skills: ["Manufacturing", "Machining", "Welding"],
    project: "Design a Manufacturing Process",
  },
  {
    number: "04",
    icon: "🧱",
    title: "Material Science",
    level: "INTERMEDIATE",
    duration: "3–4 weeks",
    description:
      "Learn material properties, selection and applications.",
    skills: ["Materials", "Strength", "Material Selection"],
    project: "Material Selection Case Study",
  },
  {
    number: "05",
    icon: "💻",
    title: "CAE & Simulation",
    level: "ADVANCED",
    duration: "4–6 weeks",
    description:
      "Learn engineering simulation and analysis techniques.",
    skills: ["ANSYS", "FEA", "Simulation"],
    project: "Perform a Structural Simulation",
  },
  {
    number: "06",
    icon: "🤖",
    title: "Automation & Robotics",
    level: "ADVANCED",
    duration: "4–6 weeks",
    description:
      "Apply mechanical engineering concepts to automation and robotics.",
    skills: ["Robotics", "Automation", "Mechatronics"],
    project: "Build an Automated Mechanical System",
  },
  {
    number: "07",
    icon: "🎤",
    title: "Mechanical Interview Preparation",
    level: "JOB READY",
    duration: "3–4 weeks",
    description:
      "Prepare for mechanical engineering technical interviews.",
    skills: ["CAD", "Manufacturing", "Mechanics"],
    project: "Complete a Mock Mechanical Interview",
  },
],

"Civil Engineer": [
  {
    number: "01",
    icon: "🏗️",
    title: "Civil Engineering Fundamentals",
    level: "BEGINNER",
    duration: "3–4 weeks",
    description:
      "Learn the basic principles of structures, construction and materials.",
    skills: ["Construction", "Materials", "Engineering"],
    project: "Create a Small Building Plan",
  },
  {
    number: "02",
    icon: "📐",
    title: "Engineering Drawing",
    level: "BEGINNER",
    duration: "3–4 weeks",
    description:
      "Learn technical drawings and construction plans.",
    skills: ["AutoCAD", "Technical Drawing", "Planning"],
    project: "Design a Residential Floor Plan",
  },
  {
    number: "03",
    icon: "🏢",
    title: "Structural Engineering",
    level: "INTERMEDIATE",
    duration: "5–6 weeks",
    description:
      "Understand structural loads, analysis and design principles.",
    skills: ["Structures", "Load Analysis", "Concrete"],
    project: "Design a Simple Building Structure",
  },
  {
    number: "04",
    icon: "🛣️",
    title: "Transportation Engineering",
    level: "INTERMEDIATE",
    duration: "4–5 weeks",
    description:
      "Learn road, traffic and transportation system fundamentals.",
    skills: ["Road Design", "Traffic", "Transportation"],
    project: "Design a Road Network",
  },
  {
    number: "05",
    icon: "💧",
    title: "Environmental & Water Engineering",
    level: "ADVANCED",
    duration: "4–5 weeks",
    description:
      "Learn water resources, wastewater and environmental engineering.",
    skills: ["Water Resources", "Wastewater", "Environment"],
    project: "Design a Water Management System",
  },
  {
    number: "06",
    icon: "🏙️",
    title: "Construction Management",
    level: "ADVANCED",
    duration: "4–6 weeks",
    description:
      "Learn project planning, estimation, scheduling and site management.",
    skills: ["Project Management", "Estimation", "Scheduling"],
    project: "Create a Construction Project Plan",
  },
  {
    number: "07",
    icon: "🎤",
    title: "Civil Engineering Interview",
    level: "JOB READY",
    duration: "3–4 weeks",
    description:
      "Prepare for civil engineering technical interviews.",
    skills: ["Structures", "Construction", "AutoCAD"],
    project: "Complete a Mock Civil Engineering Interview",
  },
],

"Robotics / Automation Engineer": [
  {
    number: "01",
    icon: "🤖",
    title: "Robotics Fundamentals",
    level: "BEGINNER",
    duration: "3–4 weeks",
    description:
      "Learn robotics concepts, components and basic robot systems.",
    skills: ["Robotics", "Sensors", "Actuators"],
    project: "Build a Basic Sensor Robot",
  },
  {
    number: "02",
    icon: "🔌",
    title: "Electronics & Microcontrollers",
    level: "BEGINNER",
    duration: "4–5 weeks",
    description:
      "Learn microcontrollers, sensors and electronic interfaces.",
    skills: ["Arduino", "Sensors", "Microcontrollers"],
    project: "Build an Obstacle Avoiding Robot",
  },
  {
    number: "03",
    icon: "🐍",
    title: "Programming for Robotics",
    level: "INTERMEDIATE",
    duration: "4–5 weeks",
    description:
      "Learn programming concepts used in robotics and automation.",
    skills: ["Python", "C++", "Programming"],
    project: "Build a Robot Control Program",
  },
  {
    number: "04",
    icon: "🧭",
    title: "Robot Kinematics",
    level: "INTERMEDIATE",
    duration: "4–6 weeks",
    description:
      "Learn robot motion, kinematics and coordinate systems.",
    skills: ["Kinematics", "Motion Planning", "Robotics"],
    project: "Simulate a Robotic Arm",
  },
  {
    number: "05",
    icon: "🧠",
    title: "Computer Vision & AI",
    level: "ADVANCED",
    duration: "5–6 weeks",
    description:
      "Apply AI and computer vision techniques to intelligent robots.",
    skills: ["Computer Vision", "AI", "OpenCV"],
    project: "Build an Object Detection Robot",
  },
  {
    number: "06",
    icon: "⚙️",
    title: "Automation Systems",
    level: "ADVANCED",
    duration: "4–6 weeks",
    description:
      "Learn industrial automation and intelligent control systems.",
    skills: ["PLC", "Automation", "Control Systems"],
    project: "Design an Automated Production System",
  },
  {
    number: "07",
    icon: "🎤",
    title: "Robotics Interview Preparation",
    level: "JOB READY",
    duration: "3–4 weeks",
    description:
      "Prepare for robotics and automation engineering interviews.",
    skills: ["Robotics", "Programming", "Automation"],
    project: "Complete a Mock Robotics Interview",
  },
],

"Embedded Systems Engineer": [
  {
    number: "01",
    icon: "🔌",
    title: "Embedded Systems Fundamentals",
    level: "BEGINNER",
    duration: "3–4 weeks",
    description:
      "Understand microcontrollers, embedded hardware and real-time systems.",
    skills: ["Embedded Systems", "Microcontrollers", "Electronics"],
    project: "Build a Basic Embedded System",
  },
  {
    number: "02",
    icon: "💻",
    title: "C Programming",
    level: "BEGINNER",
    duration: "4–5 weeks",
    description:
      "Learn C programming and memory concepts used in embedded development.",
    skills: ["C", "Pointers", "Memory"],
    project: "Build a C-Based Embedded Application",
  },
  {
    number: "03",
    icon: "🧩",
    title: "Microcontrollers",
    level: "INTERMEDIATE",
    duration: "4–5 weeks",
    description:
      "Learn microcontroller architecture, GPIO, timers and interrupts.",
    skills: ["MCU", "GPIO", "Interrupts"],
    project: "Build a Microcontroller-Based System",
  },
  {
    number: "04",
    icon: "📡",
    title: "Embedded Communication",
    level: "INTERMEDIATE",
    duration: "4–5 weeks",
    description:
      "Learn communication protocols used in embedded systems.",
    skills: ["UART", "SPI", "I2C"],
    project: "Build a Sensor Communication System",
  },
  {
    number: "05",
    icon: "⏱️",
    title: "RTOS & Real-Time Systems",
    level: "ADVANCED",
    duration: "4–6 weeks",
    description:
      "Understand real-time operating systems and task scheduling.",
    skills: ["RTOS", "Scheduling", "Tasks"],
    project: "Build a Real-Time Embedded Application",
  },
  {
    number: "06",
    icon: "🚗",
    title: "Embedded Projects",
    level: "ADVANCED",
    duration: "4–6 weeks",
    description:
      "Build practical embedded systems for IoT, automotive and automation.",
    skills: ["IoT", "Embedded C", "Sensors"],
    project: "Build a Smart IoT Embedded Device",
  },
  {
    number: "07",
    icon: "🎤",
    title: "Embedded Interview Preparation",
    level: "JOB READY",
    duration: "3–4 weeks",
    description:
      "Prepare for embedded systems technical interviews.",
    skills: ["C", "Microcontrollers", "RTOS"],
    project: "Complete a Mock Embedded Interview",
  },
],
};

/* =========================================================
   CAREER KEY CONVERTER
   ========================================================= */

const CAREER_KEY_TO_NAME = {
  software: "Software Engineer",
  "software-engineer": "Software Engineer",
  software_engineer: "Software Engineer",

  ai: "AI / ML Engineer",
  "ai-ml": "AI / ML Engineer",
  ai_ml: "AI / ML Engineer",
  aiml: "AI / ML Engineer",
  "ai/ml": "AI / ML Engineer",

  data: "Data Scientist",
  "data-science": "Data Scientist",
  data_science: "Data Scientist",
  datascience: "Data Scientist",

  cyber: "Cybersecurity Engineer",
  cybersecurity: "Cybersecurity Engineer",
  "cyber-security": "Cybersecurity Engineer",
  "cyber-security-engineer": "Cybersecurity Engineer",
  cybersecurity_engineer: "Cybersecurity Engineer",

  fullstack: "Full Stack Developer",
  "full-stack": "Full Stack Developer",
  "full-stack-developer": "Full Stack Developer",
  full_stack: "Full Stack Developer",

  cloud: "Cloud / DevOps Engineer",
  devops: "Cloud / DevOps Engineer",

  electronics: "Electronics / VLSI Engineer",
  vlsi: "Electronics / VLSI Engineer",

  electrical: "Electrical Engineer",

  mechanical: "Mechanical Engineer",

  civil: "Civil Engineer",

  robotics: "Robotics / Automation Engineer",

  embedded: "Embedded Systems Engineer",
};

/* =========================================================
   NORMALIZE CAREER VALUE
   ========================================================= */

function normalizeCareerKey(value) {
  if (!value) return "";

  // If assessment accidentally sends an object
  if (typeof value === "object") {
    return (
      value.careerKey ||
      value.key ||
      value.id ||
      value.slug ||
      value.name ||
      value.title ||
      ""
    );
  }

  return String(value).trim();
}

/* =========================================================
   GET CAREER NAME
   ========================================================= */

function getCareerName(value) {
  const normalized = normalizeCareerKey(value);

  if (!normalized) {
    return "";
  }

  // Direct database name
  if (roadmapDatabase[normalized]) {
    return normalized;
  }

  // Exact mapped key
  if (CAREER_KEY_TO_NAME[normalized]) {
    return CAREER_KEY_TO_NAME[normalized];
  }

  // Lowercase lookup
  const lowerValue = normalized.toLowerCase();

  if (CAREER_KEY_TO_NAME[lowerValue]) {
    return CAREER_KEY_TO_NAME[lowerValue];
  }

  // Handle career names coming directly from assessment
  const matchedCareer = Object.keys(roadmapDatabase).find(
    (name) => name.toLowerCase() === lowerValue
  );

  if (matchedCareer) {
    return matchedCareer;
  }

  // Handle partial names
  if (
    lowerValue.includes("artificial intelligence") ||
    lowerValue.includes("machine learning")
  ) {
    return "AI / ML Engineer";
  }

  if (
    lowerValue.includes("software engineer") ||
    lowerValue.includes("software developer")
  ) {
    return "Software Engineer";
  }

  if (
    lowerValue.includes("full stack") ||
    lowerValue.includes("fullstack")
  ) {
    return "Full Stack Developer";
  }

  if (
    lowerValue.includes("data scientist") ||
    lowerValue.includes("data science")
  ) {
    return "Data Scientist";
  }

  if (
    lowerValue.includes("cybersecurity") ||
    lowerValue.includes("cyber security")
  ) {
    return "Cybersecurity Engineer";
  }

  return normalized;
}

/* =========================================================
   COMPONENT
   ========================================================= */

function CareerRoadmap({ careerKey }) {
  const [completed, setCompleted] = useState([]);

  console.log("CareerRoadmap received careerKey:", careerKey);

  /* --------------------------------
     No assessment completed
  -------------------------------- */

  if (!careerKey) {
    return (
      <section className="roadmap-section">
        <div className="roadmap-heading">
          <p>YOUR PERSONALIZED PATH</p>

          <h2>Complete Your Career Assessment</h2>

          <span>
            Take the assessment to unlock your personalized career roadmap.
          </span>
        </div>
      </section>
    );
  }

  /* --------------------------------
     Convert assessment value
  -------------------------------- */

  const normalizedCareerKey = normalizeCareerKey(careerKey);

  const careerName = getCareerName(careerKey);

  console.log("Normalized career key:", normalizedCareerKey);
  console.log("Career name:", careerName);

  /* --------------------------------
     Find roadmap
  -------------------------------- */

  const roadmapSteps = roadmapDatabase[careerName];

  /* --------------------------------
     Career roadmap unavailable
  -------------------------------- */

  if (!roadmapSteps) {
    return (
      <section className="roadmap-section">
        <div className="roadmap-heading">
          <p>YOUR PERSONALIZED PATH</p>

          <h2>Roadmap Coming Soon</h2>

          <span>
            Your selected career is:
            <strong> {careerName}</strong>
          </span>

          <p style={{ marginTop: "15px" }}>
            A personalized roadmap for this career is being prepared.
          </p>

          {/* DEBUG INFORMATION */}
          <p
            style={{
              marginTop: "10px",
              fontSize: "12px",
              opacity: 0.6,
            }}
          >
            Assessment key: {normalizedCareerKey}
          </p>
        </div>
      </section>
    );
  }

  /* --------------------------------
     Toggle completed step
  -------------------------------- */

  const toggleComplete = (number) => {
    setCompleted((previous) => {
      if (previous.includes(number)) {
        return previous.filter((item) => item !== number);
      }

      return [...previous, number];
    });
  };

  /* --------------------------------
     Calculate progress
  -------------------------------- */

  const progress = Math.round(
    (completed.length / roadmapSteps.length) * 100
  );

  /* --------------------------------
     Career icon
  -------------------------------- */

  const careerIcon =
    careers?.[normalizedCareerKey]?.icon ||
    careers?.[careerName]?.icon ||
    "🚀";

  return (
    <section className="roadmap-section">

      {/* HEADER */}

      <div className="roadmap-heading">
        <p>YOUR PERSONALIZED PATH</p>

        <h2>{careerName} Roadmap</h2>

        <span>
          A step-by-step journey from beginner to job-ready professional.
        </span>
      </div>

      {/* CAREER BADGE */}

      <div className="roadmap-career-badge">
        <span>{careerIcon}</span>

        <div>
          <small>PERSONALIZED FOR</small>

          <strong>{careerName}</strong>
        </div>
      </div>

      {/* PROGRESS */}

      <div className="roadmap-progress">
        <div>
          <span>ROADMAP PROGRESS</span>

          <strong>{progress}%</strong>
        </div>

        <div className="roadmap-progress-bar">
          <div
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      {/* ROADMAP */}

      <div className="roadmap">

        {roadmapSteps.map((step, index) => {
          const isCompleted = completed.includes(step.number);

          return (
            <div
              className={`roadmap-step ${
                isCompleted ? "roadmap-completed" : ""
              }`}
              key={step.number}
            >

              {/* TIMELINE */}

              <div className="roadmap-timeline">

                <div className="roadmap-number">
                  {isCompleted ? "✓" : step.number}
                </div>

                {index !== roadmapSteps.length - 1 && (
                  <div className="roadmap-line" />
                )}

              </div>

              {/* CARD */}

              <div className="roadmap-card">

                <div className="roadmap-card-top">

                  <div className="roadmap-icon">
                    {step.icon}
                  </div>

                  <div>
                    <span className="roadmap-level">
                      {step.level}
                    </span>

                    <h3>{step.title}</h3>
                  </div>

                  <span className="roadmap-duration">
                    ⏱ {step.duration}
                  </span>

                </div>

                {/* DESCRIPTION */}

                <p className="roadmap-description">
                  {step.description}
                </p>

                {/* SKILLS */}

                <div className="roadmap-skills">
                  {step.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>

                {/* PROJECT */}

                <div className="roadmap-project">
                  <span>PROJECT</span>

                  <strong>{step.project}</strong>
                </div>

                {/* COMPLETE BUTTON */}

                <button
                  type="button"
                  className={`complete-button ${
                    isCompleted ? "completed-button" : ""
                  }`}
                  onClick={() => toggleComplete(step.number)}
                >
                  {isCompleted
                    ? "✓ Completed"
                    : "Mark as Complete →"}
                </button>

              </div>
            </div>
          );
        })}

      </div>

      {/* FINISHED */}

      {progress === 100 && (
        <div className="roadmap-finished">

          <div>🎉</div>

          <h3>You're Job Ready!</h3>

          <p>
            Congratulations! You completed your {careerName} roadmap.
          </p>

        </div>
      )}

    </section>
  );
}

export default CareerRoadmap;