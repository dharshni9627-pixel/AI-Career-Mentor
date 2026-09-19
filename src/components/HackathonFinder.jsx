import { useState } from "react";

function HackathonFinder() {
  const [search, setSearch] = useState("");

  const hackathons = [
  {
    id: 1,
    name: "HackNex Season 2",
    org: "JIS College of Engineering",
    location: "Kalyani, India",
    date: "September 25–26, 2026",
    status: "UPCOMING",
    description:
      "A 24-hour national-level hackathon focused on building impactful solutions across AI/ML, FinTech, HealthTech, GreenTech, Web3, EdTech and more.",
    tracks: ["AI/ML", "FinTech", "HealthTech", "Web3", "EdTech"],
    team: "Students",
    url: "https://hacknex-season-2.devfolio.co/",
  },

  {
    id: 2,
    name: "Hack4Brahma 2.0",
    org: "Hack4Brahma",
    location: "Guwahati, India",
    date: "September 26–27, 2026",
    status: "UPCOMING",
    description:
      "A national-level hackathon bringing student innovators together to build technology-driven solutions.",
    tracks: ["AI", "Innovation", "Technology"],
    team: "Students",
    url: "https://hack4brahma2.devfolio.co/",
  },

  {
    id: 3,
    name: "HackSpire'26",
    org: "FIEM ACM Student Chapter",
    location: "Kolkata, India",
    date: "October 2–3, 2026",
    status: "UPCOMING",
    description:
      "A national-level hackathon where students and developers collaborate to build solutions for real-world challenges.",
    tracks: ["AI", "Web", "Innovation", "Software"],
    team: "Students",
    url: "https://hackspire26.devfolio.co/",
  },

  {
    id: 4,
    name: "Megathon X",
    org: "IIIT Hyderabad",
    location: "Hyderabad, India",
    date: "October 10–11, 2026",
    status: "UPCOMING",
    description:
      "A 24-hour on-site student hackathon focused on ideation, building and presenting working prototypes.",
    tracks: ["AI", "Technology", "Innovation"],
    team: "1–5 students",
    url: "https://megathon.in/",
  },

  {
    id: 5,
    name: "Hack With GDG S4",
    org: "Google Developer Groups - KSRCE",
    location: "Namakkal, Tamil Nadu",
    date: "October 8–10, 2026",
    status: "UPCOMING",
    description:
      "A 36-hour hackathon where selected teams develop technology solutions through an ideation and building phase.",
    tracks: ["AI", "Web", "Innovation", "Technology"],
    team: "Students",
    url: "https://hack-with-gdg-s4.devfolio.co/",
  },
    {
  id: 6,
  name: "Builders Day by HackUnion",
  org: "HackUnion",
  location: "India",
  date: "September 26, 2026",
  status: "UPCOMING",
  description:
    "A student-focused hackathon for building innovative technology solutions.",
  tracks: ["AI", "Web", "Software", "Innovation"],
  team: "Students",
  url: "https://builders-day.devfolio.co/",
},

{
  id: 7,
  name: "HackSpire'26",
  org: "FIEM ACM Student Chapter",
  location: "Kolkata, India",
  date: "October 2–3, 2026",
  status: "UPCOMING",
  description:
    "A national-level hackathon focused on solving real-world problems through technology.",
  tracks: ["AI", "Web", "Software", "Innovation"],
  team: "Students",
  url: "https://hackspire26.devfolio.co/",
},

{
  id: 8,
  name: "Codeutsava X.0",
  org: "NIT Raipur",
  location: "Raipur, India",
  date: "October 3, 2026",
  status: "UPCOMING",
  description:
    "A large-scale student hackathon encouraging developers to build innovative technology solutions.",
  tracks: ["AI", "Web", "Technology", "Innovation"],
  team: "Students",
  url: "https://codeutsava-x.devfolio.co/",
},

{
  id: 9,
  name: "Hackify 3.0",
  org: "Hackify",
  location: "India",
  date: "October 9, 2026",
  status: "UPCOMING",
  description:
    "A technology hackathon where participants build creative solutions to real-world challenges.",
  tracks: ["AI", "Web", "Software", "Innovation"],
  team: "Students",
  url: "https://hackify-3.devfolio.co/",
},

{
  id: 10,
  name: "DEFINE 4.0",
  org: "DEFINE",
  location: "India",
  date: "October 9, 2026",
  status: "UPCOMING",
  description:
    "A student innovation hackathon focused on technology and problem solving.",
  tracks: ["AI", "Web", "Innovation"],
  team: "Students",
  url: "https://define-4.devfolio.co/",
},

{
  id: 11,
  name: "HACKBIOS 2K26",
  org: "HACKBIOS",
  location: "India",
  date: "October 9, 2026",
  status: "UPCOMING",
  description:
    "A student hackathon bringing developers together to create innovative technology solutions.",
  tracks: ["AI", "Software", "Web", "Innovation"],
  team: "Students",
  url: "https://hackbios-2k26.devfolio.co/",
},

{
  id: 12,
  name: "HACK WITH GDG S4",
  org: "Google Developer Groups",
  location: "India",
  date: "October 8–10, 2026",
  status: "UPCOMING",
  description:
    "A collaborative hackathon where developers build practical solutions using modern technologies.",
  tracks: ["AI", "Web", "Cloud", "Technology"],
  team: "Students",
  url: "https://hack-with-gdg-s4.devfolio.co/",
},

{
  id: 13,
  name: "HackTopus'FE",
  org: "HackTopus",
  location: "India",
  date: "October 14, 2026",
  status: "UPCOMING",
  description:
    "A technology-focused hackathon encouraging students to develop innovative projects.",
  tracks: ["AI", "Web", "Software", "Innovation"],
  team: "Students",
  url: "https://hacktopus-fe.devfolio.co/",
},

{
  id: 14,
  name: "Realm Hack '26",
  org: "Realm",
  location: "India",
  date: "October 23, 2026",
  status: "UPCOMING",
  description:
    "A hackathon for developers and innovators to create technology-driven solutions.",
  tracks: ["AI", "Web3", "Software", "Innovation"],
  team: "Students",
  url: "https://realm-hack-26.devfolio.co/",
},

{
  id: 15,
  name: "Hefty-Hacks",
  org: "Hefty Network",
  location: "Online",
  date: "October 24, 2026",
  status: "UPCOMING",
  description:
    "An online hackathon focused on blockchain and financial technology innovation.",
  tracks: ["Blockchain", "FinTech", "Web3", "AI"],
  team: "Students",
  url: "https://hefty-hacks.devfolio.co/",
},

{
  id: 16,
  name: "HACKER HOUSE GOA 2026",
  org: "Hacker House",
  location: "Goa, India",
  date: "October 28, 2026",
  status: "UPCOMING",
  description:
    "A large technology hackathon bringing developers together to build innovative projects.",
  tracks: ["AI", "Blockchain", "Web3", "Software"],
  team: "Developers",
  url: "https://hacker-house-goa-2026.devfolio.co/",
},

{
  id: 17,
  name: "Winter of Code 2026",
  org: "Winter of Code",
  location: "Online",
  date: "October 15, 2026",
  status: "UPCOMING",
  description:
    "An online coding and open-source focused event for students and developers.",
  tracks: ["Open Source", "Web", "AI", "Software"],
  team: "Students",
  url: "https://winter-of-code-2026.devfolio.co/",
},

{
  id: 18,
  name: "CyberX 26 CTF",
  org: "Devpost",
  location: "Bengaluru, India",
  date: "October 1, 2026",
  status: "UPCOMING",
  description:
    "A cybersecurity capture-the-flag competition focused on security challenges.",
  tracks: ["Cybersecurity", "CTF", "Ethical Hacking"],
  team: "Students",
  url: "https://cyberx-26-ctf.devpost.com/",
},

{
  id: 19,
  name: "Hack-Nation Global AI Hackathon",
  org: "Hack-Nation",
  location: "Mumbai, India",
  date: "October 3–4, 2026",
  status: "UPCOMING",
  description:
    "A global AI-focused hackathon where participants build innovative AI solutions.",
  tracks: ["AI", "Machine Learning", "Generative AI", "Software"],
  team: "Students & Developers",
  url: "https://www.hack-nation.ai/",
},

{
  id: 20,
  name: "Prompt2Product: MLH Hack Day",
  org: "Major League Hacking",
  location: "Indore, India",
  date: "October 8–9, 2026",
  status: "UPCOMING",
  description:
    "A hack day focused on turning ideas and AI/ML concepts into working products.",
  tracks: ["AI", "Machine Learning", "LLM", "Software"],
  team: "Students",
  url: "https://prompt2product.devfolio.co/",
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
