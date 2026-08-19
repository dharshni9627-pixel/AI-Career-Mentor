import { useState } from "react";

const questions = [
  {
    question: "What kind of work sounds most exciting to you?",
    options: [
      {
        text: "Building software, websites and applications",
        scores: { software: 3, ai: 1, data: 1 },
      },
      {
        text: "Creating intelligent systems and AI solutions",
        scores: { ai: 3, robotics: 1, data: 1 },
      },
      {
        text: "Analyzing data and finding patterns",
        scores: { data: 3, ai: 1, software: 1 },
      },
      {
        text: "Protecting computers, networks and information",
        scores: { cyber: 3, cloud: 1 },
      },
      {
        text: "Designing machines and physical systems",
        scores: { mechanical: 3, robotics: 2 },
      },
      {
        text: "Working with circuits, electronics and hardware",
        scores: {
          electronics: 3,
          electrical: 2,
          embedded: 2,
        },
      },
    ],
  },

  {
    question: "Which activity would you enjoy most?",
    options: [
      {
        text: "Writing code and solving programming problems",
        scores: {
          software: 3,
          ai: 1,
          embedded: 1,
        },
      },
      {
        text: "Training a computer to make predictions",
        scores: {
          ai: 3,
          data: 2,
        },
      },
      {
        text: "Finding insights from large datasets",
        scores: {
          data: 3,
          ai: 1,
        },
      },
      {
        text: "Finding and fixing security vulnerabilities",
        scores: {
          cyber: 3,
          software: 1,
        },
      },
      {
        text: "Designing machines using engineering principles",
        scores: {
          mechanical: 3,
          robotics: 2,
        },
      },
      {
        text: "Designing circuits and electronic systems",
        scores: {
          electronics: 3,
          electrical: 2,
          embedded: 2,
        },
      },
    ],
  },

  {
    question: "Which subject do you enjoy most?",
    options: [
      {
        text: "Programming and computer science",
        scores: {
          software: 3,
          ai: 2,
          cyber: 1,
        },
      },
      {
        text: "Mathematics and statistics",
        scores: {
          data: 3,
          ai: 2,
        },
      },
      {
        text: "Physics and electrical concepts",
        scores: {
          electrical: 3,
          electronics: 2,
        },
      },
      {
        text: "Machines, mechanics and manufacturing",
        scores: {
          mechanical: 3,
          robotics: 2,
        },
      },
      {
        text: "Digital electronics and microcontrollers",
        scores: {
          electronics: 3,
          embedded: 3,
        },
      },
      {
        text: "Structures, buildings and infrastructure",
        scores: {
          civil: 3,
        },
      },
    ],
  },

  {
    question: "What type of problems do you like solving?",
    options: [
      {
        text: "Logical and programming problems",
        scores: {
          software: 3,
          cyber: 1,
        },
      },
      {
        text: "Mathematical and analytical problems",
        scores: {
          data: 3,
          ai: 2,
        },
      },
      {
        text: "Security and network problems",
        scores: {
          cyber: 3,
          cloud: 1,
        },
      },
      {
        text: "Physical design and engineering problems",
        scores: {
          mechanical: 3,
          civil: 2,
        },
      },
      {
        text: "Hardware and circuit problems",
        scores: {
          electronics: 3,
          electrical: 2,
          embedded: 2,
        },
      },
      {
        text: "Automation and robot-control problems",
        scores: {
          robotics: 3,
          embedded: 2,
          ai: 1,
        },
      },
    ],
  },

  {
    question: "Where would you like to work most?",
    options: [
      {
        text: "Software companies and technology startups",
        scores: {
          software: 3,
          ai: 1,
          data: 1,
        },
      },
      {
        text: "AI and research-focused companies",
        scores: {
          ai: 3,
          data: 1,
          robotics: 1,
        },
      },
      {
        text: "Cybersecurity and IT infrastructure teams",
        scores: {
          cyber: 3,
          cloud: 2,
        },
      },
      {
        text: "Electronics, semiconductor or hardware companies",
        scores: {
          electronics: 3,
          embedded: 2,
        },
      },
      {
        text: "Manufacturing and automobile industries",
        scores: {
          mechanical: 3,
          robotics: 2,
        },
      },
      {
        text: "Construction and infrastructure projects",
        scores: {
          civil: 3,
        },
      },
    ],
  },

  {
    question: "What would you like to build?",
    options: [
      {
        text: "A mobile app or web application",
        scores: {
          software: 3,
        },
      },
      {
        text: "An AI-powered application",
        scores: {
          ai: 3,
          software: 1,
        },
      },
      {
        text: "A data analytics or prediction system",
        scores: {
          data: 3,
          ai: 1,
        },
      },
      {
        text: "A secure network or security system",
        scores: {
          cyber: 3,
          cloud: 1,
        },
      },
      {
        text: "A robot or automated machine",
        scores: {
          robotics: 3,
          mechanical: 2,
        },
      },
      {
        text: "A smart electronic device",
        scores: {
          embedded: 3,
          electronics: 2,
        },
      },
    ],
  },
];

