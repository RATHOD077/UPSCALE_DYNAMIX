import React from 'react';
import { Mail, MapPin, Share2, ExternalLink, Users, Phone } from 'lucide-react';
import logo from '../assets/logo.jpg';
import WhatsAppLogo from './WhatsAppLogo';
import './FooterSection.css';

const services = [
  'Apps & Software Development',
  'Media Sales',
  'Digital Marketing',
  'PR – Publicity & Promotions',
  'Marketing Strategies',
  'Project Sales',
  'Technology Products',
];

export default function FooterSection() {
  return (
    <footer>

      {/* ── Premium CTA banner ── */}
      <div className="footer-cta">
        <div className="footer-cta__grid-bg" />
        <div className="footer-cta__sweep" />
        <div className="container footer-cta__wrap">
          <div className="footer-cta__left">
            <span className="footer-cta__overline">✦ Ready to Scale? ✦</span>
            <h2 className="footer-cta__title">
              Let's Build Your<br />
              <span className="footer-cta__title-accent">Growth Story</span> Together
            </h2>
            <p className="footer-cta__sub">
              Connect directly with Steve Vaz and the Upscale Dynamix team. Available for strategic
              retainer engagements and technology consultations.
            </p>
          </div>
          <div className="footer-cta__right">
            <div className="footer-cta__card">
              <img src={logo} alt="Upscale Dynamix" className="footer-cta__logo" />
              <p className="footer-cta__card-name">Upscale Dynamix</p>
              <p className="footer-cta__card-sub">Division of Itech Direct · Steve Vaz</p>
              <div className="footer-cta__btn-row">
                <a
                  href="https://wa.me/919821622152?text=Hello%20Steve%20Vaz,%20I%20would%20like%20to%20discuss%20growth%20solutions."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-wa footer-cta__btn"
                >
                  <WhatsAppLogo size={18} color="#ffffff" />
                  <span>WhatsApp Chat</span>
                </a>
                <a href="tel:9821622152" className="btn-red footer-cta__btn">
                  <Phone size={15} />
                  <span>Call 9821622152</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="footer-main">
        <div className="container footer-main__grid">

          {/* Brand */}
          <div className="footer-col footer-col--brand">
            <img src={logo} alt="Upscale Dynamix" className="footer-brand-logo" />
            <p className="footer-brand-name">UPSCALE <em>DYNAMIX</em></p>
            <p className="footer-brand-sub">Division of Itech Direct</p>
            <p className="footer-brand-about">
              India's premier business growth enterprise — empowering entrepreneurs
              with technology, marketing mastery, and sales excellence since 2013.
            </p>
            <div className="footer-socials">
              <a href="#hero" className="footer-social" aria-label="Top of Page"><Share2 size={15} /></a>
              <a href="#about" className="footer-social" aria-label="About Upscale"><Users size={15} /></a>
              <a href="https://wa.me/919821622152" target="_blank" rel="noreferrer" className="footer-social" aria-label="Direct WhatsApp"><ExternalLink size={15} /></a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-col footer-col--services">
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links">
              {services.map((s, i) => (
                <li key={i}><a href="#services" className="footer-link">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col footer-col--contact">
            <h4 className="footer-col-title">Get In Touch</h4>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <Phone size={14} className="footer-contact-icon" />
                <div className="footer-contact-phones">
                  <a href="tel:9821622152" className="footer-link">9821622152</a>
                  <span className="footer-contact-divider">/</span>
                  <a href="tel:9833282855" className="footer-link">9833282855</a>
                </div>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon"><WhatsAppLogo size={15} color="#25D366" /></span>
                <a
                  href="https://wa.me/919821622152?text=Hello%20Steve%20Vaz"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link footer-link--wa"
                >
                  WhatsApp: +91 9821622152
                </a>
              </li>
              <li className="footer-contact-item">
                <Mail size={14} className="footer-contact-icon" />
                <div className="footer-contact-emails">
                  <a href="mailto:upscaledynamix@gmail.com" className="footer-link">
                    upscaledynamix@gmail.com (Corporate)
                  </a>
                  <a href="mailto:stevevaz@rediffmail.com" className="footer-link footer-link--sub">
                    stevevaz@rediffmail.com (Personal)
                  </a>
                </div>
              </li>
              <li className="footer-contact-item">
                <MapPin size={14} className="footer-contact-icon" />
                <a
                  href="https://www.google.com/maps/search/Hoshang+Complex%2C+A+Wing-501%2C+Vakola+Santacruz%28E%29Mumbai-400055"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  Hoshang Complex, A Wing-501, Vakola Santacruz(E), Mumbai - 400055
                </a>
              </li>
            </ul>

            <div className="footer-tag">
              <span>Founded by Steve Vaz (25+ Yrs Exp)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom__inner">
          <p>© {new Date().getFullYear()} Upscale Dynamix — Division of Itech Direct. All Rights Reserved.</p>
          <p>Founder &amp; CEO: Steve Vaz | Empowering Entrepreneurs Since 2013</p>
        </div>
      </div>
    </footer>
  );
}
