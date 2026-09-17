import { useState } from "react";

// Small inline speaker credit used inside SessionCard.
// Hovering the face shows CONNECT (LinkedIn), hovering the name shows
// a small popover with role + topic — matches the pattern on About.
export default function SpeakerChip({ name, role, topic, linkedin }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <a
        href={linkedin || "#"}
        target="_blank"
        rel="noreferrer"
        className="w-7 h-7 rounded-full bg-space-black border border-border-subtle overflow-hidden relative shrink-0 group"
        aria-label={`${name} on LinkedIn`}
      >
        <div className="absolute inset-0 bg-panel-dark flex items-center justify-center text-border-subtle">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-neon-cyan/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-space-black font-bold text-[7px] tracking-wide leading-none">CONNECT</span>
        </div>
      </a>

      <span className="relative inline-block">
        <button
          type="button"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          className="text-xs font-mono text-neon-cyan hover:text-white transition-colors underline decoration-dashed underline-offset-4"
          aria-expanded={open}
        >
          {name}
        </button>
        {open && (
          <span
            role="tooltip"
            className="absolute z-[100] left-0 top-full mt-2 w-56 rounded-md bg-space-black border border-neon-purple text-text-main text-xs p-3 shadow-[0_4px_20px_rgba(181,55,242,0.3)] leading-relaxed"
          >
            <span className="block font-semibold text-white">{name}</span>
            <span className="block text-text-muted mt-0.5">{role}</span>
            <span className="block text-neon-magenta mt-1.5">{topic}</span>
          </span>
        )}
      </span>
    </div>
  );
}