const levelStyles = {
  beginner: "bg-neon-cyan/10 border-neon-cyan/30 text-neon-cyan",
  intermediate: "bg-neon-magenta/10 border-neon-magenta/30 text-neon-magenta",
};

export default function SessionCard({ time, title, description, level, glossaryTerms, speaker, location }) {
  return (
    <div className="border border-border-subtle rounded-xl p-6 flex flex-col gap-3 bg-panel-dark relative group hover:border-neon-purple/50 transition-colors">
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-border-subtle group-hover:bg-neon-purple transition-colors"></div>
      
      <div className="flex items-center justify-between gap-3 pl-2">
        <span className="text-xs font-mono text-text-muted">{time}</span>
        {level && (
          <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 border rounded-sm ${levelStyles[level] || ""}`}>
            {level === "beginner" ? "Beginner-friendly" : "Some experience helpful"}
          </span>
        )}
      </div>
      
      <div className="pl-2">
        <h3 className="font-display font-semibold text-xl text-text-main mb-2">{title}</h3>
        
        {/* New Speaker & Location Metadata */}
        {(speaker || location) && (
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3 text-xs font-mono text-neon-cyan">
            {speaker && <span>🗣 {speaker}</span>}
            {location && <span>📍 {location}</span>}
          </div>
        )}
        
        <p className="text-sm text-text-muted leading-relaxed">{description}</p>
      </div>
      
      {glossaryTerms && glossaryTerms.length > 0 && (
        <div className="mt-3 pl-2 pt-4 border-t border-border-subtle/30">
          <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-2">
            Words to know:
          </p>
          <div className="flex gap-4 flex-wrap">
            {glossaryTerms}
          </div>
        </div>
      )}
    </div>
  );
}