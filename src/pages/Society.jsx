import { Link } from "react-router-dom";
import { pastEvents } from "../data/event";

const namedTeam = [
  { name: "Sania Verma", role: "Captain" },
  { name: "Laavanya Kushwaha", role: "Content Core" },
  { name: "Aneshya Das", role: "Media Core" },
  { name: "Vidhi Saxena", role: "Tech Core" },
  { name: "Adharika Mahajan", role: "PR Core" },
  { name: "Mehak", role: "EM Core" },
];

const genericTeam = [
  "Tech Member", "Tech Member",
  "Event Management Member", "Event Management Member",
  "Media Member", "Media Member",
  "Content Member", "Content Member",
  "PR Member", "PR Member",
];

const futureEvents = [
  {
    name: "AI/ML Study Jam",
    date: "November 2026",
    description: "A short series introducing generative AI concepts on AWS, for anyone who enjoyed Cloud Launchpad.",
  },
  {
    name: "Winter Cloud Sprint",
    date: "January 2027",
    description: "A weekend build sprint for students who want to go deeper than a single-day workshop.",
  },
];

function MemberAvatar({ name, role }) {
  return (
    
     <a href="#"
      className="flex flex-col items-center group text-center"
      aria-label={`${name} on LinkedIn (placeholder)`}
    >
      <div className="w-20 h-20 rounded-full bg-[#060B18] border-2 border-[#1B2740] group-hover:border-[#38BDF8] transition-colors mb-3 overflow-hidden relative">
        <div className="absolute inset-0 bg-[#0D1526] flex items-center justify-center text-[#1B2740]">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-[#38BDF8]/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-[#060B18] font-bold text-xs tracking-widest">CONNECT</span>
        </div>
      </div>
      <p className="font-semibold text-sm text-[#F1F5F9] group-hover:text-[#38BDF8] transition-colors">{name}</p>
      <p className="text-xs text-[#8794A8] mt-1">{role}</p>
    </a>
  );
}

export default function Society() {
  return (
    <div className="min-h-screen bg-[#060B18] text-[#F1F5F9]" style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
      {/* Its own header — visually distinct from the Cloud Launchpad event site */}
      <header className="sticky top-0 z-20 bg-[#060B18]/95 backdrop-blur border-b border-[#1B2740]">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-bold text-lg">AWS Student Builder Group</span>
          <nav className="hidden md:flex gap-6 text-sm text-[#8794A8]">
            <a href="#about" className="hover:text-[#F1F5F9]">About</a>
            <a href="#events" className="hover:text-[#F1F5F9]">Events</a>
            <a href="#members" className="hover:text-[#F1F5F9]">Members</a>
            <a href="#contact" className="hover:text-[#F1F5F9]">Contact</a>
          </nav>
          <Link
            to="/"
            className="text-sm font-semibold bg-[#2563EB] text-white px-4 py-2 rounded-md hover:bg-[#3B82F6] transition-colors"
          >
            Cloud Launchpad →
          </Link>
        </div>
      </header>

      {/* Hero with Deep Blue/Cyan Grid Aesthetic */}
      <section className="relative overflow-hidden border-b border-[#1B2740]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E3A8A_1px,transparent_1px),linear-gradient(to_bottom,#1E3A8A_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>
        
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 text-center">
          <p className="text-[#38BDF8] text-sm font-mono font-medium mb-4 uppercase tracking-widest">IGDTUW</p>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight">AWS Student Builder Group</h1>
          <p className="text-[#8794A8] max-w-xl mx-auto mb-10 text-lg">
            A community of students at IGDTUW learning, building, and deploying real projects on AWS —
            all year round, not just for one event.
          </p>
          <div className="flex justify-center gap-12 text-sm text-[#8794A8]">
            <div><span className="text-3xl font-bold text-[#F1F5F9] block mb-1">150+</span>Members</div>
            <div><span className="text-3xl font-bold text-[#F1F5F9] block mb-1">{pastEvents.length}</span>Events hosted</div>
            <div><span className="text-3xl font-bold text-[#F1F5F9] block mb-1">3</span>Years running</div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-20 border-b border-[#1B2740]">
        <h2 className="text-2xl font-bold mb-8">About the Society</h2>
        <div className="grid md:grid-cols-2 gap-10 text-[#8794A8] leading-relaxed">
          <p>
            We started as a small group of students curious about cloud computing, and grew into a
            year-round community running workshops, hackathons, and mentorship cohorts on AWS. Our focus
            has always been building over watching — every event we run ends with students shipping
            something real.
          </p>
          <p>
            Beyond events, members get access to a peer mentorship network, AWS learning resources, and a
            direct pipeline into larger inter-college hackathons and competitions. We work closely with
            AWS professionals, alumni, and other student communities to keep our content current with what
            the industry actually uses.
          </p>
        </div>
      </section>

      {/* Events: past + future + upcoming subsection */}
      <section id="events" className="max-w-6xl mx-auto px-4 py-20 border-b border-[#1B2740]">
        <h2 className="text-2xl font-bold mb-10">Events</h2>

        <h3 className="text-sm font-semibold uppercase tracking-wide text-[#38BDF8] mb-4">Upcoming</h3>
        <div className="bg-[#0D1526] border border-[#1B2740] rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-[#38BDF8]/50 transition-colors">
          <div>
            <p className="font-bold text-xl mb-1">Cloud Launchpad</p>
            <p className="text-sm text-[#8794A8]">
              A single-day beginner workshop + deploy competition. Saturday, 26 September 2026.
            </p>
          </div>
          <Link
            to="/"
            className="shrink-0 bg-[#2563EB] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#3B82F6] transition-colors text-sm"
          >
            View event site
          </Link>
        </div>

        <h3 className="text-sm font-semibold uppercase tracking-wide text-[#38BDF8] mb-4">Lined up next</h3>
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {futureEvents.map((f) => (
            <div key={f.name} className="border border-[#1B2740] rounded-xl p-6 bg-[#0D1526]">
              <p className="font-semibold text-lg">{f.name}</p>
              <p className="text-xs font-mono text-[#38BDF8] mb-3 mt-1">{f.date}</p>
              <p className="text-sm text-[#8794A8]">{f.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-sm font-semibold uppercase tracking-wide text-[#38BDF8] mb-4">Past events</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {pastEvents.map((e) => (
            <div key={e.id} className="border border-[#1B2740] rounded-xl p-6 bg-[#0D1526]">
              <div className="flex justify-between items-start mb-2">
                <p className="font-semibold text-lg">{e.name}</p>
                <span className="text-[10px] uppercase tracking-wide text-[#8794A8] border border-[#1B2740] rounded px-2 py-1">
                  {e.type === "cohort" ? "Program" : "Single day"}
                </span>
              </div>
              <p className="text-xs font-mono text-[#38BDF8] mb-4">{e.displayDate}</p>
              <p className="text-sm text-[#8794A8] mb-4">{e.summary}</p>
              <ul className="text-sm text-[#8794A8] list-disc pl-4 space-y-1">
                {e.speakerHighlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Members */}
      <section id="members" className="max-w-6xl mx-auto px-4 py-20 border-b border-[#1B2740]">
        <h2 className="text-2xl font-bold mb-10">Society Members</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-y-10 gap-x-4">
          {namedTeam.map((m) => (
            <MemberAvatar key={m.name} name={m.name} role={m.role} />
          ))}
          {genericTeam.map((role, i) => (
            <MemberAvatar key={`${role}-${i}`} name={role} role="Volunteer" />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-[#8794A8] mb-8 max-w-2xl">
          Questions about joining or partnering with us? Reach out through any of the channels below.
        </p>
        
         <a href="https://chat.whatsapp.com/sample-invite-link"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-[#2563EB] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#3B82F6] transition-colors text-sm shadow-[0_0_15px_rgba(37,99,235,0.3)]"
        >
          Join our WhatsApp community
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1B2740] py-10 bg-[#0D1526]/50">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-[#8794A8]">
          <p>© 2026 AWS Student Builder Group, IGDTUW</p>
          <div className="flex gap-8 font-medium">
            <a href="https://www.instagram.com/aws_studentbuildergroup_igdtuw/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/company/aws-student-builder-group-igdtuw/" target="_blank" rel="noreferrer" className="hover:text-[#38BDF8] transition-colors">LinkedIn</a>
            <a href="https://x.com/AWSClubIGDTUW?t=Mv5rpAyBkvI8AGfDC6ayoQ&s=09" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}