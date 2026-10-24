import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import steveVaz from '../assets/steve-vaz.png';
import logo from '../assets/logo.jpg';
import WhatsAppLogo from './WhatsAppLogo';
import './HeroSection.css';

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
            We help Enterpreuners to<br />
            <span className="hero__headline-accent">UPSCALE Revenues</span>
          </h1>

          <p className="hero__sub">
            Delivering Technology, Sales &amp; Marketing Excellence to Enterpreneurs ready to scale without limits.
          </p>

          <div className="hero__pills">
            <span className="hero__pill">● Technology</span>
            <span className="hero__pill">● Business APPs</span>
            <span className="hero__pill">● Sales Mgmt - Projects</span>
            <span className="hero__pill">● Marketing Strategies</span>
            <span className="hero__pill">● PR - Publicity</span>
            <span className="hero__pill">● Digital Marketing</span>
            <span className="hero__pill">● Impression- Inhouse Brand</span>
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

        {/* ── RIGHT: founder card (clean - no floating patches) ── */}
        <div className="hero__right">
          <div className="hero__card">
            <div className="hero__card-glow" />
            <img src={steveVaz} alt="Steve Vaz, Founder & CEO" className="hero__photo" />

            {/* Name plate */}
            <div className="hero__nameplate">
              <div className="hero__nameplate-left">
                <img src={logo} alt="Upscale Dynamix" className="hero__nameplate-logo" />
                <div>
                  <p className="hero__nameplate-name">Steve Vaz</p>
                  <p className="hero__nameplate-role">Founder &amp; CEO · Upscale Dynamix</p>
                </div>
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
