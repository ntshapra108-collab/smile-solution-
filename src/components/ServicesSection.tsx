import React, { useState } from 'react';
import { Search, Sparkles, Clock, Check, MessageSquare, Shield, ArrowRight, Stethoscope } from 'lucide-react';
import { SERVICES_LIST } from '../data/clinicData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenWhatsApp: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenWhatsApp }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Orthodontics', 'Endodontics', 'Cosmetic Dentistry', 'Implantology', 'Preventive Dentistry', 'Oral Surgery'];

  const filteredServices = SERVICES_LIST.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Comprehensive Dental & Orthodontic Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Our Specialized Treatments & <span className="text-teal-700">Clinical Services</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From single-sitting painless root canals to advanced Damon orthodontics and invisible aligners, we deliver gentle, world-class dental solutions.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-10 max-w-4xl mx-auto space-y-4">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search treatments (e.g., Braces, Aligners, Root Canal, Whitening)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm outline-none transition"
            />
          </div>

          {/* Category Pill Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-teal-700 text-white shadow-md shadow-teal-700/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between group relative"
            >
              {service.isPopular && (
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-xs">
                  ★ MOST REQUESTED
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-100">
                    {service.category}
                  </span>
                  <div className="flex items-center space-x-1 text-slate-400 text-xs">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold font-serif text-slate-900 group-hover:text-teal-800 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.fullDesc}
                </p>

                {service.priceRange && (
                  <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-900 font-semibold">
                    Estimated Cost Range: <span className="font-bold">{service.priceRange}</span>
                  </div>
                )}

                {/* Key Benefits List */}
                <div className="space-y-2 pt-2">
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wide">Key Highlights:</p>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  id={`book-service-${service.id}-btn`}
                  onClick={() => onOpenWhatsApp(service.id)}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white/20" />
                  <span>Book {service.title.split('(')[0]} via WhatsApp</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No treatments found matching "{searchTerm}". Please try a different search or contact us directly on WhatsApp.
          </div>
        )}

      </div>
    </section>
  );
};
