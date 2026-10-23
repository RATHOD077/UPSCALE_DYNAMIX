import React, { useEffect, useRef, useState } from 'react';
import './StatsSection.css';

const stats = [
  { end: 2013, suffix: '',   label: 'Year Founded',      caption: 'Over a decade of proven results' },
  { end: 30,   suffix: '+',  label: 'Years Experience',  caption: 'Industry veteran leadership' },
  { end: 200,  suffix: '+',  label: 'PR Websites',       caption: 'For nationwide brand presence' },
  { end: 715,  suffix: 'M', label: 'Audience Reach',    caption: 'Combined PR platform reach' },
];

function Counter({ end, suffix, started }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const t = setInterval(() => {
      start += step;
      if (start >= end) { setVal(end); clearInterval(t); }
      else setVal(Math.floor(start));
    }, 16);
    return () => clearInterval(t);
  }, [end, started]);
  return <>{val.toLocaleString()}{suffix}</>;
}

export default function StatsSection() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="stats" ref={ref}>
      <div className="stats__bg-grid" />
      <div className="stats__sweep" />

      <div className="container stats__wrap">
        <div className="stats__header">
          <span className="stats__overline">✦ BY THE NUMBERS ✦</span>
          <h2 className="stats__title">Trusted by Entrepreneurs Across India</h2>
        </div>

        <div className="stats__grid">
          {stats.map((s, i) => (
            <div key={i} className="stats__item" style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="stats__val">
                <Counter end={s.end} suffix={s.suffix} started={started} />
              </div>
              <div className="stats__label">{s.label}</div>
              <div className="stats__caption">{s.caption}</div>
              {i < stats.length - 1 && <div className="stats__sep" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
