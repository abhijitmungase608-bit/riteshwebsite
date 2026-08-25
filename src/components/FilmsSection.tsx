"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { films, Film } from "@/lib/data";
import VideoModal from "./VideoModal";

interface FilmsSectionProps {
  limit?: number;
}

export default function FilmsSection({ limit }: FilmsSectionProps) {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  const displayedFilms = limit ? films.slice(0, limit) : films;

  return (
    <section className="py-12 sm:py-20 md:py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">
            Timeless Love Captured on Film
          </h2>

          <div className="w-16 h-[1.5px] bg-brand-brown mx-auto my-3 sm:my-4 opacity-80" />

          <p className="text-brand-dark/70 font-light text-xs sm:text-base leading-relaxed px-2">
            Cinematic love stories that capture the emotion, joy, and beauty of your special day. Each film is crafted with care to preserve your precious moments forever.
          </p>
        </div>

        {/* Films Grid */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {displayedFilms.map((film) => (
            <div
              key={film.id}
              onClick={() => setSelectedFilm(film)}
              className="group relative aspect-video rounded-2xl overflow-hidden shadow-luxury border border-brand-brown/15 cursor-pointer bg-brand-charcoal transition-all duration-500 hover:shadow-luxury-hover hover:-translate-y-1 active:scale-98"
            >
              {/* Poster Image */}
              <Image
                src={film.poster}
                alt={film.title}
                fill
                unoptimized
                className="object-cover group-hover:scale-108 transition-transform duration-700 brightness-90 group-hover:brightness-75"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 group-hover:from-black/90 transition-colors" />

              {/* Top Badge */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-black/50 backdrop-blur text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold text-brand-gold-light border border-white/10">
                  {film.category}
                </span>
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-black/50 backdrop-blur text-[9px] sm:text-[10px] font-mono text-white/80 border border-white/10">
                  {film.duration}
                </span>
              </div>

              {/* Centered Play Button & Title */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                {/* Translucent circular play button */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-115 group-hover:bg-brand-gold group-hover:text-brand-charcoal transition-all duration-300 shadow-lg">
                  <Play
                    size={20}
                    className="fill-white group-hover:fill-brand-charcoal ml-1 transition-colors"
                  />
                </div>

                {/* Film Title */}
                <h3 className="font-serif text-base sm:text-xl md:text-2xl font-bold tracking-widest text-white uppercase drop-shadow-md">
                  {film.title}
                </h3>

                {/* Subtitle */}
                <p className="text-[11px] sm:text-xs text-white/80 font-light mt-0.5 sm:mt-1 tracking-wide line-clamp-1 drop-shadow">
                  {film.subtitle}
                </p>
              </div>

              {/* Bottom Bar */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Video Modal Player */}
      <VideoModal
        film={selectedFilm}
        onClose={() => setSelectedFilm(null)}
      />
    </section>
  );
}