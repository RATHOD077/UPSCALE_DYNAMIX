import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.jpg';
import WhatsAppLogo from './WhatsAppLogo';
import './Header.css';

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Founder',  href: '#founder' },
  { label: 'Contact',  href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(
    typeof window !== 'undefined' ? window.location.hash || '' : ''
  );

  // Scroll listener for sticky header & scroll-spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll-spy: identify which section is currently active
      const sections = ['about', 'services', 'founder', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveNav(`#${sections[i]}`);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveNav('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    setActiveNav(href);
    setMenuOpen(false);

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <>
      {/* Top strip */}
      <div className="topstrip">
        <div className="container topstrip__inner">
          <div className="topstrip__left">
            <a href="tel:9821622152" className="topstrip__item">
              <Phone size={12} /> 9821622152
            </a>
            <span className="topstrip__sep">|</span>
            <a href="tel:9833282855" className="topstrip__item">
              <Phone size={12} /> 9833282855
            </a>
            <span className="topstrip__sep">|</span>
            <a href="mailto:upscaledynamix@gmail.com" className="topstrip__item">
              <Mail size={12} /> upscaledynamix@gmail.com
            </a>
          </div>
          <div className="topstrip__right">
            <a
              href="https://wa.me/919821622152?text=Hello%20Steve%20Vaz,%20I%20would%20like%20to%20connect%20with%20Upscale%20Dynamix."
              target="_blank"
              rel="noreferrer"
              className="topstrip__wa-link"
            >
              <WhatsAppLogo size={13} color="#25D366" />
              <span>WhatsApp Direct Connect</span>
            </a>
            <span className="topstrip__tagline">✦ Founded 2013 ✦</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className={`nav ${scrolled ? 'nav--stuck' : ''}`}>
        <div className="container nav__inner">

          {/* Brand */}
          <a
            href="#hero"
            className="nav__brand"
            onClick={(e) => handleNavClick(e, '#hero')}
          >
            <img src={logo} alt="Upscale Dynamix" className="nav__brand-logo" />
            <div className="nav__brand-text">
              <span className="nav__brand-name">UPSCALE <em>DYNAMIX</em></span>
              <span className="nav__brand-sub">Division of Itech Direct</span>
            </div>
          </a>

          {/* Links */}
          <nav className="nav__links">
            {navLinks.map(l => (
              <a
                key={l.label}
                href={l.href}
                className={`nav__link ${activeNav === l.href ? 'nav__link--active' : ''}`}
                onClick={(e) => handleNavClick(e, l.href)}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp + CTA + Mobile burger */}
          <div className="nav__right">
            <a
              href="https://wa.me/919821622152?text=Hello%20Steve%20Vaz,%20I%20would%20like%20to%20discuss%20Upscale%20Dynamix%20opportunities."
              target="_blank"
              rel="noreferrer"
              className="nav__wa-btn"
              title="Chat on WhatsApp"
            >
              <WhatsAppLogo size={18} color="#ffffff" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#contact"
              className="btn-red nav__cta"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Get In Touch
            </a>
            
            <button
              className="nav__burger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div className={`nav__drawer ${menuOpen ? 'nav__drawer--open' : ''}`}>
          {navLinks.map(l => (
            <a
              key={l.label}
              href={l.href}
              className={`nav__drawer-link ${activeNav === l.href ? 'nav__drawer-link--active' : ''}`}
              onClick={(e) => handleNavClick(e, l.href)}
            >
              {l.label}
            </a>
          ))}
          <div className="nav__drawer-contact">
            <p className="nav__drawer-label">Quick Connect</p>
            <a href="mailto:upscaledynamix@gmail.com" className="nav__drawer-contact-item">
              <Mail size={13} />
              <span>upscaledynamix@gmail.com (Corporate)</span>
            </a>
            <a href="mailto:stevevaz@rediffmail.com" className="nav__drawer-contact-item">
              <Mail size={13} />
              <span>stevevaz@rediffmail.com (Personal)</span>
            </a>
            <div className="nav__drawer-phones">
              <a href="tel:9821622152" className="nav__drawer-phone">
                <Phone size={13} /> 9821622152
              </a>
              <span className="nav__drawer-sep">|</span>
              <a href="tel:9833282855" className="nav__drawer-phone">
                <Phone size={13} /> 9833282855
              </a>
            </div>
          </div>

          <a
            href="https://wa.me/919821622152"
            target="_blank"
            rel="noreferrer"
            className="nav__drawer-wa"
            onClick={() => setMenuOpen(false)}
          >
            <WhatsAppLogo size={18} color="#ffffff" />
            <span>Chat on WhatsApp</span>
          </a>
          <a
            href="#contact"
            className="btn-red"
            style={{ marginTop: '0.5rem' }}
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Get In Touch
          </a>
        </div>
      </header>
    </>
  );
}