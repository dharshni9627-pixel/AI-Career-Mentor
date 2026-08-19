import { useEffect, useState } from "react";

const PROJECTS = {
  software: [
    {
      icon: "🌐",
      title: "Full Stack E-Commerce Website",
      level: "Intermediate",
      description:
        "Build a complete e-commerce application with product management, authentication and payments.",
      skills: ["React", "Node.js", "Express", "MongoDB"],

      details: {
        objective:
          "Build a complete online shopping platform where users can browse products, create accounts, add products to a cart and place orders.",

        prerequisites: [
          "Basic HTML, CSS and JavaScript",
          "Basic React knowledge",
          "Basic Node.js knowledge",
          "Basic database concepts",
        ],

        technologies: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
        ],

        steps: [
          "Plan the application and identify the main features such as products, users, cart and orders.",
          "Create the React frontend and design the home page, product page, login page and cart.",
          "Create a Node.js and Express backend with API endpoints for products and users.",
          "Connect MongoDB and create collections for users, products and orders.",
          "Implement authentication and allow users to register and log in.",
          "Add shopping cart and order management functionality.",
          "Test all features and fix errors.",
          "Deploy the frontend and backend.",
        ],

        testing:
          "Test registration, login, product browsing, cart operations and order creation using different user accounts.",

        result:
          "A complete full-stack e-commerce website with frontend, backend, database and user authentication.",

        gained: [
          "React",
          "REST APIs",
          "Node.js",
          "MongoDB",
          "Authentication",
          "Full Stack Development",
        ],
      },
    },

    {
      icon: "📱",
      title: "Student Management System",
      level: "Beginner",
      description:
        "Create a system to manage students, marks, attendance and academic records.",
      skills: ["JavaScript", "React", "SQL"],

      details: {
        objective:
          "Create a web application that allows teachers or administrators to manage student academic information.",

        prerequisites: [
          "HTML and CSS",
          "JavaScript basics",
          "Basic SQL",
          "Basic React",
        ],

        technologies: ["React", "JavaScript", "SQL"],

        steps: [
          "Design the student management dashboard.",
          "Create forms for adding student information.",
          "Create pages for student profiles and academic records.",
          "Create database tables for students, marks and attendance.",
          "Connect the frontend to the database through a backend API.",
          "Add search, update and delete functionality.",
          "Add attendance and marks management.",
          "Test the complete application.",
        ],

        testing:
          "Add sample students and verify that adding, editing, searching and deleting records work correctly.",

        result:
          "A functional student management application for maintaining academic records.",

        gained: [
          "React",
          "JavaScript",
          "SQL",
          "CRUD Operations",
          "Database Management",
        ],
      },
    },

    {
      icon: "💬",
      title: "Real-Time Chat Application",
      level: "Advanced",
      description:
        "Build a real-time messaging application with user authentication.",
      skills: ["React", "Node.js", "Socket.io"],

      details: {
        objective:
          "Build a real-time messaging platform where authenticated users can communicate instantly.",

        prerequisites: [
          "JavaScript",
          "React",
          "Node.js",
          "Basic networking concepts",
        ],

        technologies: [
          "React",
          "Node.js",
          "Express",
          "Socket.io",
        ],

        steps: [
          "Design the chat interface.",
          "Create user registration and login.",
          "Create the Node.js backend.",
          "Set up Socket.io for real-time communication.",
          "Create chat rooms or one-to-one conversations.",
          "Display sent and received messages instantly.",
          "Add online user indicators.",
          "Test communication between multiple users.",
        ],

        testing:
          "Open the application in multiple browser windows and verify that messages appear instantly for connected users.",

        result:
          "A real-time communication application with authentication and instant messaging.",

        gained: [
          "React",
          "Node.js",
          "WebSockets",
          "Socket.io",
          "Real-Time Applications",
        ],
      },
    },
  ],

  ai: [
    {
      icon: "🤖",
      title: "AI Career Recommendation System",
      level: "Intermediate",
      description:
        "Build an AI system that recommends suitable career paths based on user interests.",
      skills: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],

      details: {
        objective:
          "Create an AI-powered system that analyzes student interests, skills and preferences and recommends suitable career paths.",

        prerequisites: [
          "Python basics",
          "Basic statistics",
          "Machine learning fundamentals",
          "Pandas and NumPy basics",
        ],

        technologies: [
          "Python",
          "Pandas",
          "NumPy",
          "Scikit-learn",
          "Streamlit",
        ],

        steps: [
          "Define the career categories that the system should recommend.",
          "Create or prepare a dataset containing interests, skills and career categories.",
          "Clean the dataset and handle missing values.",
          "Convert categorical information into numerical features.",
          "Split the dataset into training and testing data.",
          "Train a suitable machine learning model.",
          "Evaluate the model using appropriate metrics.",
          "Create a simple interface where students enter their information.",
          "Connect the interface to the trained model.",
          "Display the recommended career and supporting skills.",
        ],

        testing:
          "Enter different combinations of interests and skills and check whether the system produces reasonable career recommendations.",

        result:
          "An interactive AI career recommendation system that provides personalized career suggestions.",

        gained: [
          "Python",
          "Machine Learning",
          "Data Processing",
          "Model Training",
          "AI Application Development",
        ],
      },
    },

    {
      icon: "🧠",
      title: "Image Classification System",
      level: "Intermediate",
      description:
        "Train a deep learning model to classify images into different categories.",
      skills: ["Python", "TensorFlow", "CNN", "Deep Learning"],

      details: {
        objective:
          "Develop a deep learning model that can identify which category an input image belongs to.",

        prerequisites: [
          "Python",
          "Basic machine learning",
          "Basic neural networks",
          "Understanding of image datasets",
        ],

        technologies: [
          "Python",
          "TensorFlow",
          "Keras",
          "CNN",
        ],

        steps: [
          "Select an image classification problem.",
          "Collect or use a suitable image dataset.",
          "Organize images into training and validation folders.",
          "Resize and normalize the images.",
          "Create a CNN model.",
          "Train the model using the training dataset.",
          "Evaluate the model using validation data.",
          "Test the model with new images.",
          "Create a simple interface for uploading images.",
        ],

        testing:
          "Use images that were not part of the training data and compare the predicted class with the actual class.",

        result:
          "A deep learning application capable of classifying images into predefined categories.",

        gained: [
          "Python",
          "TensorFlow",
          "CNN",
          "Deep Learning",
          "Computer Vision",
        ],
      },
    },

    {
      icon: "💬",
      title: "AI Chatbot",
      level: "Beginner",
      description:
        "Create an intelligent chatbot using natural language processing.",
      skills: ["Python", "NLP", "Machine Learning"],

      details: {
        objective:
          "Create a chatbot that understands common user questions and provides suitable responses.",

        prerequisites: [
          "Python basics",
          "String processing",
          "Basic NLP concepts",
        ],

        technologies: [
          "Python",
          "NLP",
          "NLTK or spaCy",
        ],

        steps: [
          "Define the purpose of the chatbot.",
          "Prepare common questions and responses.",
          "Clean and preprocess text.",
          "Identify user intents.",
          "Create a response system.",
          "Connect the chatbot to a user interface.",
          "Test different user questions.",
          "Improve responses based on test results.",
        ],

        testing:
          "Ask the chatbot different versions of the same question and check whether it provides appropriate responses.",

        result:
          "A functional AI chatbot capable of handling predefined user queries.",

        gained: [
          "Python",
          "NLP",
          "Text Processing",
          "Chatbot Development",
        ],
      },
    },
  ],

  data: [
    {
      icon: "📊",
      title: "Student Performance Prediction",
      level: "Intermediate",
      description:
        "Analyze student data and predict academic performance.",
      skills: ["Python", "Pandas", "Statistics", "Machine Learning"],

      details: {
        objective:
          "Analyze student academic data and build a model that predicts student performance.",

        prerequisites: [
          "Python",
          "Pandas",
          "Statistics",
          "Basic machine learning",
        ],

        technologies: [
          "Python",
          "Pandas",
          "NumPy",
          "Scikit-learn",
          "Matplotlib",
        ],

        steps: [
          "Collect student academic data.",
          "Clean missing and incorrect values.",
          "Analyze attendance, marks and other features.",
          "Create visualizations to identify patterns.",
          "Select important prediction features.",
          "Train a machine learning model.",
          "Evaluate the model.",
          "Create a dashboard showing predictions.",
        ],

        testing:
          "Use test student records and compare predicted performance with known results.",

        result:
          "A data science application that analyzes student data and predicts academic performance.",

        gained: [
          "Python",
          "Data Analysis",
          "Statistics",
          "Machine Learning",
          "Data Visualization",
        ],
      },
    },

    {
      icon: "📈",
      title: "Business Sales Dashboard",
      level: "Beginner",
      description:
        "Create an interactive dashboard to analyze business sales data.",
      skills: ["Power BI", "SQL", "Data Visualization"],

      details: {
        objective:
          "Create an interactive dashboard that helps businesses understand sales performance.",

        prerequisites: [
          "Basic Excel or spreadsheet knowledge",
          "Basic SQL",
          "Basic data visualization",
        ],

        technologies: [
          "Power BI",
          "SQL",
          "Excel",
        ],

        steps: [
          "Collect sales transaction data.",
          "Clean duplicate and missing records.",
          "Create SQL queries for important metrics.",
          "Connect the dataset to Power BI.",
          "Create sales charts and graphs.",
          "Add filters for products, regions and dates.",
          "Create KPI cards for revenue and sales.",
          "Publish the completed dashboard.",
        ],

        testing:
          "Compare dashboard totals with the original sales data to ensure that calculations are correct.",

        result:
          "An interactive business dashboard for monitoring sales performance.",

        gained: [
          "SQL",
          "Power BI",
          "Data Cleaning",
          "Data Visualization",
          "Business Analytics",
        ],
      },
    },

    {
      icon: "🔍",
      title: "Customer Churn Prediction",
      level: "Advanced",
      description:
        "Build a machine learning model that predicts customers likely to leave a service.",
      skills: ["Python", "Pandas", "Scikit-learn"],

      details: {
        objective:
          "Build a machine learning system that identifies customers who may stop using a service.",

        prerequisites: [
          "Python",
          "Pandas",
          "Statistics",
          "Machine learning",
        ],

        technologies: [
          "Python",
          "Pandas",
          "Scikit-learn",
          "Matplotlib",
        ],

        steps: [
          "Collect customer information and churn records.",
          "Clean and preprocess the dataset.",
          "Analyze factors related to customer churn.",
          "Encode categorical variables.",
          "Split data into training and testing sets.",
          "Train classification models.",
          "Evaluate model performance.",
          "Create a prediction interface.",
          "Test the model with new customer data.",
        ],

        testing:
          "Use unseen customer records and evaluate whether the model correctly identifies likely churn cases.",

        result:
          "A predictive analytics system that helps identify customers who may leave a service.",

        gained: [
          "Python",
          "Pandas",
          "Classification",
          "Machine Learning",
          "Data Analysis",
        ],
      },
    },
  ],

  cyber: [
    {
      icon: "🛡️",
      title: "Network Security Monitoring System",
      level: "Advanced",
      description:
        "Create a defensive system for monitoring network activity and identifying suspicious behavior.",
      skills: ["Python", "Networking", "Linux", "Cybersecurity"],

      details: {
        objective:
          "Build a defensive monitoring tool that observes network activity and highlights unusual behavior.",

        prerequisites: [
          "Networking fundamentals",
          "Python",
          "Linux basics",
          "Cybersecurity fundamentals",
        ],

        technologies: [
          "Python",
          "Linux",
          "Networking",
          "Log Analysis",
        ],

        steps: [
          "Learn basic network traffic concepts.",
          "Create a safe test environment.",
          "Collect permitted network or system logs.",
          "Parse and organize the logs.",
          "Define rules for identifying unusual activity.",
          "Create alerts for suspicious patterns.",
          "Build a simple monitoring dashboard.",
          "Test the system using simulated activity in your own environment.",
        ],

        testing:
          "Use a controlled lab environment with simulated network events and verify that expected alerts are generated.",

        result:
          "A defensive network monitoring application that helps identify unusual activity.",

        gained: [
          "Networking",
          "Python",
          "Linux",
          "Log Analysis",
          "Cybersecurity",
        ],
      },
    },

    {
      icon: "🔐",
      title: "Password Security Analyzer",
      level: "Beginner",
      description:
        "Create a tool that evaluates password strength and security.",
      skills: ["Python", "Cybersecurity"],

      details: {
        objective:
          "Create a defensive tool that evaluates whether a password meets basic security requirements.",

        prerequisites: [
          "Python basics",
          "Basic cybersecurity concepts",
          "String handling",
        ],

        technologies: [
          "Python",
          "Regular Expressions",
        ],

        steps: [
          "Define password strength rules.",
          "Check password length.",
          "Check for different character types.",
          "Detect common weak patterns.",
          "Create a strength scoring system.",
          "Display suggestions for improving weak passwords.",
          "Create a simple user interface.",
          "Test using sample passwords.",
        ],

        testing:
          "Test passwords of different lengths and patterns and verify that the analyzer provides appropriate strength feedback.",

        result:
          "A simple defensive password-strength analysis tool.",

        gained: [
          "Python",
          "Cybersecurity",
          "Input Validation",
          "Security Awareness",
        ],
      },
    },

    {
      icon: "🌐",
      title: "Secure Web Application",
      level: "Intermediate",
      description:
        "Build a web application with secure authentication and database protection.",
      skills: ["Node.js", "Web Security", "SQL"],

      details: {
        objective:
          "Build a web application while applying fundamental secure development practices.",

        prerequisites: [
          "HTML and CSS",
          "JavaScript",
          "Node.js",
          "SQL basics",
        ],

        technologies: [
          "Node.js",
          "Express",
          "SQL",
          "JavaScript",
        ],

        steps: [
          "Design the web application.",
          "Create user registration and login.",
          "Validate user input.",
          "Store passwords using secure password hashing.",
          "Use parameterized database queries.",
          "Implement authentication and authorization.",
          "Add appropriate error handling.",
          "Test the application for common security mistakes.",
        ],

        testing:
          "Test authentication, authorization, invalid inputs and database operations in a controlled development environment.",

        result:
          "A web application demonstrating fundamental secure coding practices.",

        gained: [
          "Node.js",
          "Express",
          "SQL",
          "Authentication",
          "Secure Coding",
        ],
      },
    },
  ],

  cloud: [
    {
      icon: "☁️",
      title: "Cloud-Based File Storage",
      level: "Intermediate",
      description:
        "Build a cloud application that allows users to upload and manage files.",
      skills: ["AWS", "Node.js", "Cloud Storage"],

      details: {
        objective:
          "Create a cloud-based application where users can securely upload and manage files.",

        prerequisites: [
          "Node.js",
          "Basic cloud concepts",
          "REST APIs",
          "Basic AWS knowledge",
        ],

        technologies: [
          "Node.js",
          "AWS",
          "Cloud Storage",
          "React",
        ],

        steps: [
          "Design the file storage application.",
          "Create the frontend interface.",
          "Create the Node.js backend.",
          "Configure cloud storage.",
          "Implement file upload functionality.",
          "Display uploaded files.",
          "Add file deletion and management.",
          "Add authentication.",
          "Deploy the application.",
        ],

        testing:
          "Upload, download and delete test files and verify that permissions work correctly.",

        result:
          "A cloud-connected file management application.",

        gained: [
          "AWS",
          "Cloud Storage",
          "Node.js",
          "REST APIs",
          "Cloud Deployment",
        ],
      },
    },

    {
      icon: "🚀",
      title: "CI/CD Deployment Pipeline",
      level: "Advanced",
      description:
        "Create an automated pipeline for building, testing and deploying applications.",
      skills: ["GitHub Actions", "Docker", "Linux", "CI/CD"],

      details: {
        objective:
          "Automate application testing and deployment using a CI/CD pipeline.",

        prerequisites: [
          "Git and GitHub",
          "Linux basics",
          "Docker basics",
          "Basic deployment knowledge",
        ],

        technologies: [
          "GitHub Actions",
          "Docker",
          "Linux",
        ],

        steps: [
          "Create a sample application.",
          "Push the application to GitHub.",
          "Create automated tests.",
          "Create a GitHub Actions workflow.",
          "Configure the build process.",
          "Build a Docker image.",
          "Run tests automatically.",
          "Configure deployment.",
          "Monitor the pipeline.",
        ],

        testing:
          "Push controlled changes to the repository and verify that the pipeline automatically builds, tests and deploys the application.",

        result:
          "An automated CI/CD workflow for application deployment.",

        gained: [
          "GitHub Actions",
          "Docker",
          "Linux",
          "CI/CD",
          "DevOps",
        ],
      },
    },

    {
      icon: "🐳",
      title: "Dockerized Web Application",
      level: "Intermediate",
      description:
        "Containerize a web application and prepare it for cloud deployment.",
      skills: ["Docker", "Linux", "Cloud"],

      details: {
        objective:
          "Package a web application into a Docker container so it can run consistently across environments.",

        prerequisites: [
          "Basic web development",
          "Linux commands",
          "Basic Docker concepts",
        ],

        technologies: [
          "Docker",
          "Linux",
          "Node.js",
        ],

        steps: [
          "Create or select a web application.",
          "Create a Dockerfile.",
          "Define the application environment.",
          "Install required dependencies inside the image.",
          "Build the Docker image.",
          "Run the container locally.",
          "Test the application.",
          "Prepare the container for cloud deployment.",
        ],

        testing:
          "Run the application inside the container and verify that all required features work correctly.",

        result:
          "A containerized web application ready for deployment.",

        gained: [
          "Docker",
          "Linux",
          "Containers",
          "Cloud Deployment",
        ],
      },
    },
  ],

  electronics: [
    {
      icon: "🔌",
      title: "Smart Home Automation System",
      level: "Intermediate",
      description:
        "Build an electronic home automation system using sensors and a microcontroller.",
      skills: ["Arduino", "Sensors", "Digital Electronics", "IoT"],

      details: {
        objective:
          "Build a smart home prototype that automatically monitors and controls devices using sensors.",

        prerequisites: [
          "Basic electronics",
          "Arduino basics",
          "Sensors",
          "Basic C/C++",
        ],

        technologies: [
          "Arduino",
          "Sensors",
          "IoT",
          "C/C++",
        ],

        steps: [
          "Select the devices to control.",
          "Choose suitable sensors.",
          "Design the circuit.",
          "Connect the sensors to the microcontroller.",
          "Write the control program.",
          "Test each sensor individually.",
          "Connect the output devices.",
          "Integrate all components.",
          "Test the complete automation system.",
        ],

        testing:
          "Test each sensor and output separately before testing the complete system.",

        result:
          "A working smart-home automation prototype.",

        gained: [
          "Arduino",
          "Sensors",
          "Digital Electronics",
          "IoT",
          "Embedded Programming",
        ],
      },
    },

    {
      icon: "💡",
      title: "Automatic Street Light",
      level: "Beginner",
      description:
        "Create an automatic street light system using sensors.",
      skills: ["Circuits", "Sensors", "Arduino"],

      details: {
        objective:
          "Create a system that automatically controls a light based on surrounding light conditions.",

        prerequisites: [
          "Basic circuits",
          "Arduino basics",
          "Sensor basics",
        ],

        technologies: [
          "Arduino",
          "LDR",
          "LED",
          "Basic electronics",
        ],

        steps: [
          "Understand the working of an LDR.",
          "Connect the LDR to the microcontroller.",
          "Connect the LED or suitable low-voltage output.",
          "Read the sensor value.",
          "Set a threshold for light and darkness.",
          "Turn the light on or off automatically.",
          "Test the circuit under different lighting conditions.",
        ],

        testing:
          "Test the system under bright and dark conditions and verify that the light responds correctly.",

        result:
          "An automatic light-control prototype.",

        gained: [
          "Arduino",
          "Sensors",
          "Circuits",
          "Automation",
        ],
      },
    },

    {
      icon: "🖥️",
      title: "Digital Logic Design",
      level: "Intermediate",
      description:
        "Design and simulate a digital electronic system.",
      skills: ["Digital Electronics", "Verilog", "VLSI"],

      details: {
        objective:
          "Design and simulate a digital logic system using logic gates and hardware description language.",

        prerequisites: [
          "Digital electronics",
          "Logic gates",
          "Boolean algebra",
          "Basic Verilog",
        ],

        technologies: [
          "Verilog",
          "Digital Logic",
          "Simulation Tools",
        ],

        steps: [
          "Define the required digital system.",
          "Create the truth table.",
          "Simplify the Boolean expressions.",
          "Design the logic circuit.",
          "Write the Verilog module.",
          "Create a testbench.",
          "Run simulation.",
          "Analyze the output.",
          "Improve the design if required.",
        ],

        testing:
          "Compare simulation outputs with the expected truth table.",

        result:
          "A simulated digital logic design with verified outputs.",

        gained: [
          "Digital Electronics",
          "Verilog",
          "Logic Design",
          "VLSI Fundamentals",
        ],
      },
    },
  ],

  electrical: [
    {
      icon: "⚡",
      title: "Smart Energy Monitoring System",
      level: "Intermediate",
      description:
        "Monitor electrical energy consumption using sensors and a microcontroller.",
      skills: ["Electrical Systems", "Sensors", "Arduino"],

      details: {
        objective:
          "Build a prototype that monitors electrical energy usage and displays useful measurements.",

        prerequisites: [
          "Basic electrical engineering",
          "Sensors",
          "Arduino",
          "Basic programming",
        ],

        technologies: [
          "Arduino",
          "Sensors",
          "Display",
          "C/C++",
        ],

        steps: [
          "Define the electrical parameters to monitor.",
          "Select suitable sensing components.",
          "Design a safe low-voltage prototype.",
          "Connect sensors to the microcontroller.",
          "Read and process sensor values.",
          "Calculate relevant measurements.",
          "Display the readings.",
          "Test and calibrate the system.",
        ],

        testing:
          "Compare prototype readings against known reference measurements in a safe controlled setup.",

        result:
          "A prototype energy-monitoring system.",

        gained: [
          "Electrical Systems",
          "Sensors",
          "Arduino",
          "Measurement",
        ],
      },
    },

    {
      icon: "🔋",
      title: "Solar Power Monitoring System",
      level: "Intermediate",
      description:
        "Monitor solar panel power generation and analyze energy output.",
      skills: ["Power Systems", "Solar Energy", "Sensors"],

      details: {
        objective:
          "Monitor and analyze the electrical output of a solar energy system.",

        prerequisites: [
          "Basic electrical engineering",
          "Solar energy fundamentals",
          "Sensors",
        ],

        technologies: [
          "Sensors",
          "Microcontroller",
          "Solar Panel",
          "Data Logging",
        ],

        steps: [
          "Study the solar panel output parameters.",
          "Select appropriate sensors.",
          "Create a safe measurement setup.",
          "Read voltage and current measurements.",
          "Calculate power output.",
          "Store measurement data.",
          "Create graphs showing energy generation.",
          "Analyze output under different conditions.",
        ],

        testing:
          "Compare measurements taken under different light conditions and check whether the readings behave as expected.",

        result:
          "A solar-energy monitoring and analysis prototype.",

        gained: [
          "Solar Energy",
          "Power Systems",
          "Sensors",
          "Data Analysis",
        ],
      },
    },

    {
      icon: "⚙️",
      title: "Automatic Motor Control System",
      level: "Advanced",
      description:
        "Design an automatic electrical motor control system.",
      skills: ["Control Systems", "Electrical Machines"],

      details: {
        objective:
          "Design a control system that automatically manages a motor based on defined conditions.",

        prerequisites: [
          "Electrical machines",
          "Control systems",
          "Basic electronics",
          "Microcontroller basics",
        ],

        technologies: [
          "Microcontroller",
          "Sensors",
          "Control Logic",
        ],

        steps: [
          "Define the motor-control requirement.",
          "Select a suitable low-voltage motor for a prototype.",
          "Define sensor inputs.",
          "Design the control logic.",
          "Implement the control program.",
          "Connect the control interface.",
          "Test different operating conditions.",
          "Document the system.",
        ],

        testing:
          "Test start, stop and control conditions using a safe low-voltage prototype.",

        result:
          "An automated motor-control prototype demonstrating control-system concepts.",

        gained: [
          "Control Systems",
          "Electrical Machines",
          "Automation",
          "Microcontrollers",
        ],
      },
    },
  ],

  mechanical: [
    {
      icon: "⚙️",
      title: "Automated Conveyor System",
      level: "Intermediate",
      description:
        "Design an automated manufacturing conveyor system.",
      skills: ["Mechanical Design", "CAD", "Automation"],

      details: {
        objective:
          "Design a conveyor system that can automatically move materials through a manufacturing process.",

        prerequisites: [
          "Mechanical design",
          "CAD basics",
          "Manufacturing concepts",
          "Basic automation",
        ],

        technologies: [
          "CAD",
          "Mechanical Components",
          "Automation",
        ],

        steps: [
          "Define the conveyor requirements.",
          "Select the conveyor type.",
          "Calculate basic dimensions and load requirements.",
          "Create the initial CAD design.",
          "Select rollers, belt and supporting components.",
          "Add an automation concept.",
          "Create the final CAD model.",
          "Analyze the design.",
          "Prepare technical documentation.",
        ],

        testing:
          "Check the design against the intended dimensions, load requirements and movement conditions.",

        result:
          "A complete CAD-based automated conveyor system design.",

        gained: [
          "CAD",
          "Mechanical Design",
          "Automation",
          "Engineering Analysis",
        ],
      },
    },

    {
      icon: "🚗",
      title: "Vehicle Suspension Design",
      level: "Advanced",
      description:
        "Design and analyze a vehicle suspension system.",
      skills: ["CAD", "Mechanics", "Automotive Engineering"],

      details: {
        objective:
          "Design and analyze a conceptual vehicle suspension system.",

        prerequisites: [
          "Engineering mechanics",
          "CAD",
          "Automotive fundamentals",
        ],

        technologies: [
          "CAD",
          "Simulation Software",
          "Mechanical Analysis",
        ],

        steps: [
          "Study suspension system types.",
          "Define the vehicle requirements.",
          "Select the suspension concept.",
          "Create the CAD model.",
          "Define loads and constraints.",
          "Perform conceptual analysis.",
          "Evaluate movement and geometry.",
          "Improve the design.",
          "Prepare the final technical report.",
        ],

        testing:
          "Check the design against the chosen assumptions and evaluate whether the geometry behaves as intended.",

        result:
          "A conceptual vehicle suspension design with engineering analysis.",

        gained: [
          "CAD",
          "Mechanics",
          "Automotive Engineering",
          "Design Analysis",
        ],
      },
    },

    {
      icon: "🔧",
      title: "Mechanical Product Design",
      level: "Beginner",
      description:
        "Design a practical mechanical product using engineering principles.",
      skills: ["AutoCAD", "SolidWorks", "Engineering Drawing"],

      details: {
        objective:
          "Design a practical mechanical product from concept to final CAD model.",

        prerequisites: [
          "Engineering drawing",
          "Basic CAD",
          "Mechanical design basics",
        ],

        technologies: [
          "AutoCAD",
          "SolidWorks",
          "CAD",
        ],

        steps: [
          "Identify a simple real-world problem.",
          "Create multiple product concepts.",
          "Select the most practical concept.",
          "Create rough sketches.",
          "Create the CAD model.",
          "Add dimensions and components.",
          "Create engineering drawings.",
          "Review the design.",
          "Prepare the final presentation.",
        ],

        testing:
          "Check dimensions, component fit and design requirements.",

        result:
          "A complete mechanical product concept with CAD drawings.",

        gained: [
          "CAD",
          "Product Design",
          "Engineering Drawing",
          "Design Thinking",
        ],
      },
    },
  ],

  civil: [
    {
      icon: "🏗️",
      title: "Smart Building Design",
      level: "Intermediate",
      description:
        "Design a modern sustainable building using engineering principles.",
      skills: ["AutoCAD", "Structural Design", "Construction"],

      details: {
        objective:
          "Create a conceptual sustainable building design considering planning, structure and energy efficiency.",

        prerequisites: [
          "Civil engineering basics",
          "AutoCAD",
          "Building planning",
          "Construction fundamentals",
        ],

        technologies: [
          "AutoCAD",
          "Building Design",
          "3D Modeling",
        ],

        steps: [
          "Identify the building requirements.",
          "Plan the rooms and spaces.",
          "Create the floor plan.",
          "Develop the structural concept.",
          "Add electrical and plumbing concepts.",
          "Consider natural lighting and ventilation.",
          "Create elevations.",
          "Create a 3D conceptual model.",
          "Prepare the final drawings.",
        ],

        testing:
          "Review dimensions, room arrangement, circulation and design requirements.",

        result:
          "A conceptual sustainable building design with architectural and engineering drawings.",

        gained: [
          "AutoCAD",
          "Building Design",
          "Planning",
          "Construction Concepts",
        ],
      },
    },

    {
      icon: "🌉",
      title: "Bridge Design Project",
      level: "Advanced",
      description:
        "Design and analyze a bridge structure.",
      skills: ["Structural Engineering", "CAD", "Materials"],

      details: {
        objective:
          "Develop a conceptual bridge design and study its structural behavior.",

        prerequisites: [
          "Structural engineering",
          "Engineering mechanics",
          "CAD",
          "Materials knowledge",
        ],

        technologies: [
          "CAD",
          "Structural Analysis Software",
          "Engineering Calculations",
        ],

        steps: [
          "Define the bridge requirements.",
          "Select an appropriate bridge concept.",
          "Identify loads and design assumptions.",
          "Create the conceptual geometry.",
          "Select suitable materials.",
          "Create the CAD model.",
          "Perform structural analysis using appropriate educational tools.",
          "Review the design.",
          "Prepare technical drawings and documentation.",
        ],

        testing:
          "Check the design against the defined assumptions and verify that the conceptual structural analysis is consistent.",

        result:
          "A conceptual bridge design supported by structural analysis.",

        gained: [
          "Structural Engineering",
          "CAD",
          "Materials",
          "Structural Analysis",
        ],
      },
    },

    {
      icon: "🏠",
      title: "Residential Building Plan",
      level: "Beginner",
      description:
        "Create a complete residential building plan.",
      skills: ["AutoCAD", "Building Design", "Surveying"],

      details: {
        objective:
          "Create a residential building plan with appropriate room arrangement and dimensions.",

        prerequisites: [
          "AutoCAD basics",
          "Building planning",
          "Engineering drawing",
        ],

        technologies: [
          "AutoCAD",
          "2D Drafting",
        ],

        steps: [
          "Define the plot dimensions.",
          "Identify the client's requirements.",
          "Plan rooms and circulation.",
          "Create the 2D floor plan.",
          "Add dimensions.",
          "Create doors and windows.",
          "Add basic elevation drawings.",
          "Review the complete plan.",
          "Prepare the final drawing sheet.",
        ],

        testing:
          "Check dimensions, room sizes, doors, windows and circulation.",

        result:
          "A complete conceptual residential building plan.",

        gained: [
          "AutoCAD",
          "Building Planning",
          "Drafting",
          "Surveying Concepts",
        ],
      },
    },
  ],

  robotics: [
    {
      icon: "🤖",
      title: "Obstacle Avoiding Robot",
      level: "Beginner",
      description:
        "Build a robot that detects and avoids obstacles using sensors.",
      skills: ["Arduino", "Sensors", "C/C++", "Robotics"],

      details: {
        objective:
          "Create a small robot prototype that detects obstacles and changes direction automatically.",

        prerequisites: [
          "Arduino basics",
          "Basic electronics",
          "C/C++ basics",
          "Sensor fundamentals",
        ],

        technologies: [
          "Arduino",
          "Ultrasonic Sensor",
          "Motor Driver",
          "C/C++",
        ],

        steps: [
          "Design the robot chassis.",
          "Connect the motors and motor driver.",
          "Connect the distance sensor.",
          "Write code to read distance.",
          "Define obstacle detection conditions.",
          "Program the robot to change direction.",
          "Test movement.",
          "Improve the obstacle detection logic.",
        ],

        testing:
          "Place safe objects in the robot's path and verify that it detects them and changes direction.",

        result:
          "A working obstacle-avoidance robot prototype.",

        gained: [
          "Arduino",
          "Sensors",
          "Robotics",
          "C/C++",
          "Control Logic",
        ],
      },
    },

    {
      icon: "🦾",
      title: "Robotic Arm",
      level: "Advanced",
      description:
        "Design and control a robotic arm for automated tasks.",
      skills: ["Robotics", "Arduino", "Control Systems"],

      details: {
        objective:
          "Design a robotic arm prototype capable of controlled movement.",

        prerequisites: [
          "Robotics basics",
          "Arduino",
          "Servo motors",
          "Basic control systems",
        ],

        technologies: [
          "Arduino",
          "Servo Motors",
          "Robotics",
          "C/C++",
        ],

        steps: [
          "Define the robotic arm movement requirements.",
          "Design the arm structure.",
          "Select suitable servo motors.",
          "Build the mechanical structure.",
          "Connect the motors to the controller.",
          "Program individual joint movements.",
          "Create coordinated movements.",
          "Test different movement sequences.",
        ],

        testing:
          "Test each joint independently before testing combined movements.",

        result:
          "A controllable robotic arm prototype.",

        gained: [
          "Robotics",
          "Arduino",
          "Servo Control",
          "Mechanical Design",
        ],
      },
    },

    {
      icon: "🚗",
      title: "Autonomous Robot Vehicle",
      level: "Advanced",
      description:
        "Develop an autonomous robot vehicle using sensors and programming.",
      skills: ["Robotics", "Sensors", "Python"],

      details: {
        objective:
          "Develop a robot vehicle capable of making basic movement decisions using sensor information.",

        prerequisites: [
          "Robotics",
          "Sensors",
          "Programming",
          "Control systems",
        ],

        technologies: [
          "Microcontroller",
          "Sensors",
          "Python or C/C++",
        ],

        steps: [
          "Define the autonomous behavior.",
          "Select sensors.",
          "Build the vehicle platform.",
          "Connect the motors and controller.",
          "Read sensor data.",
          "Create movement rules.",
          "Implement navigation logic.",
          "Test the robot in a controlled environment.",
          "Improve the decision logic.",
        ],

        testing:
          "Use a controlled obstacle course and evaluate whether the robot makes the intended movement decisions.",

        result:
          "An autonomous robot vehicle prototype.",

        gained: [
          "Robotics",
          "Sensors",
          "Programming",
          "Control Systems",
        ],
      },
    },
  ],

  embedded: [
    {
      icon: "📱",
      title: "Smart IoT Home Device",
      level: "Intermediate",
      description:
        "Build a smart IoT device that collects sensor data and communicates with other devices.",
      skills: ["C/C++", "ESP32", "IoT", "Sensors"],

      details: {
        objective:
          "Create an IoT device that collects sensor information and sends it to a connected application.",

        prerequisites: [
          "C/C++ basics",
          "Microcontrollers",
          "Sensors",
          "Basic IoT concepts",
        ],

        technologies: [
          "ESP32",
          "C/C++",
          "Sensors",
          "IoT",
        ],

        steps: [
          "Define the IoT application.",
          "Select the required sensors.",
          "Connect the sensors to the ESP32.",
          "Write code to read sensor data.",
          "Connect the ESP32 to a network.",
          "Send data to a suitable application or dashboard.",
          "Display sensor readings.",
          "Test communication and sensor accuracy.",
        ],

        testing:
          "Change the sensor conditions and verify that updated readings reach the application.",

        result:
          "A connected IoT prototype that collects and communicates sensor data.",

        gained: [
          "ESP32",
          "C/C++",
          "IoT",
          "Sensors",
          "Embedded Systems",
        ],
      },
    },

    {
      icon: "🌡️",
      title: "Smart Temperature Monitoring System",
      level: "Beginner",
      description:
        "Develop an embedded device that measures and displays temperature.",
      skills: ["C", "Microcontrollers", "Sensors"],

      details: {
        objective:
          "Create a small embedded system that measures temperature and displays the current reading.",

        prerequisites: [
          "C programming",
          "Microcontroller basics",
          "Sensor basics",
        ],

        technologies: [
          "Microcontroller",
          "Temperature Sensor",
          "Display",
          "C",
        ],

        steps: [
          "Select a temperature sensor.",
          "Connect the sensor to the microcontroller.",
          "Write code to read temperature.",
          "Convert the sensor reading into temperature units.",
          "Connect a display.",
          "Display the temperature.",
          "Test different temperature conditions.",
        ],

        testing:
          "Compare readings with a reference thermometer in a safe environment.",

        result:
          "A functional embedded temperature monitoring device.",

        gained: [
          "C",
          "Microcontrollers",
          "Sensors",
          "Embedded Programming",
        ],
      },
    },

    {
      icon: "🚦",
      title: "Smart Traffic Light Controller",
      level: "Intermediate",
      description:
        "Design a microcontroller-based traffic signal control system.",
      skills: ["C", "Microcontrollers", "Digital Electronics"],

      details: {
        objective:
          "Create a traffic signal prototype using a microcontroller and programmable timing logic.",

        prerequisites: [
          "C programming",
          "Digital electronics",
          "Microcontrollers",
        ],

        technologies: [
          "Microcontroller",
          "LEDs",
          "C",
          "Digital Electronics",
        ],

        steps: [
          "Define the traffic signal sequence.",
          "Connect red, yellow and green LEDs.",
          "Write the timing program.",
          "Implement the signal sequence.",
          "Add pedestrian or sensor logic if required.",
          "Test each signal.",
          "Test complete cycles.",
          "Improve the control logic.",
        ],

        testing:
          "Verify that the lights follow the intended sequence and timing.",

        result:
          "A working microcontroller-based traffic light prototype.",

        gained: [
          "C",
          "Microcontrollers",
          "Digital Electronics",
          "Control Logic",
        ],
      },
    },
  ],
};

