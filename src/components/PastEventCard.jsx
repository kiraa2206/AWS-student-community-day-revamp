export default function PastEventCard({ event }) {
  return (
    <div className="border border-border-subtle rounded-xl p-6 flex flex-col gap-4 bg-panel-dark hover:border-neon-cyan/50 transition-colors">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-display font-bold text-lg text-text-main">{event.name}</h3>
          <p className="text-xs font-mono text-neon-cyan mt-1">{event.displayDate}</p>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted border border-border-subtle rounded px-2 py-1 shrink-0">
          {event.type === "cohort" ? "Program" : "Single day"}
        </span>
      </div>
      <p className="text-sm text-text-muted leading-relaxed">{event.summary}</p>
      <div>
        <p className="text-xs font-mono text-neon-magenta mb-2 uppercase tracking-wide">Speakers & sessions</p>
        <ul className="text-sm text-text-main list-disc pl-4 space-y-1">
          {event.speakerHighlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-xs font-mono text-neon-magenta mb-2 uppercase tracking-wide">What students got</p>
        <div className="flex gap-2 flex-wrap">
          {event.whatStudentsGot.map((w) => (
            <span key={w} className="text-xs bg-neon-purple/10 border border-neon-purple/20 text-neon-purple rounded-md px-2.5 py-1">
              {w}
            </span>
          ))}
        </div>
      </div>
      {event.isSample && (
        <p className="text-[10px] font-mono text-text-muted/50 mt-2">Sample content for this prototype</p>
      )}
    </div>
  );
}