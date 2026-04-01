import './Services.css';

const services = [
  {
    icon: 'fa-house-chimney',
    name: 'Home Interior Painting',
    features: ['Wall painting & premium finishes', 'Texture & designer wall designs', 'Expert color consultation', 'Long-lasting, smooth finish'],
    color: '#e74c3c',
  },
  {
    icon: 'fa-building',
    name: 'Exterior Painting',
    features: ['Weatherproof coating systems', 'Waterproofing solutions', 'Long-lasting exterior protection', 'UV & rain resistant finishes'],
    color: '#3498db',
  },
  {
    icon: 'fa-shower',
    name: 'Bathroom & Waterproofing',
    features: ['Anti-damp solutions', 'Leakage protection treatment', 'Mold-resistant coatings', 'Permanent damp-proof barrier'],
    color: '#1abc9c',
  },
  {
    icon: 'fa-layer-group',
    name: 'Wall Putty & Surface Prep',
    features: ['Crack filling & repair', 'Smoothing uneven surfaces', 'Base coating for durability', 'Professional surface leveling'],
    color: '#9b59b6',
  },
  {
    icon: 'fa-broom',
    name: 'Deep Cleaning & Pre-Paint',
    features: ['Complete surface cleaning', 'Old paint removal', 'Pre-paint preparation', 'Priming & sealing services'],
    color: '#f39c12',
  },
  {
    icon: 'fa-palette',
    name: 'Color Consultation',
    features: ['Personalized color schemes', 'Mood-based selection', 'Asian Paints shade matching', 'Virtual color visualization'],
    color: '#e91e63',
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-inner">
        <div className="services-header">
          <div className="section-label">What We Offer</div>
          <h2 className="section-title">
            Complete <span>Painting Solutions</span>
          </h2>
          <p className="services-subtitle">
            From surface preparation to final finishing — we handle every aspect so you don't have to worry about anything.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.name} className="service-card" style={{ '--card-color': s.color }}>
              <div className="service-card-accent" />
              <div className="service-icon-wrap" style={{ background: s.color }}><i className={`fa-solid ${s.icon}`}></i></div>
              <h3 className="service-name">{s.name}</h3>
              <ul className="service-features">
                {s.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <div className="service-number">{String(i + 1).padStart(2, '0')}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
