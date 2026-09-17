import { useState } from "react";
import { Link } from "react-router-dom";
import { event } from "../data/event";

export default function Register() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [form, setForm] = useState({ name: "", email: "", year: "" });
  const [errors, setErrors] = useState({});
  const [confirmedName, setConfirmedName] = useState("");

function validate() {
    const next = {};
    
    if (!form.name.trim()) {
      next.name = "Enter your name.";
    }
    
    if (!form.email.trim()) {
      next.email = "Enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = "That email doesn't look right.";
    } else if (/@(gmail|yahoo|hotmail|outlook)\.com$/i.test(form.email.trim())) {
      // Rejects common personal emails and asks for a university one
      next.email = "Please use your official university email ID.";
    }
    
    if (!form.year) {
      next.year = "Select your year.";
    }
    
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length > 0) return;
    
    setStatus("submitting");
    
    // Simulated network call — no backend for this prototype.
    setTimeout(() => {
      const succeeded = true; // flip to false to see the error state
      if (succeeded) {
        setConfirmedName(form.name);
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 900);
  }

  function handleChange(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function buildCalendarLink() {
    const start = "20260926T100000";
    const end = "20260926T163000";
    const text = encodeURIComponent(event.name);
    const details = encodeURIComponent(event.tagline);
    const location = encodeURIComponent(event.venue);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&details=${details}&location=${location}`;
  }

  if (status === "success") {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan flex items-center justify-center mx-auto mb-6 text-3xl shadow-[0_0_20px_rgba(76,201,240,0.3)]">
          ✓
        </div>
        <h1 className="font-display text-3xl font-bold mb-3 text-text-main">
          You're in, {confirmedName.split(" ")[0]}.
        </h1>
        <p className="text-text-muted mb-10 leading-relaxed">
          Registered for {event.name} on {event.displayDate}. A confirmation has been "sent" to <span className="text-text-main font-medium">{form.email}</span>.
        </p>
        <div className="flex flex-col gap-5 items-center">
          <a
            href={buildCalendarLink()}
            target="_blank"
            rel="noreferrer"
            className="bg-neon-purple text-white font-bold px-7 py-3.5 rounded-md hover:bg-neon-magenta transition-colors shadow-[0_0_20px_rgba(181,55,242,0.4)] w-full sm:w-auto"
          >
            Add to Google Calendar
          </a>
          <Link to="/schedule" className="text-sm font-mono text-neon-cyan hover:text-white transition-colors">
            [ View the schedule ]
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-14">
      <h1 className="font-display text-4xl font-bold mb-3 text-text-main">Register</h1>
      <p className="text-text-muted mb-10 leading-relaxed">
        {event.displayDate} · {event.venue} · <span className="text-neon-cyan">{event.price}, {event.seatsNote.toLowerCase()}</span>.
      </p>
      
      {status === "error" && (
        <div className="bg-neon-magenta/10 border border-neon-magenta text-neon-magenta text-sm rounded-md p-4 mb-6 font-mono">
          System Error: Registration failed. Please try again.
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
        <div>
          <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-text-muted mb-2">
            Full name
          </label>
          <input
            id="name"
            value={form.name}
            onChange={handleChange("name")}
            placeholder="Enter your name"
            className={`w-full bg-panel-dark border text-text-main rounded-md px-4 py-3 text-sm focus:border-neon-purple focus:ring-1 focus:ring-neon-purple outline-none transition-colors ${
              errors.name ? "border-neon-magenta" : "border-border-subtle"
            }`}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="text-xs text-neon-magenta font-mono mt-2">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-text-muted mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            placeholder="student@university.edu"
            className={`w-full bg-panel-dark border text-text-main rounded-md px-4 py-3 text-sm focus:border-neon-purple focus:ring-1 focus:ring-neon-purple outline-none transition-colors ${
              errors.email ? "border-neon-magenta" : "border-border-subtle"
            }`}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="text-xs text-neon-magenta font-mono mt-2">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="year" className="block text-xs font-mono uppercase tracking-widest text-text-muted mb-2">
            Year of study
          </label>
          <select
            id="year"
            value={form.year}
            onChange={handleChange("year")}
            className={`w-full bg-panel-dark border text-text-main rounded-md px-4 py-3 text-sm focus:border-neon-purple focus:ring-1 focus:ring-neon-purple outline-none transition-colors appearance-none ${
              errors.year ? "border-neon-magenta" : "border-border-subtle"
            }`}
            aria-invalid={!!errors.year}
          >
            <option value="" className="bg-space-black">Select…</option>
            <option value="1" className="bg-space-black">1st year</option>
            <option value="2" className="bg-space-black">2nd year</option>
            <option value="3" className="bg-space-black">3rd year</option>
            <option value="4" className="bg-space-black">4th year</option>
          </select>
          {errors.year && <p className="text-xs text-neon-magenta font-mono mt-2">{errors.year}</p>}
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-neon-cyan text-space-black font-bold px-6 py-4 rounded-md disabled:opacity-60 mt-4 hover:bg-white transition-colors shadow-[0_0_15px_rgba(76,201,240,0.3)]"
        >
          {status === "submitting" ? "Processing..." : "Secure your seat"}
        </button>
      </form>
    </div>
  );
}