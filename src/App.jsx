import { useState, useRef, Suspense } from "react";
import AIMockInterview from "./components/AIMockInterview";

import { Canvas, useFrame } from "@react-three/fiber";

import {
  OrbitControls,
  Stars,
  Float,
  Text,
  Line,
  Environment,
  MeshDistortMaterial,
  Sparkles,
} from "@react-three/drei";

import CareerAssessment from "./components/CareerAssessment";
import CareerDashboard from "./components/CareerDashboard";
import CareerRoadmap from "./components/CareerRoadmap";
import CareerDetails from "./components/CareerDetails";
import ProjectRecommendations from "./components/ProjectRecommendations";
import HackathonFinder from "./components/HackathonFinder";
import CertificateRecommendations from "./components/CertificateRecommendations";

import "./index.css";


/* =========================================================
   CAREER KEY NORMALIZER
   ========================================================= */

function normalizeCareerKey(key) {
  if (!key) return null;

  const value = String(key).trim().toLowerCase();

  const careerMap = {
    software: "software",
    "software engineer": "software",
    "software / full stack engineer": "software",
    fullstack: "software",
    "full stack": "software",

    ai: "ai",
    "ai/ml": "ai",
    "ai / ml": "ai",
    "ai engineer": "ai",
    "ml engineer": "ai",
    "machine learning": "ai",

    data: "data",
    "data scientist": "data",
    "data science": "data",

    cyber: "cyber",
    cybersecurity: "cyber",
    "cyber security": "cyber",
    "cybersecurity engineer": "cyber",

    cloud: "cloud",
    devops: "cloud",
    "cloud/devops": "cloud",
    "cloud / devops": "cloud",
    "cloud engineer": "cloud",
    "devops engineer": "cloud",

    electronics: "electronics",
    "electronics engineer": "electronics",
    "electronics / vlsi engineer": "electronics",
    vlsi: "electronics",

    electrical: "electrical",
    "electrical engineer": "electrical",

    mechanical: "mechanical",
    "mechanical engineer": "mechanical",

    civil: "civil",
    "civil engineer": "civil",

    robotics: "robotics",
    "robotics engineer": "robotics",
    "robotics / automation engineer": "robotics",
    automation: "robotics",

    embedded: "embedded",
    "embedded engineer": "embedded",
    "embedded systems": "embedded",
    "embedded systems engineer": "embedded",
  };

  return careerMap[value] || value;
}


/* =========================================================
   3D AI ORB
   ========================================================= */

function CareerOrb() {
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();

  useFrame((state, delta) => {
    if (ring1.current) {
      ring1.current.rotation.z += delta * 0.25;
    }

    if (ring2.current) {
      ring2.current.rotation.x += delta * 0.18;
    }

    if (ring3.current) {
      ring3.current.rotation.y += delta * 0.22;
    }
  });

  return (
    <Float
      speed={1.4}
      rotationIntensity={0.5}
      floatIntensity={1.2}
    >
      <group>

        {/* MAIN ORB */}

        <mesh>
          <sphereGeometry args={[1.35, 96, 96]} />

          <MeshDistortMaterial
            color="#7b5cff"
            emissive="#4a2fff"
            emissiveIntensity={0.55}
            roughness={0.15}
            metalness={0.85}
            distort={0.32}
            speed={1.6}
          />
        </mesh>


        {/* GLOW SHELL */}

        <mesh scale={1.6}>
          <sphereGeometry args={[1.35, 64, 64]} />

          <meshBasicMaterial
            color="#8c72ff"
            transparent
            opacity={0.07}
          />
        </mesh>


        {/* INNER CORE */}

        <mesh>
          <icosahedronGeometry args={[0.55, 1]} />

          <meshStandardMaterial
            color="#00e5ff"
            emissive="#00d9ff"
            emissiveIntensity={2.2}
            wireframe
          />
        </mesh>


        {/* ORBITAL RING 1 */}

        <mesh
          ref={ring1}
          rotation={[Math.PI / 2.2, 0, 0]}
        >
          <torusGeometry
            args={[2.1, 0.012, 16, 200]}
          />

          <meshStandardMaterial
            color="#8c72ff"
            emissive="#8c72ff"
            emissiveIntensity={2}
          />
        </mesh>


        {/* ORBITAL RING 2 */}

        <mesh
          ref={ring2}
          rotation={[0, Math.PI / 3, Math.PI / 5]}
        >
          <torusGeometry
            args={[2.5, 0.01, 16, 200]}
          />

          <meshStandardMaterial
            color="#00d9ff"
            emissive="#00d9ff"
            emissiveIntensity={1.8}
          />
        </mesh>


        {/* ORBITAL RING 3 */}

        <mesh
          ref={ring3}
          rotation={[
            Math.PI / 3,
            Math.PI / 6,
            0,
          ]}
        >
          <torusGeometry
            args={[2.9, 0.008, 16, 200]}
          />

          <meshStandardMaterial
            color="#ff6bd6"
            emissive="#ff6bd6"
            emissiveIntensity={1.6}
          />
        </mesh>


        {/* FLOATING SATELLITES */}

        {[
          [2.1, 0.3, 0, "#8c72ff"],
          [-1.6, 1.6, 0.8, "#00d9ff"],
          [0.6, -2.1, -0.6, "#ff6bd6"],
        ].map(([x, y, z, color], i) => (
          <Float
            key={i}
            speed={2 + i}
            floatIntensity={2}
          >
            <mesh position={[x, y, z]}>
              <sphereGeometry
                args={[0.09, 32, 32]}
              />

              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={3}
              />
            </mesh>
          </Float>
        ))}


        <Sparkles
          count={60}
          scale={7}
          size={2.5}
          speed={0.4}
          color="#b9a8ff"
        />

      </group>
    </Float>
  );
}


