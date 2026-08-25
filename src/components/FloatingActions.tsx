"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { WhatsAppIcon } from "./SocialIcons";
import { contactInfo } from "@/lib/data";

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center gap-2.5 sm:gap-3 pointer-events-auto">
      {/* WhatsApp Quick Chat */}
      <a
        href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
          "Hello! I am planning a wedding and would love to know more about your photography & film packages."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 group relative"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={22} />
        <span className="hidden sm:block absolute right-14 bg-brand-charcoal text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-md">
          Chat with Us
        </span>
      </a>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-brown hover:bg-brand-dark text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all duration-300 animate-fadeIn"
          aria-label="Back to Top"
        >
          <ArrowUp size={16} />
        </button>
      )}
    </div>
  );
}
