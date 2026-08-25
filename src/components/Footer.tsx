"use client";

import Link from "next/link";
import { InstagramIcon, WhatsAppIcon, YouTubeIcon, FacebookIcon } from "./SocialIcons";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig, contactInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#18120E] text-white border-t border-brand-brown/40 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative top accent line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white block">
                {siteConfig.name}
              </span>
              <span className="block text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-brand-gold font-bold mt-0.5">
                Photography & Films
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3 pt-2 text-brand-gold-light">
              <a
                href={contactInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-charcoal flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <a
                href={contactInfo.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 hover:text-white flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <YouTubeIcon size={18} />
              </a>
              <a
                href={contactInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3.5">
            <h4 className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-brand-gold-light">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-normal">
              <li>
                <Link href="/" className="hover:text-brand-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-gold transition-colors">
                  About Founder
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-brand-gold transition-colors">
                  Photo Portfolio
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-brand-gold transition-colors">
                  Love Stories
                </Link>
              </li>
              <li>
                <Link href="/films" className="hover:text-brand-gold transition-colors">
                  Cinematic Films
                </Link>
              </li>
              <li>
                <Link href="/book-us" className="hover:text-brand-gold transition-colors">
                  Book Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Specializations */}
          <div className="space-y-3.5">
            <h4 className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-brand-gold-light">
              Specializations
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-light leading-relaxed">
              <li>• Destination Wedding Photography</li>
              <li>• 4K Cinematic Wedding Films</li>
              <li>• Pre-Wedding Concept Shoots</li>
              <li>• Traditional Rituals & Pheras</li>
              <li>• Haldi & Sangeet Celebrations</li>
              <li>• Fine-Art Heirloom Albums</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3.5">
            <h4 className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-brand-gold-light">
              Studio & Inquiries
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-white/80">
              <p className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brand-gold flex-shrink-0 mt-0.5" />
                <span>{contactInfo.shortAddress}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone size={16} className="text-brand-gold flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-brand-gold font-medium">
                  {contactInfo.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail size={16} className="text-brand-gold flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-brand-gold">
                  {contactInfo.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 text-center sm:text-left">
          <p>
            Copyright © {new Date().getFullYear()} {siteConfig.fullName}. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/book-us" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:underline font-semibold"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}