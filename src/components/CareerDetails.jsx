import { useState } from "react";
import "./CareerDetails.css";

const learningLinks = {
  "LinkedIn Learning": "https://www.linkedin.com/learning/",
  Coursera: "https://www.coursera.org/",
  NPTEL: "https://www.nptel.ac.in/courses",
  Udemy: "https://www.udemy.com/courses/",
  "React Documentation": "https://react.dev/learn",
  "Python Documentation": "https://docs.python.org/3/tutorial/",
  "Google ML Crash Course": "https://developers.google.com/machine-learning/crash-course",
  "DeepLearning.AI Resources": "https://www.deeplearning.ai/courses/",
  SQLBolt: "https://sqlbolt.com/",
  "Cisco Networking Academy": "https://www.netacad.com/",
  "Linux Documentation": "https://www.linux.org/",
  "TryHackMe Free Content": "https://tryhackme.com/",
  TryHackMe: "https://tryhackme.com/",
  "AWS Skill Builder": "https://skillbuilder.aws/",
  "Docker Documentation": "https://docs.docker.com/get-started/",
  "GitHub Learning": "https://skills.github.com/",
  HDLBits: "https://hdlbits.01xz.net/wiki/Main_Page",
  "All About Circuits": "https://www.allaboutcircuits.com/",
  "Khan Academy": "https://www.khanacademy.org/",
  "Autodesk Learning": "https://www.autodesk.com/learn",
  "MIT OpenCourseWare": "https://ocw.mit.edu/",
  "ROS Documentation": "https://docs.ros.org/",
  "Arduino Documentation": "https://docs.arduino.cc/",
  "Learn-C.org": "https://www.learn-c.org/",
  freeCodeCamp: "https://www.freecodecamp.org/",
  GeeksforGeeks: "https://www.geeksforgeeks.org/",
  LeetCode: "https://leetcode.com/",
};

