import { Outlet, NavLink } from "react-router-dom";
import { event } from "../data/event";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/schedule", label: "Schedule" },
  { to: "/register", label: "Register" },
  { to: "/past-events", label: "Past Events" },
  { to: "/about", label: "About the Group" },
  { to: "/venue", label: "Venue & FAQ" },
];

function linkClass({ isActive }) {
  return [
    "px-2 py-2 text-sm transition-colors font-mono",
    isActive
      ? "text-neon-cyan font-semibold border-b-2 border-neon-cyan"
      : "text-text-muted hover:text-text-main",
  ].join(" ");
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-space-black">
      <header className="border-b border-border-subtle sticky top-0 bg-space-black/90 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <NavLink to="/" className="font-display font-bold text-text-main text-lg tracking-tight">
            AWS Student Community Day
          </NavLink>
          <nav className="hidden md:flex gap-4">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === "/"}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <NavLink
            to="/register"
            className="md:hidden text-sm font-semibold text-neon-purple border border-neon-purple/50 rounded-md px-4 py-1.5"
          >
            Register
          </NavLink>
        </div>
        
        {/* Mobile nav row */}
        <nav className="md:hidden flex gap-4 px-4 pb-2 overflow-x-auto text-sm border-t border-border-subtle/50 pt-2">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      
      <main className="flex-1">
        <Outlet />
      </main>
      
      <footer className="border-t border-border-subtle mt-16 bg-panel-dark/50">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-text-muted font-mono">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <p>
              Organised by{" "}
              <NavLink to="/about" className="text-neon-cyan hover:underline">
                {event.organiser}
              </NavLink>
            </p>
            <span className="hidden sm:inline text-border-subtle">|</span>
            <p>© 2026 AWS Student Builder Group, IGDTUW</p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6">
            <a href="https://www.instagram.com/aws_studentbuildergroup_igdtuw/" target="_blank" rel="noreferrer" className="hover:text-neon-magenta transition-colors">
              Instagram
            </a>
            <a href="https://www.linkedin.com/company/aws-student-builder-group-igdtuw/" target="_blank" rel="noreferrer" className="hover:text-neon-cyan transition-colors">
              LinkedIn
            </a>
            <a href="https://x.com/AWSClubIGDTUW?t=Mv5rpAyBkvI8AGfDC6ayoQ&s=09" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}