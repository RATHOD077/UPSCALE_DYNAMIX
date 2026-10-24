import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Home,
  Briefcase,
  Award,
  User,
  ChevronRight,
  Send
} from 'lucide-react';
import logo from '../assets/logo.jpg';
import WhatsAppLogo from './WhatsAppLogo';
import './Header.css';

const desktopNavLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Founder',      href: '#founder' },
  { label: 'Track Record', href: '#portfolio' },
  { label: 'Contact',      href: '#contact' },
];

const mobileNavItems = [
  { label: 'Home',         href: '#hero',      desc: 'Main Profile Overview',       icon: Home,         badge: 'Start' },
  { label: 'About',        href: '#about',     desc: 'Vision & 25+ Yrs Excellence', icon: Award,        badge: 'Vision' },
  { label: 'Services',     href: '#services',  desc: '7 Business Scaling Platforms',icon: Briefcase,    badge: '7 Platforms' },
  { label: 'Founder',      href: '#founder',   desc: 'Steve Vaz Credentials',      icon: User,         badge: 'Executive' },
  { label: 'Track Record', href: '#portfolio', desc: 'Milestones & Trajectory',    icon: Award,        badge: '25+ Yrs' },
  { label: 'Contact',      href: '#contact',   desc: 'Get In Touch Directly',      icon: Send,         badge: 'Direct' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(
    typeof window !== 'undefined' ? window.location.hash || '' : ''
  );

  // Lock body scroll when side drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  // Scroll listener for sticky header & scroll-spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'services', 'founder', 'portfolio', 'contact'];
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

          {/* Desktop Links */}
          <nav className="nav__links">
            {desktopNavLinks.map(l => (
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
              aria-label={menuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Side Drawer Backdrop */}
      <div
        className={`side-drawer__backdrop ${menuOpen ? 'side-drawer__backdrop--visible' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-in Side Drawer */}
      <aside
        className={`side-drawer ${menuOpen ? 'side-drawer--open' : ''}`}
        aria-label="Mobile Navigation Drawer"
      >
        {/* Drawer Header */}
        <div className="side-drawer__header">
          <div className="side-drawer__brand">
            <img src={logo} alt="Upscale Dynamix" className="side-drawer__logo" />
            <div>
              <div className="side-drawer__title">UPSCALE <em>DYNAMIX</em></div>
              <div className="side-drawer__subtitle">Steve Vaz · Executive Profile</div>
            </div>
          </div>
          <button
            className="side-drawer__close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Scrollable Body */}
        <div className="side-drawer__body">
          {/* Section: Menu Navigation */}
          <div className="side-drawer__section-title">
            <span>Navigation Menu</span>
          </div>

          <nav className="side-drawer__nav">
            {mobileNavItems.map((item) => {
              const IconComp = item.icon;
              const isActive = activeNav === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`side-drawer__nav-link ${isActive ? 'side-drawer__nav-link--active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <span className="side-drawer__nav-icon">
                    <IconComp size={16} />
                  </span>
                  <div className="side-drawer__nav-info">
                    <span className="side-drawer__nav-title">{item.label}</span>
                    <span className="side-drawer__nav-desc">{item.desc}</span>
                  </div>
                  {item.badge && (
                    <span className="side-drawer__nav-badge">{item.badge}</span>
                  )}
                  <ChevronRight size={14} className="side-drawer__nav-arrow" />
                </a>
              );
            })}
          </nav>

          {/* Quick Action CTAs */}
          <div className="side-drawer__actions">
            <a
              href="https://wa.me/919821622152?text=Hello%20Steve%20Vaz,%20I%20would%20like%20to%20discuss%20Upscale%20Dynamix%20opportunities."
              target="_blank"
              rel="noreferrer"
              className="side-drawer__wa-btn"
              onClick={() => setMenuOpen(false)}
            >
              <WhatsAppLogo size={18} color="#ffffff" />
              <span>Chat on WhatsApp Direct</span>
            </a>

            <a
              href="#contact"
              className="btn-red side-drawer__cta-btn"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Get In Touch With Steve
            </a>
          </div>

          {/* Section: Direct Contact Details */}
          <div className="side-drawer__section-title">
            <span>Direct Contact Details</span>
          </div>

          <div className="side-drawer__contact-box">
            <div className="side-drawer__contact-group">
              <span className="side-drawer__contact-label">Corporate Email</span>
              <a href="mailto:upscaledynamix@gmail.com" className="side-drawer__contact-item">
                <Mail size={13} className="side-drawer__icon-red" />
                <span>upscaledynamix@gmail.com</span>
              </a>
            </div>

            <div className="side-drawer__contact-group">
              <span className="side-drawer__contact-label">Personal Email</span>
              <a href="mailto:stevevaz@rediffmail.com" className="side-drawer__contact-item">
                <Mail size={13} className="side-drawer__icon-red" />
                <span>stevevaz@rediffmail.com</span>
              </a>
            </div>

            <div className="side-drawer__contact-group">
              <span className="side-drawer__contact-label">Direct Phone Numbers</span>
              <div className="side-drawer__phones">
                <a href="tel:9821622152" className="side-drawer__phone-link">
                  <Phone size={13} className="side-drawer__icon-red" />
                  <span>9821622152</span>
                </a>
                <span className="side-drawer__sep">•</span>
                <a href="tel:9833282855" className="side-drawer__phone-link">
                  <Phone size={13} className="side-drawer__icon-red" />
                  <span>9833282855</span>
                </a>
              </div>
            </div>

            <div className="side-drawer__contact-group">
              <span className="side-drawer__contact-label">Office Address</span>
              <div className="side-drawer__contact-item side-drawer__address">
                <MapPin size={13} className="side-drawer__icon-red" />
                <span>Hoshang Complex, A Wing-501, Vakola Santacruz(E), Mumbai - 400055</span>
              </div>
            </div>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="side-drawer__footer">
          <p className="side-drawer__footer-text">
            <strong>UPSCALE DYNAMIX</strong> · Division of Itech Direct
          </p>
          <span className="side-drawer__footer-badge">Founded 2013 · 25+ Yrs Excellence</span>
          <p className="side-drawer__footer-powered">
            Powered by <a href="https://grabodo.com" target="_blank" rel="noreferrer">Grabodo Digital Services</a>
          </p>
        </div>
      </aside>
    </>
  );
}
