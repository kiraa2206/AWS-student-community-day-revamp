import { pastEvents, pastSpeakers, pastSponsors, galleryMoments } from "../data/event";
import PastEventCard from "../components/PastEventCard";
import Carousel from "../components/Carousel";

export default function PastEvents() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-14">
      <h1 className="font-display text-3xl font-bold mb-2 text-text-main">Past Events</h1>
      <p className="text-text-muted mb-10">
        A look at what we've built and learned together.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-16">
        {pastEvents.map((pe) => (
          <PastEventCard key={pe.id} event={pe} />
        ))}
      </div>

      {/* Past speakers */}
      <section className="mb-24">
        <h2 className="font-display text-2xl font-bold mb-2 text-text-main text-left">Past Speakers</h2>
        <p className="text-sm text-text-muted mb-10 text-left">
          A few of the industry voices who've spoken at previous editions.
        </p>
        <div className="grid sm:grid-cols-2 gap-8">
          {pastSpeakers.map((s) => (
            <div key={s.name} className="flex flex-col items-center text-center p-8 bg-panel-dark border border-border-subtle rounded-2xl">
              <div className="w-40 h-40 rounded-full bg-space-black border-4 border-border-subtle overflow-hidden mb-6 flex items-center justify-center text-border-subtle shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-2xl text-text-main">{s.name}</h3>
              <p className="text-sm font-mono text-neon-cyan mt-2">{s.role}</p>
              <p className="text-sm text-text-muted mt-3 leading-relaxed">{s.topic}</p>
              {s.linkedin && (
                <a href={s.linkedin} target="_blank" rel="noreferrer" className="mt-4 text-xs font-mono text-text-muted hover:text-white transition-colors border border-border-subtle px-3 py-1.5 rounded">
                  LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Past sponsors */}
      <section className="mb-24">
        <h2 className="font-display text-2xl font-bold mb-2 text-text-main text-left">Past Sponsors</h2>
        <p className="text-sm text-text-muted mb-12 text-left">Support that made previous editions possible.</p>
        <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-16">
          {pastSponsors.map((s) => (
            <div key={s.name} className="flex flex-col items-center group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-panel-dark border border-border-subtle flex items-center justify-center mb-4 group-hover:border-neon-cyan transition-colors shadow-sm p-5 overflow-hidden">
                {s.name === 'AWS' ? (
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS Logo" className="w-full h-auto brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity" />
                ) : s.name === 'KonfHub' ? (
                  <img src="https://images.softwaresuggest.com/software_logo/1677556841_konfhub-icon-purple.png" alt="KonfHub Logo" className="w-full h-auto opacity-60 group-hover:opacity-100 transition-opacity rounded-full scale-125" />
                ) : (
                  <span className="font-display font-bold text-2xl text-text-muted group-hover:text-text-main transition-colors">
                    {s.name[0]}
                  </span>
                )}
              </div>
              <span className="font-display font-semibold text-text-main text-lg">{s.name}</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neon-magenta mt-1">
                {s.tier}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Restored Carousel */}
      <section>
        <h2 className="font-display text-2xl font-bold mb-2 text-text-main text-left">Event Moments</h2>
        <p className="text-sm text-text-muted mb-6 text-left">
          A look back at what we've built together.
        </p>
        <Carousel captions={galleryMoments} />
      </section>
    </div>
  );
}