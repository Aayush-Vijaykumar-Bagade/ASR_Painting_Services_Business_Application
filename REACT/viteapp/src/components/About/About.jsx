import './About.css';

const steps = [
  'Understand your requirements in detail',
  'Suggest the best paint solutions for your space',
  'Provide skilled, verified labor teams',
  'Manage the complete project end-to-end',
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-visual">
          <div className="about-img-stack">
            <div className="about-img-card about-img-card-1">
              <div className="about-img-inner">
                <img className="about-img-bg" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6" alt="Luxury Interior" />
                <div className="about-img-label">Luxury Living</div>
              </div>
            </div>
            <div className="about-img-card about-img-card-2">
              <div className="about-img-inner">
                <img className="about-img-bg" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Professional Painting" />
                <div className="about-img-label">Expert Finishes</div>
              </div>
            </div>
            {/* <div className="about-experience-badge">
              <div className="exp-value">8+</div>
              <div className="exp-label">Years of<br />Experience</div>
            </div> */}
          </div>
          <div className="about-stats">
            <div className="stat-chip">
              <span className="stat-chip-icon"><i className="fa-solid fa-bullseye"></i></span>
              <div className="stat-chip-info">
                <div className="stat-chip-val">500+</div>
                <div className="stat-chip-desc">Projects Completed</div>
              </div>
            </div>
            <div className="stat-chip">
              <span className="stat-chip-icon"><i className="fa-solid fa-face-smile"></i></span>
              <div className="stat-chip-info">
                <div className="stat-chip-val">250+</div>
                <div className="stat-chip-desc">Happy Clients</div>
              </div>
            </div>
            <div className="stat-chip">
              <span className="stat-chip-icon"><i className="fa-solid fa-palette"></i></span>
              <div className="stat-chip-info">
                <div className="stat-chip-val">1000+</div>
                <div className="stat-chip-desc">Colors Available</div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-content">
          <div className="section-label">About Us</div>
          <h2 className="section-title">
            Your Personal <span>Painting Consultant</span>
          </h2>

          <p className="about-text" style={{ marginTop: '24px' }}>
            ASR Painting Services is a professional painting and home improvement consultancy
            dedicated to delivering <strong>high-quality finishing and long-lasting results</strong>.
          </p>
          <p className="about-text">
            Founded with real industry experience, we specialize in providing complete end-to-end
            painting solutions. Our founder brings hands-on experience working closely with
            <strong> top brands like Asian Paints</strong> — ensuring expert guidance in color
            selection, material quality, and execution standards.
          </p>

          <div className="about-what-we-do">
            <div className="about-what-title">What we do</div>
            <div className="about-steps">
              {steps.map((s, i) => (
                <div key={i} className="about-step">
                  <span className="about-step-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="about-step-text">{s}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="gold-btn">
              <span>Talk to a Consultant</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

