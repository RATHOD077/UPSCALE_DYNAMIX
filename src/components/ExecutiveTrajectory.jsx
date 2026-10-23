import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, Award, Rocket, Globe2, Layers, CheckCircle2 } from 'lucide-react';
import './ExecutiveTrajectory.css';

const milestones = [
  {
    period: '30+ Years',
    badge: 'Frontline Mastery',
    icon: <Award size={20} />,
    title: 'Media & Sales Industry Veteran',
    desc: 'Extensive background navigating commercial advertising, media representation, brand syndication, and multi-market business expansion across India.',
  },
  {
    period: '2013',
    badge: 'Enterprise Milestone',
    icon: <Rocket size={20} />,
    title: 'Founded Upscale Dynamix',
    desc: 'Created as a specialized growth division of Itech Direct to empower ambitious entrepreneurs with high-impact sales systems and revenue strategies.',
  },
  {
    period: 'Technology Era',
    badge: 'Platform Engineering',
    icon: <Layers size={20} />,
    title: 'Apps, CRM & Digital Solutions',
    desc: 'Devised proprietary business apps and industry-agnostic CRM systems that allow founders to control daily operations with a single click.',
  },
  {
    period: 'Present Day',
    badge: 'National Reach',
    icon: <Globe2 size={20} />,
    title: '715M Reach & Nationwide Sales Network',
    desc: 'Established strategic PR syndication across 200 authoritative websites alongside an independent project sales force representing emerging brands pan-India.',
  },
];

const faqs = [
  {
    q: 'How does an engagement with Steve Vaz typically work?',
    a: 'Engagements are tailored to your growth stage. Depending on your objective, Steve works as a Strategic Growth Advisor, manages Media Sales on a retainer basis, or deploys specialized technology and project sales platforms.',
  },
  {
    q: 'What kind of apps and software platforms does Upscale Dynamix develop?',
    a: 'We engineer tailor-made CRM solutions, operational dashboards, and mobile business applications designed to give business owners instant transparency and automated control over their business operations.',
  },
  {
    q: 'How does the PR syndication across 200 websites function?',
    a: 'Articles and brand stories are published across a vetted network of 200 high-authority digital publications, achieving a combined audience footprint of over 715 Million for unmatched brand visibility and search presence.',
  },
  {
    q: 'Can early-stage ventures leverage the Project Sales force?',
    a: 'Yes. For innovative concepts and service offerings without an established sales division, Steve deploys an independent on-ground sales force across major Indian markets to accelerate early customer acquisition.',
  },
];

export default function ExecutiveTrajectory() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section className="trajectory section section--gray" id="portfolio">
      <div className="container">
        
        {/* Section Header */}
        <div className="trajectory__header">
          <span className="eyebrow">Professional Milestone</span>
          <h2 className="display-title">Career Trajectory &amp; Advisory Model</h2>
          <span className="gold-line" />
          <p className="section-sub">
            Three decades of frontline commercial intuition combined with modern technology 
            infrastructure—built to help entrepreneurs scale with clarity.
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="trajectory__grid">
          {milestones.map((m, i) => (
            <div key={i} className="trajectory-card">
              <div className="trajectory-card__top">
                <span className="trajectory-card__period">{m.period}</span>
                <span className="trajectory-card__badge">{m.badge}</span>
              </div>
              <div className="trajectory-card__icon-wrap">
                {m.icon}
              </div>
              <h3 className="trajectory-card__title">{m.title}</h3>
              <p className="trajectory-card__desc">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Advisory Commitments Banner */}
        <div className="advisory-banner">
          <div className="advisory-banner__left">
            <span className="advisory-banner__tag">
              <ShieldCheck size={16} /> Direct Principal Involvement
            </span>
            <h3 className="advisory-banner__title">
              Personalized Advisory. Zero Bureaucracy.
            </h3>
            <p className="advisory-banner__desc">
              When you partner with Upscale Dynamix, you collaborate directly with Steve Vaz. 
              No junior delegators—just 30+ years of battle-tested sales psychology, high-level 
              media relationships, and dedicated technological execution.
            </p>
            <div className="advisory-banner__points">
              <span className="advisory-point">
                <CheckCircle2 size={15} color="#25D366" /> 1-on-1 Strategic Guidance
              </span>
              <span className="advisory-point">
                <CheckCircle2 size={15} color="#25D366" /> Bespoke Retainer Frameworks
              </span>
              <span className="advisory-point">
                <CheckCircle2 size={15} color="#25D366" /> Pan-India Commercial Execution
              </span>
            </div>
          </div>
          <div className="advisory-banner__right">
            <a href="#contact" className="btn-red">
              Request Strategic Discussion
            </a>
          </div>
        </div>

        {/* Engagement FAQs */}
        <div className="trajectory__faq-wrap">
          <div className="trajectory__faq-intro">
            <span className="eyebrow">Clarity &amp; Process</span>
            <h3 className="trajectory__faq-title">Frequently Explored Questions</h3>
          </div>
          <div className="faq-list">
            {faqs.map((f, idx) => (
              <div
                key={idx}
                className={`faq-item ${openFaq === idx ? 'faq-item--open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <button className="faq-question" type="button" aria-expanded={openFaq === idx}>
                  <span>{f.q}</span>
                  <ChevronDown size={18} className="faq-icon" />
                </button>
                {openFaq === idx && (
                  <div className="faq-answer">
                    <p>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
