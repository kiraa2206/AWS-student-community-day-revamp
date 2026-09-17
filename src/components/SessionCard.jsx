const levelStyles = {
  beginner: "bg-neon-cyan/10 border-neon-cyan/30 text-neon-cyan",
  intermediate: "bg-neon-magenta/10 border-neon-magenta/30 text-neon-magenta",
};

export default function SessionCard({ time, title, description, level, glossaryTerms, speakers, location }) {
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
        <h3 className="font-display font-semibold text-xl text-text-main mb-3">{title}</h3>
        
        {(speakers?.length > 0 || location) && (
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-4 text-xs font-mono text-text-muted">
            {speakers?.map((s) => (
              <div key={s.name} className="relative group/speaker inline-block">
                <span className="cursor-pointer text-neon-cyan hover:text-white transition-colors border-b border-dashed border-neon-cyan/50 pb-0.5">
                  🗣 {s.name}
                </span>
                
                {/* Floating Speaker Card Wrapper (Invisible Bridge) */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full pb-2 w-64 opacity-0 invisible group-hover/speaker:opacity-100 group-hover/speaker:visible transition-all z-50 pointer-events-none group-hover/speaker:pointer-events-auto">
                  
                  {/* Actual Visible Card */}
                  <div className="bg-space-black border border-neon-purple/50 rounded-xl shadow-[0_10px_30px_rgba(181,55,242,0.15)] p-5 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-panel-dark border-2 border-neon-cyan overflow-hidden mb-3 flex items-center justify-center text-border-subtle">
                      {s.image ? (
                        <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                      ) : (
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                      )}
                    </div>
                    <p className="font-display font-bold text-text-main text-sm mb-1">{s.name}</p>
                    <p className="text-[10px] text-text-muted font-sans leading-tight">{s.role}</p>
                    {s.linkedin && (
                      <a href={s.linkedin} target="_blank" rel="noreferrer" className="mt-4 text-[10px] uppercase tracking-widest bg-neon-purple/10 text-neon-purple hover:bg-neon-purple hover:text-white transition-colors border border-neon-purple/30 rounded px-4 py-1.5 inline-block">
                        Connect
                      </a>
                    )}
                  </div>

                </div>
              </div>
            ))}
            
            {location && <span className="text-neon-magenta">📍 {location}</span>}
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