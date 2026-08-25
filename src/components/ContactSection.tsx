"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { WhatsAppIcon, InstagramIcon, FacebookIcon, YouTubeIcon } from "./SocialIcons";
import { contactInfo } from "@/lib/data";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section className="py-12 sm:py-20 md:py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">
            Contact Us
          </h2>
          <div className="w-16 h-[1.5px] bg-brand-brown mx-auto my-3 sm:my-4 opacity-80" />
          <p className="text-brand-dark/70 font-light text-xs sm:text-base leading-relaxed px-2">
            Let's create timeless memories together. Reach out to discuss your wedding dates, films, or schedule an in-person consultation in Ahilyanagar & Pune.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column: Studio & Contact Information Cards */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            {/* Main Info Card */}
            <div className="bg-white/80 backdrop-blur-md border border-brand-brown/15 rounded-3xl p-6 sm:p-9 shadow-luxury space-y-5 sm:space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-brand-brown/10 text-brand-brown flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-brand-dark text-base sm:text-lg">
                    Direct Phone / WhatsApp
                  </h4>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="block text-brand-brown font-semibold hover:underline transition-colors text-sm sm:text-base mt-0.5"
                  >
                    {contactInfo.phone}
                  </a>
                  <span className="text-xs text-brand-muted">Available 10:00 AM - 8:00 PM</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-brand-brown/10 text-brand-brown flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-brand-dark text-base sm:text-lg">
                    Official Email
                  </h4>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="block text-brand-dark/80 hover:text-brand-brown transition-colors text-xs sm:text-base mt-0.5"
                  >
                    {contactInfo.email}
                  </a>
                  <span className="text-xs text-brand-muted">Inquiries & Booking Responses</span>
                </div>
              </div>

              {/* Location Address */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-brand-brown/10 text-brand-brown flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-brand-dark text-base sm:text-lg">
                    Location & Service Area
                  </h4>
                  <p className="text-brand-dark/80 text-xs sm:text-base leading-relaxed mt-0.5 font-medium">
                    {contactInfo.address}
                  </p>
                  <span className="text-xs text-brand-muted">Available for Destination Weddings Worldwide</span>
                </div>
              </div>

              {/* Studio Hours */}
              <div className="flex items-start gap-3.5 sm:gap-4 pt-4 border-t border-brand-brown/10">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-brand-gold/15 text-brand-gold-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-brand-dark text-base sm:text-lg">
                    Studio Timings
                  </h4>
                  <p className="text-brand-dark/75 text-xs sm:text-sm mt-0.5">
                    {contactInfo.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout Card */}
            <div className="bg-emerald-50/85 border border-emerald-200/80 rounded-3xl p-5 sm:p-7 shadow-sm flex items-center justify-between gap-3 sm:gap-4">
              <div className="space-y-0.5">
                <h5 className="font-serif font-bold text-emerald-950 text-sm sm:text-base">
                  Need an Instant Reply?
                </h5>
                <p className="text-[11px] sm:text-xs text-emerald-800/80">
                  Chat directly with Mr. Ritesh Gujarathi on WhatsApp
                </p>
              </div>
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-5 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md flex-shrink-0"
              >
                <WhatsAppIcon size={17} />
                <span>Chat Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: "Have questions? Get in touch!" Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/85 backdrop-blur-md border border-brand-brown/15 rounded-3xl p-6 sm:p-10 shadow-luxury flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold font-bold mb-2">
                  <Sparkles size={13} />
                  <span>Send a Message</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark mb-1.5 sm:mb-2">
                  Have questions? Get in touch!
                </h3>
                <p className="text-xs sm:text-sm text-brand-dark/70 font-light mb-6 sm:mb-8">
                  Fill out the form below and we will get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="text-center py-12 px-4 space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={34} />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-brand-dark">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-brand-dark/70 text-sm sm:text-base max-w-md mx-auto">
                      Thank you, {form.name}! We have received your message. Mr. Ritesh Gujarathi will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-7 py-3 bg-brand-brown text-white text-xs uppercase font-semibold rounded-xl hover:bg-brand-dark transition-all shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div>
                      <label className="block text-xs font-semibold text-brand-dark/80 uppercase tracking-wider mb-1.5 sm:mb-2">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 sm:py-3.5 bg-brand-cream/70 border border-brand-brown/20 rounded-xl text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-brown transition-all text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-brand-dark/80 uppercase tracking-wider mb-1.5 sm:mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="your.email@example.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 sm:py-3.5 bg-brand-cream/70 border border-brand-brown/20 rounded-xl text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-brown transition-all text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-brand-dark/80 uppercase tracking-wider mb-1.5 sm:mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 sm:py-3.5 bg-brand-cream/70 border border-brand-brown/20 rounded-xl text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-brown transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-dark/80 uppercase tracking-wider mb-1.5 sm:mb-2">
                        Message / Project Details
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your wedding date, venue or ask any questions..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 sm:py-3.5 bg-brand-cream/70 border border-brand-brown/20 rounded-xl text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-brown transition-all text-sm resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 sm:py-4 bg-brand-brown hover:bg-brand-dark text-white rounded-xl font-semibold tracking-wider uppercase text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-luxury-hover flex items-center justify-center gap-2 hover:scale-[1.01]"
                      >
                        {loading ? (
                          <span>Sending Message...</span>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send size={16} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}