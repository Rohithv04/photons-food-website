import React, { useState } from 'react';
import { Calendar, MapPin, ArrowRight, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { EVENTS_DATA } from '../data/siteData';

export default function EventsPage({ onNavigate, onOpenQuote }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { src: '/uploads/2024/09/DJI_0159-scaled.jpg', title: 'State-of-the-Art Plant Fabrication Bay' },
    { src: '/uploads/2024/09/DJI_0163-scaled.jpg', title: 'Complete Grain Handling & Silo Complex' },
    { src: '/uploads/2024/09/Photon-layout-3-1.png', title: 'Industrial Hydrothermal Parboiling Setup' },
    { src: '/uploads/2024/09/1.png', title: 'Commercial Mill Automation Panel Commissioning' }
  ];

  return (
    <div>
      {/* HEADER */}
      <section className="hero" style={{ padding: '70px 0 60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-badge section-badge-dark">Exhibitions &amp; Outreach</span>
          <h1 style={{ fontSize: '3rem', color: '#FFFFFF', marginBottom: '16px' }}>
            Events, Expos &amp; Field Demonstrations
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)' }}>
            Meet our engineers at upcoming agro-technology expos and conferences across India.
          </p>
        </div>
      </section>

      {/* EVENTS LIST */}
      <section className="section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-badge">Recent Trade Shows</span>
            <h2 className="section-title">Industry Exhibitions &amp; Summits</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {EVENTS_DATA.map((evt) => (
              <div key={evt.id} className="product-card">
                <div className="product-card-img-wrap" style={{ height: '220px' }}>
                  <img src={evt.image} alt={evt.title} className="product-card-img" />
                </div>
                <div className="product-card-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={14} color="var(--accent-green)" /> {evt.date}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={14} color="var(--accent-green)" /> {evt.location}
                    </span>
                  </div>
                  <h3 className="product-card-title" style={{ fontSize: '1.25rem' }}>{evt.title}</h3>
                  <p className="product-card-desc">{evt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="section section-light">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-badge">Visual Showcase</span>
            <h2 className="section-title">Manufacturing &amp; Field Gallery</h2>
            <p className="section-subtitle">
              A glimpse into our production facility, machinery assemblies, and on-site client installations.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {galleryImages.map((img, i) => (
              <div 
                key={i} 
                style={{ 
                  borderRadius: 'var(--radius-lg)', 
                  overflow: 'hidden', 
                  boxShadow: 'var(--shadow-md)', 
                  position: 'relative',
                  cursor: 'pointer',
                  height: '320px'
                }}
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px', background: 'linear-gradient(to top, rgba(0,22,27,0.85), transparent)', color: '#FFFFFF' }}>
                  <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', margin: 0 }}>{img.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div style={{ maxWidth: '800px', width: '100%', background: '#FFFFFF', borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative' }}>
            <img src={selectedImage.src} alt={selectedImage.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
            <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4 style={{ margin: 0 }}>{selectedImage.title}</h4>
              <button className="btn btn-primary btn-sm" onClick={() => setSelectedImage(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
