import React, { useEffect, useRef } from 'react';
import { CheckCircle2, Target, Lightbulb, TrendingUp } from 'lucide-react';
import './AboutSection.css';

const highlights = [
  'Founded 2013 — 25+ years of Sales & Marketing mastery',
  'Serving entrepreneurs across multiple industries',
  'Technology + Strategy + Sales — all under one roof',
  'Nationwide sales force & 715M PR audience reach',
  'End-to-end support from concept to scale',
];

function useReveal(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
}

export default function AboutSection() {
  const leftRef  = useRef(null);
  const rightRef = useRef(null);
  useReveal(leftRef);
  useReveal(rightRef);

  return (
    <section className="about section--white section" id="about">
      <div className="container about__wrap">

        {/* ── LEFT: Big visual cards ── */}
        <div className="about__left reveal" ref={leftRef} style={{ animationName: 'revealLeft' }}>

          {/* Large stat display */}
          <div className="about__stat-block">
            <div className="about__stat-year">
              <span className="about__stat-num">2013</span>
              <span className="about__stat-label">Year Founded</span>
            </div>
            <div className="about__stat-divider" />
            <div className="about__stat-exp">
              <span className="about__stat-num about__stat-num--red">25<sup>+</sup></span>
              <span className="about__stat-label">Years Experience</span>
            </div>
          </div>

          {/* Two info cards */}
          <div className="about__cards">
            <div className="about__info-card about__info-card--mission">
              <div className="about__info-icon">
                <Target size={20} />
              </div>
              <h4>Our Mission</h4>
              <p>Empower entrepreneurs with world-class tools, strategy and platforms to accelerate business growth.</p>
            </div>
            <div className="about__info-card about__info-card--vision">
              <div className="about__info-icon about__info-icon--gold">
                <Lightbulb size={20} />
              </div>
              <h4>Our Vision</h4>
              <p>To become India's most trusted business growth partner — delivering measurable results at every stage.</p>
            </div>
          </div>

          {/* Growth arrow graphic */}
          <div className="about__growth">
            <TrendingUp size={22} className="about__growth-icon" />
            <span>Consistent Revenue Growth for Every Client</span>
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <div className="about__right reveal" ref={rightRef} style={{ animationName: 'revealRight', animationDelay: '0.1s' }}>
          <span className="eyebrow">Who We Are</span>
          <h2 className="display-title">
            25+ Years<br />of Business<br />Excellence
          </h2>
          <span className="gold-line" />

          <p className="about__lead">
            <strong>Upscale Dynamix</strong> — a Division of Itech Direct — was established by veteran
            entrepreneur <strong>Steve Vaz</strong> with a singular objective: to give entrepreneurs the
            infrastructure, intelligence, and influence needed to achieve extraordinary growth.
          </p>

          <p className="about__body">
            Drawing on 25+ years of frontline experience in Sales, Media, and Marketing,
            we combine technology precision with strategic creativity to deliver transformational
            business outcomes — serving clients across diverse industries nationwide.
          </p>

          <ul className="about__list">
            {highlights.map((item, i) => (
              <li key={i} className="about__list-item">
                <CheckCircle2 size={16} className="about__check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a href="#services" className="btn-navy about__cta">
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
}