const CAREER_NAMES = {
  software: "Software / Full Stack Engineer",
  ai: "AI / ML Engineer",
  data: "Data Scientist",
  cyber: "Cybersecurity Engineer",
  cloud: "Cloud / DevOps Engineer",
  electronics: "Electronics / VLSI Engineer",
  electrical: "Electrical Engineer",
  mechanical: "Mechanical Engineer",
  civil: "Civil Engineer",
  robotics: "Robotics / Automation Engineer",
  embedded: "Embedded Systems Engineer",
};

export default function ProjectRecommendations({
  careerKey,
  career,
}) {
  const getInitialCareer = () => {
    if (careerKey && PROJECTS[careerKey]) {
      return careerKey;
    }

    if (career && PROJECTS[career]) {
      return career;
    }

    const savedCareer =
      localStorage.getItem("mavericksCareer");

    if (savedCareer && PROJECTS[savedCareer]) {
      return savedCareer;
    }

    return null;
  };

  const [selectedCareer, setSelectedCareer] =
    useState(getInitialCareer);

  const [selectedProject, setSelectedProject] =
    useState(null);

  const [evidence, setEvidence] = useState({
    github: "",
    demo: "",
    report: "",
    screenshot: "",
    description: "",
    challenges: "",
  });

  const [completed, setCompleted] =
    useState(false);

  /* =========================================
     LOAD SAVED PROJECT EVIDENCE
  ========================================= */

  const loadEvidence = (project) => {
    if (!project) return;

    const key =
      `projectEvidence_${selectedCareer}_${project.title}`;

    const saved =
      localStorage.getItem(key);

    if (saved) {
      try {
        const data = JSON.parse(saved);

        setEvidence({
          github: data.github || "",
          demo: data.demo || "",
          report: data.report || "",
          screenshot: data.screenshot || "",
          description: data.description || "",
          challenges: data.challenges || "",
        });

        setCompleted(data.completed || false);
      } catch {
        setEvidence({
          github: "",
          demo: "",
          report: "",
          screenshot: "",
          description: "",
          challenges: "",
        });

        setCompleted(false);
      }
    } else {
      setEvidence({
        github: "",
        demo: "",
        report: "",
        screenshot: "",
        description: "",
        challenges: "",
      });

      setCompleted(false);
    }
  };

  /* =========================================
     SAVE EVIDENCE
  ========================================= */

  const saveEvidence = () => {
    if (!selectedProject) return;

    const key =
      `projectEvidence_${selectedCareer}_${selectedProject.title}`;

    const data = {
      ...evidence,
      completed,
      project: selectedProject.title,
      career: CAREER_NAMES[selectedCareer],
      savedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      key,
      JSON.stringify(data)
    );

    alert("Project portfolio evidence saved successfully! 🚀");
  };

  /* =========================================
     CAREER KEY FROM PARENT
  ========================================= */

  useEffect(() => {
    if (careerKey && PROJECTS[careerKey]) {
      setSelectedCareer(careerKey);

      localStorage.setItem(
        "mavericksCareer",
        careerKey
      );

      setSelectedProject(null);
    }
  }, [careerKey]);

  /* =========================================
     CAREER PROP FROM PARENT
  ========================================= */

  useEffect(() => {
    if (career && PROJECTS[career]) {
      setSelectedCareer(career);

      localStorage.setItem(
        "mavericksCareer",
        career
      );

      setSelectedProject(null);
    }
  }, [career]);

  /* =========================================
     CAREER UPDATE EVENT
  ========================================= */

  useEffect(() => {
    const handleCareerUpdate = (event) => {
      const newCareer =
        event.detail?.careerKey;

      if (
        newCareer &&
        PROJECTS[newCareer]
      ) {
        setSelectedCareer(newCareer);
        setSelectedProject(null);

        localStorage.setItem(
          "mavericksCareer",
          newCareer
        );
      }
    };

    window.addEventListener(
      "careerUpdated",
      handleCareerUpdate
    );

    return () => {
      window.removeEventListener(
        "careerUpdated",
        handleCareerUpdate
      );
    };
  }, []);

  /* =========================================
     STORAGE UPDATE
  ========================================= */

  useEffect(() => {
    const handleStorageChange = () => {
      const savedCareer =
        localStorage.getItem(
          "mavericksCareer"
        );

      if (
        savedCareer &&
        PROJECTS[savedCareer]
      ) {
        setSelectedCareer(savedCareer);
        setSelectedProject(null);
      }
    };

    window.addEventListener(
      "storage",
      handleStorageChange
    );

    return () => {
      window.removeEventListener(
        "storage",
        handleStorageChange
      );
    };
  }, []);

  /* =========================================
     OPEN PROJECT
  ========================================= */

  const openProject = (project) => {
    setSelectedProject(project);
    loadEvidence(project);
  };

  /* =========================================
     CLOSE PROJECT
  ========================================= */

  const closeProject = () => {
    setSelectedProject(null);

    setEvidence({
      github: "",
      demo: "",
      report: "",
      screenshot: "",
      description: "",
      challenges: "",
    });

    setCompleted(false);
  };

  /* =========================================
     NO CAREER
  ========================================= */

  if (!selectedCareer) {
    return (
      <section
        id="career-projects"
        className="projects-section"
      >
        <div className="projects-header">

          <p className="section-label">
            PERSONALIZED PROJECTS
          </p>

          <h2>
            Complete Your Career Assessment
          </h2>

          <p className="projects-description">
            Take the career assessment to receive
            projects specifically matched to your
            career path.
          </p>

        </div>
      </section>
    );
  }

  const projects =
    PROJECTS[selectedCareer];

  /* =========================================
     SAFETY CHECK
  ========================================= */

  if (!projects) {
    return (
      <section
        id="career-projects"
        className="projects-section"
      >
        <div className="projects-header">

          <p className="section-label">
            PERSONALIZED PROJECTS
          </p>

          <h2>
            No Projects Found
          </h2>

          <p className="projects-description">
            Career key received:
            <strong>
              {selectedCareer}
            </strong>
          </p>

        </div>
      </section>
    );
  }

  return (
    <>
      {/* =========================================
          PROJECT SECTION
      ========================================= */}

      <section
        id="career-projects"
        className="projects-section"
      >

        <div className="projects-header">

          <p className="section-label">
            PERSONALIZED PROJECTS
          </p>

          <h2>
            Recommended Projects

            <span>
              {CAREER_NAMES[selectedCareer]}
            </span>
          </h2>

          <p className="projects-description">
            Build real-world projects designed
            specifically for your career path and
            create evidence for your portfolio.
          </p>

        </div>

        {/* =====================================
            PROJECT CARDS
        ===================================== */}

        <div className="projects-grid">

          {projects.map((project, index) => (

            <article
              className="project-card"
              key={`${selectedCareer}-${project.title}`}
            >

              <div className="project-icon">
                {project.icon}
              </div>

              <div className="project-content">

                <div className="project-top">

                  <span>
                    PROJECT {index + 1}
                  </span>

                  <span>
                    {project.level}
                  </span>

                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="project-skills">

                  {project.skills.map(
                    (skill) => (

                      <span key={skill}>
                        {skill}
                      </span>

                    )
                  )}

                </div>

                <button
                  className="explore-project-btn"
                  onClick={() =>
                    openProject(project)
                  }
                >
                  Explore Project

                  <span>
                    →
                  </span>
                </button>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* =========================================
          PROJECT MODAL
      ========================================= */}

      {selectedProject && (

        <div
          className="project-modal-overlay"
          onClick={closeProject}
        >

          <div
            className="project-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* =================================
                MODAL HEADER
            ================================= */}

            <div className="project-modal-header">

              <div className="modal-project-icon">
                {selectedProject.icon}
              </div>

              <div>

                <p className="modal-label">
                  PROJECT GUIDE
                </p>

                <h2>
                  {selectedProject.title}
                </h2>

                <span className="modal-level">
                  {selectedProject.level}
                </span>

              </div>

              <button
                className="close-modal-btn"
                onClick={closeProject}
              >
                ×
              </button>

            </div>

            {/* =================================
                OBJECTIVE
            ================================= */}

            <div className="modal-section">

              <h3>
                🎯 Project Objective
              </h3>

              <p>
                {selectedProject.details.objective}
              </p>

            </div>

            {/* =================================
                TECHNOLOGIES
            ================================= */}

            <div className="modal-section">

              <h3>
                🛠️ Technologies Required
              </h3>

              <div className="modal-tags">

                {selectedProject.details.technologies.map(
                  (technology) => (

                    <span key={technology}>
                      {technology}
                    </span>

                  )
                )}

              </div>

            </div>

            {/* =================================
                PREREQUISITES
            ================================= */}

            <div className="modal-section">

              <h3>
                📚 Prerequisites
              </h3>

              <ul className="modal-list">

                {selectedProject.details.prerequisites.map(
                  (item) => (

                    <li key={item}>
                      {item}
                    </li>

                  )
                )}

              </ul>

            </div>

            {/* =================================
                BUILD STEPS
            ================================= */}

            <div className="modal-section">

              <h3>
                🪜 How To Build It
              </h3>

              <div className="project-steps">

                {selectedProject.details.steps.map(
                  (step, index) => (

                    <div
                      className="project-step"
                      key={index}
                    >

                      <div className="step-number">
                        {String(
                          index + 1
                        ).padStart(2, "0")}
                      </div>

                      <div className="step-content">

                        <h4>
                          Step {index + 1}
                        </h4>

                        <p>
                          {step}
                        </p>

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>

            {/* =================================
                TESTING
            ================================= */}

            <div className="modal-section">

              <h3>
                🧪 Testing
              </h3>

              <p>
                {selectedProject.details.testing}
              </p>

            </div>

            {/* =================================
                EXPECTED RESULT
            ================================= */}

            <div className="modal-result">

              <h3>
                🚀 Expected Result
              </h3>

              <p>
                {selectedProject.details.result}
              </p>

            </div>

            {/* =================================
                SKILLS
            ================================= */}

            <div className="modal-section">

              <h3>
                ⭐ Skills You Will Gain
              </h3>

              <div className="modal-tags">

                {selectedProject.details.gained.map(
                  (skill) => (

                    <span key={skill}>
                      {skill}
                    </span>

                  )
                )}

              </div>

            </div>

            {/* =========================================
                PROJECT EVIDENCE / PORTFOLIO
            ========================================= */}

            <div className="portfolio-evidence">

              <div className="portfolio-header">

                <div>

                  <p className="modal-label">
                    BUILD YOUR PORTFOLIO
                  </p>

                  <h3>
                    📁 Project Evidence
                  </h3>

                  <p>
                    Add proof of your work so this
                    project becomes part of your
                    professional portfolio.
                  </p>

                </div>

                <div
                  className={
                    completed
                      ? "completion-badge completed"
                      : "completion-badge"
                  }
                >
                  {completed
                    ? "✓ Completed"
                    : "In Progress"}
                </div>

              </div>

              {/* =================================
                  GITHUB
              ================================= */}

              <div className="evidence-field">

                <label>
                  💻 GitHub Repository
                </label>

                <input
                  type="url"
                  placeholder="https://github.com/yourusername/project"
                  value={evidence.github}
                  onChange={(event) =>
                    setEvidence({
                      ...evidence,
                      github:
                        event.target.value,
                    })
                  }
                />

              </div>

              {/* =================================
                  LIVE DEMO
              ================================= */}

              <div className="evidence-field">

                <label>
                  🌐 Live Demo
                </label>

                <input
                  type="url"
                  placeholder="https://your-project.vercel.app"
                  value={evidence.demo}
                  onChange={(event) =>
                    setEvidence({
                      ...evidence,
                      demo:
                        event.target.value,
                    })
                  }
                />

              </div>

              {/* =================================
                  REPORT
              ================================= */}

              <div className="evidence-field">

                <label>
                  📄 Project Report
                </label>

                <input
                  type="url"
                  placeholder="Google Drive / PDF / Document link"
                  value={evidence.report}
                  onChange={(event) =>
                    setEvidence({
                      ...evidence,
                      report:
                        event.target.value,
                    })
                  }
                />

              </div>

              {/* =================================
                  SCREENSHOT
              ================================= */}

              <div className="evidence-field">

                <label>
                  🖼️ Screenshot / Project Proof
                </label>

                <input
                  type="url"
                  placeholder="Paste screenshot or image link"
                  value={evidence.screenshot}
                  onChange={(event) =>
                    setEvidence({
                      ...evidence,
                      screenshot:
                        event.target.value,
                    })
                  }
                />

              </div>

              {/* =================================
                  WHAT I BUILT
              ================================= */}

              <div className="evidence-field">

                <label>
                  ✍️ What Did You Build?
                </label>

                <textarea
                  placeholder="Describe what you personally built in this project..."
                  rows="4"
                  value={evidence.description}
                  onChange={(event) =>
                    setEvidence({
                      ...evidence,
                      description:
                        event.target.value,
                    })
                  }
                />

              </div>

              {/* =================================
                  CHALLENGES
              ================================= */}

              <div className="evidence-field">

                <label>
                  🧩 Challenges & Learning
                </label>

                <textarea
                  placeholder="What challenges did you face and what did you learn?"
                  rows="4"
                  value={evidence.challenges}
                  onChange={(event) =>
                    setEvidence({
                      ...evidence,
                      challenges:
                        event.target.value,
                    })
                  }
                />

              </div>

              {/* =================================
                  COMPLETION CHECKBOX
              ================================= */}

              <label className="completion-checkbox">

                <input
                  type="checkbox"
                  checked={completed}
                  onChange={(event) =>
                    setCompleted(
                      event.target.checked
                    )
                  }
                />

                <span>
                  I have completed this project
                  and added my evidence.
                </span>

              </label>

              {/* =================================
                  SAVE
              ================================= */}

              <button
                className="save-portfolio-btn"
                onClick={saveEvidence}
              >
                💾 Save Portfolio Evidence
              </button>

              {/* =================================
                  QUICK LINKS
              ================================= */}

              {(evidence.github ||
                evidence.demo ||
                evidence.report ||
                evidence.screenshot) && (

                <div className="portfolio-links">

                  <h4>
                    🔗 Your Project Links
                  </h4>

                  <div>

                    {evidence.github && (
                      <a
                        href={evidence.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        💻 GitHub
                      </a>
                    )}

                    {evidence.demo && (
                      <a
                        href={evidence.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        🌐 Live Demo
                      </a>
                    )}

                    {evidence.report && (
                      <a
                        href={evidence.report}
                        target="_blank"
                        rel="noreferrer"
                      >
                        📄 Report
                      </a>
                    )}

                    {evidence.screenshot && (
                      <a
                        href={evidence.screenshot}
                        target="_blank"
                        rel="noreferrer"
                      >
                        🖼️ Evidence
                      </a>
                    )}

                  </div>

                </div>

              )}

            </div>

            {/* =================================
                START BUILDING
            ================================= */}

            <button
              className="modal-start-btn"
              onClick={() => {
                document
                  .querySelector(
                    ".portfolio-evidence"
                  )
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              Start Building 🚀
            </button>

          </div>

        </div>

      )}

    </>
  );
}