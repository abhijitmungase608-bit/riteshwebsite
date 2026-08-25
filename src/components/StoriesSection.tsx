"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import { stories, Story } from "@/lib/data";
import StoryModal from "./StoryModal";

interface StoriesSectionProps {
  limit?: number;
  showAllLink?: boolean;
}

export default function StoriesSection({
  limit,
  showAllLink = false,
}: StoriesSectionProps) {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const displayedStories = limit ? stories.slice(0, limit) : stories;

  return (
    <section className="py-12 sm:py-20 md:py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">
            Stories
          </h2>

          <div className="w-16 h-[1.5px] bg-brand-brown mx-auto my-3 sm:my-4 opacity-80" />

          <p className="text-brand-brown font-serif text-sm sm:text-lg mb-2 italic">
            A Love Story Worth Capturing
          </p>

          <p className="text-brand-dark/70 font-light text-xs sm:text-base leading-relaxed px-2">
            A wedding is more than a celebration. It's a beautiful story of love, connection, and new beginnings. We capture not just how it looks, but how it feels — timeless moments made eternal.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl overflow-hidden border border-brand-brown/15 shadow-sm hover:shadow-luxury-hover transition-all duration-300 flex flex-col group"
            >
              {/* Photo */}
              <div
                className="relative aspect-[4/3] w-full overflow-hidden bg-brand-dark/5 cursor-pointer"
                onClick={() => setSelectedStory(story)}
              >
                <Image
                  src={story.img}
                  alt={story.couple}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <span className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[11px] font-semibold text-brand-brown shadow-sm">
                  {story.date}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-7 flex flex-col flex-1">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark mb-1 group-hover:text-brand-brown transition-colors">
                  {story.couple}
                </h3>

                <p className="text-brand-brown/80 text-xs sm:text-sm mb-3 flex items-center gap-1.5 font-medium">
                  <MapPin size={13} className="text-brand-gold" /> {story.venue}
                </p>

                <p className="text-brand-dark/70 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-2">
                  {story.description}
                </p>

                {/* View Story Button */}
                <button
                  onClick={() => setSelectedStory(story)}
                  className="mt-auto w-full py-2.5 px-5 rounded-full border border-brand-brown/40 text-brand-brown hover:bg-brand-brown hover:text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 text-center flex items-center justify-center gap-2 group-hover:border-brand-brown active:scale-95"
                >
                  <span>View Story</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Optional View All Link */}
        {showAllLink && (
          <div className="mt-10 sm:mt-12 text-center">
            <a
              href="/stories"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-brand-brown text-white font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-brand-dark transition-all shadow hover:shadow-md"
            >
              <span>Explore All Love Stories</span>
              <ArrowRight size={16} />
            </a>
          </div>
        )}
      </div>

      {/* Interactive Story Gallery Modal */}
      <StoryModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
      />
    </section>
  );
}