import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { ServicesSection } from './components/ServicesSection';
import { DoctorTeam } from './components/DoctorTeam';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { WhatsAppModal } from './components/WhatsAppModal';
import { FloatingWhatsAppWidget } from './components/FloatingWhatsAppWidget';

export default function App() {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [selectedServiceForWhatsApp, setSelectedServiceForWhatsApp] = useState<string | undefined>(undefined);

  const handleOpenWhatsApp = (serviceId?: string) => {
    setSelectedServiceForWhatsApp(serviceId);
    setIsWhatsAppModalOpen(true);
  };

  const handleCloseWhatsApp = () => {
    setIsWhatsAppModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-teal-100 selection:text-teal-900">
      {/* Sticky Header */}
      <Header onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Patient Success Stories Before/After Gallery */}
        <BeforeAfterGallery onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Clinical Services List & Details */}
        <ServicesSection onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Doctor Team Profiles */}
        <DoctorTeam onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Client Testimonials & Google Reviews */}
        <TestimonialsSection onOpenWhatsApp={handleOpenWhatsApp} />

        {/* FAQ Accordion */}
        <FAQSection onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Location, Map & Quick Contact */}
        <ContactLocation onOpenWhatsApp={handleOpenWhatsApp} />
      </main>

      {/* Footer */}
      <Footer onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Persistent Floating WhatsApp Widget */}
      <FloatingWhatsAppWidget onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Interactive WhatsApp Appointment Modal */}
      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={handleCloseWhatsApp}
        preselectedServiceId={selectedServiceForWhatsApp}
      />
    </div>
  );
}
