import React from 'react';
import { Award, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';
import { DOCTORS_LIST, CLINIC_INFO } from '../data/clinicData';
import doctorTeamImg from '../assets/images/doctor_clinic_team_1785569664324.jpg';

interface DoctorTeamProps {
  onOpenWhatsApp: (serviceId?: string) => void;
}

export const DoctorTeam: React.FC<DoctorTeamProps> = ({ onOpenWhatsApp }) => {
  return (
    <section id="doctors" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Expert Dental Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Meet Our Chief Dental <span className="text-teal-700">Surgeon & Specialist</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Led by Dr. Sant at Smile Dental, Kanpur. Dedicated to painless root canals, cosmetic smile restorations, and compassionate patient care.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="mt-14 max-w-4xl mx-auto">
          {DOCTORS_LIST.map((doc) => (
            <div
              key={doc.id}
              className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-8 items-center md:items-start"
            >
              {/* Doctor Avatar / Image */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 shrink-0 rounded-2xl overflow-hidden border-2 border-teal-600/30 shadow-lg">
                <img
                  src={doctorTeamImg || doc.image}
                  alt={doc.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-teal-900/90 text-white text-[11px] font-bold px-2.5 py-0.5 rounded shadow-xs">
                  {doc.degrees}
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4 text-center md:text-left flex-1">
                <div>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                    <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-full">
                      {doc.experience}
                    </span>
                    <span className="px-2.5 py-0.5 bg-teal-100 text-teal-800 text-[11px] font-bold rounded-full">
                      Kanpur Clinic
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
                    {doc.name}
                  </h3>
                  <p className="text-sm font-semibold text-teal-700 mt-1">
                    {doc.title} • {CLINIC_INFO.name}
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {doc.bio}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-1">
                  {doc.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700 text-left">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex flex-wrap gap-3 justify-center md:justify-start">
                  <button
                    onClick={() => onOpenWhatsApp(doc.id)}
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition inline-flex items-center space-x-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-white/20" />
                    <span>Book Appointment with {doc.name}</span>
                  </button>
                  <a
                    href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                    className="px-5 py-3 bg-white border border-slate-200 text-slate-800 font-bold text-xs sm:text-sm rounded-xl shadow-xs hover:bg-slate-50 transition inline-flex items-center space-x-2"
                  >
                    <span>Direct Call: {CLINIC_INFO.phone}</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Safety & Sterilization Banner */}
        <div className="mt-12 p-6 bg-teal-900 text-white rounded-3xl border border-teal-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-teal-800 rounded-2xl flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold font-serif">100% Strict Infection Control & Autoclave Sterilization</h4>
              <p className="text-xs text-teal-200">
                All dental instruments at {CLINIC_INFO.name} undergo multi-stage autoclaving and UV sterilization following standard clinical hygiene protocols.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenWhatsApp()}
            className="px-6 py-3 bg-white text-teal-900 hover:bg-teal-50 font-bold text-xs rounded-xl shadow-md transition shrink-0 cursor-pointer"
          >
            WhatsApp Clinic Reception
          </button>
        </div>

      </div>
    </section>
  );
};
