import { useEffect, useState } from "react";

function HackathonFinder() {
  const [hackathons, setHackathons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/hackathons")
      .then((res) => res.json())
      .then((data) => {
        setHackathons(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading hackathons:", err);
        setLoading(false);
      });
  }, []);

  const openHackathon = (h) => {
    const link = h.url || h.link;

    if (!link) {
      alert("No registration link available for this hackathon.");
      return;
    }

    console.log("Opening hackathon:", h.title || h.name);
    console.log("URL:", link);

    window.open(link, "_blank", "noopener,noreferrer");
  };

  if (loading) {
    return (
      <section className="hackathon-section">
        <div className="hackathon-heading">
          <p>HACKATHON OPPORTUNITIES</p>

          <h2>
            Find Your Next Hackathon
          </h2>

          <span>
            Loading current hackathon opportunities...
          </span>
        </div>
      </section>
    );
  }

  return (
    <section
      className="hackathon-section"
      id="hackathons"
    >
      {/* HEADER */}

      <div className="hackathon-heading">

        <p>
          HACKATHON OPPORTUNITIES
        </p>

        <h2>
          Find Your Next
          <span> Hackathon</span>
        </h2>

        <span>
          Discover upcoming and currently open
          hackathons and turn your ideas into
          real-world projects.
        </span>

      </div>


      {/* HACKATHON GRID */}

      <div className="hackathon-grid">

        {hackathons.map((h) => {

          const title =
            h.title ||
            h.name ||
            "Hackathon Opportunity";

          const organizer =
            h.organizer ||
            h.org ||
            "Organization";

          const domain =
            h.domain ||
            "";

          const tracks =
            h.tracks ||
            domain
              .split("/")
              .map((item) => item.trim())
              .filter(Boolean);

          return (
            <div
              className="hackathon-card"
              key={h.id}
            >

              {/* TOP */}

              <div className="hackathon-card-top">

                <div className="hackathon-logo">
                  🚀
                </div>

                <span
                  className={`hackathon-status ${
                    h.status
                      ?.toLowerCase()
                      .includes("currently")
                      ? "currently-open"
                      : "upcoming"
                  }`}
                >
                  {h.status || "Upcoming"}
                </span>

              </div>


              {/* TITLE */}

              <h3>
                {title}
              </h3>


              {/* ORGANIZER */}

              <p className="hackathon-organizer">
                🏢 {organizer}
              </p>


              {/* LOCATION */}

              {h.location && (
                <p className="hackathon-location">
                  📍 {h.location}
                </p>
              )}


              {/* DESCRIPTION */}

              <p className="hackathon-description">
                {h.description ||
                  "A technology and innovation hackathon for students."}
              </p>


              {/* TRACKS */}

              {tracks.length > 0 && (
                <div className="hackathon-tracks">

                  {tracks.map(
                    (track, index) => (
                      <span
                        key={`${track}-${index}`}
                      >
                        {track}
                      </span>
                    )
                  )}

                </div>
              )}


              {/* DETAILS */}

              <div className="hackathon-details">

                {h.team && (
                  <div>
                    <small>
                      TEAM
                    </small>

                    <strong>
                      {h.team}
                    </strong>
                  </div>
                )}

                {h.prize && (
                  <div>
                    <small>
                      PRIZE
                    </small>

                    <strong>
                      {h.prize}
                    </strong>
                  </div>
                )}

              </div>


              {/* BUTTON */}

              <button
                type="button"
                className="hackathon-button"
                onClick={() =>
                  openHackathon(h)
                }
              >
                View Details
                <span>→</span>
              </button>

            </div>
          );
        })}

      </div>


      {/* EMPTY */}

      {hackathons.length === 0 && (
        <div className="hackathon-empty">

          <div>
            🔎
          </div>

          <h3>
            No hackathons available
          </h3>

          <p>
            New opportunities will appear here
            when they are available.
          </p>

        </div>
      )}

    </section>
  );
}

export default HackathonFinder;