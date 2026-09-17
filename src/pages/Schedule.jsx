import { dayFlow } from "../data/event";
import SessionCard from "../components/SessionCard";
import GlossaryTerm from "../components/GlossaryTerm";

export default function Schedule() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="font-display text-4xl font-bold mb-3 text-text-main">Schedule</h1>
      <p className="text-text-muted mb-10 leading-relaxed font-mono text-sm">
        Saturday, 26 September 2026 · Auditorium, IGDTUW. One track, no clashing sessions to choose between.
      </p>
      
      <div className="flex flex-col gap-6">
        {dayFlow.map((step) => (
          <SessionCard
            key={step.id}
            time={step.time}
            title={step.title}
            description={step.fullDescription}
            speaker={step.speaker}
            location={step.location}
            level={step.level}
            glossaryTerms={
              step.glossary?.map((term) => (
                <GlossaryTerm key={term} termKey={term}>
                  {term}
                </GlossaryTerm>
              ))
            }
          />
        ))}
      </div>
    </div>
  );
}