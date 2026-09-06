import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  PhoneCall, 
  Send, 
  ShieldCheck, 
  Layers, 
  FileText, 
  Cpu, 
  Award,
  ChevronRight
} from 'lucide-react';
import { PRODUCTS, SITE_INFO } from '../data/siteData';

export default function ProductDetailPage({ slug, onNavigate, onOpenQuote }) {
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  const [activeTab, setActiveTab] = useState(0);

  const relatedProducts = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div>
      {/* BREADCRUMB & HERO */}
      <section className="hero" style={{ padding: '60px 0 50px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>
            <button 
              onClick={() => onNavigate('products')} 
              style={{ color: 'rgba(255,255,255,0.8)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
            >
              <ArrowLeft size={14} /> All Products
            </button>
            <ChevronRight size={14} />
            <span>{product.category}</span>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--accent-yellow)' }}>{product.name}</span>
          </div>

          <span className="section-badge section-badge-dark">{product.category}</span>
          <h1 style={{ fontSize: '2.8rem', color: '#FFFFFF', marginBottom: '16px', maxWidth: '900px' }}>
            {product.heroTitle || product.name}
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', maxWidth: '780px', lineHeight: '1.7' }}>
            {product.shortDesc}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT & SPECS */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px', alignItems: 'flex-start' }}>
            {/* LEFT COLUMN: OVERVIEW & TABS */}
            <div>
              <div style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-dark)', marginBottom: '16px' }}>
                  Engineering Overview &amp; Capabilities
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
                  {product.fullDesc}
                </p>
              </div>

              {/* TABS SECTION */}
              {product.tabs && product.tabs.length > 0 && (
                <div style={{ marginTop: '36px', background: 'var(--bg-light)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-dark)', marginBottom: '20px' }}>
                    Key Features &amp; Operating Advantages
                  </h3>

                  <div className="tabs-nav" style={{ justifyContent: 'flex-start', marginBottom: '24px' }}>
                    {product.tabs.map((tab, idx) => (
                      <button
                        key={idx}
                        className={`tab-btn ${activeTab === idx ? 'active' : ''}`}
                        onClick={() => setActiveTab(idx)}
                        style={{ padding: '8px 18px', fontSize: '0.88rem' }}
                      >
                        {tab.title}
                      </button>
                    ))}
                  </div>

                  <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', minHeight: '140px' }}>
                    <h4 style={{ fontSize: '1.15rem', color: 'var(--primary-dark)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={18} color="var(--accent-green)" /> {product.tabs[activeTab]?.title}
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: '1.7' }}>
                      {product.tabs[activeTab]?.content?.replace(/<[^>]*>?/gm, '')}
                    </p>
                  </div>
                </div>
              )}

              {/* IMAGE SHOWCASE */}
              <div style={{ marginTop: '40px' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-dark)', marginBottom: '20px' }}>
                  Machinery Visuals &amp; Industrial Installation
                </h3>
                <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-light)' }}>
                  <img
                    src={product.coverImage || '/uploads/2024/09/DJI_0159-scaled.jpg'}
                    alt={product.name}
                    style={{ width: '100%', height: '380px', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/uploads/2024/09/DJI_0159-scaled.jpg';
                    }}
                  />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: SPECS TABLE & DIRECT INQUIRY */}
            <div>
              {/* SPECS TABLE CARD */}
              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-md)', marginBottom: '32px' }}>
                <span className="section-badge">Technical Data</span>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-dark)', marginBottom: '20px' }}>
                  Standard Specifications
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {product.specs?.map((spec, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)', fontSize: '0.92rem' }}>
                      <span style={{ fontWeight: 700, color: 'var(--primary-dark)' }}>{spec.label}</span>
                      <span style={{ color: 'var(--text-muted)', textAlign: 'right', maxWidth: '60%' }}>{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '28px' }}>
                  <button 
                    className="btn btn-primary" 
                    style={{ width: '100%' }}
                    onClick={() => onOpenQuote(product.name)}
                  >
                    <Send size={16} /> Get Factory Pricing for {product.name}
                  </button>
                </div>
              </div>

              {/* QUICK CALL CARD */}
              <div style={{ background: 'var(--primary-dark)', color: '#FFFFFF', padding: '32px', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                <PhoneCall size={36} color="var(--accent-yellow)" style={{ margin: '0 auto 16px auto' }} />
                <h4 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '8px' }}>Speak to an Application Engineer</h4>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', marginBottom: '20px' }}>
                  Need custom dimensions, steam sizing calculations, or plant layout assistance?
                </p>
                <a href={`tel:${SITE_INFO.phone}`} className="btn btn-yellow" style={{ width: '100%' }}>
                  Call Direct: {SITE_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED MACHINERY */}
      <section className="section section-extra-light">
        <div className="container">
          <div className="section-title-wrap" style={{ textAlign: 'left', marginBottom: '32px' }}>
            <span className="section-badge">Complete Processing Line</span>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Other Machinery in This Value Chain</h2>
          </div>

          <div className="products-grid">
            {relatedProducts.map((p) => (
              <div key={p.slug} className="product-card">
                <div className="product-card-img-wrap" style={{ height: '200px' }}>
                  <img src={p.coverImage} alt={p.name} className="product-card-img" />
                  <span className="product-category-tag">{p.category}</span>
                </div>
                <div className="product-card-body">
                  <h3 className="product-card-title">{p.name}</h3>
                  <p className="product-card-desc">{p.shortDesc}</p>
                  <div className="product-card-footer">
                    <button className="product-card-link" onClick={() => onNavigate(`product-${p.slug}`)}>
                      Explore Specs →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
