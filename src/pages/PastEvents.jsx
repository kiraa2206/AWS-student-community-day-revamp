import { pastEvents } from "../data/event";
import PastEventCard from "../components/PastEventCard";

export default function PastEvents() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-14">
      <h1 className="font-display text-3xl font-bold mb-2">Past Events</h1>
      <p className="text-ink-violet/70 mb-10">
        A look at what we've built and learned together.
      </p>
      
      <div className="grid sm:grid-cols-2 gap-6">
        {pastEvents.map((pe) => (
          <PastEventCard key={pe.id} event={pe} />
        ))}
      </div>
    </div>
  );
}