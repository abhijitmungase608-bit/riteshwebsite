import BookUsForm from "@/components/BookUsForm";
import { HelpCircle } from "lucide-react";

export const metadata = {
  title: "Book Us | Wedding Enquiry Form | Ritesh Gujarathi Photography",
  description:
    "Check availability and get a customized quote for your wedding photography and cinematic film package with Ritesh Gujarathi.",
};

const faqs = [
  {
    q: "How early should we book our wedding dates?",
    a: "We recommend booking 4 to 8 months in advance, especially for popular peak season dates (October through March) as our calendar fills quickly.",
  },
  {
    q: "Do you travel across India and internationally for destination weddings?",
    a: "Yes, absolutely! We love traveling and have captured weddings across Rajasthan, Goa, Kerala, Maharashtra, Gujarat, and international destinations.",
  },
  {
    q: "What is your delivery turnaround timeline?",
    a: "We provide a sneak peek of 20-30 edited photos within 5 days of your wedding. The complete curated collection of edited photos and cinematic teaser is delivered within 4-6 weeks.",
  },
  {
    q: "Can we customize our photography and film package?",
    a: "Yes! Every wedding is unique. We tailor our packages according to your events, guest count, locations, and personal vision.",
  },
];

export default function BookUsPage() {
  return (
    <main className="py-6 sm:py-10">
      {/* Wedding Enquiry Form */}
      <BookUsForm />

      {/* Frequently Asked Questions */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/15 text-brand-gold-dark text-xs uppercase tracking-widest mb-3">
            <HelpCircle size={13} />
            <span>Got Questions?</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/70 border border-brand-brown/15 shadow-sm space-y-2"
            >
              <h4 className="font-serif text-base sm:text-lg font-bold text-brand-dark">
                {faq.q}
              </h4>
              <p className="text-xs sm:text-sm text-brand-dark/75 leading-relaxed font-light">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}