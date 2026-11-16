import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { FAQS_LIST } from '../data/clinicData';

interface FAQSectionProps {
  onOpenWhatsApp: (serviceId?: string) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenWhatsApp }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Patient Knowledge & FAQs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Frequently Asked <span className="text-teal-700">Questions</span>
          </h2>
          <p className="text-slate-600 text-base">
            Everything you need to know about treatments, WhatsApp appointments, and clinic visits.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-10 space-y-4">
          {FAQS_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 text-left flex items-center justify-between space-x-4 hover:bg-slate-50 transition cursor-pointer"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base font-serif">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-sm border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-10 p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-center space-y-3">
          <h4 className="font-bold text-slate-900 text-base">Have a specific dental query or urgent symptom?</h4>
          <p className="text-slate-600 text-xs max-w-lg mx-auto">
            Our doctors and reception desk are available on WhatsApp for quick inquiries.
          </p>
          <button
            onClick={() => onOpenWhatsApp()}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition inline-flex items-center space-x-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white/20" />
            <span>Ask Us Directly on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
