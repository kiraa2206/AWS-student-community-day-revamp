// Single source of truth for the upcoming event.
// Every page (Home, Schedule, Register) reads from here so details
// never drift out of sync across the site.

export const event = {
  name: "AWS Student Community Day",
  tagline: "The 2026 edition: A day workshop where you build something and ship it live.",
  date: "2026-09-26",
  displayDate: "Saturday, 26 September 2026",
  venue: "Auditorium, IGDTUW",
  address: "Indira Gandhi Delhi Technical University for Women, Kashmere Gate, Delhi",
  audience: "Open to all students — no prior cloud experience needed",
  price: "Free",
  seatsNote: "Limited to 200 seats",
  organiser: "AWS Student Builder Group, IGDTUW",
};

// Real speakers, pulled from the original AWS Student Community Day site,
// matched to whichever session their actual topic fits.
const varshaVerma = {
  name: "Varsha Verma",
  role: "Senior Cloud Ops Engineer, Accenture",
  topic: "Unlocking and Mastering the Cloud Basics",
  linkedin: "https://www.linkedin.com/in/varsha-verma-cloud-devops/",
};
const dipali = {
  name: "Dipali",
  role: "VP of Data Engineering, Natwest Group & AWS Hero",
  topic: "Crafting CI/CD Pipelines with AWS",
  linkedin: "https://www.linkedin.com/in/dipalik",
};
const gargeeBhatnagar = {
  name: "Gargee Bhatnagar",
  role: "Consultant, Capgemini & AWS Community Builder",
  topic: "AWS Security with IAM",
  linkedin: "http://linkedin.com/in/gargee-bhatnagar-6b7223114",
};
const rajani = {
  name: "Rajani",
  role: "AWS Community Builder",
  topic: "Climbing the Cloud Ladder: Your AWS Career Guide",
  linkedin: "http://linkedin.com/in/rajani103",
};

export const dayFlow = [
  {
    id: "workshop",
    time: "10:00 AM – 12:00 PM",
    title: "Cloud basics + guided deploy",
    shortDescription: "A fast-paced, guided walkthrough of cloud basics and deploying a starter site live.",
    fullDescription: "Start from zero. We will cover what cloud computing actually is, how AWS structures its services, and walk through deploying a static application using Amazon S3, plus a look at how CI/CD keeps it updated. You will get a starter repo to fork so you can follow along live.",
    speakers: [varshaVerma, dipali],
    level: "beginner",
    glossary: ["cloud", "deploy", "s3", "ci_cd"],
  },
  {
    id: "build",
    time: "12:00 PM – 2:30 PM",
    title: "Build window",
    shortDescription: "Customize your deployed site. Mentors are around if you get stuck.",
    fullDescription: "Time to build. Take the starter template you just deployed and customize it. Add a new feature, change the UI, or break it and fix it. Gargee will be floating the lab to help with any AWS permissions/IAM errors, alongside the core team for general debugging.",
    speakers: [gargeeBhatnagar],
    level: "beginner",
    glossary: ["iam"],
  },
  {
    id: "submit",
    time: "2:30 PM – 3:00 PM",
    title: "Submissions close",
    shortDescription: "Submit your live site link for the competition.",
    fullDescription: "All live URLs must be submitted via the portal by 3:00 PM sharp. Late submissions cannot be routed to the judges in time. Use this half-hour to verify your site is visible to the public on mobile and desktop — check that nothing is stuck showing an old cached version.",
    speakers: [],
    level: "",
    glossary: ["cache"],
  },
  {
    id: "results",
    time: "3:30 PM – 4:30 PM",
    title: "Results & prizes",
    shortDescription: "Winners announced. AWS goodies and certificates for participants.",
    fullDescription: "We will showcase the top 3 projects on the big screen. Judging is based on creativity, what you learned, and how well it works. Rajani closes the day with a short talk on where to go next in your cloud career. Certificates of participation will be emailed to everyone who submitted a working link.",
    speakers: [rajani],
    level: "",
    glossary: [],
  },
];

export const glossary = {
  cloud: "Renting computing power and storage over the internet instead of running your own servers.",
  deploy: "Making your website or app live on the internet so anyone can visit it.",
  s3: "An AWS service for storing files (like your website's HTML/CSS/JS) so they can be served to visitors.",
  iam: "AWS's system for controlling who can access what — like permissions for your cloud account.",
  ci_cd: "A pipeline that automatically tests and publishes your code changes when you update them.",
  cache: "A temporary copy of your site stored closer to the visitor so it loads faster — but it can sometimes show an old version if not refreshed.",
};

