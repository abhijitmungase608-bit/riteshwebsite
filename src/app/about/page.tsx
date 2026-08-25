import AboutSection from "@/components/AboutSection";

export const metadata = {
  title: "About Us | Meet Our Founder Ritesh Gujarathi | Ritesh Gujarathi Photography",
  description:
    "Discover the vision, journey, and cinematic artistry behind Ritesh Gujarathi Photography led by founder Mr. Ritesh Gujarathi.",
};

export default function AboutPage() {
  return (
    <main className="py-6 sm:py-10">
      {/* Page Title Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-4">
        <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold">
          About Our Founder
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-dark mt-2">
          Our Story & Philosophy
        </h1>
        <div className="w-16 h-[1.5px] bg-brand-brown mx-auto my-4 opacity-80" />
      </div>

      {/* Main Founder Showcase */}
      <AboutSection showStats={true} showFeatures={true} />

      {/* Behind The Scenes & Workflow */}
      <section className="py-16 bg-white/60 border-t border-brand-brown/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark">
              How We Create Timeless Magic
            </h3>
            <p className="text-brand-dark/70 text-sm sm:text-base mt-2 font-light">
              From our first coffee chat to handing over your custom heirloom album.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-brand-cream border border-brand-brown/15 shadow-sm space-y-4">
              <span className="font-serif text-4xl font-bold text-brand-gold">01</span>
              <h4 className="font-serif text-xl font-bold text-brand-dark">
                Pre-Wedding Connection
              </h4>
              <p className="text-brand-dark/70 text-sm leading-relaxed font-light">
                We spend time understanding your love story, your vibe, and your family traditions to personalize your wedding coverage.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-cream border border-brand-brown/15 shadow-sm space-y-4">
              <span className="font-serif text-4xl font-bold text-brand-gold">02</span>
              <h4 className="font-serif text-xl font-bold text-brand-dark">
                Unobtrusive Candid Filming
              </h4>
              <p className="text-brand-dark/70 text-sm leading-relaxed font-light">
                On the big day, we blend into the celebration like friends, capturing genuine laughter and authentic emotional moments without posing interruptions.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-cream border border-brand-brown/15 shadow-sm space-y-4">
              <span className="font-serif text-4xl font-bold text-brand-gold">03</span>
              <h4 className="font-serif text-xl font-bold text-brand-dark">
                Artisanal Post-Production
              </h4>
              <p className="text-brand-dark/70 text-sm leading-relaxed font-light">
                Every photograph is individually color-corrected and retouched. Our cinematic teasers and feature films are scored to timeless soundtracks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}