const careerData = {
  software: {
    name: "Software / Full Stack Engineer",
    icon: "💻",
    description: "Build websites, applications and software systems that solve real-world problems.",
    skills: [
      { name: "JavaScript", level: 65, target: 90, free: "freeCodeCamp", paid: "Coursera" },
      { name: "React", level: 40, target: 85, free: "React Documentation", paid: "Udemy" },
      { name: "SQL", level: 60, target: 85, free: "SQLBolt", paid: "Coursera" },
      { name: "Data Structures & Algorithms", level: 45, target: 90, free: "GeeksforGeeks", paid: "LeetCode" },
    ],
  },
  ai: {
    name: "AI / ML Engineer",
    icon: "🤖",
    description: "Develop intelligent applications using machine learning, deep learning and AI.",
    skills: [
      { name: "Python", level: 70, target: 90, free: "Python Documentation", paid: "Coursera" },
      { name: "Machine Learning", level: 45, target: 90, free: "Google ML Crash Course", paid: "Coursera" },
      { name: "Deep Learning", level: 30, target: 85, free: "DeepLearning.AI Resources", paid: "Coursera" },
      { name: "SQL", level: 55, target: 80, free: "SQLBolt", paid: "Udemy" },
    ],
  },
  data: {
    name: "Data Scientist",
    icon: "📊",
    description: "Use statistics, programming and machine learning to discover insights from data.",
    skills: [
      { name: "Python", level: 65, target: 90, free: "Python Documentation", paid: "Coursera" },
      { name: "Statistics", level: 45, target: 90, free: "Khan Academy", paid: "Coursera" },
      { name: "SQL", level: 60, target: 85, free: "SQLBolt", paid: "Udemy" },
      { name: "Machine Learning", level: 35, target: 85, free: "Google ML Crash Course", paid: "Coursera" },
    ],
  },
  cyber: {
    name: "Cybersecurity Engineer",
    icon: "🛡️",
    description: "Protect systems, networks and applications from security threats.",
    skills: [
      { name: "Networking", level: 55, target: 90, free: "Cisco Networking Academy", paid: "Coursera" },
      { name: "Linux", level: 45, target: 85, free: "Linux Documentation", paid: "Udemy" },
      { name: "Cybersecurity", level: 35, target: 90, free: "Cisco Networking Academy", paid: "Coursera" },
      { name: "Ethical Hacking", level: 25, target: 80, free: "TryHackMe Free Content", paid: "TryHackMe" },
    ],
  },
  cloud: {
    name: "Cloud / DevOps Engineer",
    icon: "☁️",
    description: "Build, deploy and maintain reliable applications and cloud infrastructure.",
    skills: [
      { name: "Linux", level: 50, target: 85, free: "Linux Documentation", paid: "Udemy" },
      { name: "Cloud Computing", level: 35, target: 85, free: "AWS Skill Builder", paid: "Coursera" },
      { name: "Docker", level: 25, target: 80, free: "Docker Documentation", paid: "Udemy" },
      { name: "CI/CD", level: 20, target: 80, free: "GitHub Learning", paid: "Coursera" },
    ],
  },
  electronics: {
    name: "Electronics / VLSI Engineer",
    icon: "🔌",
    description: "Design electronic systems, digital circuits and semiconductor technologies.",
    skills: [
      { name: "Digital Electronics", level: 60, target: 90, free: "NPTEL", paid: "Coursera" },
      { name: "VLSI", level: 35, target: 85, free: "NPTEL", paid: "Udemy" },
      { name: "Verilog", level: 25, target: 80, free: "HDLBits", paid: "Udemy" },
      { name: "Circuit Design", level: 55, target: 85, free: "All About Circuits", paid: "Coursera" },
    ],
  },
  electrical: {
    name: "Electrical Engineer",
    icon: "⚡",
    description: "Work with electrical systems, power systems, control and automation.",
    skills: [
      { name: "Circuit Analysis", level: 60, target: 90, free: "NPTEL", paid: "Coursera" },
      { name: "Power Systems", level: 40, target: 85, free: "NPTEL", paid: "Udemy" },
      { name: "Control Systems", level: 35, target: 85, free: "NPTEL", paid: "Coursera" },
    ],
  },
  mechanical: {
    name: "Mechanical Engineer",
    icon: "⚙️",
    description: "Design machines, products and mechanical systems for real-world applications.",
    skills: [
      { name: "CAD", level: 55, target: 90, free: "Autodesk Learning", paid: "Udemy" },
      { name: "Mechanics", level: 65, target: 90, free: "MIT OpenCourseWare", paid: "Coursera" },
      { name: "Thermodynamics", level: 50, target: 85, free: "NPTEL", paid: "Coursera" },
      { name: "Manufacturing", level: 40, target: 85, free: "NPTEL", paid: "Udemy" },
    ],
  },
  civil: {
    name: "Civil Engineer",
    icon: "🏗️",
    description: "Plan, design and manage buildings, infrastructure and construction projects.",
    skills: [
      { name: "AutoCAD", level: 55, target: 90, free: "Autodesk Learning", paid: "Udemy" },
      { name: "Structural Design", level: 40, target: 90, free: "NPTEL", paid: "Coursera" },
      { name: "Surveying", level: 50, target: 85, free: "NPTEL", paid: "Udemy" },
      { name: "Construction", level: 45, target: 85, free: "NPTEL", paid: "Coursera" },
    ],
  },
  robotics: {
    name: "Robotics / Automation Engineer",
    icon: "🦾",
    description: "Design robots and automated systems combining software, electronics and mechanics.",
    skills: [
      { name: "Python", level: 65, target: 85, free: "Python Documentation", paid: "Coursera" },
      { name: "Robotics", level: 35, target: 90, free: "ROS Documentation", paid: "Udemy" },
      { name: "Control Systems", level: 40, target: 85, free: "NPTEL", paid: "Coursera" },
      { name: "Sensors", level: 50, target: 85, free: "Arduino Documentation", paid: "Udemy" },
    ],
  },
  embedded: {
    name: "Embedded Systems Engineer",
    icon: "📱",
    description: "Develop hardware-software solutions for smart and connected devices.",
    skills: [
      { name: "C / C++", level: 50, target: 90, free: "Learn-C.org", paid: "Udemy" },
      { name: "Microcontrollers", level: 40, target: 90, free: "Arduino Documentation", paid: "Coursera" },
      { name: "Embedded Systems", level: 30, target: 85, free: "NPTEL", paid: "Udemy" },
      { name: "IoT", level: 35, target: 85, free: "Arduino Documentation", paid: "Coursera" },
    ],
  },
};

