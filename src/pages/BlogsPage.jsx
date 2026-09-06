import React, { useState } from 'react';
import { Calendar, User, ArrowRight, X, BookOpen } from 'lucide-react';
import { BLOGS_DATA } from '../data/siteData';

export default function BlogsPage({ onNavigate }) {
  const [readingBlog, setReadingBlog] = useState(null);

  return (
    <div>
      {/* HEADER */}
      <section className="hero" style={{ padding: '70px 0 60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-badge section-badge-dark">Knowledge Center</span>
          <h1 style={{ fontSize: '3rem', color: '#FFFFFF', marginBottom: '16px' }}>
            Technical Articles &amp; Insights
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)' }}>
            Insights from our mechanical and chemical engineers on grain processing, thermal optimization, and smart plant engineering.
          </p>
        </div>
      </section>

      {/* BLOGS LIST */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {BLOGS_DATA.map((blog) => (
              <div key={blog.id} className="product-card">
                <div className="product-card-img-wrap" style={{ height: '220px' }}>
                  <img src={blog.image} alt={blog.title} className="product-card-img" />
                  <span className="product-category-tag">{blog.category}</span>
                </div>
                <div className="product-card-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={13} color="var(--accent-green)" /> {blog.date}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <User size={13} color="var(--accent-green)" /> {blog.author}
                    </span>
                  </div>
                  <h3 className="product-card-title" style={{ fontSize: '1.2rem', marginBottom: '12px' }}>
                    {blog.title}
                  </h3>
                  <p className="product-card-desc" style={{ marginBottom: '20px' }}>
                    {blog.excerpt}
                  </p>
                  <div className="product-card-footer">
                    <button 
                      className="product-card-link"
                      onClick={() => setReadingBlog(blog)}
                    >
                      Read Full Guide <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLE READER MODAL */}
      {readingBlog && (
        <div className="modal-overlay" onClick={() => setReadingBlog(null)}>
          <div className="modal-card" style={{ maxWidth: '800px' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setReadingBlog(null)}>
              <X size={20} />
            </button>

            <span className="section-badge">{readingBlog.category}</span>
            <h2 style={{ fontSize: '2rem', color: 'var(--primary-dark)', margin: '12px 0 16px 0' }}>
              {readingBlog.title}
            </h2>

            <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid var(--border-light)' }}>
              <span>Published: {readingBlog.date}</span>
              <span>•</span>
              <span>Author: {readingBlog.author}</span>
            </div>

            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '24px' }}>
              <img src={readingBlog.image} alt={readingBlog.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            </div>

            <div style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
              {readingBlog.content}
            </div>

            <div style={{ marginTop: '32px', paddingTop: '20px', borderTop: '1px solid var(--border-light)', textAlign: 'right' }}>
              <button className="btn btn-primary" onClick={() => setReadingBlog(null)}>
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
