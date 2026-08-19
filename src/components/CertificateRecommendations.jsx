import { useState } from "react";

const certificateData = {
  software: {
    career: "Software / Full Stack Engineer",
    certificates: [
      {
        id: 1,
        icon: "💻",
        title: "Meta Front-End Developer",
        provider: "Coursera",
        level: "Beginner",
        cost: "Paid",
        duration: "4–6 months",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        match: 96,
        link: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
      },
      {
        id: 2,
        icon: "⚛️",
        title: "React Learn",
        provider: "React",
        level: "Beginner",
        cost: "Free",
        duration: "Self-paced",
        skills: ["React", "Components", "JavaScript"],
        match: 94,
        link: "https://react.dev/learn",
      },
      {
        id: 3,
        icon: "🐍",
        title: "Python Tutorial",
        provider: "Python",
        level: "Beginner",
        cost: "Free",
        duration: "Self-paced",
        skills: ["Python", "Programming", "Logic"],
        match: 82,
        link: "https://docs.python.org/3/tutorial/",
      },
    ],
  },

  ai: {
    career: "AI / ML Engineer",
    certificates: [
      {
        id: 11,
        icon: "🤖",
        title: "Machine Learning Specialization",
        provider: "Coursera",
        level: "Beginner",
        cost: "Paid",
        duration: "3 months",
        skills: ["Python", "Machine Learning", "AI"],
        match: 98,
        link: "https://www.coursera.org/specializations/machine-learning-introduction",
      },
      {
        id: 12,
        icon: "🧠",
        title: "Deep Learning Specialization",
        provider: "DeepLearning.AI",
        level: "Advanced",
        cost: "Paid",
        duration: "3–5 months",
        skills: ["Deep Learning", "Neural Networks", "Python"],
        match: 96,
        link: "https://www.coursera.org/specializations/deep-learning",
      },
      {
        id: 13,
        icon: "📚",
        title: "Machine Learning Crash Course",
        provider: "Google",
        level: "Beginner",
        cost: "Free",
        duration: "Self-paced",
        skills: ["Machine Learning", "Python", "Data"],
        match: 94,
        link: "https://developers.google.com/machine-learning/crash-course",
      },
      {
        id: 14,
        icon: "🐍",
        title: "Python Tutorial",
        provider: "Python",
        level: "Beginner",
        cost: "Free",
        duration: "Self-paced",
        skills: ["Python", "Programming", "Logic"],
        match: 89,
        link: "https://docs.python.org/3/tutorial/",
      },
    ],
  },

  data: {
    career: "Data Scientist",
    certificates: [
      {
        id: 21,
        icon: "📊",
        title: "Google Data Analytics",
        provider: "Coursera",
        level: "Beginner",
        cost: "Paid",
        duration: "3–6 months",
        skills: ["SQL", "Data Analysis", "Visualization"],
        match: 97,
        link: "https://www.coursera.org/professional-certificates/google-data-analytics",
      },
      {
        id: 22,
        icon: "🐍",
        title: "IBM Data Science",
        provider: "Coursera",
        level: "Beginner",
        cost: "Paid",
        duration: "3–6 months",
        skills: ["Python", "Pandas", "Data Science"],
        match: 95,
        link: "https://www.coursera.org/professional-certificates/ibm-data-science",
      },
      {
        id: 23,
        icon: "🎓",
        title: "Data Science Courses",
        provider: "NPTEL",
        level: "Intermediate",
        cost: "Free to learn",
        duration: "4–12 weeks",
        skills: ["Statistics", "Data", "Machine Learning"],
        match: 91,
        link: "https://www.nptel.ac.in/courses",
      },
    ],
  },

  cyber: {
    career: "Cybersecurity Engineer",
    certificates: [
      {
        id: 31,
        icon: "🛡️",
        title: "Google Cybersecurity",
        provider: "Coursera",
        level: "Beginner",
        cost: "Paid",
        duration: "3–6 months",
        skills: ["Cybersecurity", "Linux", "Security"],
        match: 97,
        link: "https://www.coursera.org/professional-certificates/google-cybersecurity",
      },
      {
        id: 32,
        icon: "🌐",
        title: "Networking Academy",
        provider: "Cisco",
        level: "Beginner",
        cost: "Free",
        duration: "Self-paced",
        skills: ["Networking", "IT", "Security"],
        match: 94,
        link: "https://www.netacad.com/",
      },
      {
        id: 33,
        icon: "🔐",
        title: "Microsoft Security Learning",
        provider: "Microsoft Learn",
        level: "Intermediate",
        cost: "Free learning",
        duration: "Self-paced",
        skills: ["Security", "Azure", "Identity"],
        match: 90,
        link: "https://learn.microsoft.com/en-us/training/",
      },
    ],
  },

  cloud: {
    career: "Cloud / DevOps Engineer",
    certificates: [
      {
        id: 41,
        icon: "☁️",
        title: "AWS Cloud Practitioner",
        provider: "AWS",
        level: "Beginner",
        cost: "Paid exam",
        duration: "Self-paced",
        skills: ["AWS", "Cloud", "Infrastructure"],
        match: 98,
        link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
      },
      {
        id: 42,
        icon: "☁️",
        title: "AWS Skill Builder",
        provider: "AWS",
        level: "Beginner",
        cost: "Free learning",
        duration: "Self-paced",
        skills: ["AWS", "Cloud", "DevOps"],
        match: 94,
        link: "https://skillbuilder.aws/",
      },
      {
        id: 43,
        icon: "🔷",
        title: "Azure Learning",
        provider: "Microsoft Learn",
        level: "Beginner",
        cost: "Free learning",
        duration: "Self-paced",
        skills: ["Azure", "Cloud", "Networking"],
        match: 91,
        link: "https://learn.microsoft.com/en-us/training/",
      },
    ],
  },

  electronics: {
    career: "Electronics / VLSI Engineer",
    certificates: [
      {
        id: 51,
        icon: "🔌",
        title: "Digital Electronics",
        provider: "NPTEL",
        level: "Beginner",
        cost: "Free to learn",
        duration: "8–12 weeks",
        skills: ["Digital Electronics", "Logic Design"],
        match: 97,
        link: "https://www.nptel.ac.in/courses",
      },
      {
        id: 52,
        icon: "💻",
        title: "Verilog Practice",
        provider: "HDLBits",
        level: "Intermediate",
        cost: "Free",
        duration: "Self-paced",
        skills: ["Verilog", "HDL", "Digital Design"],
        match: 94,
        link: "https://hdlbits.01xz.net/wiki/Main_Page",
      },
      {
        id: 53,
        icon: "📡",
        title: "Electronics Resources",
        provider: "All About Circuits",
        level: "Beginner",
        cost: "Free",
        duration: "Self-paced",
        skills: ["Circuits", "Electronics"],
        match: 89,
        link: "https://www.allaboutcircuits.com/",
      },
    ],
  },

  electrical: {
    career: "Electrical Engineer",
    certificates: [
      {
        id: 61,
        icon: "⚡",
        title: "Electrical Engineering Courses",
        provider: "NPTEL",
        level: "Beginner",
        cost: "Free to learn",
        duration: "8–12 weeks",
        skills: ["Circuits", "Power Systems", "Control"],
        match: 97,
        link: "https://www.nptel.ac.in/courses",
      },
      {
        id: 62,
        icon: "📐",
        title: "Engineering Mathematics",
        provider: "Khan Academy",
        level: "Beginner",
        cost: "Free",
        duration: "Self-paced",
        skills: ["Mathematics", "Calculus", "Algebra"],
        match: 86,
        link: "https://www.khanacademy.org/",
      },
    ],
  },

  mechanical: {
    career: "Mechanical Engineer",
    certificates: [
      {
        id: 71,
        icon: "⚙️",
        title: "Mechanical Engineering Courses",
        provider: "NPTEL",
        level: "Beginner",
        cost: "Free to learn",
        duration: "8–12 weeks",
        skills: ["Mechanics", "Thermodynamics", "Manufacturing"],
        match: 97,
        link: "https://www.nptel.ac.in/courses",
      },
      {
        id: 72,
        icon: "📐",
        title: "Autodesk Learning",
        provider: "Autodesk",
        level: "Beginner",
        cost: "Free learning",
        duration: "Self-paced",
        skills: ["CAD", "Design", "3D Modeling"],
        match: 94,
        link: "https://www.autodesk.com/learn",
      },
    ],
  },

  civil: {
    career: "Civil Engineer",
    certificates: [
      {
        id: 81,
        icon: "🏗️",
        title: "Civil Engineering Courses",
        provider: "NPTEL",
        level: "Beginner",
        cost: "Free to learn",
        duration: "8–12 weeks",
        skills: ["Structures", "Construction", "Surveying"],
        match: 97,
        link: "https://www.nptel.ac.in/courses",
      },
      {
        id: 82,
        icon: "📐",
        title: "Autodesk Learning",
        provider: "Autodesk",
        level: "Beginner",
        cost: "Free learning",
        duration: "Self-paced",
        skills: ["AutoCAD", "CAD", "Design"],
        match: 92,
        link: "https://www.autodesk.com/learn",
      },
    ],
  },

  robotics: {
    career: "Robotics / Automation Engineer",
    certificates: [
      {
        id: 91,
        icon: "🦾",
        title: "Robotics Courses",
        provider: "NPTEL",
        level: "Intermediate",
        cost: "Free to learn",
        duration: "8–12 weeks",
        skills: ["Robotics", "Control", "Automation"],
        match: 97,
        link: "https://www.nptel.ac.in/courses",
      },
      {
        id: 92,
        icon: "🤖",
        title: "ROS Documentation",
        provider: "ROS",
        level: "Intermediate",
        cost: "Free",
        duration: "Self-paced",
        skills: ["ROS", "Robotics", "Programming"],
        match: 93,
        link: "https://docs.ros.org/",
      },
    ],
  },

  embedded: {
    career: "Embedded Systems Engineer",
    certificates: [
      {
        id: 101,
        icon: "📱",
        title: "Embedded Systems Courses",
        provider: "NPTEL",
        level: "Intermediate",
        cost: "Free to learn",
        duration: "8–12 weeks",
        skills: ["Embedded Systems", "Microcontrollers", "C/C++"],
        match: 97,
        link: "https://www.nptel.ac.in/courses",
      },
      {
        id: 102,
        icon: "🔧",
        title: "Arduino Learning",
        provider: "Arduino",
        level: "Beginner",
        cost: "Free",
        duration: "Self-paced",
        skills: ["Arduino", "Microcontrollers", "IoT"],
        match: 92,
        link: "https://docs.arduino.cc/",
      },
    ],
  },
};

