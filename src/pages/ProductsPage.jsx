import React, { useState } from 'react';
import { Search, Filter, Layers, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/siteData';
import ProductCard from '../components/ProductCard';

export default function ProductsPage({ onNavigate, onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div>
      {/* HEADER */}
      <section className="hero" style={{ padding: '70px 0 60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-badge section-badge-dark">Machinery Portfolio</span>
          <h1 style={{ fontSize: '3rem', color: '#FFFFFF', marginBottom: '16px' }}>
            Grain Processing Machinery &amp; Equipment
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)' }}>
            Comprehensive range of heavy-duty industrial machinery engineered for maximum whole-kernel milling recovery and energy efficiency.
          </p>
        </div>
      </section>

      {/* FILTER & CATALOG */}
      <section className="section section-light">
        <div className="container">
          {/* SEARCH & FILTERS */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
            {/* TABS */}
            <div className="tabs-nav" style={{ margin: 0, justifyContent: 'flex-start' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* SEARCH */}
            <div style={{ position: 'relative', width: '300px' }}>
              <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="Search machinery..."
                className="form-control"
                style={{ paddingLeft: '42px' }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* GRID */}
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((prod) => (
                <ProductCard
                  key={prod.slug}
                  product={prod}
                  onSelect={(slug) => onNavigate(`product-${slug}`)}
                  onOpenQuote={(name) => onOpenQuote(name)}
                />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 20px', background: '#FFFFFF', borderRadius: 'var(--radius-lg)' }}>
              <Layers size={48} color="var(--text-muted)" style={{ margin: '0 auto 16px auto' }} />
              <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-dark)', marginBottom: '8px' }}>No machinery found</h3>
              <p style={{ color: 'var(--text-muted)' }}>Try adjusting your search query or selected category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CUSTOM PLANT SOLUTIONS BANNER */}
      <section className="section section-dark">
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <span className="section-badge section-badge-dark">Turnkey Plants</span>
          <h2 style={{ fontSize: '2.4rem', color: '#FFFFFF', marginBottom: '16px' }}>
            Need a Fully Integrated Turnkey Rice Processing Plant?
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.7', marginBottom: '32px' }}>
            We design, fabricate, and commission complete 50 TPD to 500 TPD modern parboiling and drying complexes with full SCADA automation.
          </p>
          <button className="btn btn-yellow btn-lg" onClick={() => onOpenQuote('Complete Turnkey Rice Mill Plant')}>
            Consult on Turnkey Engineering
          </button>
        </div>
      </section>
    </div>
  );
}
