import React from 'react';
import { Award, ShieldCheck, CheckCircle2, TrendingUp, Users, Factory, ArrowRight } from 'lucide-react';
import { ACHIEVEMENTS_DATA, SITE_INFO, CLIENT_LOGOS } from '../data/siteData';

export default function AchievementsPage({ onNavigate, onOpenQuote }) {
  return (
    <div>
      {/* HEADER */}
      <section className="hero" style={{ padding: '70px 0 60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-badge section-badge-dark">Recognition &amp; Excellence</span>
          <h1 style={{ fontSize: '3rem', color: '#FFFFFF', marginBottom: '16px' }}>
            {ACHIEVEMENTS_DATA.title}
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)' }}>
            {ACHIEVEMENTS_DATA.subtitle}
          </p>
        </div>
      </section>

      {/* ISO CERTIFICATION SPOTLIGHT */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
            <div>
              <span className="section-badge">Quality Benchmark</span>
              <h2 className="section-title">{ACHIEVEMENTS_DATA.iso.title}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '24px' }}>
                {ACHIEVEMENTS_DATA.iso.desc}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} color="var(--accent-green)" />
                  <span style={{ fontWeight: 600 }}>Standardized Laser Cut &amp; Plasma Tolerances</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} color="var(--accent-green)" />
                  <span style={{ fontWeight: 600 }}>100% Non-Destructive Weld &amp; Pressure Testing</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} color="var(--accent-green)" />
                  <span style={{ fontWeight: 600 }}>Food-Grade AISI 304/316 Certified Stainless Steels</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} color="var(--accent-green)" />
                  <span style={{ fontWeight: 600 }}>Continuous Quality Audits &amp; Traceability</span>
                </div>
              </div>

              <button className="btn btn-primary" onClick={() => onOpenQuote()}>
                Request Plant Compliance Documents
              </button>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ padding: '24px', background: '#FFFFFF', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-light)', display: 'inline-block' }}>
                <img
                  src={ACHIEVEMENTS_DATA.iso.certificateImg}
                  alt="ISO Certificate Photons Food"
                  style={{ maxHeight: '440px', width: 'auto', borderRadius: 'var(--radius-md)', objectFit: 'contain' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/uploads/2024/09/Photons-Logo.png';
                  }}
                />
                <div style={{ marginTop: '16px', fontWeight: 700, color: 'var(--primary-dark)' }}>
                  Accredited ISO 9001:2015 Management System
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRIC HIGHLIGHTS */}
      <section className="section section-light">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-badge">Impact by the Numbers</span>
            <h2 className="section-title">Decades of Engineering Performance</h2>
            <p className="section-subtitle">
              Delivering verified operational improvements across commercial rice milling plants nationwide.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {ACHIEVEMENTS_DATA.highlights.map((hl, idx) => (
              <div key={idx} className="feature-box" style={{ textAlign: 'center', padding: '36px 24px' }}>
                <div style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--accent-green)', fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>
                  {hl.number}
                </div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--primary-dark)', marginBottom: '10px' }}>{hl.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{hl.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT PORTFOLIO */}
      <section className="section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-badge">Client Trust</span>
            <h2 className="section-title">Valued Mill Partners &amp; Installations</h2>
            <p className="section-subtitle">
              From family-owned progressive mills to India's largest commercial agro-industrial corporations.
            </p>
          </div>

          <div className="clients-grid">
            {CLIENT_LOGOS.map((cl, idx) => (
              <div key={idx} className="client-logo-card">
                <img src={cl.logo} alt={cl.name} className="client-logo-img" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
