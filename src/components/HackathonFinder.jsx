import { useState } from "react";

function HackathonFinder() {
  const [search, setSearch] = useState("");

  const hackathons = [
    {
      id: 1,
      name: "PEC HACKS 4.0",
      org: "Panimalar Engineering College",
      location: "Chennai, Tamil Nadu",
      date: "August 29–30, 2026",
      status: "UPCOMING",
      description:
        "A 36-hour international student-led hackathon focused on building impactful solutions for real-world challenges.",
      tracks: ["AI", "Web", "Hardware", "Innovation"],
      team: "Students",
      url: "https://pec-hacks.devfolio.co/",
    },

    {
      id: 2,
      name: "RECURSION - EDITION II",
      org: "Microsoft Innovations Club, VIT Chennai",
      location: "Chennai, Tamil Nadu",
      date: "August 29–30, 2026",
      status: "UPCOMING",
      description:
        "A 24-hour offline student hackathon where participants turn ideas into working technology solutions.",
      tracks: ["Software", "AI", "Innovation"],
      team: "Students",
      url: "https://recursion-edition.devfolio.co/",
    },

    {
      id: 3,
      name: "RevengersHack 2026",
      org: "RevengersHack",
      location: "Online — India",
      date: "August 22–23, 2026",
      status: "OPEN",
      description:
        "A national online hackathon connecting students, developers and innovators to solve real-world technology challenges.",
      tracks: ["AI", "Cybersecurity", "Cloud", "Web3"],
      team: "2–4 members",
      url: "https://revengershack.devfolio.co/",
    },

    {
      id: 4,
      name: "InnoFusion 3.0",
      org: "University of Engineering and Management",
      location: "Kolkata, India",
      date: "August 22–23, 2026",
      status: "OPEN",
      description:
        "A national-level software and hardware hackathon featuring AI, robotics, IoT, cybersecurity and web development.",
      tracks: ["AI/ML", "Robotics", "IoT", "Cybersecurity"],
      team: "Students",
      url: "https://innofusion-3.devfolio.co/",
    },

    {
      id: 5,
      name: "CodeStorm 2026: FutureForge",
      org: "CodeStorm",
      location: "Online",
      date: "August 1–31, 2026",
      status: "OPEN",
      description:
        "A student-focused open innovation hackathon covering AI, web development, cybersecurity, education and sustainability.",
      tracks: ["AI", "Web", "Cybersecurity", "EdTech"],
      team: "Students",
      url: "https://codestorm-futureforge.devfolio.co/",
    },
  ];

  const filteredHackathons = hackathons.filter((hackathon) => {
    const text = `
      ${hackathon.name}
      ${hackathon.org}
      ${hackathon.location}
      ${hackathon.date}
      ${hackathon.description}
      ${hackathon.tracks.join(" ")}
    `.toLowerCase();

    return text.includes(search.toLowerCase());
  });

  const openHackathons = filteredHackathons.filter(
    (hackathon) => hackathon.status === "OPEN"
  );

  const upcomingHackathons = filteredHackathons.filter(
    (hackathon) => hackathon.status === "UPCOMING"
  );

  const HackathonCard = ({ hackathon }) => (
    <article className="hackathon-card">
      <div className="hackathon-card-top">
        <div className="hackathon-card-icon">🚀</div>

        <span
          className={
            hackathon.status === "OPEN"
              ? "hackathon-open"
              : "hackathon-upcoming"
          }
        >
          {hackathon.status}
        </span>
      </div>

      <h4>{hackathon.name}</h4>

      <div className="hackathon-info">
        <div className="hackathon-info-row">
          <span className="hackathon-info-icon">🏢</span>
          <span>{hackathon.org}</span>
        </div>

        <div className="hackathon-info-row">
          <span className="hackathon-info-icon">📍</span>
          <span>{hackathon.location}</span>
        </div>

        <div className="hackathon-info-row">
          <span className="hackathon-info-icon">📅</span>
          <span>{hackathon.date}</span>
        </div>
      </div>

      <p className="hackathon-description">
        {hackathon.description}
      </p>

      <div className="hackathon-tags">
        {hackathon.tracks.map((track, index) => (
          <span
            className="hackathon-tag"
            key={`${track}-${index}`}
          >
            {track}
          </span>
        ))}
      </div>

      <div className="hackathon-card-footer">
        <span className="hackathon-team">
          👥 {hackathon.team}
        </span>

        <button
          className="hackathon-view"
          onClick={() =>
            window.open(
              hackathon.url,
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          View Details
          <span>→</span>
        </button>
      </div>
    </article>
  );

  return (
    <>
      <style>{`
        .hackathon-section {
          width: 100%;
          margin: 100px 0;
          padding: 0;
        }

        .hackathon-container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
          box-sizing: border-box;
        }

        .hackathon-header {
          margin-bottom: 42px;
        }

        .hackathon-eyebrow {
          display: inline-block;
          margin-bottom: 14px;
          color: #9d8bff;
          font-family: "Space Grotesk", sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
        }

        .hackathon-header h2 {
          margin: 0 0 14px;
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(34px, 5vw, 56px);
          line-height: 1.05;
        }

        .hackathon-header p {
          margin: 0;
          max-width: 650px;
          color: #aaa4c4;
          font-size: 16px;
          line-height: 1.7;
        }

        .hackathon-hub {
          padding: 28px;
          margin-bottom: 32px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          background: rgba(20,16,42,0.75);
          backdrop-filter: blur(14px);
        }

        .hackathon-hub-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 24px;
        }

        .hackathon-hub-title {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .hackathon-hub-icon {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: rgba(157,139,255,0.12);
          font-size: 25px;
        }

        .hackathon-hub-title h3 {
          margin: 0 0 5px;
          font-size: 21px;
        }

        .hackathon-hub-title p {
          margin: 0;
          color: #8e89a7;
          font-size: 14px;
        }

        .hackathon-count {
          color: #aaa4c4;
          font-size: 14px;
          white-space: nowrap;
        }

        .hackathon-search-wrapper {
          position: relative;
        }

        .hackathon-search-icon {
          position: absolute;
          left: 17px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 17px;
        }

        .hackathon-search {
          width: 100%;
          box-sizing: border-box;
          padding: 15px 18px 15px 48px;
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 14px;
          outline: none;
          background: rgba(255,255,255,0.04);
          color: white;
          font-size: 14px;
        }

        .hackathon-search::placeholder {
          color: #77718f;
        }

        .hackathon-status {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 22px;
        }

        .hackathon-status-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .hackathon-status-left h3 {
          margin: 0;
          font-size: 20px;
        }

        .hackathon-status-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #69e69a;
          box-shadow: 0 0 12px rgba(105,230,154,0.7);
        }

        .hackathon-status-count {
          color: #89839f;
          font-size: 13px;
        }

        .hackathon-subheading {
          margin: 48px 0 22px;
          font-size: 20px;
        }

        .hackathon-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .hackathon-card {
          min-height: 360px;
          display: flex;
          flex-direction: column;
          padding: 24px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 22px;
          background:
            linear-gradient(
              145deg,
              rgba(32,26,58,0.95),
              rgba(17,14,33,0.95)
            );
          transition:
            transform 0.25s ease,
            border-color 0.25s ease;
        }

        .hackathon-card:hover {
          transform: translateY(-5px);
          border-color: rgba(157,139,255,0.35);
        }

        .hackathon-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 22px;
        }

        .hackathon-card-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          background: rgba(157,139,255,0.11);
          font-size: 21px;
        }

        .hackathon-open,
        .hackathon-upcoming {
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .hackathon-open {
          color: #72e6a0;
          background: rgba(114,230,160,0.09);
          border: 1px solid rgba(114,230,160,0.18);
        }

        .hackathon-upcoming {
          color: #b5a9ff;
          background: rgba(157,139,255,0.09);
          border: 1px solid rgba(157,139,255,0.18);
        }

        .hackathon-card h4 {
          margin: 0 0 18px;
          font-size: 20px;
          line-height: 1.3;
        }

        .hackathon-info {
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin-bottom: 18px;
        }

        .hackathon-info-row {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: #a9a3bf;
          font-size: 12px;
          line-height: 1.4;
        }

        .hackathon-info-icon {
          flex-shrink: 0;
        }

        .hackathon-description {
          margin: 0 0 18px;
          color: #858098;
          font-size: 13px;
          line-height: 1.65;
        }

        .hackathon-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: auto;
          margin-bottom: 20px;
        }

        .hackathon-tag {
          padding: 5px 9px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 7px;
          color: #aaa4c4;
          background: rgba(255,255,255,0.035);
          font-size: 10px;
        }

        .hackathon-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-top: 17px;
          border-top: 1px solid rgba(255,255,255,0.07);
        }

        .hackathon-team {
          color: #77718f;
          font-size: 11px;
        }

        .hackathon-view {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 13px;
          border: 0;
          border-radius: 10px;
          background: #9d8bff;
          color: white;
          cursor: pointer;
          font-size: 11px;
          font-weight: 700;
          transition: transform 0.2s ease;
        }

        .hackathon-view:hover {
          transform: translateX(2px);
        }

        .hackathon-message {
          grid-column: 1 / -1;
          padding: 50px 20px;
          text-align: center;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(20,16,42,0.75);
          color: #9690b2;
        }

        @media (max-width: 1050px) {
          .hackathon-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .hackathon-section {
            margin: 70px 0;
          }

          .hackathon-container {
            padding: 0 16px;
          }

          .hackathon-hub-top {
            align-items: flex-start;
            flex-direction: column;
          }

          .hackathon-grid {
            grid-template-columns: 1fr;
          }

          .hackathon-status {
            align-items: flex-start;
          }

          .hackathon-card {
            min-height: auto;
          }
        }
      `}</style>

      <section className="hackathon-section">
        <div className="hackathon-container">

          <div className="hackathon-header">
            <span className="hackathon-eyebrow">
              OPPORTUNITY DISCOVERY
            </span>

            <h2>
              Discover Hackathons Worldwide
            </h2>

            <p>
              Find currently open and upcoming student
              hackathons in one place.
            </p>
          </div>

          <div className="hackathon-hub">

            <div className="hackathon-hub-top">

              <div className="hackathon-hub-title">

                <div className="hackathon-hub-icon">
                  🚀
                </div>

                <div>
                  <h3>
                    Find Your Next Hackathon
                  </h3>

                  <p>
                    Currently open and upcoming opportunities
                  </p>
                </div>

              </div>

              <div className="hackathon-count">
                {hackathons.length} Opportunities
              </div>

            </div>

            <div className="hackathon-search-wrapper">

              <span className="hackathon-search-icon">
                🔎
              </span>

              <input
                className="hackathon-search"
                type="text"
                placeholder="Search hackathons, colleges, locations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>

          </div>

          <div className="hackathon-status">

            <div className="hackathon-status-left">
              <span className="hackathon-status-dot" />

              <h3>
                Currently Open
              </h3>
            </div>

            <span className="hackathon-status-count">
              {openHackathons.length} opportunities
            </span>

          </div>

          <div className="hackathon-grid">

            {openHackathons.length > 0 ? (
              openHackathons.map((hackathon) => (
                <HackathonCard
                  key={hackathon.id}
                  hackathon={hackathon}
                />
              ))
            ) : (
              <div className="hackathon-message">
                No currently open hackathons match your search.
              </div>
            )}

          </div>

          <h3 className="hackathon-subheading">
            Upcoming Hackathons
          </h3>

          <div className="hackathon-grid">

            {upcomingHackathons.length > 0 ? (
              upcomingHackathons.map((hackathon) => (
                <HackathonCard
                  key={hackathon.id}
                  hackathon={hackathon}
                />
              ))
            ) : (
              <div className="hackathon-message">
                No upcoming hackathons match your search.
              </div>
            )}

          </div>

        </div>
      </section>
    </>
  );
}

export default HackathonFinder;