import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  Building2, 
  MessageSquare,
  ExternalLink 
} from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const msg = `Hi Photons Food, I'm contacting you via your website contact page. Name: ${formData.name || 'Client'}. Message: ${formData.message || 'General Enquiry'}`;
    window.open(`https://wa.me/${SITE_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div>
      {/* HEADER */}
      <section className="hero" style={{ padding: '70px 0 60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-badge section-badge-dark">Get in Touch</span>
          <h1 style={{ fontSize: '3rem', color: '#FFFFFF', marginBottom: '16px' }}>
            Contact Photons Food Processing Engineers
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)' }}>
            Connect directly with our engineering and plant sales team for technical queries, quotations, or plant visits.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '56px', alignItems: 'flex-start' }}>
            {/* CONTACT DETAILS */}
            <div>
              <span className="section-badge">Contact Information</span>
              <h2 className="section-title" style={{ fontSize: '2rem' }}>We're Here to Assist You</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '32px' }}>
                Whether you are upgrading an existing paddy processing line or establishing a brand new automated mill, our process engineers are ready to support you.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(8, 173, 24, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-green)', flexShrink: 0 }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '4px' }}>Manufacturing Unit &amp; Office</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {SITE_INFO.address}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(8, 173, 24, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-green)', flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '4px' }}>Phone Numbers</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                      <a href={`tel:${SITE_INFO.phone}`} style={{ fontWeight: 600, color: 'var(--primary-dark)' }}>{SITE_INFO.phone}</a>
                      <br />
                      <a href={`tel:${SITE_INFO.altPhone}`} style={{ color: 'var(--text-muted)' }}>{SITE_INFO.altPhone}</a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(8, 173, 24, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-green)', flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '4px' }}>Email Communications</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                      <a href={`mailto:${SITE_INFO.email}`} style={{ color: 'var(--primary-dark)', fontWeight: 600 }}>{SITE_INFO.email}</a>
                      <br />
                      <a href={`mailto:${SITE_INFO.altEmail}`} style={{ color: 'var(--text-muted)' }}>{SITE_INFO.altEmail}</a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(8, 173, 24, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-green)', flexShrink: 0 }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-dark)', marginBottom: '4px' }}>Working Hours</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                      Monday – Saturday: 9:00 AM – 6:30 PM IST
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '32px' }}>
                <button 
                  className="btn btn-yellow" 
                  onClick={handleWhatsApp}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <MessageSquare size={18} /> Chat with Us on WhatsApp
                </button>
              </div>
            </div>

            {/* INTERACTIVE FORM */}
            <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-md)' }}>
              {!submitted ? (
                <>
                  <h3 style={{ fontSize: '1.6rem', color: 'var(--primary-dark)', marginBottom: '8px' }}>Send Us a Message</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '28px' }}>
                    Fill in your project requirements and our team will get back to you promptly.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div className="form-group">
                        <label className="form-label">Full Name *</label>
                        <input
                          type="text"
                          required
                          className="form-control"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          className="form-control"
                          placeholder="+91 98481 77799"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="your.email@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Subject / Purpose</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. Suction Dryers Pricing"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Your Message / Plant Details *</label>
                      <textarea
                        required
                        className="form-control"
                        placeholder="Write your requirements here..."
                        style={{ minHeight: '130px' }}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '8px' }}>
                      <Send size={18} /> Send Message
                    </button>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <CheckCircle2 size={60} color="var(--accent-green)" style={{ margin: '0 auto 16px auto' }} />
                  <h3 style={{ fontSize: '1.6rem', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                    Message Sent Successfully!
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '24px' }}>
                    Thank you for contacting Photons Food Processing Engineers. A member of our technical sales team will contact you shortly.
                  </p>
                  <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
