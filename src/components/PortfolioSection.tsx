"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, MapPin } from "lucide-react";
import { portfolioItems, portfolioCategories } from "@/lib/data";
import ImageLightbox from "./ImageLightbox";

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-12 sm:py-20 md:py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">
            Portfolio
          </h2>

          <div className="w-16 h-[1.5px] bg-brand-brown mx-auto my-3 sm:my-4 opacity-80" />

          <p className="text-brand-dark/70 font-light text-xs sm:text-base leading-relaxed px-2">
            A curated collection of timeless memories, candid emotions, and royal grandeur from weddings across the world.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-brand-brown text-white shadow-md scale-105"
                  : "bg-white/80 text-brand-dark/80 hover:bg-brand-brown/10 hover:text-brand-brown border border-brand-brown/15"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-brand-dark/5 border border-brand-brown/15 shadow-luxury hover:shadow-luxury-hover cursor-pointer transition-all duration-500 hover:-translate-y-1 active:scale-98"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                unoptimized
                className="object-cover group-hover:scale-108 transition-transform duration-700"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 sm:p-6">
                <div className="flex justify-end">
                  <span className="p-2.5 rounded-full bg-white/20 backdrop-blur text-white">
                    <Maximize2 size={18} />
                  </span>
                </div>

                <div>
                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-brand-gold-light">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 flex items-center gap-1 mt-1">
                    <MapPin size={12} className="text-brand-gold" /> {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <ImageLightbox
        items={filteredItems}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </section>
  );
}