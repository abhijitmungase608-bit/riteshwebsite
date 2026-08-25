import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import StoriesSection from "@/components/StoriesSection";
import FilmsSection from "@/components/FilmsSection";
import PortfolioSection from "@/components/PortfolioSection";
import Link from "next/link";
import { Heart, Sparkles, Star, Calendar, ArrowRight } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Meet Our Founder Section (Exact Match to Screenshot 1) */}
      <AboutSection showStats={true} showFeatures={true} />

      {/* 3. Featured Stories (Screenshot 5) */}
      <StoriesSection limit={3} showAllLink={true} />

      {/* 4. Cinematic Films Grid (Screenshot 4) */}
      <FilmsSection limit={6} />

      {/* 5. Portfolio Highlight Grid */}
      <PortfolioSection />

      {/* 6. Client Testimonials / Love Notes */}
      <section className="py-20 bg-brand-cream-dark/50 relative border-y border-brand-brown/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/15 text-brand-gold-dark text-xs uppercase tracking-widest mb-3">
              <Sparkles size={12} />
              <span>Kind Words</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark">
              Love Notes From Our Couples
            </h2>
            <div className="w-16 h-[1.5px] bg-brand-brown mx-auto my-4 opacity-80" />
            <p className="text-brand-dark/70 text-sm sm:text-base font-light">
              Nothing means more to us than the happiness and cherished words of our wonderful couples.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white/85 border border-brand-brown/15 shadow-luxury flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* 5-star rating */}
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-500" />
                    ))}
                  </div>

                  <p className="text-brand-dark/80 text-sm sm:text-base italic leading-relaxed font-light">
                    "{t.review}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-brown/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-brand-dark text-base">
                      {t.couple}
                    </h4>
                    <p className="text-xs text-brand-brown font-medium">
                      {t.event}
                    </p>
                  </div>
                  <div className="p-2 rounded-full bg-brand-brown/10 text-brand-brown">
                    <Heart size={16} className="fill-brand-brown/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call To Action Consultation Banner */}
      <section className="py-20 bg-brand-charcoal text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-brown/25 via-transparent to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-6">
          <span className="text-brand-gold text-xs uppercase tracking-[0.3em] font-semibold">
            Let's Make Magic Together
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Are You Ready To Create Memories That Last Forever?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto font-light text-sm sm:text-base leading-relaxed">
            Our wedding calendar for the upcoming season is filling fast. Get in touch with us to check availability for your special dates.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book-us"
              className="px-8 py-4 bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal font-bold rounded-full text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:scale-105"
            >
              Check Date & Get Quote
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-medium rounded-full text-xs sm:text-sm uppercase tracking-wider transition-all duration-300"
            >
              Contact Studio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}