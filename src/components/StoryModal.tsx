"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, MapPin, Calendar, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Story, contactInfo } from "@/lib/data";

interface StoryModalProps {
  story: Story | null;
  onClose: () => void;
}

export default function StoryModal({ story, onClose }: StoryModalProps) {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  useEffect(() => {
    setActivePhotoIndex(0);
  }, [story]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (!story) return;
      if (e.key === "ArrowRight") {
        setActivePhotoIndex((prev) => (prev + 1) % story.gallery.length);
      }
      if (e.key === "ArrowLeft") {
        setActivePhotoIndex((prev) => (prev - 1 + story.gallery.length) % story.gallery.length);
      }
    };

    if (story) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [story, onClose]);

  if (!story) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-charcoal/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-brand-cream border border-brand-brown/20 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col animate-scaleUp">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-brown/10 bg-white/70 backdrop-blur">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-full bg-brand-brown/10 text-brand-brown">
              <Heart size={18} className="fill-brand-brown/30" />
            </span>
            <div>
              <h3 className="font-serif text-2xl font-bold text-brand-dark">
                {story.couple}
              </h3>
              <p className="text-xs text-brand-muted flex items-center gap-1">
                <MapPin size={12} className="text-brand-gold" /> {story.venue}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-brand-dark/60 hover:text-brand-dark hover:bg-brand-brown/10 transition-colors"
            aria-label="Close story"
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1">
          {/* Main Photo Carousel */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden bg-black/10 border border-brand-brown/15 shadow-inner">
            <Image
              src={story.gallery[activePhotoIndex] || story.img}
              alt={`${story.couple} - Photo ${activePhotoIndex + 1}`}
              fill
              unoptimized
              className="object-cover transition-opacity duration-300"
              priority
            />

            {/* Carousel Navigation Arrows */}
            {story.gallery.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActivePhotoIndex(
                      (prev) => (prev - 1 + story.gallery.length) % story.gallery.length
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur transition-all"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() =>
                    setActivePhotoIndex((prev) => (prev + 1) % story.gallery.length)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur transition-all"
                  aria-label="Next photo"
                >
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/60 backdrop-blur rounded-full text-xs text-white">
                  {activePhotoIndex + 1} / {story.gallery.length}
                </div>
              </>
            )}
          </div>

          {/* Thumbnail Strip */}
          {story.gallery.length > 1 && (
            <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2">
              {story.gallery.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhotoIndex(idx)}
                  className={`relative w-20 h-14 sm:w-24 sm:h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                    activePhotoIndex === idx
                      ? "border-brand-brown ring-2 ring-brand-gold/40 scale-105"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={photo} alt="" fill unoptimized className="object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Narrative & Quote */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 border-t border-brand-brown/10">
            <div className="md:col-span-2 space-y-3">
              <h4 className="font-serif text-lg font-bold text-brand-brown">
                The Story
              </h4>
              <p className="text-brand-dark/80 leading-relaxed text-sm sm:text-base">
                {story.description}
              </p>
              <blockquote className="border-l-2 border-brand-gold pl-4 italic text-brand-brown/90 text-sm py-1">
                "{story.quote}"
              </blockquote>
            </div>

            <div className="bg-white/60 p-5 rounded-xl border border-brand-brown/10 space-y-3 text-sm">
              <h5 className="font-serif font-bold text-brand-dark uppercase tracking-wider text-xs">
                Wedding Highlights
              </h5>
              <div className="space-y-2 text-brand-dark/75">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-brand-brown" />
                  <span>{story.venue}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-brand-brown" />
                  <span>{story.date}</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Hi, I saw the story of ${story.couple} on Ritesh Gujarathi Photography and would love to check availability for my wedding!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full text-center py-2.5 bg-brand-brown hover:bg-brand-dark text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Book Similar Coverage
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
