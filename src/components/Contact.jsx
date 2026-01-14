import { useLang } from "./LanguageContext";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-3xl mb-6">{t.contactTitle}</h2>

      <div className="max-w-xl mx-auto px-6 space-y-4">
        <input
          className="w-full p-3 bg-panel border border-border rounded"
          placeholder="Your name"
        />
        <input
          className="w-full p-3 bg-panel border border-border rounded"
          placeholder="Your email"
        />
        <textarea
          className="w-full p-3 bg-panel border border-border rounded"
          placeholder="How can I help?"
        />
        <button className="w-full bg-accent text-black py-3 rounded font-semibold">
          Send message
        </button>
      </div>
    </section>
  );
}
