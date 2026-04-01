import './WhyChooseUs.css';

const reasons = [
  { icon: 'fa-solid fa-graduation-cap', title: 'Expert Consultant Guidance',       desc: "Our founder's experience with Asian Paints means you get professional advice at every step." },
  { icon: 'fa-solid fa-user-check',     title: 'Skilled & Verified Labor Teams',   desc: 'Every painter is background-checked, trained, and held to our quality standards.' },
  { icon: 'fa-solid fa-tags',           title: 'Transparent & Affordable Pricing', desc: 'No hidden charges. Clear quotes upfront with flexible options for every budget.' },
  { icon: 'fa-solid fa-hourglass-half', title: 'On-Time Project Delivery',         desc: 'We respect your time. Every project is completed within the committed deadline.' },
  { icon: 'fa-solid fa-shield-halved',  title: 'Quality Assurance Guarantee',      desc: "Final walkthrough and post-completion support to ensure you're 100% satisfied." },
];

const metrics = [
  { val: '500+', label: 'Projects Done' },
  { val: '98%',  label: 'Satisfaction' },
  { val: '8+',   label: 'Yrs Experience' },
  { val: '24hr', label: 'Response Time' },
];

const badges = [
  { icon: 'fa-solid fa-certificate', label: 'Asian Paints Certified' },
  { icon: 'fa-solid fa-handshake',   label: 'Trusted Partner' },
  { icon: 'fa-solid fa-leaf',        label: 'Eco-Safe Paints' },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose" id="why-choose">
      <div className="why-bg-mesh" />
      <div className="why-choose-inner">

        {/* LEFT */}
        <div className="why-choose-content">
          <div className="section-label">Why ASR</div>
          <h2 className="section-title">Why Clients <span>Choose Us</span></h2>

          <div className="why-reasons">
            {reasons.map((r) => (
              <div key={r.title} className="why-reason">
                <div className="why-reason-icon-box">
                  <i className={r.icon} />
                </div>
                <div className="why-reason-text">
                  <strong>{r.title}</strong>
                  <span>{r.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="why-visual">
          <div className="why-big-card">
            <div className="why-card-icon-wrap">
              <i className="fa-solid fa-trophy" />
            </div>
            <h3 className="why-card-title">Painting Trust,<br />One Wall at a Time</h3>
            <p className="why-card-desc">
              We act as your personal painting consultant — so you get the best results without the stress.
            </p>
            <div className="why-metrics">
              {metrics.map((m) => (
                <div key={m.label} className="why-metric">
                  <div className="why-metric-val">{m.val}</div>
                  <div className="why-metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="why-badges">
            {badges.map((b) => (
              <div key={b.label} className="why-badge">
                <i className={b.icon} />
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}