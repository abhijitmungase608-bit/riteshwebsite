"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Play, Sparkles } from "lucide-react";
import { heroSlides, siteConfig } from "@/lib/data";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative min-h-[75vh] sm:min-h-[82vh] md:min-h-[88vh] w-full flex items-center justify-center overflow-hidden bg-brand-charcoal">
      {/* Background Images with Crossfade & Ken Burns effect */}
      {heroSlides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100 scale-105" : "opacity-0 scale-100"
          } transition-transform duration-[7000ms]`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            unoptimized
            className="object-cover object-center brightness-[0.65]"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Radial Gradient overlay for cinematic mood */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-black/30" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center flex flex-col items-center">
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-brand-gold/40 text-brand-gold-light text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6 animate-fadeIn">
          <Sparkles size={13} className="text-brand-gold" />
          <span>{siteConfig.subTagline}</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.15] max-w-4xl drop-shadow-lg animate-fadeIn">
          {slide.title}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-white/85 max-w-2xl font-light leading-relaxed drop-shadow animate-fadeIn px-2">
          {slide.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 animate-fadeIn">
          <Link
            href="/stories"
            className="px-6 sm:px-8 py-3 sm:py-3.5 bg-brand-brown hover:bg-brand-gold text-white font-medium rounded-full text-xs sm:text-base tracking-wide transition-all duration-300 shadow-lg hover:shadow-brand-brown/30 hover:scale-105 flex items-center gap-2"
          >
            <span>Explore Stories</span>
            <ChevronRight size={16} />
          </Link>

          <Link
            href="/films"
            className="px-6 sm:px-7 py-3 sm:py-3.5 bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 rounded-full text-xs sm:text-base font-medium tracking-wide transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Play size={15} className="fill-white" />
            <span>Watch Films</span>
          </Link>
        </div>

        {/* Slide Indicators */}
        <div className="mt-10 sm:mt-14 flex items-center gap-2.5 sm:gap-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentSlide === idx ? "w-7 sm:w-8 bg-brand-gold" : "w-2 sm:w-2.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom subtle gradient divider */}
      <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-12 bg-gradient-to-t from-brand-cream to-transparent" />
    </section>
  );
}