const careers = {
  software: {
    name: "Software / Full Stack Engineer",
    icon: "💻",
    description:
      "Design and build modern software, websites and full-stack applications.",
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "SQL",
      "DSA",
    ],
  },

  ai: {
    name: "AI / ML Engineer",
    icon: "🤖",
    description:
      "Build intelligent systems using artificial intelligence and machine learning.",
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "SQL",
    ],
  },

  data: {
    name: "Data Scientist",
    icon: "📊",
    description:
      "Analyze data and create models that help organizations make better decisions.",
    skills: [
      "Python",
      "Statistics",
      "SQL",
      "Machine Learning",
    ],
  },

  cyber: {
    name: "Cybersecurity Engineer",
    icon: "🛡️",
    description:
      "Protect applications, networks and systems from security threats.",
    skills: [
      "Networking",
      "Linux",
      "Security",
      "Ethical Hacking",
    ],
  },

  cloud: {
    name: "Cloud / DevOps Engineer",
    icon: "☁️",
    description:
      "Build, deploy and manage reliable applications and cloud infrastructure.",
    skills: [
      "Linux",
      "Cloud",
      "Docker",
      "CI/CD",
    ],
  },

  electronics: {
    name: "Electronics / VLSI Engineer",
    icon: "🔌",
    description:
      "Design electronic circuits, digital systems and semiconductor technologies.",
    skills: [
      "Digital Electronics",
      "VLSI",
      "Verilog",
      "Circuit Design",
    ],
  },

  electrical: {
    name: "Electrical Engineer",
    icon: "⚡",
    description:
      "Work with electrical systems, power systems and control technologies.",
    skills: [
      "Circuit Analysis",
      "Power Systems",
      "Control Systems",
    ],
  },

  mechanical: {
    name: "Mechanical Engineer",
    icon: "⚙️",
    description:
      "Design and develop machines, products and mechanical systems.",
    skills: [
      "CAD",
      "Mechanics",
      "Thermodynamics",
      "Manufacturing",
    ],
  },

  civil: {
    name: "Civil Engineer",
    icon: "🏗️",
    description:
      "Plan and design buildings, infrastructure and construction projects.",
    skills: [
      "Structural Design",
      "AutoCAD",
      "Construction",
      "Surveying",
    ],
  },

  robotics: {
    name: "Robotics / Automation Engineer",
    icon: "🦾",
    description:
      "Design robots and automated systems for real-world applications.",
    skills: [
      "Python",
      "Robotics",
      "Control Systems",
      "Sensors",
    ],
  },

  embedded: {
    name: "Embedded Systems Engineer",
    icon: "📱",
    description:
      "Develop hardware-software solutions for embedded and connected devices.",
    skills: [
      "C/C++",
      "Microcontrollers",
      "Embedded Systems",
      "IoT",
    ],
  },
};

