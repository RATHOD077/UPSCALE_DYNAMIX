import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import FounderSection from './components/FounderSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <FounderSection />
        <ContactSection />
      </main>
      <FooterSection />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
