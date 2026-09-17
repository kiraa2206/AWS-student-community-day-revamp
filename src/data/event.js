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

export const dayFlow = [
  {
    id: "workshop",
    time: "10:00 AM – 12:00 PM",
    title: "Cloud basics + guided deploy",
    shortDescription: "A fast-paced, guided walkthrough of cloud basics and deploying a starter site live.",
    fullDescription: "Start from zero. We will cover what cloud computing actually is, how AWS structures its services, and walk through deploying a static application using Amazon S3. You will get a starter repo to fork so you can follow along live.",
    speaker: "Vidhi Saxena (Tech Core)",
    level: "beginner",
    glossary: ["cloud", "deploy", "s3"]
  },
  {
    id: "build",
    time: "12:00 PM – 2:30 PM",
    title: "Build window",
    shortDescription: "Customize your deployed site. Mentors are around if you get stuck.",
    fullDescription: "Time to build. Take the starter template you just deployed and customize it. Add a new feature, change the UI, or break it and fix it. The core team will be walking around the lab to help debug any AWS console errors.",
    speaker: "AWS Mentors",
    level: "beginner",
    glossary: []
  },
  {
    id: "submit",
    time: "2:30 PM – 3:00 PM",
    title: "Submissions close",
    shortDescription: "Submit your live site link for the competition.",
    fullDescription: "All live URLs must be submitted via the portal by 3:00 PM sharp. Late submissions cannot be routed to the judges in time. Use this half-hour to verify your site is visible to the public on mobile and desktop.",
    speaker: "Adharika Mahajan (PR Core)",
    level: "",
    glossary: ["cache"]
  },
  {
    id: "results",
    time: "3:30 PM – 4:30 PM",
    title: "Results & prizes",
    shortDescription: "Winners announced. AWS goodies and certificates for participants.",
    fullDescription: "We will showcase the top 3 projects on the big screen. Judging is based on creativity, what you learned, and how well it works. Certificates of participation will be emailed to everyone who submitted a working link.",
    speaker: "Sania Verma (Captain)",
    level: "",
    glossary: []
  }
];

export const glossary = {
  cloud: "Renting computing power and storage over the internet instead of running your own servers.",
  deploy: "Making your website or app live on the internet so anyone can visit it.",
  s3: "An AWS service for storing files (like your website's HTML/CSS/JS) so they can be served to visitors.",
  iam: "AWS's system for controlling who can access what — like permissions for your cloud account.",
  ci_cd: "A pipeline that automatically tests and publishes your code changes when you update them.",
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
