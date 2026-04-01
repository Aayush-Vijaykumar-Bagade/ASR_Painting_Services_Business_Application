import { useState } from 'react';
import './Contact.css';

const contactDetails = [
  {
    icon: 'fa-location-dot',
    color: '#f97316',
    bg: '#fff7ed',
    label: 'Office Address',
    value: 'Add Your Address Here',
    href: null,
  },
  {
    icon: 'fa-phone',
    color: '#10b981',
    bg: '#f0fdf4',
    label: 'Phone / WhatsApp',
    value: '+91 XXXXX XXXXX',
    href: 'tel:+91XXXXXXXXXX',
  },
  {
    icon: 'fa-envelope',
    color: '#6366f1',
    bg: '#eef2ff',
    label: 'Email',
    value: 'info@asrpainting.com',
    href: 'mailto:info@asrpainting.com',
  },
  {
    icon: 'fa-clock',
    color: '#f59e0b',
    bg: '#fffbeb',
    label: 'Working Hours',
    value: 'Mon – Sat: 8AM – 7PM',
    href: null,
  },
];

const services = [
  'Home Interior Painting',
  'Exterior Painting',
  'Bathroom & Waterproofing',
  'Wall Putty & Surface Prep',
  'Deep Cleaning & Pre-Paint',
  'Color Consultation',
  'Full Home Renovation',
  'Custom / Other',
];

const scopeOptions = [
  'Fresh Painting',
  'Repainting',
  'Waterproofing',
];

