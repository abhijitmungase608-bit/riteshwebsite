"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Camera, ArrowRight } from "lucide-react";
import { InstagramIcon, WhatsAppIcon, YouTubeIcon, FacebookIcon } from "./SocialIcons";
import { siteConfig, contactInfo } from "@/lib/data";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Stories", href: "/stories" },
  { name: "Films", href: "/films" },
  { name: "Book Us", href: "/book-us" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-[#FAF7F2] border-b border-brand-brown/20 ${
          scrolled ? "shadow-md py-2.5 sm:py-3" : "py-3.5 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            {/* Camera Crest Badge */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-brown text-white flex items-center justify-center border-2 border-brand-gold/60 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform">
              <Camera size={18} className="text-white" />
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-[#1A1410] leading-tight">
                Ritesh <span className="text-brand-brown">Gujarathi</span>
              </span>
              <span className="text-[9px] sm:text-[10.5px] tracking-[0.22em] uppercase text-[#9E743A] font-bold">
                Photography & Films
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "text-brand-brown font-bold"
                      : "text-brand-dark/80 hover:text-brand-brown font-medium"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-brown rounded-full animate-fadeIn" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/book-us"
              className="px-5 py-2 rounded-full border-2 border-brand-brown/50 text-brand-brown hover:bg-brand-brown hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow"
            >
              Check Availability
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2.5 rounded-xl bg-brand-brown/15 hover:bg-brand-brown text-brand-dark hover:text-white border border-brand-brown/25 shadow-sm focus:outline-none active:scale-95 transition-all flex items-center justify-center"
            aria-label="Open navigation menu"
          >
            <Menu size={22} strokeWidth={2.4} className="text-brand-dark" />
          </button>
        </div>
      </header>

      {/* Full-Screen Opaque Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[120] bg-[#FAF7F2] flex flex-col justify-between overflow-y-auto p-6 animate-fadeIn">
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b border-brand-brown/20">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
            >
              <div className="w-9 h-9 rounded-full bg-brand-brown text-white flex items-center justify-center border border-brand-gold/60">
                <Camera size={18} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-brand-dark">
                  Ritesh <span className="text-brand-brown">Gujarathi</span>
                </span>
                <span className="text-[9px] tracking-[0.22em] uppercase text-brand-gold-dark font-bold -mt-0.5">
                  Photography & Films
                </span>
              </div>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-full bg-brand-brown/15 text-brand-dark hover:bg-brand-brown hover:text-white transition-colors"
              aria-label="Close navigation menu"
            >
              <X size={22} strokeWidth={2.4} />
            </button>
          </div>

          {/* Nav Links */}
          <div className="py-6 flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-serif py-3.5 px-4 rounded-xl transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-brand-brown text-white font-bold shadow-md"
                      : "text-brand-dark hover:bg-brand-brown/10 hover:text-brand-brown font-medium"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-gold-light" />
                  ) : (
                    <ArrowRight size={16} className="opacity-40" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-4 border-t border-brand-brown/20 space-y-3">
            <Link
              href="/book-us"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 text-center bg-brand-brown text-white font-bold rounded-xl shadow-md text-sm uppercase tracking-wider block"
            >
              Book Your Wedding
            </Link>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${contactInfo.phone}`}
                className="py-3 px-3 text-center border-2 border-brand-brown/30 text-brand-brown font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5"
              >
                <Phone size={14} /> <span>{contactInfo.phone}</span>
              </a>
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 text-center bg-[#25D366] text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm"
              >
                <WhatsAppIcon size={16} /> <span>WhatsApp</span>
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center justify-center gap-5 pt-3 text-brand-brown">
              <a
                href={contactInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-brand-brown/10 hover:bg-brand-brown hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={contactInfo.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-brand-brown/10 hover:bg-brand-brown hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <YouTubeIcon size={18} />
              </a>
              <a
                href={contactInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-brand-brown/10 hover:bg-brand-brown hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}