// Sample/dummy content — clearly not real historical data.
// Two different formats shown deliberately: a single-day session day,
// and a multi-week cohort program.
export const pastEvents = [
  {
    id: "sample-community-day",
    type: "single-day",
    name: "AWS Student Community Day",
    date: "2024-02-03",
    displayDate: "3 Feb 2024",
    summary:
      "A single-day event with talks from AWS professionals on career pathways, cloud basics, and security.",
    speakerHighlights: ["Career pathways in cloud", "Cloud fundamentals", "AWS IAM & security"],
    whatStudentsGot: ["Certificates of participation", "Team lunch & snacks", "AWS goodies"],
    isSample: false,
  },
  {
    id: "sample-builder-cohort",
    type: "cohort",
    name: "Summer Builder Cohort",
    date: "2026-06-01",
    displayDate: "June 2026",
    summary:
      "A multi-week program where students built and deployed projects on AWS with mentor support.",
    speakerHighlights: ["Weekly mentor sessions", "Hands-on project building"],
    whatStudentsGot: ["Completion certificates", "1:1 mentorship", "Project showcase"],
    isSample: false,
  },
  {
    id: "sample-serverless",
    type: "single-day",
    name: "Serverless Apps with AWS Lambda",
    date: "2025-10-10",
    displayDate: "10 Oct 2025",
    summary:
      "An evening deep-dive into building scalable, serverless architectures without managing infrastructure.",
    speakerHighlights: ["Lambda fundamentals", "Event-driven architecture", "API Gateway integration"],
    whatStudentsGot: ["Live demo code", "Q&A with industry expert", "Networking"],
    isSample: false,
  },
  {
    id: "sample-optimization",
    type: "single-day",
    name: "Cloud Optimization & DevOps",
    date: "2025-08-18",
    displayDate: "18 Aug 2025",
    summary:
      "A technical speaker session focused on reducing cloud costs and automating deployment pipelines.",
    speakerHighlights: ["Cost optimization strategies", "CI/CD pipelines", "Infrastructure as Code"],
    whatStudentsGot: ["Resource cheat sheet", "AWS stickers", "Networking"],
    isSample: false,
  },
];

// Past speakers not already featured on the upcoming Schedule page —
// real people/topics from the original AWS Student Community Day site.
export const pastSpeakers = [
  {
    name: "Jen Looper",
    role: "Head of Academic Advocacy, AWS",
    topic: "Two Journeys, One Cloud: Career Pathways",
    linkedin: "https://www.linkedin.com/in/jenlooper/",
  },
  {
    name: "Aditi Sawhney",
    role: "Senior Digital Marketing Manager, AWS",
    topic: "Two Journeys, One Cloud: Career Pathways",
    linkedin: "https://www.linkedin.com/in/sawhneyaditi",
  },
  {
    name: "Kristine Howard",
    role: "AWS Developer Relations & Advocacy, APAC",
    topic: "Generative AI — Asking for a Friend",
    linkedin: "https://www.linkedin.com/in/kristinehoward/",
  },
  {
    name: "Rashmi Nambiar",
    role: "Principal Marketing Manager, AWS",
    topic: "Making the Right Moves in a Professional Landscape",
    linkedin: "https://www.linkedin.com/in/rashminambiar",
  },
  {
    name: "Payal Gupta",
    role: "Cloud Engineer, Dremio",
    topic: "re:Invent Recap",
    linkedin: "http://linkedin.com/in/payal-gupta4639",
  },
];

export const pastSponsors = [
  { name: "AWS", tier: "Title Sponsor" },
  { name: "KonfHub", tier: "Ticketing Sponsor" },
];

// Blank/placeholder gallery — captions only, no real photos.
// Stands in for what would be actual event-day photography.
export const galleryMoments = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80",
    caption: "Full house at the AWS Community Day kickoff."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
    caption: "Mentors helping attendees debug their deployment pipelines."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1000&q=80",
    caption: "Networking and pizza after the hackathon."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
    caption: "Students collaborating on their final serverless projects."
  }
];