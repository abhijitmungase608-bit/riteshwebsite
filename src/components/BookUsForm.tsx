"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { WhatsAppIcon } from "./SocialIcons";
import { enquiryOptions, contactInfo, siteConfig } from "@/lib/data";

export default function BookUsForm() {
  const [formData, setFormData] = useState({
    groomName: "",
    brideName: "",
    phone: "",
    startDate: "",
    endDate: "",
    events: [] as string[],
    budget: "",
    location: "",
    service: "Both",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEventToggle = (event: string) => {
    setFormData((prev) => {
      const exists = prev.events.includes(event);
      return {
        ...prev,
        events: exists
          ? prev.events.filter((e) => e !== event)
          : [...prev.events, event],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Wedding Enquiry - ${siteConfig.fullName}*
🤵 Groom: ${formData.groomName || "N/A"}
👰 Bride: ${formData.brideName || "N/A"}
📞 Phone: ${formData.phone || "N/A"}
📅 Dates: ${formData.startDate || "N/A"} to ${formData.endDate || "N/A"}
📍 Location: ${formData.location || "N/A"}
🎉 Events: ${formData.events.length > 0 ? formData.events.join(", ") : "All"}
💰 Estimated Budget: ${formData.budget || "N/A"}
🎥 Service: ${formData.service}
📝 Notes: ${formData.notes || "Looking forward to capturing our big day!"}`;

    return encodeURIComponent(text);
  };

  return (
    <section className="py-12 sm:py-20 md:py-24 bg-brand-cream relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Form Container */}
        <div className="bg-white/80 backdrop-blur-md border border-brand-brown/15 rounded-3xl p-6 sm:p-10 md:p-14 shadow-luxury">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-brown tracking-tight">
              Wedding Enquiry Form
            </h2>
            <p className="mt-3 text-xs sm:text-base text-brand-dark/70 font-light">
              We would love to know more about your special celebration. Please fill out the form below.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 px-4 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark">
                Thank You, {formData.brideName || formData.groomName || "Lovely Couple"}!
              </h3>
              <p className="text-brand-dark/75 max-w-md mx-auto text-sm sm:text-base">
                Your wedding enquiry has been received. Our founder Mr. Ritesh Gujarathi will personally get in touch within 24 hours.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <WhatsAppIcon size={20} />
                  <span>Send via WhatsApp Instantly</span>
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-6 py-3 border border-brand-brown/30 text-brand-brown hover:bg-brand-brown/10 rounded-xl text-sm font-semibold transition-all"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-7">
              {/* Row 1: Groom Name & Bride Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs font-semibold text-brand-dark/80 uppercase tracking-wider mb-1.5 sm:mb-2">
                    Groom Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Groom Name"
                    value={formData.groomName}
                    onChange={(e) =>
                      setFormData({ ...formData, groomName: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-brand-cream/70 border border-brand-brown/20 rounded-xl text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-brown transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-dark/80 uppercase tracking-wider mb-1.5 sm:mb-2">
                    Bride Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Bride Name"
                    value={formData.brideName}
                    onChange={(e) =>
                      setFormData({ ...formData, brideName: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-brand-cream/70 border border-brand-brown/20 rounded-xl text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-brown transition-all text-sm"
                  />
                </div>
              </div>

              {/* Row 2: Phone Number */}
              <div>
                <label className="block text-xs font-semibold text-brand-dark/80 uppercase tracking-wider mb-1.5 sm:mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 93702 43133"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-brand-cream/70 border border-brand-brown/20 rounded-xl text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-brown transition-all text-sm"
                />
              </div>

              {/* Row 3: Event Dates (Start and End) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs font-semibold text-brand-dark/80 uppercase tracking-wider mb-1.5 sm:mb-2">
                    Event Start Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.startDate}
                    onChange={(e) =>
                      setFormData({ ...formData, startDate: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-brand-cream/70 border border-brand-brown/20 rounded-xl text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-brown transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-dark/80 uppercase tracking-wider mb-1.5 sm:mb-2">
                    Event End Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.endDate}
                    onChange={(e) =>
                      setFormData({ ...formData, endDate: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-brand-cream/70 border border-brand-brown/20 rounded-xl text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-brown transition-all text-sm"
                  />
                </div>
              </div>

              {/* Row 4: Select Your Events Checkboxes */}
              <div>
                <label className="block text-xs font-semibold text-brand-dark/80 uppercase tracking-wider mb-2.5 sm:mb-3">
                  Select Your Events (Tick all that apply)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                  {enquiryOptions.events.map((event) => {
                    const isChecked = formData.events.includes(event);
                    return (
                      <label
                        key={event}
                        className={`flex items-center gap-2 sm:gap-2.5 p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm font-medium cursor-pointer transition-all ${
                          isChecked
                            ? "bg-brand-brown/10 border-brand-brown text-brand-brown font-semibold"
                            : "bg-brand-cream/50 border-brand-brown/15 text-brand-dark/80 hover:bg-brand-cream"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleEventToggle(event)}
                          className="w-4 h-4 rounded text-brand-brown accent-brand-brown cursor-pointer"
                        />
                        <span>{event}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Row 5: Estimated Budget */}
              <div>
                <label className="block text-xs font-semibold text-brand-dark/80 uppercase tracking-wider mb-1.5 sm:mb-2">
                  Your Estimate Budget for Event
                </label>
                <input
                  type="text"
                  placeholder="e.g. 200000"
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-brand-cream/70 border border-brand-brown/20 rounded-xl text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-brown transition-all text-sm"
                />
              </div>

              {/* Row 6: Location of Event */}
              <div>
                <label className="block text-xs font-semibold text-brand-dark/80 uppercase tracking-wider mb-1.5 sm:mb-2">
                  Location of Event
                </label>
                <input
                  type="text"
                  required
                  placeholder="City, Venue or Destination (e.g. Ahilyanagar / Pune / Lonavala)"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-brand-cream/70 border border-brand-brown/20 rounded-xl text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-brown transition-all text-sm"
                />
              </div>

              {/* Row 7: Service Type */}
              <div>
                <label className="block text-xs font-semibold text-brand-dark/80 uppercase tracking-wider mb-2.5 sm:mb-3">
                  What service are you looking for?
                </label>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {enquiryOptions.services.map((service) => (
                    <label
                      key={service}
                      className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl border text-xs sm:text-sm font-medium cursor-pointer transition-all ${
                        formData.service === service
                          ? "bg-brand-brown text-white border-brand-brown shadow-sm"
                          : "bg-brand-cream/50 border-brand-brown/20 text-brand-dark/80 hover:bg-brand-cream"
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        checked={formData.service === service}
                        onChange={() => setFormData({ ...formData, service })}
                        className="hidden"
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Row 8: Wedding Thoughts / Notes */}
              <div>
                <label className="block text-xs font-semibold text-brand-dark/80 uppercase tracking-wider mb-1.5 sm:mb-2">
                  Tell us more about your wedding thoughts
                </label>
                <textarea
                  rows={4}
                  placeholder="Share your vision, preferences, or any special requests..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-brand-cream/70 border border-brand-brown/20 rounded-xl text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-brown transition-all text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 sm:pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 sm:py-4 bg-brand-brown hover:bg-brand-dark text-white rounded-xl font-semibold tracking-wider uppercase text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-luxury-hover hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <span>Submit Enquiry</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}