function CertificateRecommendations({ careerKey = "software" }) {
  const [search, setSearch] = useState("");
  const [selectedCertificate, setSelectedCertificate] =
    useState(null);
  const [saved, setSaved] = useState([]);

  const career =
    certificateData[careerKey] ||
    certificateData.software;

  const certificates = career.certificates;

  const filteredCertificates = certificates.filter(
    (certificate) => {
      const text = search.toLowerCase();

      return (
        certificate.title
          .toLowerCase()
          .includes(text) ||
        certificate.provider
          .toLowerCase()
          .includes(text) ||
        certificate.skills.some((skill) =>
          skill.toLowerCase().includes(text)
        )
      );
    }
  );

  const toggleSave = (id) => {
    if (saved.includes(id)) {
      setSaved(
        saved.filter((item) => item !== id)
      );
    } else {
      setSaved([...saved, id]);
    }
  };

  return (
    <section className="certificates-section">

      <div className="certificate-heading">
        <p>SKILL VALIDATION</p>

        <h2>
          Certificates That
          <span> Move You Forward</span>
        </h2>

        <span>
          Personalized recommendations for your
          selected career path.
        </span>
      </div>

      <div className="certificate-ai-banner">

        <div className="certificate-ai-icon">
          🎓
        </div>

        <div>
          <p>CAREER-BASED RECOMMENDATION</p>

          <h3>
            Certificates for {career.career}
          </h3>

          <span>
            These recommendations match your
            selected career path.
          </span>
        </div>

        <div className="certificate-match">
          <strong>
            {certificates[0]?.match || 0}%
          </strong>

          <span>
            Top Match
          </span>
        </div>

      </div>

      <div className="certificate-search">

        <span>🔎</span>

        <input
          type="text"
          placeholder="Search certificates or skills..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      <div className="certificate-result-count">

        <span>
          {filteredCertificates.length} recommendations
        </span>

        <span>
          {saved.length} saved
        </span>

      </div>

      <div className="certificate-grid">

        {filteredCertificates.map(
          (certificate) => (

            <div
              className="certificate-card"
              key={certificate.id}
            >

              <div className="certificate-card-top">

                <div className="certificate-icon">
                  {certificate.icon}
                </div>

                <button
                  className="certificate-save"
                  onClick={() =>
                    toggleSave(certificate.id)
                  }
                >
                  {saved.includes(certificate.id)
                    ? "★"
                    : "☆"}
                </button>

              </div>

              <div className="certificate-tags">

                <span>
                  {certificate.level}
                </span>

                <span>
                  {certificate.cost}
                </span>

              </div>

              <h3>
                {certificate.title}
              </h3>

              <p className="certificate-provider">
                {certificate.provider}
              </p>

              <p className="certificate-description">
                Build skills in{" "}
                {certificate.skills.join(", ")}.
              </p>

              <div className="certificate-skills">

                {certificate.skills.map(
                  (skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  )
                )}

              </div>

              <div className="certificate-info">

                <span>
                  ⏱ {certificate.duration}
                </span>

                <span>
                  ⭐ {certificate.match}% Match
                </span>

              </div>

              <div className="certificate-card-footer">

                <button
                  className="certificate-view-button"
                  onClick={() =>
                    setSelectedCertificate(
                      certificate
                    )
                  }
                >
                  View Details →
                </button>

              </div>

            </div>
          )
        )}

      </div>

      {filteredCertificates.length === 0 && (

        <div className="certificate-empty">

          <h3>
            No certificates found
          </h3>

          <p>
            Try searching for another skill.
          </p>

        </div>

      )}

      {selectedCertificate && (

        <div className="certificate-modal-overlay">

          <div className="certificate-modal">

            <button
              className="certificate-close"
              onClick={() =>
                setSelectedCertificate(null)
              }
            >
              ×
            </button>

            <div className="certificate-modal-icon">
              {selectedCertificate.icon}
            </div>

            <h2>
              {selectedCertificate.title}
            </h2>

            <p className="certificate-provider">
              {selectedCertificate.provider}
            </p>

            <div className="certificate-modal-match">

              <span>
                CAREER MATCH
              </span>

              <strong>
                {selectedCertificate.match}%
              </strong>

            </div>

            <h4>
              Skills Covered
            </h4>

            <div className="certificate-skills">

              {selectedCertificate.skills.map(
                (skill) => (
                  <span key={skill}>
                    ✓ {skill}
                  </span>
                )
              )}

            </div>

            <div className="certificate-modal-info">

              <div>
                <span>
                  LEVEL
                </span>

                <strong>
                  {selectedCertificate.level}
                </strong>
              </div>

              <div>
                <span>
                  COST
                </span>

                <strong>
                  {selectedCertificate.cost}
                </strong>
              </div>

              <div>
                <span>
                  DURATION
                </span>

                <strong>
                  {selectedCertificate.duration}
                </strong>
              </div>

            </div>

            <a
              className="start-certificate-button"
              href={selectedCertificate.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Official Platform →
            </a>

          </div>

        </div>

      )}

    </section>
  );
}

export default CertificateRecommendations;