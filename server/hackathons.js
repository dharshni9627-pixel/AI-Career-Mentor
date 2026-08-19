import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const hackathons = [
  {
    id: 1,
    name: "PEC Hacks 4.0",
    org: "Panimalar Engineering College",
    location: "Chennai, Tamil Nadu",
    tracks: ["AI", "Technology"],
    status: "Upcoming",
    team: "Check official rules",
    prize: "₹80 Lakh+",
    description:
      "A student hackathon focused on technology, innovation and real-world problem solving.",
    link: "https://pechacks.org/",
  },

  {
    id: 2,
    name: "MIT India Hackathon 2026",
    org: "MIT Academy of Engineering",
    location: "Pune, Maharashtra",
    tracks: ["Technology", "Innovation"],
    status: "Currently Open",
    team: "Check official rules",
    prize: "Check official website",
    description:
      "A national-level student hackathon focused on innovation and technology.",
    link: "https://hackathon.mitindia.com/",
  },

  {
    id: 3,
    name: "NeuraMorphix HackForge 2026",
    org: "SRM Institute of Science and Technology",
    location: "Online",
    tracks: ["AI", "Machine Learning"],
    status: "Currently Open",
    team: "1–4 members",
    prize: "Check official website",
    description:
      "An AI-focused student hackathon for building practical technology solutions.",
    link: "https://unstop.com/hackathons/neuramorphix-hackforge-2026-srm-institute-of-science-and-technology-kattankulathur-chennai-1708229",
  },

  {
    id: 4,
    name: "KuruKshetra 2.0 Hackfest",
    org: "MIT Arts, Commerce & Science College",
    location: "Pune, Maharashtra",
    tracks: ["AI", "Cybersecurity", "Blockchain"],
    status: "Currently Open",
    team: "Check official rules",
    prize: "Check official website",
    description:
      "A national-level college hackfest for students across India.",
    link: "https://unstop.com/hackathons/kurukshetra-20-hackfest-mit-arts-commerce-science-college-alandi-pune-maharashtra-1726911",
  },

  {
    id: 5,
    name: "CodeFury 9.0",
    org: "University Visvesvaraya College of Engineering",
    location: "Bangalore, Karnataka",
    tracks: ["Software", "Web", "Android"],
    status: "Currently Open",
    team: "1–4 members",
    prize: "Check official website",
    description:
      "A national-level student software hackathon.",
    link: "https://unstop.com/hackathons/codefury-90-university-visvesvaraya-college-of-engineering-uvce-bangalore-1726707",
  },

  {
    id: 6,
    name: "Y-Hack 26",
    org: "KPR Institute of Engineering and Technology",
    location: "Coimbatore, Tamil Nadu",
    tracks: ["Hardware", "Software", "Robotics"],
    status: "Upcoming",
    team: "3–6 members",
    prize: "Check official website",
    description:
      "A national-level student hackathon with hardware and software tracks.",
    link: "https://unstop.com/hackathons/y-hack26-24-hour-national-hackathon-kpr-institute-of-engineering-and-technology-kpriet-coimbatore-1702198",
  },

  {
    id: 7,
    name: "CraftVerse 2.0",
    org: "Pimpri Chinchwad College of Engineering and Research",
    location: "Pune, Maharashtra",
    tracks: ["Technology", "Software"],
    status: "Upcoming",
    team: "Check official rules",
    prize: "Check official website",
    description:
      "A national-level technology hackathon for students.",
    link: "https://unstop.com/hackathons/craftverse-20-pimpri-chinchwad-college-of-engineering-research-pccoer-ravet-pimpri-chinchwad-pune-1719658",
  },

  {
    id: 8,
    name: "Hackfinity 3.0",
    org: "Ramco Institute of Technology",
    location: "Tamil Nadu",
    tracks: ["Technology", "Innovation"],
    status: "Upcoming",
    team: "3–4 members",
    prize: "Check official website",
    description:
      "A student hackathon focused on technology and innovation.",
    link: "https://unstop.com/hackathons/hackfinity-30-ramco-institute-of-technology-rit-tamil-nadu-1722654",
  },

  {
    id: 9,
    name: "Build With Bharat 3.0",
    org: "Chitkara University",
    location: "Himachal Pradesh",
    tracks: ["AI", "Web", "Cybersecurity", "IoT"],
    status: "Upcoming",
    team: "2–5 members",
    prize: "Check official website",
    description:
      "A national-level technology hackathon.",
    link: "https://unstop.com/hackathons/build-with-bharat-30-chitkara-university-cu-himachal-pradesh-1722484",
  },

  {
    id: 10,
    name: "InnoVenture 2026",
    org: "Amity University",
    location: "Noida, Uttar Pradesh",
    tracks: ["AI", "Robotics", "Cybersecurity"],
    status: "Upcoming",
    team: "2–4 members",
    prize: "Check official website",
    description:
      "An innovation and technology challenge for university students.",
    link: "https://www.innoventure.club/",
  },

  {
    id: 11,
    name: "CYBERHACK 2026",
    org: "SRMS CET&R",
    location: "Bareilly, Uttar Pradesh",
    tracks: ["Cybersecurity", "Technology"],
    status: "Upcoming",
    team: "Check official rules",
    prize: "Check official website",
    description:
      "A college-level cybersecurity and technology hackathon.",
    link: "https://www.srms.ac.in/",
  },

  {
    id: 12,
    name: "Smart India Hackathon",
    org: "Smart India Hackathon",
    location: "India",
    tracks: ["Innovation", "Technology"],
    status: "Upcoming",
    team: "Student teams",
    prize: "Check official website",
    description:
      "A major national-level student innovation hackathon.",
    link: "https://www.sih.gov.in/",
  },

  {
    id: 13,
    name: "Devpost Hackathons",
    org: "Devpost",
    location: "Worldwide",
    tracks: ["AI", "Software", "Web"],
    status: "Currently Open",
    team: "Varies",
    prize: "Varies",
    description:
      "Explore online hackathons covering AI, software and web development.",
    link: "https://devpost.com/hackathons",
  },
];

app.get("/api/hackathons", (req, res) => {
  res.json(hackathons);
});

app.listen(5000, () => {
  console.log(`SERVER STARTED WITH ${hackathons.length} HACKATHONS`);
});