/* =========================================================
   CAREER NODES
   ========================================================= */

const NODES = [
  {
    name: "AI / ML",
    position: [-3.6, 2.0, 0],
    color: "#8c72ff",
  },
  {
    name: "WEB DEV",
    position: [-3.9, -1.6, 0],
    color: "#00d9ff",
  },
  {
    name: "DATA",
    position: [3.6, 1.8, 0],
    color: "#ff6bd6",
  },
  {
    name: "CYBER",
    position: [3.5, -1.9, 0],
    color: "#5cff9d",
  },
];


function CareerNodes() {
  return (
    <group>

      {/* CONNECTION LINES */}

      {NODES.map((node) => (
        <Line
          key={`line-${node.name}`}
          points={[
            [0, 0, 0],
            node.position,
          ]}
          color={node.color}
          lineWidth={0.7}
          transparent
          opacity={0.35}
          dashed
          dashSize={0.18}
          gapSize={0.14}
        />
      ))}


      {/* CAREER NODES */}

      {NODES.map((node) => (
        <Float
          key={node.name}
          speed={1.6}
          floatIntensity={1.4}
          rotationIntensity={0.4}
        >
          <group position={node.position}>

            <mesh>
              <sphereGeometry
                args={[0.22, 32, 32]}
              />

              <meshStandardMaterial
                color={node.color}
                emissive={node.color}
                emissiveIntensity={2.4}
                roughness={0.2}
                metalness={0.6}
              />
            </mesh>


            <mesh scale={2.4}>
              <sphereGeometry
                args={[0.22, 32, 32]}
              />

              <meshBasicMaterial
                color={node.color}
                transparent
                opacity={0.08}
              />
            </mesh>


            <Text
              position={[0, -0.55, 0]}
              fontSize={0.24}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
              letterSpacing={0.12}
            >
              {node.name}
            </Text>

          </group>
        </Float>
      ))}

    </group>
  );
}


/* =========================================================
   3D SCENE
   ========================================================= */

function Scene() {
  return (
    <>

      <color
        attach="background"
        args={["#05040f"]}
      />

      <fog
        attach="fog"
        args={[
          "#05040f",
          9,
          26,
        ]}
      />

      <ambientLight intensity={0.5} />

      <pointLight
        position={[6, 6, 6]}
        intensity={90}
        color="#8c72ff"
      />

      <pointLight
        position={[-6, -4, 4]}
        intensity={70}
        color="#00d9ff"
      />

      <directionalLight
        position={[0, 5, 5]}
        intensity={1.1}
      />

      <Stars
        radius={80}
        depth={60}
        count={6000}
        factor={4}
        saturation={0}
        fade
        speed={0.6}
      />

      <CareerOrb />

      <CareerNodes />

      <Environment preset="night" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 1.7}
      />

    </>
  );
}


/* =========================================================
   FEATURES
   ========================================================= */

