import { event } from "../data/event";
import FAQItem from "../components/FAQItem";

const faqs = [
  {
    q: "Is this event actually free?",
    a: "Yes. The event is 100% free for all attendees.",
  },
  {
    q: "Do I need a laptop?",
    a: "Yes, you will need a laptop to participate in the guided deploy and the build window.",
  },
  {
    q: "I have zero cloud experience. Will I be lost?",
    a: "Not at all. The morning workshop starts from zero and gives you a starter template. We explicitly designed this for beginners.",
  },
  {
    q: "Are there certificates?",
    a: "Yes, everyone who submits a live site link during the build window gets a certificate of participation.",
  },
  {
    q: "Is this open to students outside IGDTUW?",
    a: "Yes — the workshop and competition are open to any student, not just IGDTUW students.",
  },
  {
    q: "Do I need to bring anything else besides a laptop?",
    a: "A charger is a good idea — it's a full day. Everything else (Wi-Fi, starter template, mentors) is provided.",
  },
  {
    q: "What if I don't finish in time for the competition?",
    a: "That's fine — certificates go to everyone who submits a working link, whether or not it's competition-ready. The competition is a bonus, not a requirement.",
  },
  {
    q: "Will food be provided?",
    a: "Yes, snacks are provided through the day so you don't have to step out during the build window.",
  },
];

export default function VenueFAQ() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="font-display text-3xl font-bold mb-2 text-text-main">Venue & FAQ</h1>
      <p className="text-text-muted mb-10">
        Everything you need to know before you arrive.
      </p>

      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold mb-4 text-text-main">Getting there</h2>
        <div className="bg-panel-dark border border-border-subtle rounded-xl p-6">
          <p className="font-semibold text-neon-cyan mb-1">{event.venue}</p>
          <p className="text-sm text-text-muted mb-4">{event.address}</p>
          <p className="text-sm text-text-main mb-5">
            <span className="font-semibold">Nearest Metro:</span> Kashmere Gate. The auditorium is a short walk from the main entrance.
          </p>
          <div className="rounded-lg overflow-hidden border border-border-subtle">
            <iframe
              title="IGDTUW Auditorium location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.8055370309853!2d77.22942760932312!3d28.665540782482477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0682f8aa2b%3A0x84c5888a85caa2bd!2sIGDTUW%20Auditorium!5e0!3m2!1sen!2sin!4v1703256687127!5m2!1sen!2sin"
              width="100%"
              height="280"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold mb-4 text-text-main">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-3">
          {faqs.map((f) => (
            <FAQItem key={f.q} question={f.q} answer={f.a} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold mb-4 text-text-main">Contact Us</h2>
        <div className="bg-panel-dark border border-border-subtle rounded-xl p-6">
          <p className="text-sm text-text-muted mb-4 leading-relaxed">
            Got a question that's not answered above? Join the group and ask the organising team directly before the event.
          </p>
          
          <a  href="https://chat.whatsapp.com/sample-invite-link"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-neon-purple text-white font-semibold px-5 py-2.5 rounded-md hover:bg-neon-magenta transition-colors text-sm"
          >
            Join the WhatsApp group
          </a>
        </div>
      </section>
    </div>
  );
}