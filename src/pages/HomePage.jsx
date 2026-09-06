import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Flame, 
  Droplets, 
  Cpu, 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  Zap, 
  Layers, 
  PhoneCall 
} from 'lucide-react';
import { SITE_INFO, PRODUCTS, CLIENT_LOGOS, BLOGS_DATA } from '../data/siteData';
import ProductCard from '../components/ProductCard';

export default function HomePage({ onNavigate, onOpenQuote }) {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-pattern" />
        <div className="hero-glow" />
        <div className="hero-glow-2" />
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="section-badge section-badge-dark">
                <Award size={14} /> Since 1984 • ISO 9001:2015 Certified
              </span>
              <h1>
                Precision Engineering for <span>Perfect Rice</span>
              </h1>
              <p>
                {SITE_INFO.subTagline}. From high-yield suction dryers and energy-efficient parboiling plants to smart SCADA automation.
              </p>
              <div className="hero-actions">
                <button 
                  className="btn btn-yellow btn-lg"
                  onClick={() => onOpenQuote()}
                >
                  <PhoneCall size={18} /> Request Factory Quote
                </button>
                <button 
                  className="btn btn-outline-white btn-lg"
                  onClick={() => onNavigate('products')}
                >
                  Explore Machinery <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-wrapper">
                <img 
                  src="/uploads/2024/09/DJI_0163-scaled.jpg" 
                  alt="Photons Food Processing Plant" 
                  className="hero-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/uploads/2024/09/DJI_0159-scaled.jpg';
                  }}
                />
                <div className="hero-badge-float">
                  <div className="icon">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', margin: 0 }}>500+ Rice Mill Plants</h4>
                    <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', margin: 0 }}>
                      Operational Across India &amp; Global Markets
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <div className="container" style={{ position: 'relative' }}>
        <div className="stats-banner">
          <div className="stats-grid">
            {SITE_INFO.stats.map((st, i) => (
              <div key={i} className="stat-item">
                <div className="stat-number">{st.number}</div>
                <div className="stat-label">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHO WE ARE / ABOUT TEASER */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '48px', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src="/uploads/2024/09/Photon-layout-3-1.png" 
                alt="From Paddy to Rice - We Got You"
                style={{ width: '100%', maxWidth: '580px', height: 'auto', display: 'block', objectFit: 'contain' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/uploads/2024/09/DJI_0159-scaled.jpg';
                }}
              />
            </div>

            <div>
              <span className="section-badge">Who We Are</span>
              <h2 className="section-title">
                Leading the Way in Paddy Processing Innovation
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                At the crossroads of tradition and innovation, <strong>Photons Food Processing Engineers</strong> has been revolutionizing rice milling since 1984. Based in East Godavari District, Andhra Pradesh, we manufacture state-of-the-art agricultural machinery that maximizes whole kernel head rice recovery, reduces fuel costs, and simplifies plant maintenance.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={20} color="var(--accent-green)" />
                  <span style={{ fontWeight: 600 }}>Zero Breakage Suction Airflow</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={20} color="var(--accent-green)" />
                  <span style={{ fontWeight: 600 }}>Energy Efficient Parboiling</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={20} color="var(--accent-green)" />
                  <span style={{ fontWeight: 600 }}>Real-Time Moisture Sensors</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={20} color="var(--accent-green)" />
                  <span style={{ fontWeight: 600 }}>SCADA &amp; PLC Smart Automation</span>
                </div>
              </div>

              <button className="btn btn-primary" onClick={() => onNavigate('about')}>
                Learn More About Us <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CORE MACHINERY SHOWCASE */}
      <section className="section section-light">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-badge">Our Flagship Machinery</span>
            <h2 className="section-title">Complete Paddy &amp; Rice Milling Equipment</h2>
            <p className="section-subtitle">
              Engineered with industrial heavy-duty components for continuous 24/7 milling operations and peak thermal efficiency.
            </p>
          </div>

          <div className="products-grid">
            {PRODUCTS.slice(0, 6).map((prod) => (
              <ProductCard
                key={prod.slug}
                product={prod}
                onSelect={(slug) => onNavigate(`product-${slug}`)}
                onOpenQuote={(name) => onOpenQuote(name)}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button className="btn btn-primary btn-lg" onClick={() => onNavigate('products')}>
              View All 10 Machinery Categories <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / ADVANTAGES */}
      <section className="section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-badge">Why Photons Food</span>
            <h2 className="section-title">Engineered for Unmatched Milling Yield</h2>
            <p className="section-subtitle">
              Why leading commercial rice mills across India choose Photons Food as their trusted technology partner.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon-wrap">
                <Flame />
              </div>
              <h3 className="feature-title">Advanced Suction Drying</h3>
              <p className="feature-desc">
                Pulls moisture smoothly across grain columns without thermal hotspots, preventing kernel stress fissures and boosting head rice yield.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrap">
                <Droplets />
              </div>
              <h3 className="feature-title">Hydro-Thermal Parboiling</h3>
              <p className="feature-desc">
                High-pressure saturated steam vessels ensure complete starch gelatinization with zero white belly and pristine translucent color.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrap">
                <Zap />
              </div>
              <h3 className="feature-title">28% Energy Savings</h3>
              <p className="feature-desc">
                Optimized heat recovery coils, low-resistance ducting, and IE3 premium drives dramatically cut boiler fuel and power bills.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrap">
                <Cpu />
              </div>
              <h3 className="feature-title">Turnkey SCADA Automation</h3>
              <p className="feature-desc">
                Centralized touchscreens synchronize grain routing, burner control, batch recipes, and real-time smartphone reporting.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrap">
                <Layers />
              </div>
              <h3 className="feature-title">Heavy-Duty Stainless Steel</h3>
              <p className="feature-desc">
                Corrosion-proof SS 304/316 contact surfaces and hot-dip galvanized structural frames built for decades of operation.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrap">
                <Award />
              </div>
              <h3 className="feature-title">ISO 9001:2015 Standards</h3>
              <p className="feature-desc">
                Rigorous multi-point quality audits, laser tolerance fabrication, dynamic balancing, and dedicated pan-India technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT PARTNERS */}
      <section className="clients-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-badge" style={{ marginBottom: '10px' }}>
              Trusted Industry Partners
            </span>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-dark)', fontWeight: 800 }}>
              Trusted by Premier Rice Millers &amp; Agro Industries
            </h3>
          </div>
          <div className="clients-grid">
            {CLIENT_LOGOS.map((cl, idx) => (
              <div key={idx} className="client-logo-card">
                <img 
                  src={cl.logo} 
                  alt={cl.name} 
                  className="client-logo-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST INSIGHTS / BLOGS */}
      <section className="section section-extra-light">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-badge">Agro-Tech Insights</span>
            <h2 className="section-title">Latest Articles &amp; Technical Guides</h2>
            <p className="section-subtitle">
              Learn practical engineering tips on grain conditioning, thermal efficiency, and milling yield optimization.
            </p>
          </div>

          <div className="products-grid">
            {BLOGS_DATA.map((blog) => (
              <div key={blog.id} className="product-card">
                <div className="product-card-img-wrap" style={{ height: '200px' }}>
                  <img src={blog.image} alt={blog.title} className="product-card-img" />
                  <span className="product-category-tag">{blog.category}</span>
                </div>
                <div className="product-card-body">
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                    {blog.date} • By {blog.author}
                  </span>
                  <h3 className="product-card-title" style={{ fontSize: '1.15rem' }}>{blog.title}</h3>
                  <p className="product-card-desc">{blog.excerpt}</p>
                  <div className="product-card-footer">
                    <button 
                      className="product-card-link"
                      onClick={() => onNavigate('blogs')}
                    >
                      Read Full Article <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <span className="section-badge section-badge-dark">Get in Touch</span>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '20px', color: '#FFFFFF' }}>
              Ready to Upgrade Your Rice Milling Plant?
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8', marginBottom: '36px' }}>
              Speak with our senior process engineers to customize batch capacities, boiler integration, and plant layouts tailored to your paddy varieties.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn btn-yellow btn-lg" onClick={() => onOpenQuote()}>
                Request Custom Machinery Proposal
              </button>
              <button className="btn btn-outline-white btn-lg" onClick={() => onNavigate('contact')}>
                Contact Factory Directly
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
