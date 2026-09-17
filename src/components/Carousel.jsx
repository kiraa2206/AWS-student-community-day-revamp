import { useState } from "react";

export default function Carousel({ captions }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!captions || captions.length === 0) return null;

  const next = () => setCurrentIndex((i) => (i + 1) % captions.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + captions.length) % captions.length);

  const current = captions[currentIndex];
  
  // Safeguard: handle both strings (old data) and objects (new data)
  const isObject = typeof current === "object" && current !== null;
  const image = isObject ? current.image : null;
  const text = isObject ? current.caption : current;

  return (
    <div className="relative bg-panel-dark border border-border-subtle rounded-xl overflow-hidden group">
      {/* Photo Area */}
      <div className="aspect-video w-full bg-space-black relative flex items-center justify-center">
        {image ? (
          <img 
            src={image} 
            alt={text} 
            className="w-full h-full object-cover" 
          />
        ) : (
          <span className="text-border-subtle">No image provided</span>
        )}
      </div>

      {/* Caption Bar */}
      <div className="p-4 border-t border-border-subtle bg-space-black text-center min-h-[4.5rem] flex items-center justify-center">
        <p className="text-sm font-mono text-text-main leading-relaxed">
          {text}
        </p>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prev} 
        className="absolute left-4 top-[40%] -translate-y-1/2 w-10 h-10 rounded-full bg-space-black/90 border border-border-subtle text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:border-neon-cyan hover:text-neon-cyan shadow-lg"
        aria-label="Previous image"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      
      <button 
        onClick={next} 
        className="absolute right-4 top-[40%] -translate-y-1/2 w-10 h-10 rounded-full bg-space-black/90 border border-border-subtle text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:border-neon-cyan hover:text-neon-cyan shadow-lg"
        aria-label="Next image"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
      </button>

      {/* Progress Indicators */}
      <div className="absolute top-4 right-4 flex gap-1.5">
        {captions.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 rounded-full transition-all ${idx === currentIndex ? "w-4 bg-neon-cyan" : "w-1.5 bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
}