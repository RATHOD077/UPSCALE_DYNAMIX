import React, { useState } from 'react';
import WhatsAppLogo from './WhatsAppLogo';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <aside
      className="floating-wa"
      aria-label="WhatsApp Chat Widget"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`floating-wa__tooltip ${hovered ? 'floating-wa__tooltip--visible' : ''}`}>
        <p className="floating-wa__tooltip-title">Chat with Steve Vaz</p>
        <p className="floating-wa__tooltip-sub">Usually replies instantly</p>
      </div>

      <a
        href="https://wa.me/919821622152?text=Hello%20Steve%20Vaz,%20I%20am%20interested%20in%20Upscale%20Dynamix%20services."
        target="_blank"
        rel="noreferrer"
        className="floating-wa__btn"
        aria-label="Chat with Steve Vaz on WhatsApp"
      >
        <div className="floating-wa__pulse" />
        <WhatsAppLogo size={32} color="#ffffff" />
        <span className="floating-wa__badge">1</span>
      </a>
    </aside>
  );
}
