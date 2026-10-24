import React, { useRef, useEffect, useState } from 'react';
import { Award, TrendingUp, Users, Star, Quote, Phone, Mail, CheckCircle2, ShieldCheck } from 'lucide-react';
import steveVaz from '../assets/steve-vaz.png';
import logo from '../assets/logo.jpg';
import WhatsAppLogo from './WhatsAppLogo';
import './FounderSection.css';

const expertise = [
  { icon: <TrendingUp size={16} />, label: 'Sales & Marketing', sub: '25+ Years Mastery' },
  { icon: <Users size={16} />,      label: 'Entrepreneur Growth', sub: 'Pan-India Reach' },
  { icon: <Award size={16} />,      label: 'Media & Digital', sub: 'All Major Platforms' },
  { icon: <Star size={16} />,       label: 'Technology Products', sub: 'Proprietary IP' },
];

const credentials = [
  'Founded Upscale Dynamix in 2013',
  'Strategic Division of Itech Direct',
  'Spearheading 715M+ Digital PR Network',
  '25+ Years Frontline Commercial Leadership',
];

export default function FounderSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // If visited directly via anchor hash, reveal immediately
    if (typeof window !== 'undefined' && window.location.hash === '#founder') {
      setVisible(true);
    }

    const el = sectionRef.current;
    if (!el) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '80px' }
    );

    obs.observe(el);

    // Senior dev safety fallback: guaranteed visible even if observer is bypassed
    const timer = setTimeout(() => setVisible(true), 500);

    return () => {
      obs.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      className={`founder section--white section ${visible ? 'visible' : ''}`}
      id="founder"
      ref={sectionRef}
    >
      {/* Accent top strip */}
      <div className="founder__strip" />

      <div className="container">
        <div className="founder__wrap">

          {/* ── LEFT: Photo column ── */}
          <div className={`founder__photo-col reveal ${visible ? 'visible' : ''}`}>
            <div className="founder__photo-frame">
              {/* Background accent */}
              <div className="founder__photo-bg-block" />

              {/* Card */}
              <div className="founder__photo-card">
                <img src={steveVaz} alt="Steve Vaz" className="founder__photo" />
                <div className="founder__photo-overlay" />

                {/* Identity strip */}
                <div className="founder__identity">
                  <img src={logo} alt="logo" className="founder__identity-logo" />
                  <div>
                    <p className="founder__identity-name">Steve Vaz</p>
                    <p className="founder__identity-role">Founder &amp; CEO — Upscale Dynamix</p>
                    <p className="founder__identity-div">Division of Itech Direct</p>
                  </div>
                </div>
              </div>

              {/* Experience badge */}
              <div className="founder__badge">
                <Award size={22} className="founder__badge-icon" />
                <div>
                  <p className="founder__badge-val">25+ Years</p>
                  <p className="founder__badge-sub">Sales &amp; Marketing Expert</p>
                </div>
              </div>
            </div>

            {/* Quick credentials strip under image */}
            <div className="founder__creds-card">
              <div className="founder__creds-header">
                <ShieldCheck size={18} className="founder__creds-icon" />
                <span>Executive Track Record</span>
              </div>
              <ul className="founder__creds-list">
                {credentials.map((c, i) => (
                  <li key={i} className="founder__cred-item">
                    <CheckCircle2 size={14} className="founder__cred-check" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div className={`founder__content reveal ${visible ? 'visible' : ''}`}>
            <span className="eyebrow">Our Leadership &amp; Vision</span>
            <h2 className="display-title">
              The Visionary<br />Behind the Brand
            </h2>
            <span className="gold-line" />

            {/* Pull quote */}
            <div className="founder__quote-block">
              <Quote size={32} className="founder__quote-icon" />
              <blockquote className="founder__quote">
                “My mission has always been to bridge the gap between ambition
                and achievement — giving entrepreneurs the infrastructure,
                intelligence, and influence to reach their true potential.”
              </blockquote>
              <p className="founder__quote-attr">— Steve Vaz, Founder &amp; CEO</p>
            </div>

            <p className="founder__bio">
              Steve Vaz is a seasoned veteran with over <strong>25 years of frontline experience</strong> in
              Sales, Media, and Marketing across diverse Indian industries. In 2013, he founded
              <strong> Upscale Dynamix</strong> with a clear mandate: equip every entrepreneur with the same
              world-class execution power and commercial resources that large conglomerates command.
            </p>

            <p className="founder__bio">
              As a core division of the <strong>Itech Direct group</strong>, Steve has built a comprehensive 
              growth ecosystem — spanning custom technology platforms, retainer media sales, 
              715M audience PR reach, and nationwide project sales teams — engineered to scale businesses from concept to market leadership.
            </p>

            {/* Expertise grid */}
            <div className="founder__expertise">
              {expertise.map((e, i) => (
                <div key={i} className="founder__exp-item">
                  <div className="founder__exp-icon">{e.icon}</div>
                  <div>
                    <p className="founder__exp-label">{e.label}</p>
                    <p className="founder__exp-sub">{e.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA action buttons */}
            <div className="founder__cta-row">
              <a href="#contact" className="btn-red founder__cta">
                View Contact Card
              </a>
              <a
                href="https://wa.me/919821622152?text=Hello%20Steve%20Vaz,%20I%20would%20like%20to%20connect%20regarding%20Upscale%20Dynamix%20opportunities."
                target="_blank"
                rel="noreferrer"
                className="btn-wa"
              >
                <WhatsAppLogo size={18} color="#ffffff" />
                <span>WhatsApp Steve</span>
              </a>
              <a href="tel:9821622152" className="founder__call-btn">
                <Phone size={15} />
                <span>Call 9821622152</span>
              </a>
              <a href="mailto:stevevaz@rediffmail.com" className="founder__email-btn">
                <Mail size={15} />
                <span>Email Steve</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}