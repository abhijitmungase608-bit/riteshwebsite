"use client";

import { useEffect, useRef } from "react";
import { X, Film as FilmIcon } from "lucide-react";
import { Film, contactInfo, siteConfig } from "@/lib/data";

interface VideoModalProps {
  film: Film | null;
  onClose: () => void;
}

export default function VideoModal({ film, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (film) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [film, onClose]);

  if (!film) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-charcoal/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#1A1410] border border-brand-gold/30 rounded-2xl overflow-hidden shadow-2xl z-10 animate-scaleUp">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-full bg-brand-gold/20 text-brand-gold">
              <FilmIcon size={18} />
            </span>
            <div>
              <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                {film.title}
              </h3>
              <p className="text-xs text-white/60">{film.subtitle}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            src={film.src}
            poster={film.poster}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Footer info */}
        <div className="p-6 bg-[#1A1410] flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-white/10">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded bg-brand-gold/20 text-brand-gold mb-2">
              {film.category} • {film.duration}
            </span>
            <p className="text-sm text-white/80 leading-relaxed">
              {film.description}
            </p>
          </div>

          <div className="flex items-center gap-3 self-end md:self-auto">
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                `Hi ${siteConfig.name}, I loved the film "${film.title}" and would like to inquire for my wedding!`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal text-xs font-bold uppercase tracking-wider rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Inquire For Ritesh gurajarthi Photography
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
