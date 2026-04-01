import './Footer.css';

const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'How We Work', href: '#how-we-work' },
  { label: 'Project Gallery', href: '#gallery' },
  { label: 'Contact Us', href: '#contact' },
];

const serviceLinks = [
  { label: 'Home Interior Painting', href: '#services' },
  { label: 'Exterior Painting', href: '#services' },
  { label: 'Bathroom & Waterproofing', href: '#services' },
  { label: 'Wall Putty & Surface Prep', href: '#services' },
  { label: 'Deep Cleaning & Pre-Paint', href: '#services' },
  { label: 'Color Consultation', href: '#services' },
];

const socialLinks = [
  { icon: 'fa-brands fa-instagram', href: 'https://instagram.com', label: 'Instagram', useFA: true, style: { color: 'rgb(255, 0, 127)' } },
  { icon: 'fa-brands fa-facebook', href: 'https://facebook.com', label: 'Facebook', useFA: true, style: { color: 'rgb(6, 160, 242)' } },
  { icon: 'fa-brands fa-whatsapp', href: 'https://wa.me/91XXXXXXXXXX', label: 'WhatsApp', useFA: true, style: { color: 'rgb(0, 255, 29)' } },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo-main">ASR</span>
            <span className="footer-logo-sub">Painting Services</span>
            <p className="footer-brand-desc">
              Your trusted home painting and renovation partner. We deliver premium finishes,
              expert color consultation, and complete project management — so you can relax while
              we transform your space.
            </p>
            <p className="footer-brand-tagline">
              "Painting Trust, One Wall at a Time"
            </p>
            <div className="footer-social-row">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="footer-social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={s.style}
                >
                  {s.useFA ? (
                    <i className={s.icon}></i>
                  ) : (
                    <span className="material-icons">{s.icon}</span>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="material-icons">location_on</span>
                <span>Add Your Office Address Here</span>
              </li>
              <li>
                <span className="material-icons">phone</span>
                <a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a>
              </li>
              <li>
                <span className="material-icons">email</span>
                <a href="mailto:info@asrpainting.com">info@asrpainting.com</a>
              </li>
              <li>
                <span className="material-icons">schedule</span>
                <span>Mon – Sat: 9 AM – 7 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} <strong>ASR Painting Services</strong>. All Rights Reserved.<br />
            Crafted with care for homes across India.
          </p>
          <div className="footer-bottom-links">
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms of Service</a>
            <a href="#home">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
