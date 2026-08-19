import { useEffect, useState } from "react";
import careers from "../data/careers";
import skillLevels from "../data/skillLevels";

const careerKeyMap = {
  software: "Software Engineer",
  ai: "AI / ML Engineer",
  data: "Data Scientist",
  cyber: "Cybersecurity Engineer",

  cloud: "Cloud Engineer",
  electronics: "Electronics & Communication Engineer",
  electrical: "Electrical Engineer",
  mechanical: "Mechanical Engineer",
  civil: "Civil Engineer",
  robotics: "Robotics Engineer",
  embedded: "Embedded Systems Engineer",
};

function getCareerName(selectedKey) {
  if (!selectedKey) return "";

  // If the assessment already sends the full career name
  if (careers[selectedKey]) {
    return selectedKey;
  }

  // Convert short key to full name
  if (careerKeyMap[selectedKey]) {
    return careerKeyMap[selectedKey];
  }

  // Try lowercase
  const lowerKey = String(selectedKey).toLowerCase();

  const matchingKey = Object.keys(careerKeyMap).find(
    (key) => key.toLowerCase() === lowerKey
  );

  if (matchingKey) {
    return careerKeyMap[matchingKey];
  }

  return selectedKey;
}

function CareerDashboard({ careerKey, onCareerSelected }) {
  const [career, setCareer] = useState(null);
  const [matchPercentage, setMatchPercentage] = useState(0);

  useEffect(() => {
    let selectedKey = careerKey;

    /*
     * If App.jsx doesn't send careerKey,
     * get it from localStorage.
     */
    if (!selectedKey) {
      selectedKey = localStorage.getItem("mavericksCareer");
    }

    console.log("Dashboard received careerKey:", selectedKey);

    const careerName = getCareerName(selectedKey);

    console.log("Dashboard converted career:", careerName);

    if (careerName && careers[careerName]) {
      setCareer(careers[careerName]);

      /*
       * IMPORTANT:
       * Send the actual career name to the parent.
       *
       * Example:
       * ai → AI / ML Engineer
       * cyber → Cybersecurity Engineer
       */
      if (onCareerSelected) {
        onCareerSelected(careerName);
      }

      const savedMatch =
        localStorage.getItem("mavericksMatch");

      setMatchPercentage(
        Number(savedMatch) || 0
      );
    } else {
      /*
       * Do NOT silently switch to Software Engineer.
       * This prevents the wrong career from appearing.
       */
      setCareer(null);
      setMatchPercentage(0);

      console.log(
        "Career not found in careers.js:",
        careerName
      );
    }
  }, [careerKey, onCareerSelected]);

  /*
   * Listen for CareerAssessment updates.
   */
  useEffect(() => {
    const handleCareerUpdate = (event) => {
      const selectedKey =
        event.detail?.careerKey;

      const match =
        event.detail?.match;

      if (!selectedKey) {
        return;
      }

      console.log(
        "Assessment updated careerKey:",
        selectedKey
      );

      const careerName =
        getCareerName(selectedKey);

      console.log(
        "Assessment converted career:",
        careerName
      );

      if (careers[careerName]) {
        setCareer(careers[careerName]);

        /*
         * Send converted career name
         * to App.jsx.
         */
        if (onCareerSelected) {
          onCareerSelected(careerName);
        }
      }

      if (match !== undefined) {
        setMatchPercentage(Number(match));
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
  }, [onCareerSelected]);

  /*
   * Loading / invalid career
   */
  if (!career) {
    return (
      <section className="dashboard-section">
        <div className="dashboard-heading">

          <p>
            YOUR AI CAREER PROFILE
          </p>

          <h2>
            Complete Your Career Assessment
          </h2>

          <span>
            We couldn't find the selected career.
            Please complete the assessment again.
          </span>

        </div>
      </section>
    );
  }

  /*
   * Dynamic skill data
   */

  const skillData = career.skills.map(
    (skill, index) => {

      const level =
        skillLevels[skill];

      let percentage;

      if (level) {
        percentage =
          level.beginner;
      } else {
        percentage = Math.max(
          30,
          55 - index * 4
        );
      }

      let status;

      if (percentage >= 75) {
        status = "Strong";
      } else if (percentage >= 50) {
        status = "Developing";
      } else {
        status = "Beginner";
      }

      return {
        name: skill,
        percentage,
        status,
      };
    }
  );

  /*
   * Recommended next skill
   */

  const nextSkill =
    career.intermediateSkills?.[0] ||
    career.skills[1] ||
    career.skills[0];

  return (
    <section
      className="dashboard-section"
      id="career-details"
    >

      {/* HEADER */}

      <div className="dashboard-heading">

        <p>
          YOUR AI CAREER PROFILE
        </p>

        <h2>
          Your Career Journey
        </h2>

        <span>
          Personalized insights based on your
          assessment
        </span>

      </div>


      <div className="dashboard-grid">

        {/* CAREER PROFILE */}

        <div className="dashboard-card career-profile">

          <div className="career-icon">
            {career.icon}
          </div>

          <div>

            <p className="small-label">
              TOP CAREER MATCH
            </p>

            <h3>
              {career.name || "Career"}
            </h3>

            <p className="career-description">
              {career.description}
            </p>

          </div>

          <div className="match-circle">

            <strong>
              {matchPercentage > 0
                ? `${matchPercentage}%`
                : "--"}
            </strong>

            <span>
              Match
            </span>

          </div>

        </div>


        {/* SKILL GAP ANALYSIS */}

        <div className="dashboard-card">

          <div className="card-heading">

            <div>

              <p className="small-label">
                SKILL GAP ANALYSIS
              </p>

              <h3>
                Your Skills
              </h3>

            </div>

            <span className="skill-count">
              {career.skills.length} Skills
            </span>

          </div>


          <div className="skills-container">

            {skillData.map(
              (skill) => (

                <div
                  className="skill-item"
                  key={skill.name}
                >

                  <div className="skill-info">

                    <span>
                      {skill.name}
                    </span>

                    <span>
                      {skill.percentage}% ·{" "}
                      {skill.status}
                    </span>

                  </div>

                  <div className="skill-bar">

                    <div
                      style={{
                        width: `${skill.percentage}%`,
                      }}
                    />

                  </div>

                </div>

              )
            )}

          </div>

        </div>


        {/* NEXT STEP */}

        <div className="dashboard-card next-step">

          <div className="next-icon">
            🚀
          </div>

          <div>

            <p className="small-label">
              RECOMMENDED NEXT STEP
            </p>

            <h3>
              Learn {nextSkill}
            </h3>

            <p>
              Strengthen your{" "}
              {nextSkill} skills and
              build a practical project
              related to your career path.
            </p>

          </div>

          <button
            type="button"
            className="dashboard-button"
          >
            Start Learning →
          </button>

        </div>


        {/* CAREER PROGRESS */}

        <div className="dashboard-card progress-card">

          <div className="card-heading">

            <div>

              <p className="small-label">
                CAREER PROGRESS
              </p>

              <h3>
                Your Journey
              </h3>

            </div>

            <strong>
              20%
            </strong>

          </div>


          <div className="journey">

            <div className="journey-item completed">

              <span>
                ✓
              </span>

              <p>
                Assessment
              </p>

            </div>


            <div className="journey-line" />


            <div className="journey-item active">

              <span>
                2
              </span>

              <p>
                Skills
              </p>

            </div>


            <div className="journey-line" />


            <div className="journey-item">

              <span>
                3
              </span>

              <p>
                Projects
              </p>

            </div>


            <div className="journey-line" />


            <div className="journey-item">

              <span>
                4
              </span>

              <p>
                Hackathons
              </p>

            </div>


            <div className="journey-line" />


            <div className="journey-item">

              <span>
                5
              </span>

              <p>
                Interview
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CareerDashboard;