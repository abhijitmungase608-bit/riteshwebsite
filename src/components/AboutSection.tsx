"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, Camera, Heart, Video } from "lucide-react";
import { founderData } from "@/lib/data";

interface AboutSectionProps {
  showStats?: boolean;
  showFeatures?: boolean;
}

export default function AboutSection({
  showStats = true,
  showFeatures = true,
}: AboutSectionProps) {
  return (
    <section className="py-12 sm:py-20 md:py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Founder Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Founder Photo & Caption */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Founder Caption above photo */}
            <div className="mb-4 sm:mb-5 text-center">
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-widest text-brand-dark uppercase">
                {founderData.name}
              </h3>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-brand-brown font-semibold mt-1">
                {founderData.title}
              </p>
            </div>

            <div className="relative w-full max-w-[260px] sm:max-w-[290px] md:max-w-[310px] aspect-[3/4] rounded-2xl overflow-hidden shadow-luxury border-2 border-brand-brown/20 bg-brand-dark/5 group">
              <Image
                src={founderData.image}
                alt={founderData.name}
                fill
                unoptimized
                className="object-cover object-top group-hover:scale-105 transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </div>
          </div>

          {/* Right Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">
              Meet Our Founder
            </h2>

            {/* Decorative Diamond Divider */}
            <div className="flex items-center gap-3 my-4 sm:my-5">
              <span className="w-12 sm:w-16 h-[1.5px] bg-brand-brown opacity-70" />
              <span className="text-brand-brown text-sm">❖</span>
              <span className="w-12 sm:w-16 h-[1.5px] bg-brand-brown opacity-70" />
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-brand-dark/80 text-base sm:text-lg leading-relaxed font-light">
              <p>{founderData.bioParagraph1}</p>
              <p>{founderData.bioParagraph2}</p>
            </div>

            {/* Quick action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/portfolio"
                className="px-7 py-3 rounded-full bg-brand-brown hover:bg-brand-dark text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all shadow hover:shadow-md"
              >
                View Portfolio
              </Link>
              <Link
                href="/book-us"
                className="px-7 py-3 rounded-full border border-brand-brown/40 text-brand-brown hover:bg-brand-brown/10 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Statistics Bar */}
        {showStats && (
          <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-white/80 border border-brand-brown/15 shadow-luxury">
            {founderData.stats.map((stat, i) => (
              <div key={i} className="text-center p-3 sm:p-4 border-r last:border-r-0 border-brand-brown/10">
                <span className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-brand-brown block">
                  {stat.value}
                </span>
                <span className="text-[11px] sm:text-xs text-brand-muted uppercase tracking-wider font-medium mt-1 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Feature Highlights */}
        {showFeatures && (
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {founderData.features.map((feature, idx) => {
              const icons = [Camera, Video, Award, Heart];
              const IconComp = icons[idx % icons.length];
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/70 border border-brand-brown/10 hover:border-brand-gold/50 transition-all hover:shadow-md group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-brown/10 group-hover:bg-brand-brown text-brand-brown group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                    <IconComp size={22} />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-dark mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}