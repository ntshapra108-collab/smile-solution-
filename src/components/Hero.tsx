import React, { useState } from 'react';
import { MessageSquare, Star, Sparkles, ArrowRight, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { CLINIC_INFO, SERVICES_LIST } from '../data/clinicData';
import clinicHeroImg from '../assets/images/dental_clinic_hero_1785569651801.jpg';

interface HeroProps {
  onOpenWhatsApp: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWhatsApp }) => {
  const [quickServiceId, setQuickServiceId] = useState(SERVICES_LIST[0].id);

  return (
    <section className="relative bg-gradient-to-b from-teal-900/5 via-slate-50 to-white pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-30 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Google Rating & Badges */}
            <div className="inline-flex flex-wrap items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-teal-100 shadow-sm">
              <div className="flex items-center space-x-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-800">{CLINIC_INFO.rating.toFixed(1)} Rating</span>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-slate-600 font-medium">{CLINIC_INFO.reviewsCount}+ Google Reviews</span>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full">
                VERIFIED CLINIC
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600">Smile Dental</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Kanpur's trusted destination for gentle and painless Root Canal Treatment (RCT), aesthetic crowns, smile makeovers, and complete dental care at Civil Lines.
              </p>
            </div>

            {/* Doctor Info pill */}
            <div className="p-4 bg-teal-50/80 rounded-2xl border border-teal-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  MDS
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Dr. Sant</h4>
                  <p className="text-xs text-teal-800 font-medium">Chief Dental Surgeon & Oral Health Specialist</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-teal-700 bg-white px-3 py-1 rounded-lg border border-teal-200">
                12+ Yrs Clinical Excellence
              </span>
            </div>

            {/* Primary Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                id="hero-whatsapp-primary-btn"
                onClick={() => onOpenWhatsApp()}
                className="px-7 py-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-base rounded-2xl shadow-xl shadow-emerald-600/25 transition-all flex items-center justify-center space-x-3 group cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
                <span>Book via WhatsApp ({CLINIC_INFO.phone})</span>
                <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#contact"
                className="px-6 py-4 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex items-center justify-center space-x-2"
              >
                <MapPin className="w-5 h-5 text-teal-600" />
                <span>Location & Directions</span>
              </a>
            </div>

            {/* Key Quick Highlights */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-600 font-medium">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Painless Single-Sitting RCT</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Crowns & Tooth Restoration</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ultrasonic Scaling & Cleaning</span>
              </div>
            </div>

          </div>

          {/* Right Hero Image Card Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl blur-xl opacity-20 transform -rotate-1"></div>

              <div className="relative bg-white rounded-3xl p-3 shadow-2xl border border-slate-100 overflow-hidden">
                <div className="relative aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden group">
                  <img
                    src={clinicHeroImg}
                    alt="Smile Dental Clinic in Kanpur"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  
                  {/* Floating Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-semibold text-teal-300 uppercase tracking-wider mb-0.5">
                      42, Mall Road • Kanpur, Uttar Pradesh
                    </p>
                    <h3 className="text-base sm:text-lg font-bold font-serif">
                      Civil Lines, Near Green Park Stadium
                    </h3>
                    <p className="text-xs text-slate-200 mt-1 flex items-center space-x-2">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{CLINIC_INFO.statusText} • Daily until 8:00 PM</span>
                    </p>
                  </div>
                </div>

                {/* Direct Quick Booking Form Box */}
                <div className="mt-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center space-x-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                      <span>Quick WhatsApp Appointment</span>
                    </span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">
                      Instant Confirmation
                    </span>
                  </div>

                  <div className="space-y-2">
                    <select
                      value={quickServiceId}
                      onChange={(e) => setQuickServiceId(e.target.value)}
                      className="w-full px-3 py-2 text-xs font-medium bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none text-slate-800"
                    >
                      {SERVICES_LIST.map((srv) => (
                        <option key={srv.id} value={srv.id}>
                          {srv.title}
                        </option>
                      ))}
                    </select>

                    <button
                      id="hero-quick-book-whatsapp-btn"
                      onClick={() => onOpenWhatsApp(quickServiceId)}
                      className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-white/20" />
                      <span>Book on WhatsApp ({CLINIC_INFO.phone})</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-md">
          <div className="p-3 text-center border-r last:border-r-0 border-slate-100">
            <div className="text-2xl sm:text-3xl font-serif font-black text-teal-800">{CLINIC_INFO.rating.toFixed(1)} ★</div>
            <div className="text-xs text-slate-500 mt-1">{CLINIC_INFO.reviewsCount}+ Google Reviews</div>
          </div>
          <div className="p-3 text-center border-r last:border-r-0 border-slate-100">
            <div className="text-2xl sm:text-3xl font-serif font-black text-teal-800">5,000+</div>
            <div className="text-xs text-slate-500 mt-1">Smiles Treated</div>
          </div>
          <div className="p-3 text-center border-r last:border-r-0 border-slate-100">
            <div className="text-2xl sm:text-3xl font-serif font-black text-teal-800">Closes 8 PM</div>
            <div className="text-xs text-slate-500 mt-1">Daily Clinic Timings</div>
          </div>
          <div className="p-3 text-center">
            <div className="text-2xl sm:text-3xl font-serif font-black text-teal-800">100%</div>
            <div className="text-xs text-slate-500 mt-1">Sterile & Safe Hygiene</div>
          </div>
        </div>

      </div>
    </section>
  );
};
