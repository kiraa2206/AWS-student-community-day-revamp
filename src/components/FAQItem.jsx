import { useState } from "react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border-subtle rounded-lg bg-panel-dark overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
      >
        <span className="font-semibold text-text-main text-sm">{question}</span>
        <span
          className={`text-neon-cyan shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>
      {open && (
        <div className="px-5 pb-4 -mt-1">
          <p className="text-sm text-text-muted leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}