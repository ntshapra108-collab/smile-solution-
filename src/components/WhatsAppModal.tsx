import React, { useState } from 'react';
import { X, MessageSquare, Calendar, Clock, User, Phone, CheckCircle, Sparkles, Send } from 'lucide-react';
import { CLINIC_INFO, SERVICES_LIST } from '../data/clinicData';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
}) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceId, setServiceId] = useState(preselectedServiceId || SERVICES_LIST[0].id);
  const [selectedDoctor, setSelectedDoctor] = useState('Dr. Sant (Chief Dental Surgeon)');
  const [preferredDate, setPreferredDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [preferredTime, setPreferredTime] = useState('Evening (5:00 PM - 7:00 PM)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const selectedServiceObj = SERVICES_LIST.find((s) => s.id === serviceId) || SERVICES_LIST[0];

  const timeSlots = [
    'Morning (10:00 AM - 12:00 PM)',
    'Afternoon (12:00 PM - 2:00 PM)',
    'Afternoon (2:00 PM - 4:00 PM)',
    'Evening (4:00 PM - 6:00 PM)',
    'Evening (6:00 PM - 8:00 PM - Closes 8 PM)',
  ];

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedDate = new Date(preferredDate).toLocaleDateString('en-IN', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    const message = `*APPOINTMENT BOOKING REQUEST* 🦷✨
------------------------------------
*Clinic:* ${CLINIC_INFO.name}
*Patient Name:* ${patientName || 'Not specified'}
*Contact Number:* ${phone || 'Not specified'}
*Selected Treatment:* ${selectedServiceObj.title}
*Doctor:* ${selectedDoctor}
*Preferred Date:* ${formattedDate}
*Preferred Slot:* ${preferredTime}
${notes ? `*Patient Notes/Symptoms:* ${notes}` : ''}
------------------------------------
_Sent via Smile Dental Website Booking System_`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodedMsg}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        id="whatsapp-booking-modal-container" 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-700 p-6 text-white">
          <button
            id="close-whatsapp-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-emerald-500/30 rounded-xl flex items-center justify-center border border-emerald-300/30">
              <MessageSquare className="w-6 h-6 text-emerald-200 fill-emerald-200/20" />
            </div>
            <div>
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-1">
                <Sparkles className="w-3 h-3" />
                <span>Instant Direct Booking</span>
              </div>
              <h3 className="text-xl font-bold text-white font-serif">
                Book WhatsApp Appointment
              </h3>
              <p className="text-xs text-teal-200 font-medium">
                {CLINIC_INFO.name} • Kanpur
              </p>
            </div>
          </div>
          <p className="text-teal-100 text-sm mt-2">
            Fill in your preferred date & time. Clicking below opens WhatsApp with your pre-filled request directly to {CLINIC_INFO.phone}!
          </p>
        </div>

        {/* Content Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-slate-800">Opening WhatsApp...</h4>
            <p className="text-slate-600 max-w-md mx-auto text-sm">
              Your appointment request details have been prepared for Smile Dental. If WhatsApp didn't open automatically, click the button below:
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `Hi Smile Dental, I would like to book an appointment with Dr. Sant for ${selectedServiceObj.title} on ${preferredDate}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Open WhatsApp Chat ({CLINIC_INFO.phone})</span>
              </a>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs text-slate-400 underline hover:text-slate-600 block mx-auto pt-2"
            >
              Back to edit request
            </button>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppRedirect} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
            {/* Patient Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                  Your Full Name <span className="text-emerald-600">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Singh"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                  WhatsApp / Mobile No. <span className="text-emerald-600">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="7654321"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                  />
                </div>
              </div>
            </div>

            {/* Treatment Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                Select Dental Treatment <span className="text-emerald-600">*</span>
              </label>
              <select
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
                className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
              >
                {SERVICES_LIST.map((srv) => (
                  <option key={srv.id} value={srv.id}>
                    {srv.title} ({srv.category})
                  </option>
                ))}
              </select>
            </div>

            {/* Doctor & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                  Doctor / Consultant
                </label>
                <select
                  value={selectedDoctor}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                >
                  <option value="Dr. Sant (Chief Dental Surgeon)">
                    Dr. Sant (Chief Dental Surgeon)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                  Preferred Date <span className="text-emerald-600">*</span>
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                  />
                </div>
              </div>
            </div>

            {/* Time slot */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                Preferred Time Slot
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                >
                  {timeSlots.map((slot, i) => (
                    <option key={i} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Notes / Symptoms */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                Symptoms / Specific Questions (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Toothache on molar, consultation for tooth restoration or cleaning..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
              />
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                id="send-whatsapp-booking-btn"
                className="w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center space-x-2 group cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
                <span>Confirm & Send via WhatsApp</span>
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-2">
                🔒 Direct encrypted chat with clinic reception ({CLINIC_INFO.phone})
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
