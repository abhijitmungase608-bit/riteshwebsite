"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  X,
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Heart,
  Maximize2,
  Minimize2,
  Expand,
  Share2,
} from "lucide-react";
import { Story, contactInfo, siteConfig } from "@/lib/data";

interface StoryModalProps {
  story: Story | null;
  onClose: () => void;
}

export default function StoryModal({ story, onClose }: StoryModalProps) {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [objectFitMode, setObjectFitMode] = useState<"contain" | "cover">("contain");
  const [isFullscreenPhoto, setIsFullscreenPhoto] = useState(false);
  const [copied, setCopied] = useState(false);
  const thumbnailContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setActivePhotoIndex(0);
    setIsFullscreenPhoto(false);
  }, [story]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const activeThumb = thumbnailContainerRef.current.children[activePhotoIndex] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activePhotoIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isFullscreenPhoto) {
          setIsFullscreenPhoto(false);
        } else {
          onClose();
        }
      }
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
  }, [story, isFullscreenPhoto, onClose]);

  if (!story) return null;

  const currentPhoto = story.gallery[activePhotoIndex] || story.img;

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${story.couple} - Wedding Story | ${siteConfig.name}`,
          text: story.description,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-charcoal/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-5xl max-h-[94vh] bg-[#FAF8F5] border border-brand-brown/20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col animate-scaleUp">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-brand-brown/10 bg-white/90 backdrop-blur shrink-0">
          <div className="flex items-center gap-3">
            <span className="p-2 sm:p-2.5 rounded-full bg-brand-brown/10 text-brand-brown shrink-0">
              <Heart size={18} className="fill-brand-brown/40" />
            </span>
            <div>
              <h3 className="font-serif text-lg sm:text-2xl font-bold text-brand-dark leading-tight">
                {story.couple}
              </h3>
              <p className="text-[11px] sm:text-xs text-brand-brown flex items-center gap-1 mt-0.5 font-medium">
                <MapPin size={12} className="text-brand-gold shrink-0" />
                <span>{story.venue}</span>
                <span className="text-brand-brown/40">•</span>
                <span>{story.location}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Share button */}
            <button
              onClick={handleShare}
              className="p-2 rounded-full text-brand-dark/70 hover:text-brand-brown hover:bg-brand-brown/10 transition-colors relative"
              title="Share Story"
              aria-label="Share story"
            >
              <Share2 size={18} />
              {copied && (
                <span className="absolute -bottom-7 right-0 text-[10px] bg-brand-dark text-white px-2 py-0.5 rounded shadow whitespace-nowrap">
                  Link Copied!
                </span>
              )}
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-2 rounded-full text-brand-dark/70 hover:text-brand-brown hover:bg-brand-brown/10 transition-colors"
              aria-label="Close story"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 flex-1 custom-scrollbar">
          {/* Main Photo Showcase Container */}
          <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-brand-charcoal border border-brand-brown/20 shadow-inner flex items-center justify-center min-h-[320px] sm:min-h-[460px] md:min-h-[520px] max-h-[60vh] select-none">
            {/* Ambient Blurred Background of the same photo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                src={currentPhoto}
                alt=""
                fill
                unoptimized
                className="object-cover blur-2xl opacity-35 scale-110"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Sharp Foreground Image (Contain Mode ensures zero cutoffs) */}
            <div className="relative w-full h-[320px] sm:h-[460px] md:h-[520px]">
              <Image
                src={currentPhoto}
                alt={`${story.couple} - Photo ${activePhotoIndex + 1}`}
                fill
                unoptimized
                className={`transition-all duration-300 ${
                  objectFitMode === "contain" ? "object-contain" : "object-cover"
                }`}
                priority
              />
            </div>

            {/* Floating Top Controls (Fit / Fill Toggle & Fullscreen) */}
            <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
              <button
                onClick={() =>
                  setObjectFitMode((prev) => (prev === "contain" ? "cover" : "contain"))
                }
                className="px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/85 text-white/90 text-[11px] font-medium backdrop-blur border border-white/20 transition-all flex items-center gap-1.5"
                title={
                  objectFitMode === "contain"
                    ? "Click to fill frame"
                    : "Click to fit entire photo (no crop)"
                }
              >
                {objectFitMode === "contain" ? (
                  <>
                    <Expand size={13} />
                    <span className="hidden sm:inline">Fit (Full Photo)</span>
                  </>
                ) : (
                  <>
                    <Minimize2 size={13} />
                    <span className="hidden sm:inline">Fill Screen</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setIsFullscreenPhoto(true)}
                className="p-2 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur border border-white/20 transition-all"
                title="View Fullscreen"
                aria-label="View Fullscreen"
              >
                <Maximize2 size={15} />
              </button>
            </div>

            {/* Carousel Navigation Arrows */}
            {story.gallery.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActivePhotoIndex(
                      (prev) => (prev - 1 + story.gallery.length) % story.gallery.length
                    )
                  }
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/55 hover:bg-brand-brown text-white backdrop-blur transition-all border border-white/15 active:scale-95 shadow-lg"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={() =>
                    setActivePhotoIndex((prev) => (prev + 1) % story.gallery.length)
                  }
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/55 hover:bg-brand-brown text-white backdrop-blur transition-all border border-white/15 active:scale-95 shadow-lg"
                  aria-label="Next photo"
                >
                  <ChevronRight size={22} />
                </button>

                {/* Counter Pill */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-3 px-3.5 py-1 bg-black/70 backdrop-blur rounded-full text-xs font-mono font-medium text-white border border-white/10 shadow">
                  {activePhotoIndex + 1} / {story.gallery.length}
                </div>
              </>
            )}
          </div>

          {/* Thumbnail Horizontal Carousel Strip */}
          {story.gallery.length > 1 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-brand-brown font-medium px-1">
                <span>Story Gallery ({story.gallery.length} Photos)</span>
                <span className="text-brand-dark/50 text-[11px]">Click any photo to view</span>
              </div>

              <div
                ref={thumbnailContainerRef}
                className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 pt-1 px-1 scroll-smooth"
                style={{ scrollbarWidth: "thin" }}
              >
                {story.gallery.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`relative w-20 h-16 sm:w-24 sm:h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-200 bg-brand-charcoal ${
                      activePhotoIndex === idx
                        ? "border-brand-brown ring-2 ring-brand-gold/60 scale-105 shadow-md"
                        : "border-transparent opacity-60 hover:opacity-100 hover:scale-102"
                    }`}
                  >
                    <Image
                      src={photo}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                    <span className="absolute bottom-1 right-1 text-[9px] font-mono px-1 py-0.2 bg-black/60 text-white rounded">
                      {idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Narrative, Quote & Booking CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4 border-t border-brand-brown/15">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-brand-brown opacity-60" />
                <h4 className="font-serif text-xl font-bold text-brand-dark">
                  The Chronicle
                </h4>
              </div>

              <p className="text-brand-dark/85 leading-relaxed text-sm sm:text-base font-light">
                {story.description}
              </p>

              {story.quote && (
                <blockquote className="border-l-3 border-brand-gold bg-brand-brown/5 p-4 rounded-r-xl italic text-brand-brown text-sm sm:text-base leading-relaxed">
                  "{story.quote}"
                </blockquote>
              )}
            </div>

            {/* Highlights Card */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-brand-brown/15 shadow-sm space-y-4 text-sm flex flex-col justify-between">
              <div>
                <h5 className="font-serif font-bold text-brand-dark uppercase tracking-wider text-xs border-b border-brand-brown/10 pb-2">
                  Event Details
                </h5>
                <div className="mt-3 space-y-2.5 text-brand-dark/80 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={15} className="text-brand-brown shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-brand-dark">{story.venue}</p>
                      <p className="text-brand-muted text-xs">{story.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 pt-1">
                    <Calendar size={15} className="text-brand-brown shrink-0" />
                    <span>{story.date}</span>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Hi ${siteConfig.founderName}, I saw the story of ${story.couple} on your website and would like to check dates for my wedding & pre-wedding shoot!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-brand-brown hover:bg-brand-dark text-white rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow hover:shadow-md active:scale-98"
              >
                Inquire For Similar Shoot
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Photo Zoom Overlay */}
      {isFullscreenPhoto && (
        <div className="fixed inset-0 z-[120] bg-black/95 flex items-center justify-center p-4 animate-fadeIn">
          <button
            onClick={() => setIsFullscreenPhoto(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors z-20 backdrop-blur"
            aria-label="Close fullscreen"
          >
            <X size={26} />
          </button>

          {story.gallery.length > 1 && (
            <>
              <button
                onClick={() =>
                  setActivePhotoIndex(
                    (prev) => (prev - 1 + story.gallery.length) % story.gallery.length
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors z-20 backdrop-blur"
                aria-label="Previous image"
              >
                <ChevronLeft size={30} />
              </button>
              <button
                onClick={() =>
                  setActivePhotoIndex((prev) => (prev + 1) % story.gallery.length)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors z-20 backdrop-blur"
                aria-label="Next image"
              >
                <ChevronRight size={30} />
              </button>
            </>
          )}

          <div className="relative w-full h-[85vh] max-w-6xl">
            <Image
              src={currentPhoto}
              alt={story.couple}
              fill
              unoptimized
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/70 border border-white/20 text-white text-xs font-mono">
            {activePhotoIndex + 1} / {story.gallery.length}
          </div>
        </div>
      )}
    </div>
  );
}

