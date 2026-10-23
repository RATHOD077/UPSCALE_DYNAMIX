import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import steveVaz from '../assets/steve-vaz.png';
import logo from '../assets/logo.jpg';
import WhatsAppLogo from './WhatsAppLogo';
import './HeroSection.css';

const chips = [
  { value: '30+', label: 'Years\nExperience', delay: 0 },
  { value: '715M', label: 'PR\nAudience', delay: 0.6 },
  { value: '200+', label: 'PR\nWebsites', delay: 1.2 },
];

export default function HeroSection() {
  const canvasRef = useRef(null);

  // Subtle particle field
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = canvas.width  = canvas.offsetWidth;
    let H = canvas.height = canvas.offsetHeight;
    const dots = Array.from({ length: 60 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      o: Math.random() * 0.4 + 0.1,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0) d.x = W; if (d.x > W) d.x = 0;
        if (d.y < 0) d.y = H; if (d.y > H) d.y = 0;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${d.o})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Animated particle canvas */}
      <canvas ref={canvasRef} className="hero__canvas" />

      {/* Diagonal decorative band */}
      <div className="hero__band" />

      <div className="hero__wrap">
        {/* ── LEFT: content ── */}
        <div className="hero__left">

          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Empowering Entrepreneurs · Founded 2013
          </div>

          <h1 className="hero__headline">
            We Elevate<br />
            <span className="hero__headline-accent">Entrepreneurs</span><br />
            to Greatness
          </h1>

          <p className="hero__sub">
            Upscale Dynamix is India's premier business growth partner — delivering
            technology, marketing mastery, and sales excellence to entrepreneurs
            ready to scale without limits.
          </p>

          <div className="hero__pills">
            <span className="hero__pill">● Technology</span>
            <span className="hero__pill">● Media Sales</span>
            <span className="hero__pill">● Digital Marketing</span>
            <span className="hero__pill">● PR &amp; Promotions</span>
          </div>

          <div className="hero__actions">
            <a href="#services" className="btn-red">
              Explore Services <ArrowRight size={16} />
            </a>
            <a
              href="https://wa.me/919821622152?text=Hello%20Steve%20Vaz,%20I%20would%20like%20to%20discuss%20Upscale%20Dynamix%20opportunities."
              target="_blank"
              rel="noreferrer"
              className="btn-wa"
            >
              <WhatsAppLogo size={17} color="#ffffff" />
              <span>WhatsApp Chat</span>
            </a>
            <a href="#about" className="btn-ghost">
              Our Story
            </a>
          </div>

          <a href="#about" className="hero__scroll">
            <ArrowDown size={15} />
            <span>Scroll to discover</span>
          </a>
        </div>

        {/* ── RIGHT: founder card ── */}
        <div className="hero__right">

          {/* Stat chips */}
          {chips.map((c, i) => (
            <div key={i} className="hero__chip" style={{
              animationDelay: `${c.delay}s`,
              '--chip-idx': i,
            }}>
              <span className="hero__chip-val">{c.value}</span>
              <span className="hero__chip-lbl">{c.label}</span>
            </div>
          ))}

          {/* Photo card */}
          <div className="hero__card">
            <div className="hero__card-glow" />
            <img src={steveVaz} alt="Steve Vaz, Founder & CEO" className="hero__photo" />

            {/* Name plate */}
            <div className="hero__nameplate">
              <div className="hero__nameplate-left">
                <img src={logo} alt="logo" className="hero__nameplate-logo" />
                <div>
                  <p className="hero__nameplate-name">Steve Vaz</p>
                  <p className="hero__nameplate-role">Founder &amp; CEO</p>
                </div>
              </div>
              <div className="hero__nameplate-badge">
                <span>30+</span>
                <small>Yrs</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="hero__fade" />
    </section>
  );
}
