import './HowWeWork.css';

const steps = [
  {
    icon: 'fa-solid fa-phone-volume',
    title: 'Contact Us',
    desc: 'Call, WhatsApp, or fill out the form — we respond within hours.',
  },
  {
    icon: 'fa-solid fa-house-chimney-crack',
    title: 'Site Visit',
    desc: 'Our expert visits your property for a free inspection and assessment.',
  },
  {
    icon: 'fa-solid fa-palette',
    title: 'Consultation & Quote',
    desc: 'Color advice, material selection, and transparent pricing — no surprises.',
  },
  {
    icon: 'fa-solid fa-helmet-safety',
    title: 'Labor Deployment',
    desc: 'Skilled, verified painters start work on your schedule, stress-free.',
  },
  {
    icon: 'fa-solid fa-clipboard-check',
    title: 'Quality Check',
    desc: 'Final walkthrough to ensure everything meets our highest standards.',
  },
];

const features = [
  {
    icon: 'fa-solid fa-shield-halved',
    title: '100% Transparent Pricing',
    desc: 'No hidden charges. You see every cost before we start.',
  },
  {
    icon: 'fa-solid fa-clock-rotate-left',
    title: 'On-Time Delivery',
    desc: 'We commit to deadlines and respect your time always.',
  },
  {
    icon: 'fa-solid fa-star',
    title: 'Premium Finish Guaranteed',
    desc: 'Asian Paints certified materials for lasting quality.',
  },
];

export default function HowWeWork() {
  return (
    <section className="how-we-work" id="how-we-work">
      <div className="hww-bg-orb" />
      <div className="how-we-work-inner">

        {/* Header */}
        <div className="hww-header">
          <div className="section-label">Our Process</div>
          <h2 className="section-title">
            How We <span>Work</span>
          </h2>
          <p className="hww-subtitle">
            A smooth, hassle-free process from first contact to final finish.
            You relax — we handle everything.
          </p>
        </div>

        {/* Steps */}
        <div className="hww-steps">
          <div className="hww-connector" />
          {steps.map((s, i) => (
            <div key={s.title} className="hww-step">
              <div className="hww-step-circle">
                <i className={`${s.icon} hww-step-icon-fa`} />
                <span className="hww-step-num-badge">{i + 1}</span>
              </div>
              <h4 className="hww-step-title">{s.title}</h4>
              <p className="hww-step-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Feature trust cards */}
        <div className="hww-features">
          {features.map((f) => (
            <div key={f.title} className="hww-feature-card">
              <div className="hww-feature-icon">
                <i className={f.icon} />
              </div>
              <div className="hww-feature-text">
                <h5>{f.title}</h5>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hww-cta-wrap">
          <a href="#contact" className="gold-btn">
            <i className="fa-solid fa-rocket" />
            <span>Start Your Project</span>
          </a>
          <p className="hww-cta-note">
            <i className="fa-solid fa-circle-check" />
            We will call you back within 24 hours
          </p>
        </div>

      </div>
    </section>
  );
}