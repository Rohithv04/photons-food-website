import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ProductCard({ product, onSelect, onOpenQuote }) {
  return (
    <div className="product-card">
      <div className="product-card-img-wrap">
        <img 
          src={product.coverImage || '/uploads/2024/09/DJI_0159-scaled.jpg'} 
          alt={product.name} 
          className="product-card-img"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/uploads/2024/09/DJI_0159-scaled.jpg';
          }}
        />
        <span className="product-category-tag">{product.category}</span>
      </div>

      <div className="product-card-body">
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-desc">{product.shortDesc}</p>

        {product.specs && product.specs.length > 0 && (
          <div style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {product.specs.slice(0, 2).map((sp, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <CheckCircle2 size={14} color="var(--accent-green)" />
                <span><strong>{sp.label}:</strong> {sp.value}</span>
              </div>
            ))}
          </div>
        )}

        <div className="product-card-footer">
          <button 
            className="product-card-link"
            onClick={() => onSelect(product.slug)}
          >
            Technical Details <ArrowRight size={16} />
          </button>
          <button 
            className="btn btn-outline-dark btn-sm"
            onClick={() => onOpenQuote(product.name)}
          >
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
}
