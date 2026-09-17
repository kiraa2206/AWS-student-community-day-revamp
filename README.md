# AWS Student Community Day: Cloud Launchpad (Revamp)

A complete, ground-up redesign of the AWS Student Community Day website into a modern, student-focused event platform. Built to serve as the digital hub for the 2026 "Cloud Launchpad" edition hosted by the AWS Student Builder Group at IGDTUW.

This revamp shifts the platform from a static information page into an interactive attendee journey, focusing on product sense, clean information architecture, and a cyberpunk dark-neon aesthetic that matches the actual club's identity.

## ✨ Key Features

*   **Cyberpunk UI & Tailwind v4:** Fully custom dark-theme interface utilizing the latest Tailwind CSS v4 and Vite for lightning-fast HMR and optimized builds.
*   **Smart Registration Flow:** Custom form validation that explicitly rejects generic personal domains (Gmail/Yahoo) to ensure registrations are restricted to valid university student emails.
*   **Interactive Schedule:** A detailed, single-track schedule featuring interactive glossary popovers for beginners and custom hover-bridge cards to view speaker details and LinkedIn profiles without losing cursor focus.
*   **Rich Past Events Archive:** A dedicated archive featuring full-sized speaker cards, centered sponsor layouts with true-to-life logos, and a custom-built image carousel for event moments (no external carousel library required).
*   **Standalone Society Hub:** A dynamically routed, visually distinct `/society` page showcasing the year-round club activities, core team members, and future cohorts—keeping the main event page entirely focused on Cloud Launchpad.

## 🛠 Tech Stack

*   **Framework:** React 18
*   **Tooling:** Vite
*   **Styling:** Tailwind CSS (v4)
*   **Routing:** React Router DOM (v6)
*   **Deployment:** Vercel

## 📁 Project Structure

*   `/src/components/` - Reusable UI elements (`SessionCard`, `PastEventCard`, `GlossaryTerm`, `Carousel`, `Layout`)
*   `/src/pages/` - Full-page route components (`Home`, `Schedule`, `Register`, `PastEvents`, `About`, `Society`)
*   `/src/data/` - Single source of truth for all event data, schedules, and past event archives (`event.js`)
*   `/src/index.css` - Global styles and Tailwind v4 theme configurations

---
**Author:** Keerti Gupta
