import { useState } from "react";
import { glossary } from "../data/event";

export default function GlossaryTerm({ termKey, children }) {
  const [open, setOpen] = useState(false);
  const definition = glossary[termKey];
  
  if (!definition) return <span>{children}</span>;
  
  return (
    <span className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setOpen(false)}
        className="text-neon-cyan underline decoration-dashed underline-offset-4 text-sm font-mono hover:text-white transition-colors"
        aria-expanded={open}
      >
        {children}
      </button>
      {open && (
        <span
          role="tooltip"
          className="absolute z-[100] left-0 top-full mt-2 w-64 rounded-md bg-space-black border border-neon-purple text-text-main text-xs p-3 shadow-[0_4px_20px_rgba(181,55,242,0.3)] leading-relaxed"
        >
          {definition}
        </span>
      )}
    </span>
  );
}