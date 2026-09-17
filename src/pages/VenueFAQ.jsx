import { event } from "../data/event";

export default function VenueFAQ() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="font-display text-3xl font-bold mb-2">Venue & FAQ</h1>
      <p className="text-ink-violet/70 mb-10">
        Everything you need to know before you arrive.
      </p>
      
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold mb-4">Getting there</h2>
        <div className="bg-panel-dark border border-border-subtle rounded-xl p-6">          <p className="font-semibold text-violet-deep mb-1">{event.venue}</p>
          <p className="text-sm text-ink-violet/80 mb-4">{event.address}</p>
          <p className="text-sm">
            <span className="font-semibold">Nearest Metro:</span> Kashmere Gate. The auditorium is a short walk from the main entrance.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="border-b border-lavender-pale pb-4">
            <h3 className="font-semibold text-ink-violet mb-1">Is this event actually free?</h3>
            <p className="text-sm text-ink-violet/80">Yes. The event is 100% free for all attendees.</p>
          </div>
          <div className="border-b border-lavender-pale pb-4">
            <h3 className="font-semibold text-ink-violet mb-1">Do I need a laptop?</h3>
            <p className="text-sm text-ink-violet/80">Yes, you will need a laptop to participate in the guided deploy and the build window.</p>
          </div>
          <div className="border-b border-lavender-pale pb-4">
            <h3 className="font-semibold text-ink-violet mb-1">I have zero cloud experience. Will I be lost?</h3>
            <p className="text-sm text-ink-violet/80">Not at all. The morning workshop starts from zero and gives you a starter template. We explicitly designed this for beginners.</p>
          </div>
          <div className="border-b border-lavender-pale pb-4">
            <h3 className="font-semibold text-ink-violet mb-1">Are there certificates?</h3>
            <p className="text-sm text-ink-violet/80">Yes, everyone who submits a live site link during the build window gets a certificate of participation.</p>
          </div>
        </div>
      </section>
    </div>
  );
}