const FEATURES = [
  {
    icon: "🎯",
    title: "Career Assessment",
    text:
      "Discover careers that match your interests, strengths and goals.",
  },
  {
    icon: "🧠",
    title: "Skill Gap Analyzer",
    text:
      "Find the skills you need to improve for your dream career.",
  },
  {
    icon: "🗺️",
    title: "Career Roadmap",
    text:
      "Follow a personalized step-by-step learning path.",
  },
  {
    icon: "🏆",
    title: "Hackathon Finder",
    text:
      "Discover hackathons and opportunities based on your career.",
  },
  {
    icon: "💻",
    title: "Project Ideas",
    text:
      "Get project recommendations based on your selected career.",
  },
  {
    icon: "🎓",
    title: "Course Recommendations",
    text:
      "Find courses and certifications that match your career path.",
  },
];


/* =========================================================
   FEATURE CARD
   ========================================================= */

function FeatureCard({
  icon,
  title,
  text,
}) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;

    if (!el) return;

    const r =
      el.getBoundingClientRect();

    const x =
      (e.clientX - r.left) /
        r.width -
      0.5;

    const y =
      (e.clientY - r.top) /
        r.height -
      0.5;

    el.style.transform = `
      rotateY(${x * 14}deg)
      rotateX(${-y * 14}deg)
      translateZ(28px)
    `;

    el.style.setProperty(
      "--mx",
      `${(x + 0.5) * 100}%`
    );

    el.style.setProperty(
      "--my",
      `${(y + 0.5) * 100}%`
    );
  };

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform = "";
    }
  };

  return (
    <div className="card-scene">

      <div
        className="feature-card"
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
      >

        <div className="feature-glow" />

        <div className="feature-icon">
          {icon}
        </div>

        <h3>{title}</h3>

        <p>{text}</p>

      </div>

    </div>
  );
}


/* =========================================================
   MAIN APP
   ========================================================= */

