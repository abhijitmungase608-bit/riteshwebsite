"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { PortfolioItem } from "@/lib/data";

interface ImageLightboxProps {
  items: PortfolioItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ImageLightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + items.length) % items.length);
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || items.length === 0) return null;

  const current = items[currentIndex];

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-2 sm:p-6 bg-brand-charcoal/95 backdrop-blur-md animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white/80 hover:text-white transition-all backdrop-blur"
        aria-label="Close Lightbox"
      >
        <X size={24} />
      </button>

      {/* Prev / Next buttons */}
      {items.length > 1 && (
        <>
          <button
            onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white/80 hover:text-white transition-all backdrop-blur"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={() => onNavigate((currentIndex + 1) % items.length)}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white/80 hover:text-white transition-all backdrop-blur"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}

      {/* Image and details container */}
      <div className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center animate-scaleUp">
        <div className="relative w-full h-[65vh] sm:h-[75vh]">
          <Image
            src={current.src}
            alt={current.title}
            fill
            unoptimized
            className="object-contain"
            priority
          />
        </div>

        {/* Caption */}
        <div className="mt-4 px-6 py-2 rounded-full bg-black/60 backdrop-blur border border-white/10 flex items-center gap-4 text-white text-sm">
          <span className="font-serif font-semibold">{current.title}</span>
          <span className="text-white/40">•</span>
          <span className="text-brand-gold-light flex items-center gap-1 text-xs">
            <MapPin size={12} /> {current.location}
          </span>
          <span className="text-white/40">•</span>
          <span className="text-white/60 text-xs">
            {currentIndex + 1} of {items.length}
          </span>
        </div>
      </div>
    </div>
  );
}
