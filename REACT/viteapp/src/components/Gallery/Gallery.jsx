import { useState } from 'react';
import './Gallery.css';

const galleryItems = [
  {
    label: 'Modern Living Room',
    sub: 'Interior — Premium Finish',
    tag: 'Interior',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
  },
  {
    label: 'Texture Wall Design',
    sub: 'Bedroom — Designer Texture',
    tag: 'Bedroom',
    img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80',
  },
  {
    label: 'Exterior Painting',
    sub: 'Commercial — Weatherproof',
    tag: 'Exterior',
    img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80',
  },
  {
    label: 'Bathroom Waterproofing',
    sub: 'Anti-damp Treatment',
    tag: 'Bathroom',
    img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
  },
  {
    label: 'Surface Preparation',
    sub: 'Wall Putty & Priming',
    tag: 'Prep',
    img: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800&q=80',
  },
  {
    label: 'Luxury Villa Painting',
    sub: 'Premium — Full Renovation',
    tag: 'Luxury',
    img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
  },
];

const tagColors = {
  Interior: '#e0f2fe',
  Bedroom: '#fce7f3',
  Exterior: '#d1fae5',
  Bathroom: '#ede9fe',
  Prep: '#fef3c7',
  Luxury: '#fee2e2',
};

const tagText = {
  Interior: '#0369a1',
  Bedroom: '#9d174d',
  Exterior: '#065f46',
  Bathroom: '#5b21b6',
  Prep: '#92400e',
  Luxury: '#991b1b',
};

export default function Gallery() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="gallery" id="gallery">
      {/* Decorative blobs */}
      <div className="gallery-blob gallery-blob--1" aria-hidden="true" />
      <div className="gallery-blob gallery-blob--2" aria-hidden="true" />

      <div className="gallery-inner">
        {/* Header */}
        <div className="gallery-header">
          <div className="section-label">Our Work</div>
          <h2 className="section-title">
            Project <span className="title-accent">Gallery</span>
          </h2>
          <p className="gallery-subtitle">
            A glimpse of the spaces we've transformed — crafted with precision, finished with pride.
          </p>
        </div>

        {/* Grid */}
        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <div
              key={item.label}
              className={`gallery-item gallery-item--${i % 3 === 0 ? 'large' : 'normal'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={item.img}
                alt={item.label}
                className="gallery-img"
                loading="lazy"
              />

              {/* Tag */}
              <span
                className="gallery-tag"
                style={{
                  background: tagColors[item.tag],
                  color: tagText[item.tag],
                }}
              >
                {item.tag}
              </span>

              {/* Overlay */}
              <div className={`gallery-overlay${hovered === i ? ' gallery-overlay--active' : ''}`}>
                <div className="gallery-overlay-content">
                  <div className="gallery-overlay-label">{item.label}</div>
                  <div className="gallery-overlay-sub">{item.sub}</div>
                  <div className="gallery-view-btn">View Project →</div>
                </div>
              </div>

              {/* Shine sweep */}
              <div className="gallery-shine" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="gallery-cta">
          <div className="gallery-cta-card">
            <div className="cta-emoji" aria-hidden="true">🎨</div>
            <h3 className="gallery-cta-title">Ready to Transform Your Space?</h3>
            <p className="gallery-cta-desc">
              Get a free site visit and quote today. No obligation, no pressure.
            </p>
            <div className="gallery-cta-btns">
              <a href="#contact" className="gold-btn">
                <span>Book Free Consultation</span>
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="outline-btn"
              >
                <i className="fab fa-whatsapp"></i>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}