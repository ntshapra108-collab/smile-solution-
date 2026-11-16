import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageSquare, CreditCard, Shield, Navigation, Send, CheckCircle, Star, Compass } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface ContactLocationProps {
  onOpenWhatsApp: (serviceId?: string) => void;
}

export const ContactLocation: React.FC<ContactLocationProps> = ({ onOpenWhatsApp }) => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');
  const [sent, setSent] = useState(false);

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMsg = `*QUICK CLINIC INQUIRY* 🦷
----------------------------
*Clinic:* ${CLINIC_INFO.name}
*Name:* ${inquiryName || 'Inquirer'}
*Phone:* ${inquiryPhone}
*Message:* ${inquiryMsg}
----------------------------
_Sent via Smile Dental Website_`;

    const encoded = encodeURIComponent(formattedMsg);
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encoded}`, '_blank');
    setSent(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit {CLINIC_INFO.name}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Clinic Location & <span className="text-teal-700">Contact Details</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Conveniently situated at 42, Mall Road, Civil Lines, near Green Park Stadium in Kanpur, Uttar Pradesh.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Info Card */}
          <div className="lg:col-span-6 space-y-6 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                  CLINIC DETAILS & ADDRESS
                </span>
                <span className="text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 flex items-center space-x-1">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  <span>{CLINIC_INFO.rating.toFixed(1)} ({CLINIC_INFO.reviewsCount} reviews)</span>
                </span>
              </div>
              <h3 className="text-2xl font-bold font-serif text-slate-900 mt-2">
                {CLINIC_INFO.name}
              </h3>
              <p className="text-xs text-teal-800 font-semibold mt-1">
                Dr. Sant • Chief Dental Surgeon
              </p>
              <p className="text-sm text-slate-700 mt-3 leading-relaxed flex items-start space-x-2 bg-white p-3 rounded-xl border border-slate-200/80">
                <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200 text-sm">
              <div className="space-y-1">
                <span className="text-xs text-slate-400 font-semibold uppercase">Phone & WhatsApp</span>
                <p className="font-bold text-slate-900 flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <a href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-teal-700 transition">
                    {CLINIC_INFO.phone}
                  </a>
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-slate-400 font-semibold uppercase">Clinic Hours</span>
                <p className="font-bold text-slate-900 flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span>Open Daily • Closes 8 PM</span>
                </p>
              </div>
            </div>

            {/* Landmarks & Plus Code */}
            <div className="p-3.5 bg-teal-50/70 rounded-2xl border border-teal-100 space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-teal-900 font-semibold">
                <Compass className="w-4 h-4 text-teal-700" />
                <span>Plus Code: {CLINIC_INFO.plusCode}</span>
              </div>
              <p className="text-slate-600">
                Landmarks: {CLINIC_INFO.landmark}, Mall Road, Kanpur.
              </p>
            </div>

            {/* Facilities */}
            <div className="pt-4 border-t border-slate-200 space-y-2.5">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                Clinic Facilities & Payments:
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-semibold flex items-center space-x-1">
                  <CreditCard className="w-3.5 h-3.5 text-teal-600" />
                  <span>Google Pay / UPI / Cards</span>
                </span>
                <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-semibold flex items-center space-x-1">
                  <Shield className="w-3.5 h-3.5 text-teal-600" />
                  <span>Sterilized Clinical Setup</span>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center space-x-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions (Kanpur)</span>
              </a>

              <button
                onClick={() => onOpenWhatsApp()}
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center space-x-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white/20" />
                <span>Book via WhatsApp ({CLINIC_INFO.phone})</span>
              </button>
            </div>

          </div>

          {/* Right: Quick Direct WhatsApp Message Box */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-4">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                DIRECT CLINIC DESK
              </span>
              <h3 className="text-2xl font-bold font-serif text-slate-900 mt-1">
                Send Quick Inquiry
              </h3>
              <p className="text-xs text-slate-500">
                Have a dental question for Dr. Sant? Type below to chat directly with clinic reception on WhatsApp ({CLINIC_INFO.phone}).
              </p>
            </div>

            <form onSubmit={handleQuickInquiry} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Singh"
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="7654321"
                  value={inquiryPhone}
                  onChange={(e) => setInquiryPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                  Your Inquiry / Dental Symptom
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g. Hello Dr. Sant, I would like to schedule a root canal consultation today before 8 PM."
                  value={inquiryMsg}
                  onChange={(e) => setInquiryMsg(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message on WhatsApp ({CLINIC_INFO.phone})</span>
              </button>

              {sent && (
                <div className="p-3 bg-emerald-50 text-emerald-800 text-xs rounded-xl flex items-center space-x-2 font-semibold">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WhatsApp opening... You can also chat directly on {CLINIC_INFO.phone}</span>
                </div>
              )}
            </form>

            {/* Embedded Google Map helper */}
            <div className="pt-2">
              <div className="rounded-2xl overflow-hidden border border-slate-200 h-44 relative bg-slate-100 flex items-center justify-center">
                <iframe
                  title="Smile Dental Kanpur Location"
                  className="w-full h-full border-0"
                  src="https://maps.google.com/maps?q=42%20Mall%20Road%20Civil%20Lines%20Kanpur%20Uttar%20Pradesh%20208001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
