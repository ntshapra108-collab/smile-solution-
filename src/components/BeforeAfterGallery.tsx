import React, { useState } from 'react';
import { Sparkles, MessageSquare, ArrowRight, Eye, CheckCircle, Sliders, ChevronRight } from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../data/clinicData';
import { BeforeAfterCase, TreatmentCategory } from '../types';

interface BeforeAfterGalleryProps {
  onOpenWhatsApp: (serviceId?: string) => void;
}

export const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ onOpenWhatsApp }) => {
  const [activeCategory, setActiveCategory] = useState<TreatmentCategory>('all');
  const [selectedCaseModal, setSelectedCaseModal] = useState<BeforeAfterCase | null>(null);

  // Slider position state for cases
  const [sliderPositions, setSliderPositions] = useState<{ [key: string]: number }>({});

  const categories: { key: TreatmentCategory; label: string }[] = [
    { key: 'all', label: 'All Success Stories' },
    { key: 'orthodontics', label: 'Orthodontics & Braces' },
    { key: 'aligners', label: 'Clear Aligners' },
    { key: 'veneers', label: 'Smile Makeovers' },
    { key: 'rct', label: 'Single-Sitting RCT' },
  ];

  const filteredCases = activeCategory === 'all'
    ? BEFORE_AFTER_CASES
    : BEFORE_AFTER_CASES.filter((c) => c.category === activeCategory);

  const handleSliderMove = (caseId: string, value: number) => {
    setSliderPositions((prev) => ({ ...prev, [caseId]: value }));
  };

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Proven Clinical Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Patient Success Stories & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-300">Smile Transformations</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Explore authentic Before & After treatment cases completed by Dr. Sant at Smile Dental.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-teal-500 text-slate-950 font-bold shadow-lg shadow-teal-500/20 scale-105'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((item) => {
            const sliderVal = sliderPositions[item.id] ?? 50;

            return (
              <div
                key={item.id}
                className="bg-slate-800/90 rounded-2xl border border-slate-700/60 overflow-hidden shadow-xl hover:border-teal-500/50 transition-all duration-300 flex flex-col group"
              >
                {/* Before / After Interactive Image Container */}
                <div className="relative aspect-4/3 bg-slate-950 overflow-hidden select-none">
                  {/* After Image (Background) */}
                  <img
                    src={item.afterImg}
                    alt={`${item.title} After`}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 z-10 bg-emerald-500 text-slate-950 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    AFTER
                  </div>

                  {/* Before Image (Clipped Overlay) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderVal}%` }}
                  >
                    <img
                      src={item.beforeImg}
                      alt={`${item.title} Before`}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover max-w-none"
                      style={{ width: '100%', height: '100%' }}
                    />
                    <div className="absolute top-3 left-3 z-10 bg-slate-900/90 text-slate-200 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border border-slate-700">
                      BEFORE
                    </div>
                  </div>

                  {/* Interactive Slider Divider */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] z-20 pointer-events-none"
                    style={{ left: `${sliderVal}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center shadow-lg border-2 border-white">
                      <Sliders className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Range Input Overlay */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderVal}
                    onChange={(e) => handleSliderMove(item.id, Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                    aria-label={`Compare Before and After for ${item.title}`}
                  />
                </div>

                {/* Case Info Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-teal-400 font-semibold mb-1">
                      <span>{item.patientName} ({item.ageGender})</span>
                      <span className="bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                        {item.treatmentDuration}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white font-serif line-clamp-1">
                      {item.title}
                    </h3>

                    <p className="text-slate-300 text-xs mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Doctor & Tag */}
                  <div className="pt-3 border-t border-slate-700/50 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>👨‍⚕️ {item.doctor}</span>
                    </div>

                    {/* CTA for this case */}
                    <button
                      onClick={() => onOpenWhatsApp(item.category)}
                      className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center space-x-2 group/btn cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white/20" />
                      <span>Book Consultation for This Treatment</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Global CTA Banner under gallery */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-teal-900 via-slate-800 to-teal-950 border border-teal-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold font-serif text-white">
              Ready for Your Own Smile Transformation?
            </h3>
            <p className="text-teal-100 text-sm max-w-xl">
              Get a custom treatment plan with Dr. Sant at Smile Dental. Send us a message on WhatsApp for instant guidance.
            </p>
          </div>

          <button
            onClick={() => onOpenWhatsApp()}
            className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-2xl shadow-xl transition-all flex items-center space-x-2 shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 fill-slate-950/20" />
            <span>Book Smile Assessment on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
