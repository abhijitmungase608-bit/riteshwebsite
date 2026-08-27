"use client";

import { useEffect, useRef, useState } from "react";
import {
  X,
  Film as FilmIcon,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Film, contactInfo, siteConfig } from "@/lib/data";

interface VideoModalProps {
  film: Film | null;
  onClose: () => void;
}

export default function VideoModal({ film, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    setIsPlaying(false);
    setProgress(0);

    if (film && videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsLoading(false);
          })
          .catch(() => {
            // Autoplay blocked by browser policy; user will click play
            setIsPlaying(false);
            setIsLoading(false);
          });
      }
    }
  }, [film]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === " " && film) {
        e.preventDefault();
        togglePlay();
      }
      if (e.key.toLowerCase() === "m" && film) {
        toggleMute();
      }
      if (e.key.toLowerCase() === "f" && film) {
        toggleFullscreen();
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
  }, [film, isPlaying, isMuted, onClose]);

  if (!film) return null;

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setCurrentTime(formatTime(current));
      if (total) {
        setProgress((current / total) * 100);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(formatTime(videoRef.current.duration));
      setIsLoading(false);
      setHasError(false);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setHasError(true));
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * (videoRef.current.duration || 0);
  };

  const handleRetry = () => {
    setHasError(false);
    setIsLoading(true);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-8 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-charcoal/95 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        ref={containerRef}
        className="relative w-full max-w-5xl bg-[#14100D] border border-brand-gold/30 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col animate-scaleUp"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 bg-black/50 backdrop-blur shrink-0">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-full bg-brand-gold/20 text-brand-gold shrink-0">
              <FilmIcon size={18} />
            </span>
            <div>
              <h3 className="font-serif text-base sm:text-xl font-bold text-white tracking-wide leading-tight">
                {film.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-white/60 mt-0.5">{film.subtitle}</p>
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

        {/* Video Player Box */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center group overflow-hidden select-none">
          <video
            ref={videoRef}
            poster={film.poster}
            playsInline
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onWaiting={() => setIsLoading(true)}
            onPlaying={() => {
              setIsLoading(false);
              setIsPlaying(true);
            }}
            onPause={() => setIsPlaying(false)}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
            onClick={togglePlay}
            className="w-full h-full object-contain cursor-pointer"
          >
            <source src={film.src} type="video/mp4" />
            <source src={film.src.replace(/\.(MOV|mov)$/i, ".mp4")} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Loading Spinner */}
          {isLoading && !hasError && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center gap-3 text-white pointer-events-none z-10">
              <Loader2 size={36} className="animate-spin text-brand-gold" />
              <p className="text-xs font-mono text-white/80">Buffering Cinematic Film...</p>
            </div>
          )}

          {/* Error State */}
          {hasError && (
            <div className="absolute inset-0 bg-black/85 flex flex-col items-center justify-center p-6 text-center text-white z-20 space-y-4">
              <div className="p-3 rounded-full bg-red-500/20 text-red-400">
                <AlertCircle size={32} />
              </div>
              <div className="max-w-md space-y-1">
                <h4 className="font-serif text-lg font-bold text-white">
                  Video Playback Notice
                </h4>
                <p className="text-xs text-white/70">
                  This video file is being loaded from local storage. If playback doesn't start automatically, please click retry below.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleRetry}
                  className="px-5 py-2 rounded-full bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <RotateCcw size={14} />
                  <span>Retry Playback</span>
                </button>
                <a
                  href={film.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium uppercase tracking-wider transition-all"
                >
                  Open in New Tab
                </a>
              </div>
            </div>
          )}

          {/* Big Center Play Button overlay when paused */}
          {!isPlaying && !isLoading && !hasError && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors z-10"
              aria-label="Play video"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-gold/90 text-brand-charcoal flex items-center justify-center shadow-2xl hover:scale-110 transition-transform pl-1">
                <Play size={32} className="fill-brand-charcoal" />
              </div>
            </button>
          )}

          {/* Custom Video Controls Bar */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            {/* Progress Bar */}
            <div
              onClick={handleSeek}
              className="relative w-full h-1.5 bg-white/30 hover:h-2.5 rounded-full cursor-pointer transition-all mb-3 overflow-hidden"
            >
              <div
                className="h-full bg-brand-gold transition-all duration-100 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-white text-xs">
              <div className="flex items-center gap-3 sm:gap-4">
                <button
                  onClick={togglePlay}
                  className="p-1 hover:text-brand-gold transition-colors"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} className="fill-white" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-1 hover:text-brand-gold transition-colors"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>

                <span className="font-mono text-[11px] text-white/80">
                  {currentTime} / {duration !== "0:00" ? duration : film.duration}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-white/10 text-[10px] uppercase tracking-wider font-semibold text-brand-gold-light">
                  {film.category}
                </span>

                <button
                  onClick={toggleFullscreen}
                  className="p-1 hover:text-brand-gold transition-colors"
                  title="Fullscreen (F)"
                  aria-label="Fullscreen"
                >
                  <Maximize size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-4 sm:p-6 bg-[#14100D] flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-white/10 shrink-0">
          <div className="max-w-2xl space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-brand-gold/20 text-brand-gold font-mono">
                {film.duration}
              </span>
              <span className="text-xs text-brand-gold-light font-medium uppercase tracking-wider">
                {film.category}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
              {film.description}
            </p>
          </div>

          <div className="flex items-center gap-3 self-end md:self-auto shrink-0">
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                `Hi ${siteConfig.founderName}, I watched the film "${film.title}" on your website and would love to check availability for cinematic film coverage!`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow hover:shadow-brand-gold/20 active:scale-98 inline-flex items-center gap-2"
            >
              Inquire For Cinematic Film
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

