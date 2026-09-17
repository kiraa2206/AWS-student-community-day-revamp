import { Link } from "react-router-dom";
import { event } from "../data/event";

const coreTeam = [
  { name: "Sania Verma", role: "Captain", linkedin: "#" },
  { name: "Laavanya Kushwaha", role: "Content Core", linkedin: "#" },
  { name: "Aneshya Das", role: "Media Core", linkedin: "#" },
  { name: "Vidhi Saxena", role: "Tech Core", linkedin: "#" },
  { name: "Adharika Mahajan", role: "PR Core", linkedin: "#" },
  { name: "Mehak", role: "EM Core", linkedin: "#" },
];

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-14">
      <div className="mb-16">
        <h1 className="font-display text-4xl font-bold mb-2 text-text-main">About</h1>
        <p className="text-neon-cyan font-mono text-sm">{event.organiser}</p>
      </div>

      {/* About the event */}
      <div className="mb-24">
        <h2 className="font-display text-2xl font-bold text-text-main mb-6 border-b border-border-subtle pb-2">
          About the Event
        </h2>
        <div className="max-w-3xl space-y-4 text-text-muted leading-relaxed">
          <p>
            <span className="text-text-main font-semibold">AWS Student Community Day</span> is our flagship annual deep-dive. 
          </p>
          <p>
            It is built on a simple premise: students learn best from other students who are actually building things. We strip away the corporate marketing and focus strictly on raw, peer-to-peer technical knowledge. 
          </p>
          <p>
            Whether you are deploying your first S3 bucket or debating serverless architecture, this is the day the entire campus cloud community comes together to share what they've learned.
          </p>
        </div>
      </div>

      {/* About the group */}
      <div className="grid md:grid-cols-2 gap-16 mb-20">
        <div className="space-y-6 text-text-muted leading-relaxed">
          <h2 className="font-display text-2xl font-bold text-text-main mb-2 border-b border-border-subtle pb-2">
            About the Group
          </h2>
          <p>
            We are a community of students learning, building, and deploying real-world projects on Amazon Web Services (AWS).
          </p>
          <p>
            Instead of just watching tutorials, our focus is on hands-on building. We host workshops, hackathons, and cohort programs designed to bridge the gap between classroom theory and industry practice.
          </p>

          <div className="bg-panel-dark border border-border-subtle p-6 rounded-xl border-l-2 border-l-neon-purple mt-8 shadow-sm">
            <h3 className="font-display font-semibold text-lg text-text-main mb-2">Our Mission</h3>
            <p className="text-sm">
              To empower students with cloud computing skills, foster a culture of open-source contribution, and build a network of future cloud professionals.
            </p>
          </div>
        </div>

        {/* Core Team Grid */}
        <div>
          <h2 className="font-display text-2xl font-bold text-text-main mb-8 border-b border-border-subtle pb-2">Core Team (2026-27)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-4">
            {coreTeam.map((member) => (
              <a
                key={member.name}
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center group text-center cursor-pointer"
              >
                <div className="w-24 h-24 rounded-full bg-space-black border-2 border-border-subtle group-hover:border-neon-cyan transition-colors mb-3 overflow-hidden relative shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <div className="absolute inset-0 bg-panel-dark flex items-center justify-center text-border-subtle">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                  <div className="absolute inset-0 bg-neon-cyan/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <span className="text-space-black font-bold text-sm tracking-widest">CONNECT</span>
                  </div>
                </div>
                <p className="font-display font-semibold text-sm text-text-main group-hover:text-neon-cyan transition-colors">{member.name}</p>
                <p className="text-xs font-mono text-text-muted mt-1">{member.role}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bridge to the actual society page */}
      <div className="border-t border-border-subtle pt-12 text-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-purple/5 via-space-black to-space-black rounded-xl">
        <p className="text-text-main font-display text-xl font-bold mb-3">Want to know more about what we do?</p>
        <p className="text-text-muted mb-8 max-w-lg mx-auto text-sm">
          This site is just for Cloud Launchpad. Discover our past projects, full member roster, and year-round technical cohorts on our official homepage.
        </p>
        <Link to="/society" className="inline-block bg-panel-dark border border-border-subtle text-neon-magenta font-mono text-sm px-8 py-4 rounded-md hover:border-neon-magenta hover:bg-neon-magenta/10 transition-colors shadow-[0_0_15px_rgba(247,37,133,0.15)]">
          [ Visit the Official Society Page ]
        </Link>
      </div>
    </div>
  );
}