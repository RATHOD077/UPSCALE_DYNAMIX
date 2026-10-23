import React, { useState, useRef, useEffect } from 'react';
import {
  Smartphone,
  Radio,
  BarChart2,
  Megaphone,
  Map,
  Briefcase,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  PhoneCall,
} from 'lucide-react';
import WhatsAppLogo from './WhatsAppLogo';
import './ServicesSection.css';

const services = [
  {
    id: 'software-apps',
    num: '01',
    category: 'tech',
    categoryLabel: 'Technology & Platforms',
    icon: <Smartphone size={26} />,
    color: '#2563eb',
    title: 'Apps & Software Development',
    tagline: 'Technology that gives you total control',
    highlightBadge: 'Custom Built Architecture',
    desc: 'Custom CRM systems, business apps, and full-stack software platforms — built to give entrepreneurs absolute command of their operations at the click of a button, across any industry.',
    capabilities: [
      'Tailored CRM & ERP business management systems',
      'High-performance iOS & Android mobile applications',
      'Automated administrative workflows & dashboards',
      'Scalable cloud architecture & enterprise data security',
    ],
    vipBadge: null,
  },
  {
    id: 'media-sales',
    num: '02',
    category: 'sales',
    categoryLabel: 'Sales & Monetization',
    icon: <Radio size={26} />,
    color: '#e63329',
    title: 'Media Sales',
    tagline: 'Decades of media expertise, at your service',
    highlightBadge: 'Retainer-Based Management',
    desc: 'With deep understanding of all media platforms built over 30+ years, we offer retainer-based media sales management — bringing proven commercial expertise directly to your brand’s revenue journey.',
    capabilities: [
      'Dedicated retainer-based media sales leadership',
      'Multi-platform advertising inventory monetization',
      'High-level sponsor & corporate agency negotiations',
      'Structured revenue acceleration & sales pipeline audits',
    ],
    vipBadge: null,
  },
  {
    id: 'digital-marketing',
    num: '03',
    category: 'marketing',
    categoryLabel: 'Marketing & Performance',
    icon: <BarChart2 size={26} />,
    color: '#059669',
    title: 'Digital Marketing',
    tagline: 'Data-driven campaigns that convert',
    highlightBadge: 'High-Intent Customer Acquisition',
    desc: 'We generate qualified leads and tangible business opportunities through expert digital marketing strategies. For entrepreneurs seeking growth through digital, we deliver campaigns that produce real results.',
    capabilities: [
      'Qualified B2B & B2C lead generation funnels',
      'High-ROI campaigns across Meta, Google & LinkedIn',
      'Conversion rate optimization (CRO) & landing page design',
      'Transparent attribution tracking & live KPI reporting',
    ],
    vipBadge: null,
  },
  {
    id: 'pr-publicity',
    num: '04',
    category: 'marketing',
    categoryLabel: 'PR & Stature',
    icon: <Megaphone size={26} />,
    color: '#d97706',
    title: 'PR – Publicity & Promotions',
    tagline: '200 websites · 715M audience reach',
    highlightBadge: 'National Prominence & Authority',
    desc: 'Launch your product to national prominence. We publish your story across 200 premium websites, delivering a combined audience reach of 715 Million — establishing your brand at scale.',
    capabilities: [
      'Guaranteed features on 200+ tier-1 digital news portals',
      '715 Million cumulative verified digital audience reach',
      'Founder spotlight interviews & corporate profiling',
      'Permanent Google News authority & high-power SEO backlinks',
    ],
    vipBadge: '★ 715M AUDIENCE · 200+ WEBSITES',
  },
  {
    id: 'marketing-strategies',
    num: '05',
    category: 'marketing',
    categoryLabel: 'Strategy & GTM',
    icon: <Map size={26} />,
    color: '#7c3aed',
    title: 'Marketing Strategies',
    tagline: 'Bespoke strategy for market leadership',
    highlightBadge: 'Go-to-Market Roadmaps',
    desc: 'Clients entering new markets receive custom multi-platform strategic frameworks — crafted from real-world expertise — that build genuine brand authority and drive meaningful market share.',
    capabilities: [
      'Comprehensive Go-to-Market (GTM) execution roadmaps',
      'Competitive moat analysis & brand narrative design',
      'Multi-channel promotional blueprints for rapid rollout',
      'Sustainable customer retention & lifetime value modeling',
    ],
    vipBadge: null,
  },
  {
    id: 'project-sales',
    num: '06',
    category: 'sales',
    categoryLabel: 'Nationwide Distribution',
    icon: <Briefcase size={26} />,
    color: '#c9a84c',
    title: 'Project Sales',
    tagline: 'Your dedicated nationwide sales force',
    highlightBadge: 'Pan-India Sales Network',
    desc: 'For entrepreneurs launching new concepts without deep sales experience, Upscale independently manages your project sales through an established national sales network, building revenues from day one.',
    capabilities: [
      'Deployment of experienced pan-India sales professionals',
      'Turnkey revenue generation from project launch day',
      'Distributor onboarding & strategic channel partner acquisition',
      'End-to-end commercial contract negotiation & closing',
    ],
    vipBadge: null,
  },
  {
    id: 'technology-products',
    num: '07',
    category: 'tech',
    categoryLabel: 'Proprietary Utilities',
    icon: <Cpu size={26} />,
    color: '#1a2c5b',
    title: 'Technology Products',
    tagline: 'Proprietary tools. Real cost savings.',
    highlightBadge: 'Direct Operating Cost Reduction',
    desc: 'We’ve engineered unique proprietary technology products for everyday business promotion — purpose-built to drive operational efficiency, reduce costs significantly, and accelerate growth.',
    capabilities: [
      'Proprietary software engines engineered for daily commercial use',
      'Significant cost savings compared to off-the-shelf subscriptions',
      'Automated customer re-engagement & promotional tools',
      'Plug-and-play onboarding requiring zero technical complexity',
    ],
    vipBadge: null,
  },
];

