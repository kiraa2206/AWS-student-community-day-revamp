import { Link } from "react-router-dom";
import { event, dayFlow, pastEvents } from "../data/event";
import PastEventCard from "../components/PastEventCard";

export default function Home() {
  return (
    <div>
      {/* Hero: Instagram Grid Aesthetic */}
      <section className="relative overflow-hidden border-b border-border-subtle">
        {/* Graph paper grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2A2540_1px,transparent_1px),linear-gradient(to_bottom,#2A2540_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"></div>
        
        {/* Neon glow orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-magenta/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-panel-dark border border-neon-purple/50 text-xs font-mono tracking-wider mb-6 text-neon-purple">
              <span className="w-2 h-2 rounded-full bg-neon-magenta animate-pulse"></span>
              {event.name}
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl font-extrabold leading-tight mb-5 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-text-muted">
              Cloud Launchpad
            </h1>
            <p className="text-lg text-text-muted mb-8 max-w-md leading-relaxed">
              {event.tagline}
            </p>
            
            <div className="bg-panel-dark/80 border border-border-subtle rounded-xl p-5 mb-8 backdrop-blur-md max-w-sm">
              <dl className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm">
                <div>
                  <dt className="text-neon-cyan text-[10px] font-mono uppercase tracking-wider mb-1">When</dt>
                  <dd className="font-medium text-text-main">{event.displayDate}</dd>
                </div>
                <div>
                  <dt className="text-neon-cyan text-[10px] font-mono uppercase tracking-wider mb-1">Where</dt>
                  <dd className="font-medium text-text-main">{event.venue}</dd>
                </div>
                <div>
                  <dt className="text-neon-cyan text-[10px] font-mono uppercase tracking-wider mb-1">Who</dt>
                  <dd className="font-medium text-text-main">No experience needed</dd>
                </div>
                <div>
                  <dt className="text-neon-cyan text-[10px] font-mono uppercase tracking-wider mb-1">Cost</dt>
                  <dd className="font-medium text-text-main">{event.price} · {event.seatsNote}</dd>
                </div>
              </dl>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/register"
                className="bg-neon-purple text-white font-bold px-7 py-3.5 rounded-md hover:bg-neon-magenta transition-colors shadow-[0_0_20px_rgba(181,55,242,0.4)]"
              >
                Register now
              </Link>
              <Link
                to="/schedule"
                className="bg-panel-dark border border-border-subtle text-text-main font-semibold px-7 py-3.5 rounded-md hover:border-neon-purple transition-colors"
              >
                View schedule
              </Link>
            </div>
          </div>
          
          {/* Day flow strip */}
          <div className="flex flex-col gap-0 bg-panel-dark border border-border-subtle p-8 rounded-2xl relative z-10">
            {dayFlow.map((step, i) => (
              <div key={step.id} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-3.5 h-3.5 rounded-sm bg-neon-cyan shrink-0 mt-1 shadow-[0_0_10px_rgba(76,201,240,0.5)]" />
                  {i < dayFlow.length - 1 && <div className="w-px flex-1 bg-gradient-to-b from-neon-cyan/50 to-border-subtle my-2" />}
                </div>
                <div className="pb-8">
                  <p className="text-xs font-mono text-neon-cyan mb-1">{step.time}</p>
                  <p className="font-display font-semibold text-lg text-text-main mb-1">{step.title}</p>
                  <p className="text-sm text-text-muted leading-relaxed">{step.shortDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why attend */}
      <section className="bg-space-black relative border-b border-border-subtle">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="font-display text-3xl font-bold mb-10 text-center text-text-main">Why you should come</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-panel-dark border border-border-subtle rounded-xl p-8 hover:border-neon-purple/50 transition-colors">
              <div className="text-neon-magenta font-mono text-xl mb-4">01</div>
              <p className="font-display font-semibold text-lg text-text-main mb-2">Start from zero</p>
              <p className="text-sm text-text-muted leading-relaxed">
                The workshop assumes no cloud background. We hand you a starter template, and you'll leave having deployed something real to the internet.
              </p>
            </div>
            <div className="bg-panel-dark border border-border-subtle rounded-xl p-8 hover:border-neon-purple/50 transition-colors">
              <div className="text-neon-magenta font-mono text-xl mb-4">02</div>
              <p className="font-display font-semibold text-lg text-text-main mb-2">Build, don't just watch</p>
              <p className="text-sm text-text-muted leading-relaxed">
                No more boring slide decks. A dedicated build window and a low-stakes competition ensure the day ends with a project you actually made.
              </p>
            </div>
            <div className="bg-panel-dark border border-border-subtle rounded-xl p-8 hover:border-neon-purple/50 transition-colors">
              <div className="text-neon-magenta font-mono text-xl mb-4">03</div>
              <p className="font-display font-semibold text-lg text-text-main mb-2">Walk away with proof</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Certificates for everyone who submits, AWS goodies for the winners, and a direct fast-track route into the core builder group.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past events */}
      <section className="bg-space-black">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="flex items-baseline justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl font-bold text-text-main mb-2">The standard we set</h2>
            </div>
            <Link to="/past-events" className="hidden sm:block text-sm text-neon-cyan font-mono hover:text-white transition-colors">
              [ View full archive ]
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {pastEvents.slice(0,2).map((pe) => (
              <PastEventCard key={pe.id} event={pe} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}