function CareerDetails({ careerKey }) {
  const [activeKey, setActiveKey] = useState(
    careerData[careerKey] ? careerKey : null
  );
  const [selectedSkill, setSelectedSkill] = useState(null);

    if (!activeKey) {
    return (
      <section className="cd-wrap" id="career-details">
        <header className="cd-hero">
          <p className="cd-eyebrow">YOUR CAREER INSIGHT</p>

          <h1>🎯 Discover Your Career</h1>

          <p className="cd-sub">
            Complete the AI Career Assessment to unlock
            your personalized career insights.
          </p>
        </header>
      </section>
    );
  }
  
  const career = careerData[activeKey];
  const averageSkill = Math.round(
    career.skills.reduce((total, s) => total + s.level, 0) / career.skills.length
  );

  const selectCareer = (key) => {
    setActiveKey(key);
    setSelectedSkill(null);
  };

  return (
    <section className="cd-wrap" id="career-details">
      {/* HERO — background effects are scoped here only */}
      <header className="cd-hero">
        <div className="cd-stars" aria-hidden="true" />
        <p className="cd-eyebrow">YOUR CAREER INSIGHT</p>
        <h1>
          {career.icon} {career.name}
        </h1>
        <p className="cd-sub">
          Understand what you need to learn and where you can start learning.
        </p>

        <div className="cd-picker">
          {Object.entries(careerData).map(([key, c]) => (
            <button
              key={key}
              type="button"
              className={`cd-chip ${key === activeKey ? "is-active" : ""}`}
              onClick={() => selectCareer(key)}
            >
              <span aria-hidden="true">{c.icon}</span>
              {c.name}
            </button>
          ))}
        </div>
      </header>

      <div className="cd-main">
        {/* OVERVIEW */}
        <div className="cd-overview">
          <div className="cd-overview-icon">{career.icon}</div>
          <div className="cd-overview-body">
            <p className="cd-label">CAREER OVERVIEW</p>
            <h2>{career.name}</h2>
            <p>{career.description}</p>
          </div>
          <div className="cd-average">
            <strong>{averageSkill}%</strong>
            <span>Current Skill Level</span>
          </div>
        </div>

        {/* SKILL GAP */}
        <div className="cd-section-head">
          <p className="cd-label">SKILL GAP ANALYSIS</p>
          <h2>Skills You Need To Develop</h2>
          <span>
            Improve these skills to become job-ready for your selected career.
          </span>
        </div>

        <div className="cd-grid">
          {career.skills.map((skill) => {
            const gap = Math.max(0, skill.target - skill.level);
            const isOpen = selectedSkill === skill.name;

            return (
              <div
                key={skill.name}
                className={`cd-card ${isOpen ? "is-open" : ""}`}
                onClick={() => setSelectedSkill(isOpen ? null : skill.name)}
              >
                <div className="cd-card-top">
                  <div>
                    <h3>{skill.name}</h3>
                    <span className="cd-gap">{gap}% skill gap</span>
                  </div>
                  <strong className="cd-level">{skill.level}%</strong>
                </div>

                <div className="cd-bar">
                  <i style={{ width: `${skill.level}%` }} />
                </div>

                <div className="cd-target">
                  <span>Current: {skill.level}%</span>
                  <span>Target: {skill.target}%</span>
                </div>

                {isOpen && (
                  <div className="cd-learn">
                    <p>WHERE CAN YOU LEARN?</p>
                    <div className="cd-option free">
                      <span>🟢 FREE</span>
                      <strong>{skill.free}</strong>
                      <a
                        href={learningLinks[skill.free] || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Explore →
                      </a>
                    </div>
                    <div className="cd-option paid">
                      <span>🔵 PAID</span>
                      <strong>{skill.paid}</strong>
                      <a
                        href={learningLinks[skill.paid] || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Explore →
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CareerDetails;