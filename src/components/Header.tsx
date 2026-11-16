import React, { useState } from 'react';
import { Phone, MessageSquare, Star, Menu, X, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeaderProps {
  onOpenWhatsApp: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWhatsApp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Success Gallery', href: '#gallery' },
    { name: 'Doctor Profile', href: '#doctors' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Location & Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-900 text-white py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-1 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>{CLINIC_INFO.statusText}</span>
            </span>
            <span className="hidden md:inline text-slate-400">•</span>
            <span className="hidden md:flex items-center space-x-1 text-slate-300">
              <MapPin className="w-3 h-3 text-teal-400" />
              <span className="truncate max-w-sm">Civil Lines, Kanpur, Uttar Pradesh</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-amber-300 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>{CLINIC_INFO.rating.toFixed(1)} Rating ({CLINIC_INFO.reviewsCount} Google Reviews)</span>
            </div>
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="hidden sm:flex items-center space-x-1 text-teal-200 hover:text-white transition"
            >
              <Phone className="w-3 h-3" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-emerald-700 rounded-xl flex items-center justify-center text-white shadow-md shadow-teal-600/20 group-hover:scale-105 transition-transform">
              <span className="font-serif font-black text-2xl tracking-tighter">S</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-slate-900 leading-tight">
                  Smile Dental
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 bg-teal-50 text-teal-700 text-[10px] font-semibold uppercase tracking-wider rounded border border-teal-200">
                  Dental Clinic
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                Dr. Sant • Civil Lines, Kanpur
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition flex items-center space-x-2"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              <span>Call Clinic</span>
            </a>

            <button
              id="header-whatsapp-book-btn"
              onClick={() => onOpenWhatsApp()}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all flex items-center space-x-2 group cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white/20 group-hover:rotate-12 transition-transform" />
              <span>Book via WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-700 hover:text-teal-700 hover:bg-slate-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full py-3 bg-emerald-600 text-white font-semibold rounded-xl flex items-center justify-center space-x-2 shadow-md shadow-emerald-600/20"
            >
              <MessageSquare className="w-5 h-5 fill-white/20" />
              <span>Book Appointment via WhatsApp</span>
            </button>

            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full py-2.5 bg-slate-100 text-slate-800 font-semibold rounded-xl flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              <span>Call {CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