function CareerAssessment({ onCareerSelected }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({});
  const [results, setResults] = useState(null);

  const handleAnswer = (option) => {
    const newScores = { ...scores };

    Object.entries(option.scores).forEach(
      ([career, points]) => {
        newScores[career] =
          (newScores[career] || 0) + points;
      }
    );

    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults(newScores);
    }
  };

  const calculateResults = (finalScores) => {
    const sorted = Object.entries(finalScores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);

    const highestScore = sorted[0]?.[1] || 1;

    const finalResults = sorted.map(
      ([careerKey, score]) => ({
        careerKey,
        score,
        percentage: Math.min(
          99,
          Math.max(
            60,
            Math.round(
              (score / highestScore) * 100
            )
          )
        ),
      })
    );

    console.log(
      "ASSESSMENT RESULTS:",
      finalResults
    );

    setResults(finalResults);
  };

  /*
   * IMPORTANT:
   * This function sends the selected career
   * to the entire application.
   */
  const selectCareer = () => {
    if (!results || !results[0]) {
      return;
    }

    const selectedCareer =
      results[0].careerKey;

    const match =
      results[0].percentage;

    console.log(
      "SELECTED CAREER:",
      selectedCareer
    );

    /*
     * 1. Save selected career
     */
    localStorage.setItem(
      "mavericksCareer",
      selectedCareer
    );

    localStorage.setItem(
      "mavericksMatch",
      String(match)
    );

    /*
     * 2. Send to App.jsx
     */
    if (onCareerSelected) {
      onCareerSelected(selectedCareer);
    }

    /*
     * 3. Send to every component listening
     */
    window.dispatchEvent(
      new CustomEvent("careerUpdated", {
        detail: {
          careerKey: selectedCareer,
          match: match,
        },
      })
    );

    /*
     * 4. Also send a second event after a tiny delay.
     * This helps if another component mounts after
     * the first event.
     */
    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("careerUpdated", {
          detail: {
            careerKey: selectedCareer,
            match: match,
          },
        })
      );
    }, 300);

    /*
     * 5. Scroll to Career Details
     */
    setTimeout(() => {
      const details =
        document.getElementById(
          "career-details"
        );

      if (details) {
        details.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const restart = () => {
    setCurrentQuestion(0);
    setScores({});
    setResults(null);
  };

  /*
   * RESULT SCREEN
   */
  if (results) {
    const topCareer =
      careers[results[0].careerKey];

    return (
      <section className="assessment-section">
        <div className="assessment-result">

          <div className="result-icon">
            {topCareer.icon}
          </div>

          <p className="result-label">
            YOUR TOP CAREER MATCH
          </p>

          <h2>
            {topCareer.name}
          </h2>

          <p className="result-description">
            {topCareer.description}
          </p>

          <div className="match-score">
            <span>
              {results[0].percentage}%
            </span>

            <small>
              Career Match
            </small>
          </div>

          <h3>
            Top Career Matches
          </h3>

          <div className="skill-list">
            {results.map(
              (result, index) => (
                <span
                  key={result.careerKey}
                >
                  {index === 0 && "🥇 "}
                  {index === 1 && "🥈 "}
                  {index === 2 && "🥉 "}

                  {
                    careers[
                      result.careerKey
                    ].name
                  }

                  {" — "}

                  {result.percentage}%
                </span>
              )
            )}
          </div>

          <h3>
            Skills to Develop
          </h3>

          <div className="skill-list">
            {topCareer.skills.map(
              (skill) => (
                <span key={skill}>
                  ✓ {skill}
                </span>
              )
            )}
          </div>

          <div className="result-buttons">

            <button
              className="primary-btn"
              onClick={selectCareer}
            >
              Explore My Career →
            </button>

            <button
              className="secondary-btn"
              onClick={restart}
            >
              Retake Assessment
            </button>

          </div>

        </div>
      </section>
    );
  }

  /*
   * QUESTIONS SCREEN
   */
  return (
    <section className="assessment-section">

      <div className="assessment-box">

        <div className="assessment-top">

          <p>
            AI CAREER ASSESSMENT
          </p>

          <span>
            {currentQuestion + 1} /{" "}
            {questions.length}
          </span>

        </div>

        <div className="progress-bar">

          <div
            style={{
              width: `${
                ((currentQuestion + 1) /
                  questions.length) *
                100
              }%`,
            }}
          />

        </div>

        <h2>
          {
            questions[
              currentQuestion
            ].question
          }
        </h2>

        <div className="answer-grid">

          {
            questions[
              currentQuestion
            ].options.map(
              (option) => (
                <button
                  key={option.text}
                  className="answer-card"
                  onClick={() =>
                    handleAnswer(option)
                  }
                >
                  {option.text}

                  <span>
                    →
                  </span>
                </button>
              )
            )
          }

        </div>

      </div>

    </section>
  );
}

export default CareerAssessment;