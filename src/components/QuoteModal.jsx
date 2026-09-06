import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail } from 'lucide-react';
import { PRODUCTS, SITE_INFO } from '../data/siteData';

export default function QuoteModal({ isOpen, onClose, defaultProduct = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: defaultProduct || PRODUCTS[0]?.name || '',
    capacity: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate submission
    setTimeout(() => {
      // open WhatsApp or alert
    }, 1500);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Photons Food Team, I would like to enquire about ${formData.product || 'Grain Processing Machinery'}. Name: ${formData.name || 'Client'}, Phone: ${formData.phone || ''}.`;
    window.open(`https://wa.me/${SITE_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <span className="section-badge">Direct Factory Quote</span>
              <h3 style={{ fontSize: '1.75rem', marginTop: '8px', color: 'var(--primary-dark)' }}>
                Request a Custom Machinery Quote
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Fill out the details below and our senior process engineers will contact you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="e.g. Rajesh Kumar"
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
                    placeholder="e.g. +91 98481 77799"
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
                    placeholder="e.g. mill@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Machinery of Interest</label>
                  <select
                    className="form-control"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.slug} value={p.name}>
                        {p.name} ({p.category})
                      </option>
                    ))}
                    <option value="Complete Turnkey Rice Mill Plant">Complete Turnkey Rice Mill Plant</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Expected Milling Capacity / Batch Size</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. 32 Tons / Batch, 100 TPD Parboiling, 40 TPH Elevators"
                  value={formData.capacity}
                  onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Project Requirements / Location</label>
                <textarea
                  className="form-control"
                  placeholder="Provide any specific details regarding paddy varieties, existing mill layout, or delivery schedule..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                <button type="submit" className="btn btn-primary" style={{ flexGrow: 1 }}>
                  <Send size={18} /> Submit Quote Request
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="btn btn-yellow"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <Phone size={18} /> WhatsApp Inquiry
                </button>
              </div>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <CheckCircle2 size={64} color="var(--accent-green)" style={{ margin: '0 auto 16px auto' }} />
            <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-dark)', marginBottom: '8px' }}>
              Thank You for Reaching Out!
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '24px' }}>
              Your inquiry has been registered. Our engineering lead will review your plant specifications and connect with you shortly.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <button className="btn btn-primary" onClick={onClose}>
                Done
              </button>
              <button className="btn btn-yellow" onClick={handleWhatsAppDirect}>
                Connect via WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
