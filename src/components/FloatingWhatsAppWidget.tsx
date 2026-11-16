import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FloatingWhatsAppWidgetProps {
  onOpenWhatsApp: (serviceId?: string) => void;
}

export const FloatingWhatsAppWidget: React.FC<FloatingWhatsAppWidgetProps> = ({ onOpenWhatsApp }) => {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleQuickSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const encoded = encodeURIComponent(`Hi Smile Dental, ${message}`);
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encoded}`, '_blank');
    setMessage('');
    setChatOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Expanded Chat Preview Popup */}
      {chatOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-700 to-teal-800 p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-serif font-bold text-lg text-white">
                  S
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-700 rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Smile Dental</h4>
                <p className="text-[11px] text-emerald-200">Online • Civil Lines, Kanpur</p>
              </div>
            </div>

            <button
              onClick={() => setChatOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10"
              aria-label="Close chat popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 space-y-3 text-xs">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-xs border border-slate-100 max-w-[85%] space-y-1">
              <p className="font-bold text-slate-800">👋 Welcome to Smile Dental!</p>
              <p className="text-slate-600 leading-relaxed">
                How can Dr. Sant and our dental team assist your oral health today? We are located at 42, Mall Road, Civil Lines, Kanpur.
              </p>
              <span className="text-[9px] text-slate-400 block text-right pt-1">Just now</span>
            </div>

            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  setChatOpen(false);
                  onOpenWhatsApp();
                }}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-xs transition flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-emerald-200" />
                <span>Book Appointment Form</span>
              </button>
            </div>
          </div>

          {/* Chat Input */}
          <form onSubmit={handleQuickSend} className="p-3 bg-white border-t border-slate-100 flex items-center space-x-2">
            <input
              type="text"
              placeholder={`Message clinic (${CLINIC_INFO.phone})...`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 px-3 py-2 text-xs bg-slate-100 border border-slate-200 rounded-xl focus:bg-white focus:ring-1 focus:ring-emerald-500 outline-none"
            />
            <button
              type="submit"
              className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-xs transition cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

      {/* Floating Circle Button */}
      <button
        id="floating-whatsapp-widget-trigger"
        onClick={() => setChatOpen(!chatOpen)}
        className="relative group p-4 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white rounded-full shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer"
        aria-label="Open WhatsApp Chat"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 text-[10px] font-bold text-slate-900 items-center justify-center">
            1
          </span>
        </span>

        <MessageSquare className="w-7 h-7 fill-white/20 group-hover:rotate-12 transition-transform" />
      </button>

    </div>
  );
};