const categories = [
  { key: 'all', label: 'All Services (7)' },
  { key: 'tech', label: 'Technology & Software (2)' },
  { key: 'sales', label: 'Sales & Retainers (2)' },
  { key: 'marketing', label: 'Marketing & PR (3)' },
];

export default function ServicesSection() {
  const [filter, setFilter] = useState('all');
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // If targeted directly via anchor hash, reveal immediately
    if (typeof window !== 'undefined' && window.location.hash === '#services') {
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

    // Senior dev safety fallback: guaranteed visible after brief delay
    const timer = setTimeout(() => setVisible(true), 500);

    return () => {
      obs.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const filteredServices = filter === 'all'
    ? services
    : services.filter(s => s.category === filter);

  return (
    <section
      className={`svc section--gray section ${visible ? 'visible' : ''}`}
      id="services"
      ref={sectionRef}
    >
      <div className="container">

        {/* Section Header */}
        <div className={`svc__header reveal ${visible ? 'visible' : ''}`}>
          <span className="eyebrow">Comprehensive Growth Suite</span>
          <h2 className="display-title">All Seven Strategic Services</h2>
          <span className="gold-line" />
          <p className="section-sub">
            One powerhouse partner for every stage of entrepreneurial expansion.
            From proprietary software and nationwide project sales to 715M PR reach — explore everything Upscale Dynamix delivers.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className={`svc__filter-bar reveal ${visible ? 'visible' : ''}`}>
          {categories.map(c => (
            <button
              key={c.key}
              type="button"
              className={`svc__filter-pill ${filter === c.key ? 'svc__filter-pill--active' : ''}`}
              onClick={() => setFilter(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* ALL Services Grid (Showing All 7 Completely) */}
        <div className="svc__all-grid">
          {filteredServices.map((s) => {
            const waText = encodeURIComponent(
              `Hello Steve Vaz, I would like to inquire about your ${s.title} service under Upscale Dynamix.`
            );
            const waUrl = `https://wa.me/919821622152?text=${waText}`;

            return (
              <div
                key={s.id}
                className={`svc-card ${s.vipBadge ? 'svc-card--vip' : ''}`}
                style={{ '--svc-accent': s.color }}
              >
                {/* Top color indicator bar */}
                <div className="svc-card__stripe" />

                {/* VIP badge for special stats like PR */}
                {s.vipBadge && (
                  <div className="svc-card__vip-banner">
                    <Sparkles size={13} />
                    <span>{s.vipBadge}</span>
                  </div>
                )}

                <div className="svc-card__body">
                  {/* Card Header */}
                  <div className="svc-card__top">
                    <div className="svc-card__icon-box">
                      {s.icon}
                    </div>
                    <div className="svc-card__meta">
                      <span className="svc-card__num">{s.num}</span>
                      <span className="svc-card__category">{s.categoryLabel}</span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="svc-card__title">{s.title}</h3>
                  <div className="svc-card__badge-row">
                    <span className="svc-card__tagline-badge">{s.tagline}</span>
                  </div>

                  {/* Description */}
                  <p className="svc-card__desc">{s.desc}</p>

                  {/* Core Capabilities Checklist */}
                  <div className="svc-card__cap-block">
                    <p className="svc-card__cap-title">Key Capabilities:</p>
                    <ul className="svc-card__cap-list">
                      {s.capabilities.map((cap, idx) => (
                        <li key={idx} className="svc-card__cap-item">
                          <CheckCircle2 size={14} className="svc-card__cap-check" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action Footer */}
                  <div className="svc-card__footer">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="svc-card__btn-wa"
                      title="Chat on WhatsApp about this service"
                    >
                      <WhatsAppLogo size={16} color="#ffffff" />
                      <span>WhatsApp Inquiry</span>
                    </a>
                    <a
                      href="#contact"
                      className="svc-card__btn-more"
                    >
                      <span>Connect</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integrated Multi-Service Consultation Banner */}
        <div className={`svc__consult-banner reveal ${visible ? 'visible' : ''}`}>
          <div className="svc__consult-sweep" />
          <div className="svc__consult-content">
            <div className="svc__consult-left">
              <span className="svc__consult-overline">✦ TAILORED ENTERPRISE BUNDLES ✦</span>
              <h3 className="svc__consult-title">Need a Combined Multi-Service Solution?</h3>
              <p className="svc__consult-desc">
                Steve Vaz personally consults with founders to structure integrated growth bundles — pairing
                custom software automation with dedicated sales teams, performance marketing, and national PR coverage.
              </p>
            </div>
            <div className="svc__consult-actions">
              <a
                href="https://wa.me/919821622152?text=Hello%20Steve%20Vaz,%20I%20would%20like%20to%20discuss%20a%20tailored%20multi-service%20growth%20package."
                target="_blank"
                rel="noreferrer"
                className="btn-wa svc__consult-btn"
              >
                <WhatsAppLogo size={18} color="#ffffff" />
                <span>WhatsApp Steve Directly</span>
              </a>
              <a href="tel:9821622152" className="btn-red svc__consult-btn">
                <PhoneCall size={16} />
                <span>Call 9821622152</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}