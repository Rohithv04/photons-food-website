import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  Layers, 
  Flame, 
  Droplets, 
  CookingPot, 
  Database, 
  Activity, 
  ArrowUpDown, 
  ShieldCheck, 
  Fan, 
  Cpu, 
  CreditCard 
} from 'lucide-react';
import { SITE_INFO, PRODUCTS } from '../data/siteData';

export default function Header({ currentRoute, onNavigate, onOpenQuote }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const getProductIcon = (slug) => {
    switch (slug) {
      case 'dryers': return <Flame size={16} />;
      case 'parboiling': return <Droplets size={16} />;
      case 'cleaners': return <CookingPot size={16} />;
      case 'storage-bins': return <Database size={16} />;
      case 'online-moisture-indicators': return <Activity size={16} />;
      case 'conveying-and-elevating-equipment': return <ArrowUpDown size={16} />;
      case 'final-steel-cooker': return <ShieldCheck size={16} />;
      case 'cooler': return <Fan size={16} />;
      case 'soaking-tanks': return <Droplets size={16} />;
      case 'automation': return <Cpu size={16} />;
      default: return <Layers size={16} />;
    }
  };

  const handleNavClick = (route, e) => {
    e?.preventDefault();
    onNavigate(route);
    setMobileOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* TOPBAR */}
      <header className="topbar">
        <div className="container">
          <div className="topbar-inner">
            <div className="topbar-info">
              <div className="topbar-item">
                <MapPin size={14} color="var(--accent-yellow)" />
                <span>{SITE_INFO.address}</span>
              </div>
              <div className="topbar-item">
                <Phone size={14} color="var(--accent-yellow)" />
                <a href={`tel:${SITE_INFO.phone}`}>{SITE_INFO.phone}</a>
                <span style={{ opacity: 0.5 }}>/</span>
                <a href={`tel:${SITE_INFO.altPhone}`}>{SITE_INFO.altPhone}</a>
              </div>
              <div className="topbar-item">
                <Mail size={14} color="var(--accent-yellow)" />
                <a href={`mailto:${SITE_INFO.email}`}>{SITE_INFO.email}</a>
              </div>
            </div>

            <div className="topbar-socials">
              <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>ISO 9001:2015 Certified</span>
            </div>
          </div>
        </div>
      </header>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-inner">
            {/* BRAND LOGO */}
            <a href="/" className="navbar-brand" onClick={(e) => handleNavClick('home', e)}>
              <img 
                src={SITE_INFO.logo} 
                alt={SITE_INFO.name} 
                className="navbar-logo"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/uploads/2024/09/Photons-Logo.png';
                }}
              />
            </a>

            {/* DESKTOP NAV */}
            <ul className="navbar-nav">
              <li>
                <a 
                  href="/" 
                  className={`nav-link ${currentRoute === 'home' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick('home', e)}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/about-us" 
                  className={`nav-link ${currentRoute === 'about' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick('about', e)}
                >
                  About Us
                </a>
              </li>

              {/* PRODUCTS DROPDOWN */}
              <li className="nav-item-dropdown">
                <a 
                  href="/products" 
                  className={`nav-link ${currentRoute.startsWith('products') ? 'active' : ''}`}
                  onClick={(e) => handleNavClick('products', e)}
                >
                  Products <ChevronDown size={14} />
                </a>
                <div className="nav-dropdown">
                  <div style={{ padding: '6px 12px 10px 12px', borderBottom: '1px solid var(--border-light)', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      Grain Processing Machinery
                    </span>
                  </div>
                  {PRODUCTS.map((prod) => (
                    <a 
                      key={prod.slug} 
                      href={`/products/${prod.slug}`} 
                      className="dropdown-item"
                      onClick={(e) => handleNavClick(`product-${prod.slug}`, e)}
                    >
                      <span className="dropdown-item-icon">
                        {getProductIcon(prod.slug)}
                      </span>
                      <span>{prod.name}</span>
                    </a>
                  ))}
                </div>
              </li>

              <li>
                <a 
                  href="/achievements" 
                  className={`nav-link ${currentRoute === 'achievements' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick('achievements', e)}
                >
                  Achievements
                </a>
              </li>
              <li>
                <a 
                  href="/events" 
                  className={`nav-link ${currentRoute === 'events' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick('events', e)}
                >
                  Events
                </a>
              </li>
              <li>
                <a 
                  href="/blogs" 
                  className={`nav-link ${currentRoute === 'blogs' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick('blogs', e)}
                >
                  Blogs
                </a>
              </li>
              <li>
                <a 
                  href="/contact-us" 
                  className={`nav-link ${currentRoute === 'contact' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick('contact', e)}
                >
                  Contact Us
                </a>
              </li>
            </ul>

            {/* ACTION CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button 
                className="btn btn-primary btn-sm"
                onClick={onOpenQuote}
              >
                Request a Quote
              </button>

              {/* MOBILE HAMBURGER */}
              <button 
                className="nav-toggle"
                onClick={() => setMobileOpen(true)}
                aria-label="Toggle Navigation Menu"
              >
                <Menu size={26} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <>
          <div className="mobile-drawer-overlay" onClick={() => setMobileOpen(false)} />
          <div className="mobile-drawer">
            <div className="mobile-drawer-header">
              <img 
                src={SITE_INFO.logo} 
                alt={SITE_INFO.name} 
                style={{ height: '38px', objectFit: 'contain' }} 
              />
              <button onClick={() => setMobileOpen(false)} style={{ padding: '6px' }}>
                <X size={24} color="var(--primary-dark)" />
              </button>
            </div>

            <ul className="mobile-nav-links">
              <li>
                <a 
                  href="/" 
                  className={`mobile-nav-link ${currentRoute === 'home' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick('home', e)}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/about-us" 
                  className={`mobile-nav-link ${currentRoute === 'about' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick('about', e)}
                >
                  About Us
                </a>
              </li>
              <li>
                <div 
                  className="mobile-nav-link"
                  onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                  style={{ cursor: 'pointer' }}
                >
                  <span>Products ({PRODUCTS.length})</span>
                  <ChevronDown size={16} style={{ transform: productsDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </div>
                {productsDropdownOpen && (
                  <div style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
                    <a 
                      href="/products" 
                      className="dropdown-item"
                      onClick={(e) => handleNavClick('products', e)}
                      style={{ fontWeight: 700, color: 'var(--accent-green)' }}
                    >
                      All Products Overview
                    </a>
                    {PRODUCTS.map((prod) => (
                      <a 
                        key={prod.slug} 
                        href={`/products/${prod.slug}`} 
                        className="dropdown-item"
                        onClick={(e) => handleNavClick(`product-${prod.slug}`, e)}
                      >
                        {prod.name}
                      </a>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <a 
                  href="/achievements" 
                  className={`mobile-nav-link ${currentRoute === 'achievements' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick('achievements', e)}
                >
                  Achievements
                </a>
              </li>
              <li>
                <a 
                  href="/events" 
                  className={`mobile-nav-link ${currentRoute === 'events' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick('events', e)}
                >
                  Events & Expos
                </a>
              </li>
              <li>
                <a 
                  href="/blogs" 
                  className={`mobile-nav-link ${currentRoute === 'blogs' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick('blogs', e)}
                >
                  Blogs
                </a>
              </li>
              <li>
                <a 
                  href="/contact-us" 
                  className={`mobile-nav-link ${currentRoute === 'contact' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick('contact', e)}
                >
                  Contact Us
                </a>
              </li>
            </ul>

            <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid var(--border-light)' }}>
              <button 
                className="btn btn-primary" 
                style={{ width: '100%', marginBottom: '12px' }}
                onClick={() => {
                  setMobileOpen(false);
                  onOpenQuote();
                }}
              >
                Request a Quote
              </button>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                <p>{SITE_INFO.phone}</p>
                <p>{SITE_INFO.email}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
