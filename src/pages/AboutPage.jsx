import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  Target, 
  Compass, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Factory,
  Users,
  Cpu,
  Trophy,
  Sparkles,
  X,
  Maximize2
} from 'lucide-react';
import { SITE_INFO, ABOUT_DATA } from '../data/siteData';

export default function AboutPage({ onNavigate, onOpenQuote }) {
  const [selectedMilestoneImg, setSelectedMilestoneImg] = useState(null);

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="hero" style={{ padding: '70px 0 60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-badge section-badge-dark">About Photons Food</span>
          <h1 style={{ fontSize: '3rem', color: '#FFFFFF', marginBottom: '16px' }}>
            {ABOUT_DATA.heroTitle}
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)' }}>
            Revolutionizing grain handling, hydrothermal parboiling, and suction paddy drying technology since 1984.
          </p>
        </div>
      </section>

      {/* STORY & INFRASTRUCTURE */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '56px', alignItems: 'center' }}>
            <div>
              <span className="section-badge">Our Legacy &amp; Heritage</span>
              <h2 className="section-title">40+ Years of Dedicated Rice Milling Engineering</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                {ABOUT_DATA.story}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '28px' }}>
                Our deep understanding of grain biology, thermal dynamics, and heavy industrial metallurgy enables us to deliver turnkey rice processing machinery that consistently yields whole, translucent kernels with minimal energy input.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ padding: '20px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <Factory size={28} color="var(--accent-green)" style={{ marginBottom: '10px' }} />
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>Modern Plant Facility</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Advanced CNC laser cutting, plasma welding, and precision balancing.</p>
                </div>
                <div style={{ padding: '20px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <Users size={28} color="var(--accent-green)" style={{ marginBottom: '10px' }} />
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>Expert Engineers</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Dedicated team of senior mechanical, thermal, and electrical engineers.</p>
                </div>
              </div>
            </div>

            <div>
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '4px solid #FFFFFF' }}>
                <img 
                  src="/uploads/2024/09/DJI_0159-scaled.jpg" 
                  alt="Photons Food Manufacturing Infrastructure" 
                  style={{ width: '100%', height: '460px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/uploads/2024/09/DJI_0163-scaled.jpg';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION CARDS */}
      <section className="section section-light">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'rgba(8, 173, 24, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-green)', marginBottom: '20px' }}>
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '14px', color: 'var(--primary-dark)' }}>Our Mission</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                {ABOUT_DATA.mission}
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'rgba(253, 214, 31, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-dark)', marginBottom: '20px' }}>
                <Compass size={28} />
              </div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '14px', color: 'var(--primary-dark)' }}>Our Vision</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                {ABOUT_DATA.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-badge">Our Principles</span>
            <h2 className="section-title">Core Engineering Values</h2>
            <p className="section-subtitle">
              The foundational standards that guide every machine we design, fabricate, and install.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {ABOUT_DATA.values.map((v, i) => (
              <div key={i} className="feature-box" style={{ padding: '30px 24px' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-green)', marginBottom: '12px' }}>
                  0{i + 1}
                </div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--primary-dark)' }}>{v.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REDONE MILESTONES TIMELINE */}
      <section className="section section-extra-light">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-badge">Our 40-Year Evolution</span>
            <h2 className="section-title">Historic Milestones &amp; Technological Eras</h2>
            <p className="section-subtitle">
              From pioneer semi-automatic systems in 1985 to AI-driven industrial SCADA automation in 2026.
            </p>
          </div>

          <div style={{ maxWidth: '1050px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {ABOUT_DATA.milestones.map((m, idx) => (
              <div 
                key={idx} 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '320px 1fr', 
                  gap: '32px', 
                  background: '#FFFFFF', 
                  padding: '32px', 
                  borderRadius: 'var(--radius-xl)', 
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-md)',
                  position: 'relative',
                  alignItems: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                {/* IMAGE COLUMN */}
                <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '220px', background: '#00161B', cursor: 'pointer' }}
                     onClick={() => setSelectedMilestoneImg(m.image)}>
                  <img 
                    src={m.image} 
                    alt={m.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/uploads/2024/09/Photon-layout-3-1.png';
                    }}
                  />
                  <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.6)', color: '#FFFFFF', padding: '6px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Maximize2 size={14} />
                  </div>
                </div>

                {/* CONTENT COLUMN */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
                    <span style={{ 
                      fontSize: '0.95rem', 
                      fontWeight: 800, 
                      color: 'var(--primary-dark)', 
                      background: 'rgba(8, 173, 24, 0.12)', 
                      padding: '4px 14px', 
                      borderRadius: '999px',
                      border: '1px solid rgba(8, 173, 24, 0.3)',
                      fontFamily: 'var(--font-heading)'
                    }}>
                      {m.year}
                    </span>

                    {/* CALLOUT PILLS */}
                    {m.callouts && m.callouts.length > 0 && (
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {m.callouts.map((co, ci) => (
                          <span 
                            key={ci} 
                            style={{ 
                              fontSize: '0.72rem', 
                              fontWeight: 700, 
                              color: 'var(--primary-slate)', 
                              background: 'var(--bg-light)', 
                              padding: '3px 8px', 
                              borderRadius: '4px',
                              letterSpacing: '0.04em'
                            }}
                          >
                            {co}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <h3 style={{ fontSize: '1.45rem', color: 'var(--primary-dark)', marginBottom: '10px' }}>
                    {m.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '16px' }}>
                    {m.desc}
                  </p>

                  {/* KEY ACHIEVEMENT BADGE */}
                  {m.keyAchievement && (
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '10px', 
                      padding: '12px 16px', 
                      background: 'linear-gradient(135deg, rgba(8, 173, 24, 0.08) 0%, rgba(253, 214, 31, 0.08) 100%)', 
                      borderRadius: 'var(--radius-md)',
                      borderLeft: '4px solid var(--accent-green)'
                    }}>
                      <Trophy size={18} color="var(--accent-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <span style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary-dark)', display: 'block', letterSpacing: '0.05em' }}>
                          Key Achievement
                        </span>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 600 }}>
                          {m.keyAchievement}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE PREVIEW MODAL */}
      {selectedMilestoneImg && (
        <div className="modal-overlay" onClick={() => setSelectedMilestoneImg(null)}>
          <div className="modal-card" style={{ maxWidth: '880px', padding: '16px' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedMilestoneImg(null)}>
              <X size={20} />
            </button>
            <img 
              src={selectedMilestoneImg} 
              alt="Milestone Original Diagram" 
              style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-md)', display: 'block' }} 
            />
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.4rem', color: '#FFFFFF', marginBottom: '16px' }}>
            Partner with India's Foremost Grain Engineers
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', maxWidth: '640px', margin: '0 auto 32px auto' }}>
            Let our experienced team design a tailored grain processing and drying solution for your mill.
          </p>
          <button className="btn btn-yellow btn-lg" onClick={() => onOpenQuote()}>
            Request Technical Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
