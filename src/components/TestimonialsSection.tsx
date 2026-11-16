import React, { useState } from 'react';
import { Star, CheckCircle2, MessageSquare } from 'lucide-react';
import { TESTIMONIALS_LIST, CLINIC_INFO } from '../data/clinicData';

interface TestimonialsSectionProps {
  onOpenWhatsApp: (serviceId?: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenWhatsApp }) => {
  const [filterTag, setFilterTag] = useState<string>('All');

  const tags = ['All', 'Root Canal', 'Scaling', 'Filling', 'Checkup'];

  const filteredTestimonials = filterTag === 'All'
    ? TESTIMONIALS_LIST
    : TESTIMONIALS_LIST.filter((t) => t.treatment.toLowerCase().includes(filterTag.toLowerCase()));

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span>{CLINIC_INFO.rating.toFixed(1)} / 5.0 Google Rating ({CLINIC_INFO.reviewsCount} Google Reviews)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white">
            What Our Patients <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-teal-300 to-emerald-400">Say About Dr. Sant</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Real feedback from patients visiting Smile Dental in Civil Lines, Kanpur highlighting gentle care, painless RCT, and pleasant clinical visits.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filterTag === tag
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Testimonial Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((review) => (
            <div
              key={review.id}
              className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700/80 shadow-lg flex flex-col justify-between space-y-4 hover:border-teal-500/40 transition-all duration-300"
            >
              <div className="space-y-3">
                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{review.date}</span>
                </div>

                {/* Treatment Badge */}
                <div className="inline-block px-2.5 py-0.5 bg-teal-500/10 text-teal-300 text-[11px] font-semibold rounded border border-teal-500/20">
                  Treatment: {review.treatment}
                </div>

                {/* Comment */}
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-9 h-9 rounded-full ${review.avatarBg || 'bg-teal-600'} text-white font-bold flex items-center justify-center text-sm shadow-xs`}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">
                      {review.name}
                    </h4>
                    {review.role && (
                      <span className="text-[10px] text-slate-400">{review.role}</span>
                    )}
                  </div>
                </div>

                {review.verified && (
                  <div className="flex items-center space-x-1 text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Google Verified</span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Testimonials Callout */}
        <div className="mt-14 text-center">
          <p className="text-slate-400 text-xs mb-4">
            Visit {CLINIC_INFO.name} in Kanpur, Uttar Pradesh for gentle and dependable oral healthcare.
          </p>
          <button
            onClick={() => onOpenWhatsApp()}
            className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-2xl shadow-lg transition-all inline-flex items-center space-x-2 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 fill-slate-950/20" />
            <span>Book Your Appointment Today on WhatsApp ({CLINIC_INFO.phone})</span>
          </button>
        </div>

      </div>
    </section>
  );
};