export default function App() {

  /*
   * IMPORTANT:
   * selectedCareer is the SINGLE source of truth.
   *
   * Every component below receives this exact key.
   */

  const [selectedCareer, setSelectedCareer] =
    useState(() => {

      const saved =
        localStorage.getItem(
          "mavericksCareer"
        );

      return normalizeCareerKey(saved);
    });


  /* =======================================================
     HANDLE NEW CAREER FROM ASSESSMENT
     ======================================================= */

  const handleCareerSelected = (
    careerKey,
    matchPercentage
  ) => {

    const normalizedKey =
      normalizeCareerKey(careerKey);

    console.log(
      "================================="
    );

    console.log(
      "NEW CAREER FROM ASSESSMENT:",
      careerKey
    );

    console.log(
      "NORMALIZED CAREER:",
      normalizedKey
    );

    console.log(
      "MATCH:",
      matchPercentage
    );

    console.log(
      "================================="
    );


    localStorage.removeItem(
      "mavericksCareer"
    );

    localStorage.removeItem(
      "mavericksMatch"
    );


    localStorage.setItem(
      "mavericksCareer",
      normalizedKey
    );


    if (
      matchPercentage !== undefined &&
      matchPercentage !== null
    ) {
      localStorage.setItem(
        "mavericksMatch",
        String(matchPercentage)
      );
    }


    setSelectedCareer(
      normalizedKey
    );


    window.dispatchEvent(
      new CustomEvent(
        "careerUpdated",
        {
          detail: {
            careerKey:
              normalizedKey,

            matchPercentage:
              matchPercentage || 0,
          },
        }
      )
    );


    setTimeout(() => {

      const dashboard =
        document.getElementById(
          "career-dashboard"
        );

      if (dashboard) {

        dashboard.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      }

    }, 500);
  };


  /* =======================================================
     START ASSESSMENT
     ======================================================= */

  const scrollToAssessment = () => {

    document
      .getElementById("assessment")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };


  /* =======================================================
     CLEAR CAREER
     ======================================================= */

  const clearCareer = () => {

    localStorage.removeItem(
      "mavericksCareer"
    );

    localStorage.removeItem(
      "mavericksMatch"
    );

    setSelectedCareer(null);
  };


  return (
    <div className="app">


      {/* ===================================================
          3D BACKGROUND
      =================================================== */}

      <div className="canvas-layer">

        <Canvas
          camera={{
            position: [0, 0, 9],
            fov: 50,
          }}
          dpr={[1, 2]}
        >

          <Suspense fallback={null}>

            <Scene />

          </Suspense>

        </Canvas>

      </div>


      <div className="vignette" />


      {/* ===================================================
          CONTENT
      =================================================== */}

      <div className="content">


        {/* =================================================
            NAVIGATION
        ================================================= */}

        <nav className="nav">

          <span className="logo">

            <span className="logo-dot" />

            NOVAGEN

          </span>


          <button
            className="btn ghost"
            onClick={
              scrollToAssessment
            }
          >
            Start Assessment
          </button>

        </nav>


        {/* =================================================
            HERO
        ================================================= */}

        <header className="hero">

          <span className="eyebrow">
            AI CAREER MENTOR
          </span>


          <h1>

            Build Your
            <br />

            <span className="grad">
              Future Career
            </span>

          </h1>


          <p className="sub">

            Discover the right career path,
            identify your skill gaps and follow
            a personalized roadmap to become
            job-ready.

          </p>


          <div className="cta-row">

            <button
              className="btn primary"
              onClick={
                scrollToAssessment
              }
            >
              Take the Assessment
            </button>


            {selectedCareer && (

              <span className="chip">

                Current path:{" "}

                {selectedCareer}

              </span>

            )}

          </div>

        </header>


        {/* =================================================
            FEATURES
        ================================================= */}

        <section className="features">

          {FEATURES.map(
            (feature) => (

              <FeatureCard
                key={feature.title}
                {...feature}
              />

            )
          )}

        </section>


        {/* =================================================
            CAREER ASSESSMENT
        ================================================= */}

        <section
          id="assessment"
          className="panel"
        >

          <CareerAssessment
            onCareerSelected={
              handleCareerSelected
            }
          />

        </section>


        {/* =================================================
            PERSONALIZED CAREER CONTENT
        ================================================= */}

        {selectedCareer && (

          <>


            {/* =================================================
                DASHBOARD
            ================================================= */}

            <section
              id="career-dashboard"
              className="panel"
              key={
                `dashboard-${selectedCareer}`
              }
            >

              <CareerDashboard
                key={
                  `dashboard-component-${selectedCareer}`
                }
                careerKey={
                  selectedCareer
                }
              />

            </section>


            {/* =================================================
                ROADMAP
            ================================================= */}

            <section
              id="career-roadmap"
              className="panel"
              key={
                `roadmap-${selectedCareer}`
              }
            >

              <CareerRoadmap
                key={
                  `roadmap-component-${selectedCareer}`
                }
                careerKey={
                  selectedCareer
                }
              />

            </section>


            {/* =================================================
                CAREER DETAILS
            ================================================= */}

            <section
              id="career-details"
              className="panel"
              key={
                `details-${selectedCareer}`
              }
            >

              <CareerDetails
                key={
                  `details-component-${selectedCareer}`
                }
                careerKey={
                  selectedCareer
                }
              />

            </section>


            {/* =================================================
                PROJECT RECOMMENDATIONS
            ================================================= */}

            <section
              id="project-recommendations"
              className="panel"
              key={
                `projects-${selectedCareer}`
              }
            >

              <ProjectRecommendations
                key={
                  `projects-component-${selectedCareer}`
                }
                careerKey={
                  selectedCareer
                }
              />

            </section>


            {/* =================================================
                HACKATHON FINDER
            ================================================= */}

            <section
              id="hackathon-finder"
              className="panel"
              key={
                `hackathons-${selectedCareer}`
              }
            >

              <HackathonFinder
                key={
                  `hackathons-component-${selectedCareer}`
                }
                careerKey={
                  selectedCareer
                }
              />

            </section>


            {/* =================================================
                CERTIFICATE RECOMMENDATIONS
            ================================================= */}

            <section
              id="certificate-recommendations"
              className="panel"
              key={
                `certificates-${selectedCareer}`
              }
            >

              <CertificateRecommendations
                key={
                  `certificates-component-${selectedCareer}`
                }
                careerKey={
                  selectedCareer
                }
              />

            </section>


            {/* =================================================
                AI MOCK INTERVIEW
            ================================================= */}

            <section
              id="ai-mock-interview"
              className="panel"
              key={
                `interview-${selectedCareer}`
              }
            >

              <AIMockInterview
                key={
                  `interview-component-${selectedCareer}`
                }
                careerKey={
                  selectedCareer
                }
              />

            </section>


          </>

        )}


        {/* =================================================
            FOOTER
        ================================================= */}

        <footer className="footer">

          ©{" "}
          {new Date().getFullYear()}
          {" "}
          NOVAGEN· AI Career Mentor

        </footer>

      </div>

    </div>
  );
}