const socialLinks = [
  { icon: 'fa-brands fa-instagram', label: 'Instagram', href: 'https://instagram.com', color: '#e1306c', bg: '#fff0f5' },
  { icon: 'fa-brands fa-facebook-f', label: 'Facebook', href: 'https://facebook.com', color: '#1877f2', bg: '#eff6ff' },
  { icon: 'fa-brands fa-whatsapp', label: 'WhatsApp', href: 'https://wa.me/91XXXXXXXXXX', color: '#25d366', bg: '#f0fdf4' },
  { icon: 'fa-brands fa-youtube', label: 'YouTube', href: 'https://youtube.com', color: '#ff0000', bg: '#fff5f5' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', location: '', pincode: '', service: '', scopeOfWork: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState('');

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!form.name.trim() || !form.phone.trim() || !form.location.trim() || !form.pincode.trim() || !form.service || !form.scopeOfWork) {
      alert('Please fill in all required fields (Name, Phone, Address, Pin Code, Service, and Scope of Work).');
      return;
    }
    
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1400);
  };

  return (
    <section className="contact" id="contact">
      {/* Ambient blobs */}
      <div className="c-blob c-blob--amber" aria-hidden="true" />
      <div className="c-blob c-blob--blue" aria-hidden="true" />
      <div className="c-blob c-blob--green" aria-hidden="true" />

      {/* Floating paint drops */}
      <div className="paint-drop pd1" aria-hidden="true" />
      <div className="paint-drop pd2" aria-hidden="true" />
      <div className="paint-drop pd3" aria-hidden="true" />

      <div className="contact-inner">

        {/* ── Left info panel ── */}
        <div className="contact-info">
          <div className="section-label">
            <i className="fa-solid fa-paintbrush" /> Get In Touch
          </div>
          <h2 className="section-title">
            Let's <span className="title-gradient">Paint Your</span><br />Dream Space
          </h2>
          <p className="contact-intro">
            Ready to give your home a fresh new look? Reach out today — we'll schedule a
            <strong> free site visit</strong> and provide a detailed, transparent quote.
            No obligations, ever.
          </p>

          {/* Contact cards */}
          <div className="contact-cards">
            {contactDetails.map((d) => {
              const Inner = (
                <div className="cc-icon" style={{ background: d.bg, color: d.color }}>
                  <i className={`fa-solid ${d.icon}`} />
                </div>
              );
              const Body = (
                <>
                  {Inner}
                  <div className="cc-text">
                    <div className="cc-label">{d.label}</div>
                    <div className="cc-value">{d.value}</div>
                  </div>
                  <div className="cc-arrow" style={{ color: d.color }}>
                    <i className="fa-solid fa-chevron-right" />
                  </div>
                </>
              );
              return d.href ? (
                <a key={d.label} href={d.href} className="contact-card" style={{ '--accent': d.color }}>
                  {Body}
                </a>
              ) : (
                <div key={d.label} className="contact-card no-link" style={{ '--accent': d.color }}>
                  {Body}
                </div>
              );
            })}
          </div>

          {/* Social row */}
          <div className="social-row">
            <p className="social-heading">Follow Us</p>
            <div className="social-pills">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="social-pill"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--sc': s.color, '--sb': s.bg }}
                >
                  <i className={s.icon} />
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Trust badges */}
          <div className="trust-row">
            <div className="trust-badge">
              <i className="fa-solid fa-shield-halved" />
              <span style={{color:"red"}}>100% Safe & Transparent</span>
            </div>
            <div className="trust-badge">
              <i className="fa-solid fa-star" />
              <span style={{color:"green"}}>500+ Happy Clients</span>
            </div>
            <div className="trust-badge">
              <i className="fa-solid fa-certificate" />
              <span  style={{color:"blue"}}>Licensed Professionals</span>
            </div>
          </div>
        </div>

        {/* ── Right form panel ── */}
        <div className="contact-form-wrap">
          <div className="form-card">
            {/* Decorative top stripe */}
            <div className="form-stripe" aria-hidden="true">
              {['#f97316','#f59e0b','#10b981','#6366f1','#ec4899'].map((c, i) => (
                <div key={i} style={{ background: c }} />
              ))}
            </div>

            {submitted ? (
              <div className="form-success">
                <div className="success-ring">
                  <i className="fa-solid fa-circle-check" />
                </div>
                <h3 className="success-title">Thank You, {form.name || 'Friend'}!</h3>
                <p className="success-msg">
                  Your enquiry is received. Our team will contact you within
                  <strong> 24 hours</strong> to schedule your free site visit.
                </p>
                <div className="success-meta">
                  <span><i className="fa-solid fa-phone" /> We'll call you on <strong>{form.phone || 'your number'}</strong></span>
                </div>
                <button className="reset-btn" onClick={() => { setSubmitted(false); setForm({ name:'', phone:'', location:'', pincode:'', service:'', scopeOfWork:'', message:'' }); }}>
                  <i className="fa-solid fa-rotate-left" /> Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-head">
                  <h3 className="form-title">
                    <i className="fa-solid fa-calendar-check" /> Book Free Consultation
                  </h3>
                  <p className="form-subtitle">We'll call you back within 24 hours.</p>
                </div>

                <div className="form-row">
                  <div className={`form-group${focused === 'name' ? ' is-focused' : ''}`}>
                    <label><i className="fa-solid fa-user" /> Your Name <span className="req"  >*</span></label>
                    <input required
                      type="text" name="name" placeholder="Full name" 
                      value={form.name} onChange={handleChange}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                     />
                  </div>
                  <div className={`form-group${focused === 'phone' ? ' is-focused' : ''}`}>
                    <label><i className="fa-solid fa-phone" /> Phone <span className="req">*</span></label>
                    <input
                      type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required
                      value={form.phone} onChange={handleChange}
                      onFocus={() => setFocused('phone')} onBlur={() => setFocused('')}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className={`form-group${focused === 'location' ? ' is-focused' : ''}`}>
                    <label><i className="fa-solid fa-location-dot" /> Address <span className="req">*</span></label>
                    <input
                      type="text" name="location" placeholder="Your address" required
                      value={form.location} onChange={handleChange}
                      onFocus={() => setFocused('location')} onBlur={() => setFocused('')}
                    />
                  </div>
                  <div className={`form-group${focused === 'pincode' ? ' is-focused' : ''}`}>
                    <label><i className="fa-solid fa-map-pin" /> Pin Code <span className="req">*</span></label>
                    <input
                      type="text" name="pincode" placeholder="PIN code" required
                      value={form.pincode} onChange={handleChange}
                      onFocus={() => setFocused('pincode')} onBlur={() => setFocused('')}
                    />
                  </div>
                </div>

                <div className={`form-group${focused === 'scopeOfWork' ? ' is-focused' : ''}`}>
                  <label><i className="fa-solid fa-briefcase" /> Scope of Work <span className="req">*</span></label>
                  <div className="select-wrap">
                    <select
                      name="scopeOfWork" required value={form.scopeOfWork} onChange={handleChange}
                      onFocus={() => setFocused('scopeOfWork')} onBlur={() => setFocused('')}
                    >
                      <option value="" disabled>Select scope…</option>
                      {scopeOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <i className="fa-solid fa-chevron-down select-arrow" />
                  </div>
                </div>
                <div className={`form-group${focused === 'service' ? ' is-focused' : ''}`}>
                  <label><i className="fa-solid fa-paint-roller" /> Service Required <span className="req">*</span></label>
                  <div className="select-wrap">
                    <select
                      name="service" required value={form.service} onChange={handleChange}
                      onFocus={() => setFocused('service')} onBlur={() => setFocused('')}
                    >
                      <option value="" disabled>Select a service…</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <i className="fa-solid fa-chevron-down select-arrow" />
                  </div>
                </div>


                <div className={`form-group${focused === 'message' ? ' is-focused' : ''}`}>
                  <label><i className="fa-solid fa-comment-dots" /> Message <span className="opt">(Optional)</span></label>
                  <textarea
                    name="message" placeholder="Tell us about your project, home size, timeline…"
                    value={form.message} onChange={handleChange}
                    onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                  />
                </div>

                <button 
                  type="submit" 
                  className="form-submit" 
                  disabled={loading || !form.name.trim() || !form.phone.trim() || !form.location.trim() || !form.pincode.trim() || !form.service || !form.scopeOfWork}
                >
                  {loading ? (
                    <><i className="fa-solid fa-spinner fa-spin" /> Sending…</>
                  ) : (
                    <><i className="fa-solid fa-paper-plane" /> Send Enquiry</>
                  )}
                </button>

                <p className="form-note">
                  <i className="fa-solid fa-lock" /> Your information is private and never shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}