import './Packages.css';

const packages = [
  {
    icon: '💰',
    tier: 'Starter',
    name: 'Basic',
    tagline: 'Perfect for small rooms & budget-conscious painting.',
    features: ['Standard quality paint', 'Basic smooth finish', 'Single coat application', 'Surface cleaning included', 'Post-work cleanup'],
    cta: 'Get Started',
  },
  {
    icon: '⭐',
    tier: 'Popular',
    name: 'Standard',
    tagline: 'Best value — branded paint with superior durability.',
    features: ['Asian Paints branded products', 'Premium smooth finish', 'Double coat application', 'Color consultation included', 'Surface prep & cleaning', 'Project manager assigned'],
    cta: 'Choose Standard',
    featured: true,
  },
  {
    icon: '👑',
    tier: 'Elite',
    name: 'Premium',
    tagline: 'Luxury finishes for those who demand the very best.',
    features: ['Luxury & designer finishes', 'Texture & 3D wall designs', 'Full waterproofing treatment', 'Priority scheduling', 'Dedicated project manager', '1-year touch-up warranty'],
    cta: 'Go Premium',
  },
];

export default function Packages() {
  return (
    <section className="packages" id="packages">
      <div className="packages-inner">
        <div className="packages-header">
          <div className="section-label">Pricing</div>
          <h2 className="section-title">
            Flexible <span>Packages</span> for Every Budget
          </h2>
          <p className="packages-subtitle">
            Choose a package or request a custom quote tailored to your home size and requirements.
          </p>
        </div>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <div key={pkg.name} className={`package-card ${pkg.featured ? 'featured' : ''}`}>
              {pkg.featured && <div className="pkg-popular-badge">Most Popular</div>}
              <span className="pkg-icon">{pkg.icon}</span>
              <div className="pkg-tier">{pkg.tier} Package</div>
              <h3 className="pkg-name">{pkg.name}</h3>
              <p className="pkg-tagline">{pkg.tagline}</p>
              <div className="pkg-divider" />
              <ul className="pkg-features">
                {pkg.features.map((f) => (
                  <li key={f}>
                    <span className="pkg-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact">
                <button className="pkg-cta">{pkg.cta}</button>
              </a>
            </div>
          ))}
        </div>

        <p className="packages-note">
          Need something different? <a href="#contact">Request a custom package</a> — we'll build a solution around your needs.
        </p>
      </div>
    </section>
  );
}
