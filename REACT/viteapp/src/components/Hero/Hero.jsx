
import { useEffect, useRef, useState } from 'react';
import './Hero.css';

const checks = [
  'Professional & Verified Painters',
  'Affordable Packages for Every Budget',
  'Quality Materials — Asian Paints & More',
  'On-Time Completion Guarantee',
];

const statTargets = [
  { target: 500, suffix: '+', label: 'Projects Done' },
  { target: 8,   suffix: '+', label: 'Years Experience' },
  { target: 100, suffix: '%', label: 'Satisfaction Rate' },
];

export default function Hero() {
  const [entered, setEntered]   = useState(false);
  const [counters, setCounters] = useState([0, 0, 0]);

  /* ── Entrance trigger ── */
  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 120);
    return () => clearTimeout(t);
  }, []);

  /* ── Animated counters ── */
  useEffect(() => {
    const duration = 2200;
    const steps    = 70;
    const delay    = duration / steps;
    let   step     = 0;
    const timer = setInterval(() => {
      step++;
      setCounters(
        statTargets.map(({ target }) =>
          Math.min(Math.round((target * step) / steps), target)
        )
      );
      if (step >= steps) clearInterval(timer);
    }, delay);
    return () => clearInterval(timer);
  }, []);

  /* ── Parallax orbs on mouse move ── */
  useEffect(() => {
    const onMove = (e) => {
      document.querySelectorAll('.hero-orb').forEach((orb, i) => {
        const f  = (i + 1) * 0.012;
        const dx = (e.clientX - window.innerWidth  / 2) * f;
        const dy = (e.clientY - window.innerHeight / 2) * f;
        orb.style.transform = `translate(${dx}px,${dy}px)`;
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="hero" id="home">

      {/* ── BG Video ── */}
      <div className="hero-video-wrap">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=1400&q=80"
        >
          {/* Free CDN painting/interior video from Mixkit */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-painting-a-wall-with-a-roller-40455-large.mp4"
            type="video/mp4"
          />
          {/* Fallback second source */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-worker-painting-the-ceiling-of-a-house-42954-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Multi-layer overlay for contrast */}
        <div className="hero-video-overlay" />
        <div className="hero-video-vignette" />
      </div>

      {/* ── Decorative BG layer ── */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-grid-pattern" />
        <div className="paint-splash paint-splash-1" />
        <div className="paint-splash paint-splash-2" />
      </div>

      {/* ── Main content ── */}
      <div className={`hero-inner ${entered ? 'entered' : ''}`}>

        {/* Top badge */}
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <span className="hero-badge-pulse" />
          Trusted Painting Consultancy — Since 2016
        </div>

        {/* Headline */}
        <h1 className="hero-title">
          We Don't Just Paint —{' '}
          <span className="gold-italic">We Transform</span>
          <br />Your Space
        </h1>

        {/* Tagline */}
        <p className="hero-tagline">
          ASR Painting Services — your complete end-to-end painting partner.
          Expert color consultation, skilled labor teams, and quality finishes
          delivered on time, every time.
        </p>

        {/* Checks in 2-col grid */}
        <div className="hero-checkmarks">
          {checks.map((c, i) => (
            <div
              key={c}
              className="hero-check"
              style={{ animationDelay: `${0.6 + i * 0.13}s` }}
            >
              <span className="check-icon" style={{ color: '#4CAF50' }}><i className="fas fa-check-circle"></i></span>
              <span>{c}</span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hero-actions">
          <a href="#contact" className="gold-btn">
            <span className="btn-ripple" />
            <span>Book Free Consultation</span>
            <span className="btn-arrow" style={{ color: '#fff' }}><i className="fas fa-arrow-right"></i></span>
          </a>
          <a href="#services" className="outline-btn">
            <i className="fab fa-whatsapp"></i>
            <span>Explore Services</span>
          </a>
        </div>

        {/* Stats bar */}
        <div className="hero-stats-bar">
          {statTargets.map(({ suffix, label }, i) => (
            <div key={label} className="hero-stat-item">
              <div className="hero-stat-value">
                {counters[i]}{suffix}
              </div>
              <div className="hero-stat-label">{label}</div>
            </div>
          ))}
        </div>

        {/* Floating trust badges */}
        <div className="trust-badges">
          <div className="trust-badge" style={{ backgroundColor: 'transparent' }}>
            <span className="tb-icon"><i className="fas fa-star"></i></span>
            <div>
              <strong>5-Star Rated</strong>
              <span>500+ happy clients</span>
            </div>
          </div>
          <div className="trust-badge" style={{ backgroundColor: 'transparent' }}>
            <span className="tb-icon"><i className="fas fa-award"></i></span>
            <div>
              <strong>Asian Paints Partner</strong>
              <span>Certified &amp; trusted</span>
            </div>
          </div>
          <div className="trust-badge" style={{ backgroundColor: 'transparent' }}>
            <span className="tb-icon"><i className="fas fa-rocket"></i></span>
            <div>
              <strong>On-Time Delivery</strong>
              <span>Guaranteed always</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
