import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, Heart, Star } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FooterProps {
  onOpenWhatsApp: (serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white font-serif font-black text-xl">
                S
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-white tracking-tight block">
                  Smile Dental
                </span>
                <span className="text-[11px] text-teal-400 font-medium">
                  Kanpur, Uttar Pradesh
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {CLINIC_INFO.name}. Dedicated to gentle single-sitting root canal treatments, aesthetic crowns, ultrasonic scaling, and complete family dental care in Kanpur, Uttar Pradesh.
            </p>
            <div className="text-xs text-teal-400 font-semibold">
              Chief Dental Surgeon: Dr. Sant
            </div>
            <div className="flex items-center space-x-1 text-amber-400 text-xs font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{CLINIC_INFO.rating.toFixed(1)} Star Rated Dental Clinic ({CLINIC_INFO.reviewsCount} Reviews)</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-serif uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-teal-400 transition">Services & Treatments</a></li>
              <li><a href="#gallery" className="hover:text-teal-400 transition">Patient Success Gallery</a></li>
              <li><a href="#doctors" className="hover:text-teal-400 transition">Doctor Profile</a></li>
              <li><a href="#testimonials" className="hover:text-teal-400 transition">Patient Reviews ({CLINIC_INFO.rating.toFixed(1)} ★)</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition">Clinic Location & Hours</a></li>
            </ul>
          </div>

          {/* Col 3: Key Treatments */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-serif uppercase tracking-wider">
              Dental Treatments
            </h4>
            <ul className="space-y-2 text-xs">
              <li>Painless Single-Sitting RCT</li>
              <li>Zirconia Crowns & Bridges</li>
              <li>Teeth Alignment & Braces</li>
              <li>Invisible Clear Aligners</li>
              <li>Ultrasonic Cleaning & Scaling</li>
              <li>Safe Tooth Extractions</li>
            </ul>
          </div>

          {/* Col 4: Contact & WhatsApp */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-serif uppercase tracking-wider">
              Contact & Location
            </h4>
            <p className="text-xs text-slate-400 flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <span>42, Mall Road, Civil Lines, Kanpur, Uttar Pradesh 208001</span>
            </p>
            <p className="text-xs text-slate-400 flex items-center space-x-2">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-emerald-300">
                {CLINIC_INFO.phone}
              </a>
            </p>
            <p className="text-xs text-slate-400 flex items-center space-x-2">
              <Clock className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Open Daily • Closes 8 PM</span>
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenWhatsApp()}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition flex items-center justify-center space-x-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white/20" />
                <span>WhatsApp Appointment</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {CLINIC_INFO.name}. All Rights Reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Crafted for Smile Dental in Kanpur</span>
            <Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
          </p>
        </div>

      </div>
    </footer>
  );
};
