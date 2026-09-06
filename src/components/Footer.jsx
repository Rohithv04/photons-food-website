import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { SITE_INFO, PRODUCTS } from '../data/siteData';

export default function Footer({ onNavigate, onOpenQuote }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSent(true);
    }
  };

  const handleNav = (route, e) => {
    e?.preventDefault();
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* NEWSLETTER BANNER */}
        <div className="footer-newsletter-wrap">
          <div className="footer-newsletter-text">
            <span className="section-badge section-badge-dark">Stay Updated</span>
            <h3>Subscribe to Our Agro-Tech Newsletter</h3>
            <p>Get the latest engineering insights, grain processing optimization tips, and product releases.</p>
          </div>
          <div>
            {!newsletterSent ? (
              <form onSubmit={handleNewsletter} className="footer-newsletter-form">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="footer-newsletter-input"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <button type="submit" className="btn btn-yellow">
                  <Send size={16} /> Subscribe
                </button>
              </form>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-yellow)', fontWeight: 600 }}>
                <CheckCircle2 size={24} /> Thank you! You are subscribed to Photons updates.
              </div>
            )}
          </div>
        </div>

        {/* FOOTER COLS */}
        <div className="footer-grid">
          {/* COL 1: ABOUT */}
          <div className="footer-col">
            <img 
              src={SITE_INFO.logo} 
              alt={SITE_INFO.name} 
              style={{ height: '48px', objectFit: 'contain', marginBottom: '20px', background: '#FFFFFF', padding: '6px 12px', borderRadius: '8px' }} 
            />
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '20px' }}>
              Photons Food Processing Engineers is a premier manufacturer of high-yield paddy dryers, hydrothermal parboiling plants, and smart automation systems since 1984.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 14px', background: 'rgba(255,255,255,0.08)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)' }}>
              <ShieldCheck size={18} color="var(--accent-yellow)" />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>ISO 9001:2015 Certified Company</span>
            </div>
          </div>

          {/* COL 2: QUICK LINKS */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="/" onClick={(e) => handleNav('home', e)}>
                  <ArrowRight size={14} color="var(--accent-green)" /> Home
                </a>
              </li>
              <li>
                <a href="/about-us" onClick={(e) => handleNav('about', e)}>
                  <ArrowRight size={14} color="var(--accent-green)" /> About Us
                </a>
              </li>
              <li>
                <a href="/products" onClick={(e) => handleNav('products', e)}>
                  <ArrowRight size={14} color="var(--accent-green)" /> Products & Machinery
                </a>
              </li>
              <li>
                <a href="/achievements" onClick={(e) => handleNav('achievements', e)}>
                  <ArrowRight size={14} color="var(--accent-green)" /> Achievements
                </a>
              </li>
              <li>
                <a href="/events" onClick={(e) => handleNav('events', e)}>
                  <ArrowRight size={14} color="var(--accent-green)" /> Events & Expos
                </a>
              </li>
              <li>
                <a href="/blogs" onClick={(e) => handleNav('blogs', e)}>
                  <ArrowRight size={14} color="var(--accent-green)" /> Technical Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* COL 3: MACHINERY */}
          <div className="footer-col">
            <h4>Our Machinery</h4>
            <ul className="footer-links">
              {PRODUCTS.slice(0, 7).map((p) => (
                <li key={p.slug}>
                  <a href={`/products/${p.slug}`} onClick={(e) => handleNav(`product-${p.slug}`, e)}>
                    <ArrowRight size={14} color="var(--accent-green)" /> {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4: CONTACT INFO */}
          <div className="footer-col">
            <h4>Manufacturing Plant</h4>
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>{SITE_INFO.address}</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} />
              <div>
                <a href={`tel:${SITE_INFO.phone}`} style={{ color: '#FFFFFF', fontWeight: 600 }}>{SITE_INFO.phone}</a>
                <br />
                <a href={`tel:${SITE_INFO.altPhone}`} style={{ color: 'rgba(255,255,255,0.75)' }}>{SITE_INFO.altPhone}</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} />
              <div>
                <a href={`mailto:${SITE_INFO.email}`} style={{ color: '#FFFFFF' }}>{SITE_INFO.email}</a>
                <br />
                <a href={`mailto:${SITE_INFO.altEmail}`} style={{ color: 'rgba(255,255,255,0.75)' }}>{SITE_INFO.altEmail}</a>
              </div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <button className="btn btn-yellow btn-sm" onClick={onOpenQuote} style={{ width: '100%' }}>
                Request Machinery Quote
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {SITE_INFO.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
